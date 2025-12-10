/**
 * constants.js
 * ============
 * Configuration for the Polity Simulator
 * 
 * IMPORTANT: All preset values are pulled directly from Seshat Equinox 2022 data.
 * Do NOT estimate values - they must match actual polities.json entries.
 * 
 * Last updated: 2024-12-10
 * Data source: polities.json (372 polities)
 */

// Feature order must match scaler-params.json
export const FEATURE_ORDER = [
  'hierarchy',      // Hier - Administrative levels (1-9)
  'government',     // Gov - Government sophistication (0-1)
  'information',    // Info - Information systems (0-1)
  'infrastructure', // Infra - Infrastructure development (0-1)
  'weapons',        // Weapon - Weapon types (0-6)
  'armor',          // Armor - Armor sophistication (0-8)
  'cavalry',        // Cavalry - Cavalry presence (0-1, binary in data)
  'fortifications', // Defense - Fortification levels (0-11)
  'ironWorking',    // Iron - Iron working (0-1, binary)
  'religion',       // ReligLev - Religious hierarchy (0-10)
];

// Historical eras with date ranges
export const ERAS = ['Ancient', 'Classical', 'Medieval', 'Early Modern'];

export const ERA_DESCRIPTIONS = {
  'Ancient': 'Before 500 BCE — Early civilizations, bronze age societies',
  'Classical': '500 BCE – 500 CE — Rome, Han China, Persian empires',
  'Medieval': '500 – 1500 CE — Feudal Europe, Islamic Golden Age, Mongol conquests',
  'Early Modern': 'After 1500 CE — Colonial empires, gunpowder states',
};

// Parameter definitions with accurate Seshat ranges
// Ranges verified against actual polities.json min/max values
export const PARAMETERS = {
  // === COMPLEXITY ===
  hierarchy: {
    label: 'Hierarchy',
    min: 1,
    max: 9,        // Max in data: 8.67 (Spanish Empire)
    step: 0.5,
    default: 4,
    category: 'complexity',
    description: '1 = village headman, 4 = regional kingdoms, 7+ = multi-tiered empires',
  },
  government: {
    label: 'Government',
    min: 0,
    max: 1,
    step: 0.05,
    default: 0.5,
    category: 'complexity',
    description: '0 = informal rule, 0.5 = emerging bureaucracy, 1 = sophisticated administration',
  },
  information: {
    label: 'Information',
    min: 0,
    max: 1,
    step: 0.05,
    default: 0.5,
    category: 'complexity',
    description: '0 = oral only, 0.5 = limited writing, 1 = extensive records & literature',
  },
  infrastructure: {
    label: 'Infrastructure',
    min: 0,
    max: 1,
    step: 0.05,
    default: 0.5,
    category: 'complexity',
    description: '0 = paths only, 0.5 = regional roads, 1 = empire-wide road networks & aqueducts',
  },
  
  // === WARFARE ===
  weapons: {
    label: 'Weapons',
    min: 0,
    max: 6,        // Max in data: 6.0
    step: 0.1,
    default: 3,
    category: 'warfare',
    description: '0 = clubs/stones, 3 = bronze swords, 6 = advanced steel + gunpowder',
  },
  armor: {
    label: 'Armor',
    min: 0,
    max: 8,        // Max in data: 8.0
    step: 0.5,
    default: 4,
    category: 'warfare',
    description: '0 = none, 4 = chain mail, 8 = full plate armor',
  },
  cavalry: {
    label: 'Cavalry',
    min: 0,
    max: 1,        // Binary in actual data
    step: 1,
    default: 1,
    category: 'warfare',
    description: '0 = no cavalry, 1 = cavalry present',
  },
  fortifications: {
    label: 'Fortifications',
    min: 0,
    max: 11,       // Max in data: 10.0, but allowing 11 for slider UX
    step: 0.5,
    default: 5,
    category: 'warfare',
    description: '0 = no fortifications, 5 = walled cities, 10+ = complex defensive networks',
  },
  ironWorking: {
    label: 'Iron Working',
    min: 0,
    max: 1,        // Binary in actual data
    step: 1,
    default: 1,
    category: 'warfare',
    description: '0 = no iron, 1 = iron working present',
  },
  
  // === RELIGION ===
  religion: {
    label: 'Religious Hierarchy',
    min: 0,
    max: 10,       // Max in data: 10.0 (Spanish Empire)
    step: 0.5,
    default: 3,
    category: 'religion',
    description: '0 = animist, 2 = local priests, 5 = state religion, 10 = complex hierarchy',
  },
};

/**
 * PRESETS
 * =======
 * ALL values pulled directly from polities.json rawFeatures.
 * Names match Seshat polity names exactly.
 * 
 * To add a new preset:
 * 1. Find the polity in polities.json
 * 2. Copy its rawFeatures values exactly
 * 3. Use the polity's actual name
 */
