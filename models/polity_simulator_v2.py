"""
PsychohistoryML Polity Simulator v2
====================================
Combines two approaches:
1. Random Forest classifier: P(stability) 
2. k-NN similarity matching: Historical comparisons with actual durations

This gives users both a model prediction AND interpretable historical context.

Author: Amadeus Woo
Project: PsychohistoryML
"""

import pandas as pd
import numpy as np
import joblib
from sklearn.preprocessing import StandardScaler
from sklearn.metrics.pairwise import cosine_similarity
import warnings
warnings.filterwarnings('ignore')


class PolitySimulator:
    """
    Complete polity analysis combining ML predictions with historical similarity.
    """
    
    # User-friendly parameter definitions
    PARAMETERS = {
        # Complexity
        'hierarchy': {
            'range': (1, 8),
            'default': 4,
            'description': '1=chiefdom, 4=kingdom, 6=empire, 8=superpower',
            'category': 'complexity'
        },
        'government': {
            'range': (0, 1),
            'default': 0.5,
            'description': '0=minimal, 0.5=moderate, 1=sophisticated bureaucracy',
            'category': 'complexity'
        },
        'information': {
            'range': (0, 1),
            'default': 0.5,
            'description': '0=oral only, 0.5=basic writing, 1=full literacy',
            'category': 'complexity'
        },
        'infrastructure': {
            'range': (0, 1),
            'default': 0.3,
            'description': '0=none, 0.5=roads, 1=advanced (aqueducts, harbors)',
            'category': 'complexity'
        },
        
        # Warfare
        'weapons': {
            'range': (0, 10),
            'default': 4,
            'description': '0=stone, 3=bronze, 6=iron, 10=advanced steel',
            'category': 'warfare'
        },
        'armor': {
            'range': (0, 5),
            'default': 2,
            'description': '0=none, 2=leather/bronze, 4=chainmail, 5=plate',
            'category': 'warfare'
        },
        'cavalry': {
            'range': (0, 3),
            'default': 1,
            'description': '0=none, 1=light scouts, 2=heavy cavalry, 3=dominant arm',
            'category': 'warfare'
        },
        'fortifications': {
            'range': (0, 5),
            'default': 2,
            'description': '0=none, 2=walls, 4=castles, 5=star forts',
            'category': 'warfare'
        },
        'iron_working': {
            'range': (0, 1),
            'default': 1,
            'description': '0=no iron, 1=iron/steel weapons',
            'category': 'warfare'
        },
        
        # Religion
        'religion': {
            'range': (0, 3),
            'default': 2,
            'description': '0=animist, 1=local pantheon, 2=state religion, 3=universal faith',
            'category': 'religion'
        },
    }
    
    ERAS = ['Ancient', 'Classical', 'Medieval', 'Early Modern']
    ERA_DESCRIPTIONS = {
        'Ancient': 'Before 500 BCE (Egypt, Mesopotamia, early China)',
        'Classical': '500 BCE - 500 CE (Rome, Han, Persia, Greece)',
        'Medieval': '500 - 1500 CE (Byzantine, Tang, Caliphates, Europe)',
        'Early Modern': '1500+ CE (Ottomans, Mughals, Ming, European powers)',
    }
    
    def __init__(self, model_path='.', data_path='Equinox_on_GitHub_June9_2022.xlsx'):
        """
        Initialize with trained models and Seshat data.
        
        Parameters
        ----------
        model_path : str
            Directory containing scaler.pkl and best_classifier.pkl
        data_path : str
            Path to Seshat Excel file for similarity matching
        """
        self.model_path = model_path
        self.data_path = data_path
        
        self._load_models()
        self._load_seshat_data()
    
    def _load_models(self):
        """Load trained Random Forest models."""
        import os
        try:
            self.scaler = joblib.load(os.path.join(self.model_path, 'scaler.pkl'))
            self.classifier = joblib.load(os.path.join(self.model_path, 'best_classifier.pkl'))
            self.has_models = True
        except FileNotFoundError:
            print("Warning: Model files not found. ML predictions disabled.")
            self.has_models = False
    
    def _load_seshat_data(self):
        """Load Seshat data for similarity matching."""
        try:
            xlsx = pd.ExcelFile(self.data_path)
            polities = pd.read_excel(xlsx, 'Polities')
            aggr = pd.read_excel(xlsx, 'AggrSCWarAgriRelig')
            
            # Filter to non-duplicates only
            polities = polities[polities['Dupl'] == 'n'].copy()
            
            # Duration and era
            polities['duration'] = polities['End'] - polities['Start']
            polities['midpoint'] = (polities['Start'] + polities['End']) / 2
            polities['era'] = polities['midpoint'].apply(self._assign_era)
            
            # Get latest observation per polity
            latest = aggr.sort_values('Time').groupby('PolID').last().reset_index()
            self.df = polities.merge(latest, on='PolID', how='inner')
            
            # Prepare similarity features
            self.sim_features = ['Hier', 'Gov', 'Info', 'Infra', 'Weapon', 
                                  'Armor', 'Cavalry', 'Defense', 'Iron', 'ReligLev']
            
            df_feat = self.df[self.sim_features].copy()
            for col in self.sim_features:
                df_feat[col] = df_feat[col].fillna(df_feat[col].median())
            
            self.sim_scaler = StandardScaler()
            self.X_sim = self.sim_scaler.fit_transform(df_feat)
            self.feature_medians = {col: df_feat[col].median() for col in self.sim_features}
            
            self.has_data = True
            
        except FileNotFoundError:
            print("Warning: Seshat data not found. Similarity matching disabled.")
            self.has_data = False
    
    def _assign_era(self, year):
        if year < -500: return 'Ancient'
        elif year < 500: return 'Classical'
        elif year < 1500: return 'Medieval'
        else: return 'Early Modern'
    
    def _user_to_model_features(self, config):
        """Convert user config to 16-feature model vector."""
        # The model expects: PC1, PC2, PC3, PC1², PC1×PC2, warfare×7, religion×4
        # We need to approximate PCs from raw complexity features
        
        # Rough mapping: complexity features → PC proxies
        complexity = (config.get('hierarchy', 4) / 8 + 
                      config.get('government', 0.5) +
                      config.get('information', 0.5) +
                      config.get('infrastructure', 0.3)) / 4
        
        # Create feature vector (these are rough approximations)
        pc1 = (complexity - 0.5) * 4  # Center and scale
        pc2 = config.get('information', 0.5) * 2 - 1  # Info-focused
        pc3 = config.get('hierarchy', 4) / 8 - config.get('government', 0.5)  # Hierarchy vs gov
        
        warfare_total = (config.get('weapons', 4) + 
                         config.get('armor', 2) * 2 +
                         config.get('cavalry', 1) * 3 +
                         config.get('fortifications', 2) * 2 +
                         config.get('iron_working', 1) * 5)
        
        features = np.array([
            pc1, pc2, pc3, pc1**2, pc1*pc2,  # Complexity
            warfare_total,                     # total_warfare_tech
            config.get('weapons', 4),
            config.get('armor', 2),
            config.get('cavalry', 1),
            config.get('fortifications', 2),
            config.get('iron_working', 1) * 5,  # material
            config.get('iron_working', 1) * 3,  # advanced_tech
            config.get('religion', 2) * 2,      # moral_score (rough)
            min(config.get('religion', 2), 2),  # legit_score
            config.get('religion', 2),          # ideol_score
            config.get('religion', 2) * 3,      # total_rel
        ])
        
        return features.reshape(1, -1)
    
    def _user_to_sim_features(self, config):
        """Convert user config to similarity feature vector."""
        mapping = {
            'hierarchy': 'Hier',
            'government': 'Gov',
            'information': 'Info',
            'infrastructure': 'Infra',
            'weapons': 'Weapon',
            'armor': 'Armor',
            'cavalry': 'Cavalry',
            'fortifications': 'Defense',
            'iron_working': 'Iron',
            'religion': 'ReligLev',
        }
        
        vector = []
        for feat in self.sim_features:
            user_key = [k for k, v in mapping.items() if v == feat]
            if user_key and user_key[0] in config:
                vector.append(config[user_key[0]])
            else:
                vector.append(self.feature_medians[feat])
        
        return np.array(vector).reshape(1, -1)
    
    def predict_stability(self, config):
        """
        Get ML model's stability prediction.
        
        Returns
        -------
        dict with:
            - stability_pct: Probability of lasting > 184 years
            - risk_level: 'lower', 'moderate', or 'higher'
            - interpretation: Human-readable summary
        """
        if not self.has_models:
            return {'error': 'Models not loaded'}
        
        X = self._user_to_model_features(config)
        X_scaled = self.scaler.transform(X)
        
        prob_unstable = self.classifier.predict_proba(X_scaled)[0][1]
        stability = 1 - prob_unstable
        
        if stability >= 0.55:
            risk = 'lower'
        elif stability >= 0.45:
            risk = 'moderate'
        else:
            risk = 'higher'
        
        return {
            'stability_pct': round(stability * 100, 1),
            'risk_level': risk,
            'interpretation': f"Model estimates {stability*100:.0f}% chance of lasting > 184 years"
        }
    
    def find_similar_polities(self, config, k=5, era=None, max_duration=1000):
        """
        Find historically similar polities.
        
        Returns
        -------
        dict with:
            - similar: DataFrame of matches with name, duration, similarity
            - duration_estimate: Weighted average duration
            - duration_range: (min, max) tuple
            - confidence: 0-1 score
        """
        if not self.has_data:
            return {'error': 'Seshat data not loaded'}
        
        X = self._user_to_sim_features(config)
        X_scaled = self.sim_scaler.transform(X)
        
        # Filter candidates
        mask = self.df['duration'] <= max_duration
        if era:
            mask &= (self.df['era'] == era)
        
        candidates = self.df[mask].copy()
        X_cand = self.X_sim[mask.values]
        
        if len(candidates) < k:
            # Relax era filter
            mask = self.df['duration'] <= max_duration
            candidates = self.df[mask].copy()
            X_cand = self.X_sim[mask.values]
        
        # Cosine similarity
        sims = cosine_similarity(X_scaled, X_cand)[0]
        top_k = np.argsort(sims)[-k:][::-1]
        
        results = candidates.iloc[top_k][['PolName', 'era', 'duration', 'Start', 'End']].copy()
        results['similarity'] = sims[top_k]
        results['similarity_pct'] = (results['similarity'] * 100).round(1)
        
        # Weighted estimate
        weights = np.maximum(results['similarity'].values, 0)
        if weights.sum() > 0:
            duration_est = np.average(results['duration'].values, weights=weights)
        else:
            duration_est = results['duration'].median()
        
        # Confidence
        mean_sim = weights.mean()
        cv = results['duration'].std() / (results['duration'].mean() + 1)
        confidence = mean_sim / (1 + cv)
        
        return {
            'similar': results,
            'duration_estimate': int(round(duration_est)),
            'duration_range': (int(results['duration'].min()), int(results['duration'].max())),
            'confidence': round(confidence, 2),
        }
    
    def analyze(self, config, era=None):
        """
        Complete analysis combining ML prediction and historical similarity.
        
        Parameters
        ----------
        config : dict
            User-friendly parameter values (see PARAMETERS for keys)
        era : str, optional
            Filter historical comparisons to specific era
            
        Returns
        -------
        dict with complete analysis
        """
        result = {
            'input': config,
            'era_filter': era,
        }
        
        # ML prediction
        if self.has_models:
            result['model_prediction'] = self.predict_stability(config)
        
        # Historical similarity
        if self.has_data:
            result['historical_comparison'] = self.find_similar_polities(config, k=5, era=era)
            
            # Era comparison
            era_results = []
            for e in self.ERAS:
                match = self.find_similar_polities(config, k=5, era=e)
                if 'error' not in match:
                    era_results.append({
                        'era': e,
                        'duration_estimate': match['duration_estimate'],
                        'range': match['duration_range'],
                        'confidence': match['confidence'],
                    })
            result['era_comparison'] = era_results
        
        return result
    
    def print_analysis(self, config, era=None):
        """Pretty-print full analysis."""
        analysis = self.analyze(config, era)
        
        print("\n" + "="*70)
        print("POLITY ANALYSIS")
        print("="*70)
        
        # Input summary
        print("\n CONFIGURATION:")
        for key, val in config.items():
            param = self.PARAMETERS.get(key, {})
            desc = param.get('description', '')
            print(f"  {key}: {val} ({desc})")
        
        # ML prediction
        if 'model_prediction' in analysis:
            pred = analysis['model_prediction']
            print(f"\n ML MODEL PREDICTION:")
            print(f"  Stability: {pred['stability_pct']}%")
            print(f"  Risk level: {pred['risk_level']}")
            print(f"  ({pred['interpretation']})")
        
        # Historical comparison
        if 'historical_comparison' in analysis:
            hist = analysis['historical_comparison']
            print(f"\n SIMILAR HISTORICAL POLITIES:")
            for _, row in hist['similar'].iterrows():
                print(f"  {row['PolName']} ({row['era']}): {row['duration']} years [{row['similarity_pct']}% similar]")
            
            print(f"\n  → Weighted estimate: {hist['duration_estimate']} years")
            print(f"  → Range: {hist['duration_range'][0]} - {hist['duration_range'][1]} years")
            print(f"  → Confidence: {hist['confidence']}")
        
        # Era comparison
        if 'era_comparison' in analysis:
            print(f"\n DURATION BY ERA (same config, different historical context):")
            for era_data in analysis['era_comparison']:
                print(f"  {era_data['era']:15s}: {era_data['duration_estimate']:4d} years "
                      f"(range: {era_data['range'][0]}-{era_data['range'][1]}, "
                      f"conf: {era_data['confidence']:.2f})")
        
        print("\n" + "="*70)


