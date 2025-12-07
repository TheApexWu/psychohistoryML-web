# Animated Visualization Components

These React components replace static matplotlib figures with animated, dark-themed visualizations that match your site's aesthetic.

## Setup

1. Create the components directory:
```bash
mkdir -p src/components/visualizations
```

2. Copy all `.jsx` files into `src/components/visualizations/`

3. Make sure your `globals.css` has the CSS variables:
```css
:root {
  --bg-primary: #0a0a0b;
  --bg-secondary: #111113;
  --text-primary: #e8e6e3;
  --text-muted: #8a8885;
  --accent: #c9a55c;
  --accent-dim: #8b7355;
  --border: #2a2a2d;
  --font-jetbrains: 'JetBrains Mono', monospace;
  --font-cormorant: 'Cormorant Garamond', serif;
}
```

## Components

### 1. AnimatedROC
The ROC curve that draws itself when scrolled into view.

```jsx
import AnimatedROC from '@/components/visualizations/AnimatedROC'

<AnimatedROC />
```

**Shows:** Random Forest (0.744) vs Logistic Regression (0.669) vs random chance

### 2. FeatureImportance
Horizontal bar chart showing what features matter most.

```jsx
import FeatureImportance from '@/components/visualizations/FeatureImportance'

<FeatureImportance />
```

**Shows:** Ideology > PC1 > PC2 > PC3 with color-coded categories (religion/complexity/warfare)

### 3. EraStratification
Interactive chart showing complexity coefficients per era.

```jsx
import EraStratification from '@/components/visualizations/EraStratification'

<EraStratification />
```

**Shows:** β=-159 (Ancient) → β=+6 (Early Modern) with hover explanations

### 4. AnimatedStats / StatsRow
Animated number counters for hero stats.

```jsx
import { StatsRow, ModelJourney } from '@/components/visualizations/AnimatedStats'

// Hero section stats
<StatsRow />

// Model evolution timeline
<ModelJourney />
```

**Shows:** 256 civilizations, 0.744 AUC, 10,000+ years (animated on scroll)

### 5. DiscoveriesSection
Grid of 6 expandable discovery cards.

```jsx
import DiscoveriesSection from '@/components/visualizations/DiscoveriesSection'

<DiscoveriesSection />
```

**Shows:** All 6 findings with expandable details and key stats

## Example: Research Page

```jsx
// src/app/research/page.jsx
import AnimatedROC from '@/components/visualizations/AnimatedROC'
import FeatureImportance from '@/components/visualizations/FeatureImportance'
import EraStratification from '@/components/visualizations/EraStratification'
import { ModelJourney } from '@/components/visualizations/AnimatedStats'
import DiscoveriesSection from '@/components/visualizations/DiscoveriesSection'

export default function ResearchPage() {
  return (
    <article className="research">
      <h1>Building Psychohistory: A Data Science Journey</h1>
      
      <section>
        <h2>The Model</h2>
        <p>Starting with just complexity features, the model performed at chance level...</p>
        <ModelJourney />
        <AnimatedROC />
      </section>

      <section>
        <h2>What Matters Most</h2>
        <p>The feature importance reveals a surprising hierarchy...</p>
        <FeatureImportance />
      </section>

      <section>
        <h2>The Era Effect</h2>
        <p>Perhaps the most striking discovery: complexity's effect depends entirely on when...</p>
        <EraStratification />
      </section>

      <DiscoveriesSection />
    </article>
  )
}
```

## Example: Landing Page

```jsx
// src/app/page.jsx
import { StatsRow } from '@/components/visualizations/AnimatedStats'
import DiscoveriesSection from '@/components/visualizations/DiscoveriesSection'

export default function Home() {
  return (
    <>
      <section className="hero">
        <span className="hero-tag">Coming January 2026</span>
        <h1>I Built Asimov's <em>Psychohistory</em></h1>
        <p className="subtitle">...</p>
      </section>

      {/* Replaces static stats */}
      <StatsRow />

      {/* Replaces 3-item discovery list with 6-item expandable grid */}
      <DiscoveriesSection />

      {/* Email signup */}
      <EmailSignup />
    </>
  )
}
```

## Features

- **Scroll-triggered animations** — Charts animate when they scroll into view
- **Dark theme** — Matches your site's aesthetic (no white backgrounds)
- **Responsive** — Works on mobile
- **Interactive** — Hover states, expandable cards
- **No external images** — Pure React/CSS/SVG

## Customization

### Change colors
Edit the component's `<style jsx>` block or update CSS variables.

### Change data
Each component has a data array at the top (e.g., `rocData`, `features`, `eraData`). Update these if your model results change.

### Add more charts
The pattern is:
1. Use `useState` for animation progress
2. Use `IntersectionObserver` to trigger on scroll
3. Use `requestAnimationFrame` for smooth animation
4. Style with CSS-in-JS matching your design system