export const PRESETS = {
  // Classical era - Empires
  'Roman Republic': {
    // From: "Roman Republic" (Classical, 244 yrs)
    hierarchy: 4.67,
    government: 0.36,
    information: 0.89,
    infrastructure: 0.67,
    weapons: 4.9,
    armor: 7.5,
    cavalry: 1,
    fortifications: 6.0,
    ironWorking: 1,
    religion: 4.0,
  },
  'Roman Empire': {
    // From: "Roman Empire - Principate" (Classical, 314 yrs)
    hierarchy: 8.17,
    government: 0.65,
    information: 0.92,
    infrastructure: 0.99,
    weapons: 2.9,
    armor: 8.0,
    cavalry: 1,
    fortifications: 10.0,
    ironWorking: 1,
    religion: 4.0,
  },
  'Achaemenid Persia': {
    // From: "Achaemenid Empire" (Classical, 208 yrs)
    hierarchy: 6.5,
    government: 0.99,
    information: 0.95,
    infrastructure: 0.97,
    weapons: 4.1,
    armor: 7.6,
    cavalry: 1,
    fortifications: 9.4,
    ironWorking: 1,
    religion: 4.0,
  },
  'Han Dynasty': {
    // From: "Western Han" (Classical, 211 yrs)
    hierarchy: 6.83,
    government: 0.74,
    information: 0.91,
    infrastructure: 0.97,
    weapons: 5.9,
    armor: 7.8,
    cavalry: 1,
    fortifications: 7.6,
    ironWorking: 1,
    religion: 3.0,
  },
  
  // Medieval era
  'Byzantine Empire': {
    // From: "Byzantine Empire I" (Medieval, 234 yrs)
    hierarchy: 7.33,
    government: 0.91,
    information: 0.92,
    infrastructure: 0.9,
    weapons: 6.0,
    armor: 8.0,
    cavalry: 1,
    fortifications: 10.0,
    ironWorking: 1,
    religion: 7.0,
  },
  'Mongol Empire': {
    // From: "Mongol Empire" (Medieval, 94 yrs)
    hierarchy: 5.0,
    government: 0.78,
    information: 0.54,
    infrastructure: 0.99,
    weapons: 6.0,
    armor: 6.0,
    cavalry: 1,
    fortifications: 5.0,
    ironWorking: 1,
    religion: 3.0,
  },
  'Aztec Empire': {
    // From: "Aztec Empire" (Medieval, 92 yrs)
    hierarchy: 5.83,
    government: 0.77,
    information: 0.54,
    infrastructure: 1.0,
    weapons: 5.0,
    armor: 3.0,
    cavalry: 0,          // No horses in Americas
    fortifications: 4.3,
    ironWorking: 0,      // No iron working
    religion: 2.5,
  },
  
  // Early Modern era
  'Spanish Empire': {
    // From: "Spanish Empire" (Early Modern, 168 yrs)
    // Note: Most religiously institutionalized polity in dataset (religion=10)
    // Actual Seshat values - DO NOT MODIFY
    hierarchy: 8.67,     // NOT 9 - actual value is 8.67
    government: 0.92,
    information: 0.92,
    infrastructure: 0.99,
    weapons: 5.8,
    armor: 8.0,
    cavalry: 1,
    fortifications: 9.1,
    ironWorking: 1,
    religion: 10.0,      // Maximum in dataset - this is correct
  },
  'Ottoman Empire': {
    // From: "Ottoman Empire II" (Early Modern, 165 yrs)
    hierarchy: 8.17,
    government: 1.0,
    information: 1.0,
    infrastructure: 0.92,
    weapons: 5.9,
    armor: 8.0,
    cavalry: 1,
    fortifications: 8.0,
    ironWorking: 1,
    religion: 4.0,
  },
  
  // Ancient era
  'Late Shang': {
    // From: "Late Shang" (Ancient, 204 yrs)
    hierarchy: 4.0,
    government: 0.54,
    information: 0.36,
    infrastructure: 0.83,
    weapons: 5.9,
    armor: 4.0,
    cavalry: 0,
    fortifications: 6.5,
    ironWorking: 0,
    religion: 3.0,
  },
};

// Default config - median-ish values for exploration
export const DEFAULT_CONFIG = {
  hierarchy: 5,
  government: 0.5,
  information: 0.5,
  infrastructure: 0.5,
  weapons: 4,
  armor: 5,
  cavalry: 1,
  fortifications: 5,
  ironWorking: 1,
  religion: 4,
};

// Category colors for UI grouping
export const CATEGORY_COLORS = {
  complexity: '#60a5fa',  // blue
  warfare: '#f87171',     // red
  religion: '#fbbf24',    // amber
};

/**
 * DATA RANGES (from actual polities.json)
 * For reference when validating user inputs
 * 
 * hierarchy:      1.0 - 8.67
 * government:     0.0 - 1.0
 * information:    0.0 - 1.0
 * infrastructure: 0.0 - 1.0
 * weapons:        0.0 - 6.0
 * armor:          0.0 - 8.0
 * cavalry:        0.0 - 1.0
 * fortifications: 0.0 - 10.0
 * ironWorking:    0.0 - 1.0
 * religion:       0.0 - 10.0
 */