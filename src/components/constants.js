// src/components/constants.js
// Parameter definitions and constants for the Polity Simulator
// Ranges verified against Seshat Equinox 2022 dataset

export const PARAMETERS = {
  hierarchy: {
    min: 1,
    max: 9,
    default: 3,
    step: 1,
    label: 'Hierarchy',
    description: '1 = village, 3 = chiefdom, 5 = kingdom, 7 = empire, 9 = superpower',
    category: 'complexity'
  },
  government: {
    min: 0,
    max: 1,
    default: 0.3,
    step: 0.1,
    label: 'Government',
    description: '0 = none, 0.3 = basic, 0.5 = moderate, 0.9 = sophisticated bureaucracy',
    category: 'complexity'
  },
  information: {
    min: 0,
    max: 1,
    default: 0.3,
    step: 0.1,
    label: 'Information Systems',
    description: '0 = oral only, 0.5 = basic writing, 0.9 = full literacy & records',
    category: 'complexity'
  },
  infrastructure: {
    min: 0,
    max: 1,
    default: 0.5,
    step: 0.1,
    label: 'Infrastructure',
    description: '0 = none, 0.5 = roads/irrigation, 1 = advanced (aqueducts, ports)',
    category: 'complexity'
  },
  weapons: {
    min: 0,
    max: 6,
    default: 3,
    step: 0.5,
    label: 'Weapons',
    description: '0 = stone, 2 = bronze, 4 = iron swords, 6 = advanced steel',
    category: 'warfare'
  },
  armor: {
    min: 0,
    max: 8,
    default: 3,
    step: 1,
    label: 'Armor',
    description: '0 = none, 3 = leather/bronze, 5 = chainmail, 8 = full plate',
    category: 'warfare'
  },
  cavalry: {
    min: 0,
    max: 1,
    default: 0,
    step: 0.5,
    label: 'Cavalry',
    description: '0 = none, 0.5 = some mounted units, 1 = significant cavalry',
    category: 'warfare'
  },
  fortifications: {
    min: 0,
    max: 11,
    default: 3,
    step: 1,
    label: 'Fortifications',
    description: '0 = none, 3 = walls, 6 = castles, 9 = advanced fortifications',
    category: 'warfare'
  },
  ironWorking: {
    min: 0,
    max: 1,
    default: 0,
    step: 1,
    label: 'Iron Working',
    description: '0 = no iron, 1 = iron/steel technology',
    category: 'warfare'
  },
  religion: {
    min: 0,
    max: 10,
    default: 2,
    step: 1,
    label: 'Religious Hierarchy',
    description: '0 = animist, 2 = local priests, 5 = state religion, 10 = complex hierarchy',
    category: 'religion'
  }
};

// Order of features as they appear in the scaled feature vector
// Must match the order in precompute-data.py
export const FEATURE_ORDER = [
  'hierarchy',      // Hier
  'government',     // Gov
  'information',    // Info
  'infrastructure', // Infra
  'weapons',        // Weapon
  'armor',          // Armor
  'cavalry',        // Cavalry
  'fortifications', // Defense
  'ironWorking',    // Iron
  'religion'        // ReligLev
];

export const ERAS = ['Ancient', 'Classical', 'Medieval', 'Early Modern'];

export const ERA_DESCRIPTIONS = {
  'Ancient': 'Before 500 BCE — Egypt, Mesopotamia, early China, Bronze Age',
  'Classical': '500 BCE – 500 CE — Rome, Han China, Persia, Greece',
  'Medieval': '500 – 1500 CE — Byzantine, Tang, Caliphates, feudal Europe',
  'Early Modern': '1500+ CE — Ottomans, Mughals, Ming, European colonial powers'
};

export const CATEGORY_COLORS = {
  complexity: '#60a5fa',  // blue
  warfare: '#f87171',     // red
  religion: '#d4a574'     // gold/tan
};

// Presets based on ACTUAL Seshat values for similar polities
export const PRESETS = {
  'Simple Chiefdom': {
    hierarchy: 2,
    government: 0.1,
    information: 0,
    infrastructure: 0.2,
    weapons: 1,
    armor: 0,
    cavalry: 0,
    fortifications: 0,
    ironWorking: 0,
    religion: 1
  },
  'Bronze Age Kingdom': {
    hierarchy: 3,
    government: 0.2,
    information: 0.3,
    infrastructure: 0.4,
    weapons: 3,
    armor: 3,
    cavalry: 0,
    fortifications: 3,
    ironWorking: 0,
    religion: 2
  },
  'Roman Republic': {
    // Based on actual Seshat values
    hierarchy: 5,
    government: 0.4,
    information: 0.9,
    infrastructure: 0.7,
    weapons: 5,
    armor: 7,
    cavalry: 1,
    fortifications: 6,
    ironWorking: 1,
    religion: 4
  },
  'Medieval Kingdom': {
    hierarchy: 4,
    government: 0.3,
    information: 0.4,
    infrastructure: 0.5,
    weapons: 4,
    armor: 5,
    cavalry: 1,
    fortifications: 5,
    ironWorking: 1,
    religion: 4
  },
  'Steppe Nomads': {
    hierarchy: 2,
    government: 0.1,
    information: 0.1,
    infrastructure: 0.1,
    weapons: 3,
    armor: 2,
    cavalry: 1,
    fortifications: 0,
    ironWorking: 1,
    religion: 1
  },
  'Spanish Empire': {
    // Based on actual Seshat values - one of the most complex
    hierarchy: 9,
    government: 0.9,
    information: 0.9,
    infrastructure: 0.8,
    weapons: 6,
    armor: 7,
    cavalry: 1,
    fortifications: 8,
    ironWorking: 1,
    religion: 10
  }
};

// Default configuration (close to dataset mean)
export const DEFAULT_CONFIG = {
  hierarchy: 3,
  government: 0.3,
  information: 0.3,
  infrastructure: 0.5,
  weapons: 3,
  armor: 3,
  cavalry: 0,
  fortifications: 3,
  ironWorking: 0,
  religion: 2
};