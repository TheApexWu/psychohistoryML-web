# PsychohistoryML-Web

**ML analysis of civilizational patterns using the Seshat Global History Databank.**  
Inspired by Asimov’s *psychohistory*, but explicit about empirical limits.

**Live:** https://amadeuswoo.com

---

## Overview

Random Forest analysis of historical polities examining whether complexity, warfare, and religion correlate with civilizational duration.

- Dataset: **372 polities** (Seshat Equinox 2022)
- Strict filter: **256 polities**
- Features: **16**
- Claim type: **correlational only**

**Core result:** the complexity–duration relationship *reverses by historical era*.

---

## Performance

- Test AUC: **0.744**
- CV Mean AUC: **0.675 ± 0.09**

---

## Key Findings

- Complexity alone ≈ chance (AUC **0.505**)
- Ancient era: complexity **shortens** duration (β ≈ −159)
- Early Modern era: complexity **extends** duration (β ≈ +6)
- Classical era moderation: **+0.634**
- Religion: **~27%** feature importance
- Warfare features: **+28%** AUC improvement

---

## Limitations

- No geography, population, or economic variables
- No causal mechanisms or influence chains
- Coarse conflict data
- Small sample → high variance (CV **0.51–0.76**)

---

## Stack

- Next.js 16 / React 19  
- scikit-learn (Random Forest, k-NN)  
- Claude API  
- Seshat Global History Databank

---

## Structure

```
src/app/            # UI, chatbot, simulator
src/components/     # Chat + k-NN logic
public/data/        # Polities + scalers
models/             # Trained RF + scaler
```

---

## Setup

```bash
git clone https://github.com/TheApexWu/psychohistoryML-web.git
cd psychohistoryML-web
npm install
echo "ANTHROPIC_API_KEY=your-key" > .env.local
npm run dev
```

---

## Chatbot Philosophy

Deliberately agonistic:
- Disambiguates vague queries
- Leads with one data point
- Challenges assumptions
- Admits when data cannot answer

---

## Sources

- Seshat Global History Databank  
- Turchin et al. (2018), *PNAS*

---

**Author:** @theapexwu  
**Notebooks:** https://github.com/TheApexWu/psychohistoryML
