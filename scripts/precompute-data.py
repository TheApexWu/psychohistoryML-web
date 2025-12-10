"""
precompute-data.py
==================
Run locally to generate JSON files for the frontend
These JSON files enable client-side similarity calculations without Python backend.

Usage:
    cd psychohistory-web/scripts
    python precompute-data.py

Outputs:
    ../public/data/polities.json      - Polity data with pre-scaled features
    ../public/data/scaler-params.json - Mean/std for standardization
"""

import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler
import json
import os

# Paths (relative to scripts/ directory)
DATA_PATH = '../data/Equinox_on_GitHub_June9_2022.xlsx'
OUTPUT_DIR = '../public/data'

# Features for similarity matching (raw Seshat variables)
SIMILARITY_FEATURES = [
    'Hier',      # Hierarchy levels (1-8)
    'Gov',       # Government sophistication (0-1)
    'Info',      # Information systems (0-1)
    'Infra',     # Infrastructure (0-1)
    'Weapon',    # Weapon types (0-10)
    'Armor',     # Armor types (0-5)
    'Cavalry',   # Cavalry presence (0-3)
    'Defense',   # Fortifications (0-5)
    'Iron',      # Iron working (0-1)
    'ReligLev',  # Religious hierarchy (0-3)
]

def assign_era(year):
    """Assign historical era based on midpoint year."""
    if year < -500:
        return 'Ancient'
    elif year < 500:
        return 'Classical'
    elif year < 1500:
        return 'Medieval'
    else:
        return 'Early Modern'

def main():
    print("=" * 60)
    print("PRECOMPUTING DATA FOR FRONTEND")
    print("=" * 60)
    
    # Check paths
    if not os.path.exists(DATA_PATH):
        print(f"ERROR: Data file not found at {DATA_PATH}")
        print(f"Current directory: {os.getcwd()}")
        print("Make sure you're running from the scripts/ directory")
        return
    
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    
    # Load data
    print(f"\n Loading data from {DATA_PATH}...")
    xlsx = pd.ExcelFile(DATA_PATH)
    
    polities = pd.read_excel(xlsx, 'Polities')
    aggr = pd.read_excel(xlsx, 'AggrSCWarAgriRelig')
    
    print(f"   Polities sheet: {len(polities)} rows")
    print(f"   Aggregated sheet: {len(aggr)} rows")
    
    # Filter to non-duplicates
    polities_clean = polities[polities['Dupl'] == 'n'].copy()
    print(f"   Non-duplicate polities: {len(polities_clean)}")
    
    # Compute duration and era
    polities_clean['duration'] = polities_clean['End'] - polities_clean['Start']
    polities_clean['midpoint'] = (polities_clean['Start'] + polities_clean['End']) / 2
    polities_clean['era'] = polities_clean['midpoint'].apply(assign_era)
    
    # Get latest observation per polity from aggregated data
    latest = aggr.groupby('PolID').last().reset_index()
    
    # Merge
    df = polities_clean.merge(latest, on='PolID', how='inner')
    print(f"   After merge: {len(df)} polities")
    
    # Extract features, fill missing with median (for similarity matching)
    print(f"\n🔧 Processing features...")
    df_features = df[SIMILARITY_FEATURES].copy()
    
    feature_medians = {}
    for col in SIMILARITY_FEATURES:
        median_val = df_features[col].median()
        feature_medians[col] = float(median_val)
        missing_count = df_features[col].isna().sum()
        df_features[col] = df_features[col].fillna(median_val)
        if missing_count > 0:
            print(f"   {col}: filled {missing_count} missing with median {median_val:.2f}")
    
    # Fit scaler
    print(f"\n Fitting StandardScaler...")
    scaler = StandardScaler()
    X_scaled = scaler.fit_transform(df_features)
    
    print(f"   Feature means: {dict(zip(SIMILARITY_FEATURES, scaler.mean_.round(3)))}")
    print(f"   Feature stds:  {dict(zip(SIMILARITY_FEATURES, scaler.scale_.round(3)))}")
    
    # Build polity data for JSON export
    print(f"\n Building polity records...")
    polity_data = []
    
    for i, row in df.iterrows():
        polity_data.append({
            'id': row['PolID'],
            'name': row['PolName'],
            'era': row['era'],
            'duration': int(row['duration']),
            'start': int(row['Start']),
            'end': int(row['End']),
            'region': row.get('World Region', 'Unknown') if pd.notna(row.get('World Region')) else 'Unknown',
            'features': X_scaled[len(polity_data)].tolist()  # Pre-scaled features
        })
    
    # Export polities.json
    polities_path = os.path.join(OUTPUT_DIR, 'polities.json')
    with open(polities_path, 'w') as f:
        json.dump(polity_data, f)
    
    file_size = os.path.getsize(polities_path) / 1024
    print(f"   ✓ Saved {polities_path} ({file_size:.1f} KB)")
    
    # Export scaler-params.json
    scaler_params = {
        'mean': scaler.mean_.tolist(),
        'std': scaler.scale_.tolist(),
        'features': SIMILARITY_FEATURES,
        'medians': feature_medians
    }
    
    scaler_path = os.path.join(OUTPUT_DIR, 'scaler-params.json')
    with open(scaler_path, 'w') as f:
        json.dump(scaler_params, f, indent=2)
    
    print(f"   ✓ Saved {scaler_path}")
    
    # Summary
    print(f"\n" + "=" * 60)
    print("SUMMARY")
    print("=" * 60)
    print(f"   Total polities exported: {len(polity_data)}")
    print(f"   Features per polity: {len(SIMILARITY_FEATURES)}")
    print(f"\n   Era distribution:")
    era_counts = df['era'].value_counts()
    for era, count in era_counts.items():
        print(f"      {era}: {count}")
    
    print(f"\n   Duration statistics:")
    print(f"      Min: {df['duration'].min()} years")
    print(f"      Max: {df['duration'].max()} years")
    print(f"      Median: {df['duration'].median():.0f} years")
    print(f"      Mean: {df['duration'].mean():.0f} years")
    
    print(f"\n Done! Frontend data ready in {OUTPUT_DIR}/")

if __name__ == '__main__':
    main()