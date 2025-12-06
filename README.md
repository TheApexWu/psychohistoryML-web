# PsychohistoryML Web

Landing page for amadeuswoo.com — "I Built Asimov's Psychohistory"

## Quick Deploy to Vercel (Tonight)

### Step 1: Install Node.js
Download from https://nodejs.org (LTS version)

### Step 2: Create GitHub Repo
```bash
# In terminal, navigate to this folder
cd psychohistoryml-web

# Initialize git
git init
git add .
git commit -m "Initial landing page"

# Create repo on github.com/new called "psychohistoryml-web"
# Then push:
git remote add origin https://github.com/YOUR_USERNAME/psychohistoryml-web.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy to Vercel
1. Go to https://vercel.com
2. Sign up with GitHub
3. Click "New Project"
4. Import your `psychohistoryml-web` repo
5. Click Deploy (no config needed for static HTML)

### Step 4: Connect Your Domain
1. In Vercel dashboard → your project → Settings → Domains
2. Add `amadeuswoo.com`
3. Vercel will show you DNS records to add
4. Go to Namecheap → Domain List → Manage → Advanced DNS
5. Add the records Vercel shows you
6. Wait 5-30 minutes for DNS propagation

## Local Development
```bash
# Preview locally
npx serve .
# Opens at http://localhost:3000
```

## Next Steps
- [ ] Set up email collection (Formspree or ConvertKit)
- [ ] Add article content
- [ ] Build interactive predictor
- [ ] Migrate to Next.js

---

## Learning Roadmap (Before YC - Mid January)

### Week 1-2: JavaScript & React Foundations
**Goal**: Understand the basics before Next.js

- **JavaScript** (if rusty): https://javascript.info (free, excellent)
- **React Official Tutorial**: https://react.dev/learn (new docs are great)
- **Video**: Fireship "React in 100 Seconds" then "React Full Course"

### Week 2-3: Next.js
**Goal**: Rebuild this site properly

- **Next.js Learn Course**: https://nextjs.org/learn (official, project-based)
- **Video**: Theo's "Next.js 14 Tutorial" or Lee Robinson's content
- **Build**: Convert landing page → Next.js with article pages

### Week 3-4: Full Stack + API
**Goal**: Connect your ML models

- **FastAPI Tutorial**: https://fastapi.tiangolo.com/tutorial/
- **Deploy Python**: Railway.app or Render.com
- **Build**: API endpoint that loads your .pkl and returns predictions

### Week 4-5: AI/LLM Integration (The Exciting Part)
**Goal**: Add AI-powered features to your civilizational analyzer

**Foundational Understanding**:
- Andrej Karpathy "Let's build GPT" (YouTube) — understand transformers
- Andrej Karpathy "Intro to LLMs" (1hr) — big picture
- 3Blue1Brown "Neural Networks" playlist — visual intuition

**Practical Building**:
- **LangChain Quickstart**: https://python.langchain.com/docs/get_started
- **OpenAI API**: Build a "Ask questions about civilizations" chatbot
- **RAG Tutorial**: Index your Seshat data, let users query it naturally

**AI Agent Ideas for Your Project**:
1. **Civilizational Historian Agent**: "Tell me about the fall of Rome" → pulls from your data + explains model predictions
2. **What-If Simulator**: "What if the Roman Empire had [X]?" → adjusts features, shows new prediction
3. **Research Assistant**: Answers questions by querying your dataset
4. **Comparison Engine**: "Compare Byzantine Empire to Ming Dynasty" → structured analysis

**Courses**:
- DeepLearning.AI "LangChain for LLM Application Development" (free)
- DeepLearning.AI "Building Systems with ChatGPT" (free)
- Fast.ai "Practical Deep Learning" (if you want to go deeper)

### Week 5-6: Polish & YC Prep
**Goal**: Demo-ready product

- Interactive predictor working
- AI chat feature integrated
- Clean README, demo video
- YC application refined

---

## Cool Project Inspiration

**Why This Project Is YC-Worthy**:
- Novel application of ML to humanities (underexplored)
- Interactive data journalism angle
- AI-native features (RAG on historical data)
- Clear technical skill demonstration
- Unique founder story / intellectual curiosity

**Similar Energy Projects**:
- Replit (started as "let's make coding accessible")
- Notion (started as "let's rethink documents")
- Your angle: "Let's make historical analysis interactive and AI-powered"

---

## Tech Stack Evolution

**Phase 1 (Now)**: Static HTML → Vercel
**Phase 2**: Next.js + Tailwind → Article + Basic Interactive
**Phase 3**: + FastAPI backend → Real ML predictions  
**Phase 4**: + OpenAI/LangChain → AI-powered queries
**Phase 5**: + Vector DB (Pinecone/Chroma) → Full RAG on Seshat data
