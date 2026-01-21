# PsychohistoryML Web

Interactive explorer for civilizational pattern analysis using the Seshat Global History Databank and CrisisDB.

Live: https://amadeuswoo.com

## Pages

**/** - Homepage and project overview

**/crisisdb** - CrisisDB Explorer (Jan 2026)
- 3,447 power transitions from 264 polities
- Interactive complexity-conflict scatter plot
- Violence contagion Markov visualization
- Ruler tenure survival curves
- Pattern exploration simulator

**/discover** - Seshat polity explorer
- k-NN similarity search across 372 polities
- Era-stratified complexity analysis

**/research** - Seshat methodology and findings
- Three-mechanism framework (complexity, warfare, religion)
- Statistical methodology documentation

## Key Results

### CrisisDB
- Administrative complexity correlates with intra-elite conflict (r=0.36, p<0.001)
- Violence is self-reinforcing: P(violent | prev violent) = 60% vs 22% after peaceful
- Violent accession predicts 2 years shorter median reign

### Seshat
- Random Forest CV AUC: 0.66 plus/minus 0.06
- Complexity-duration relationship reverses by era
- Religion shows 27% feature importance

## Stack

- Next.js 16 / React 19
- Recharts for visualizations
- Claude API for chatbot

## Structure

```
src/app/
  page.js           # Homepage
  crisisdb/         # CrisisDB explorer
  discover/         # Seshat polity explorer
  research/         # Methodology
  archive/          # Deprecated pages
src/components/     # Shared components
public/data/        # Polity data and scalers
```

## Setup

```bash
git clone https://github.com/TheApexWu/psychohistoryML-web.git
cd psychohistoryML-web
npm install
npm run dev
```

Optional: Add ANTHROPIC_API_KEY to .env.local for chatbot functionality.

## Data Sources

- Seshat Global History Databank (Equinox 2022)
- CrisisDB Power Transitions

## Acknowledgments

Data from the Seshat Global History Databank and CrisisDB, maintained by the Complexity Science Hub Vienna and the Seshat team. Theory builds on Peter Turchin's cliodynamics.

## Related

Notebooks: https://github.com/TheApexWu/psychohistoryML

## Author

@theapexwu