# =============================================================================
# DEMO
# =============================================================================

if __name__ == '__main__':
    import os
    
    # Get the directory where THIS script lives (models/)
    SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
    
    # Build paths relative to script location
    MODEL_PATH = SCRIPT_DIR  # pkl files are in same directory as this script
    DATA_PATH = os.path.join(SCRIPT_DIR, '..', 'data', 'Equinox_on_GitHub_June9_2022.xlsx')
    
    print(f"Script directory: {SCRIPT_DIR}")
    print(f"Looking for data at: {os.path.abspath(DATA_PATH)}")
    print(f"Data file exists: {os.path.exists(DATA_PATH)}")
    
    # Initialize
    sim = PolitySimulator(
        model_path=MODEL_PATH,
        data_path=DATA_PATH
    )
    
    # Test scenarios
    scenarios = {
        'Simple Tribal Society': {
            'hierarchy': 2,
            'government': 0.1,
            'information': 0.0,
            'infrastructure': 0.1,
            'weapons': 2,
            'armor': 0,
            'cavalry': 0,
            'fortifications': 0,
            'iron_working': 0,
            'religion': 0,
        },
        'Roman-style Empire': {
            'hierarchy': 6,
            'government': 0.8,
            'information': 0.8,
            'infrastructure': 0.7,
            'weapons': 7,
            'armor': 4,
            'cavalry': 2,
            'fortifications': 4,
            'iron_working': 1,
            'religion': 2,
        },
        'Modern Nation-State': {
            'hierarchy': 5,
            'government': 0.9,
            'information': 1.0,
            'infrastructure': 0.9,
            'weapons': 9,
            'armor': 4,
            'cavalry': 0,
            'fortifications': 3,
            'iron_working': 1,
            'religion': 2,
        },
    }
    
    for name, config in scenarios.items():
        print(f"\n\n{'#'*70}")
        print(f"# SCENARIO: {name}")
        print(f"{'#'*70}")
        sim.print_analysis(config)