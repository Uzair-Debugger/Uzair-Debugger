<div align="center">

# Syed Muhammad Uzair

### Full-Stack Engineer — Backend Architecture · Authentication Systems · AI-Integrated Apps

I design and ship production-grade systems: secure auth flows, search-optimized databases, and AI-powered pipelines — end to end, frontend to infrastructure.

<p>
  <a href="mailto:smuzair14cse@gmail.com">
    <img src="https://img.shields.io/badge/GMAIL-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail" />
  </a>
  <a href="https://www.linkedin.com/in/syed-muhammad-uzair-">
    <img src="https://img.shields.io/badge/LINKEDIN-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
  <a href="https://iam-uzair.vercel.app/">
    <img src="https://img.shields.io/badge/PORTFOLIO-000000?style=for-the-badge&logo=firefox&logoColor=white" alt="Portfolio" />
  </a>
</p>

</div>

---

### 🔭 Currently Exploring

Deepening my backend engineering craft — distributed systems patterns, advanced authentication/authorization design, and scalable API architecture — while exploring **LLM engineering**: RAG pipelines, prompt/context design, and integrating AI agents into production systems.

---

## 🧰 Tech Stack

| Layer | Technologies |
|---|---|
| **Frontend** | Next.js · React · TypeScript · Tailwind CSS · Vite · Framer Motion |
| **Backend** | Node.js · Express.js · Flask · FastAPI |
| **Databases / ORM** | PostgreSQL · MySQL · MongoDB · Prisma · SQLAlchemy |
| **Auth & Security** | JWT (access + rotating refresh tokens) · OAuth 2.0 · bcrypt · Zod validation |
| **AI / Media** | OpenAI Whisper · Llama 3.1 · Groq API · RAG (vector search) · FFmpeg |
| **Infra / Tooling** | Git/GitHub · Upstash Redis |

---

## 🚀 Featured Projects

### 📌 [Pin Code](https://github.com/Uzair-Debugger/pincode) — Code Snippet Management Platform
A production-grade platform for developers to capture, organize, search, and reuse code snippets.

- JWT auth with **rotating refresh tokens** and httpOnly cookies, plus silent token refresh with request deduplication
- **Full-text PostgreSQL search** using GIN-indexed `tsvector`, with title matches ranked above code-only matches
- Self-referential schema for **nested collections**, and explicit join tables (`SnippetTag`, `SnippetCollection`) for extensibility
- Layered backend: `routes → controllers → services → repositories`, covered by Jest + Supertest integration tests

`Next.js 16` `React 19` `TypeScript` `Express.js` `PostgreSQL` `Prisma` `JWT` `Zod`

**[Live](https://pincode-frontend.vercel.app)** · **[Code](https://github.com/Uzair-Debugger/pincode)**

---

### 🤖 NexaSupport — AI Customer Support SaaS
Deploy an AI support chatbot on any website with a single script tag — no backend code required for the end user.

- **RAG pipeline**: uploaded knowledge files are chunked, embedded (HuggingFace BGE), and stored in a Qdrant vector database for grounded retrieval
- Streaming, token-by-token LLM responses via Groq
- OAuth 2.0 (Scalekit) with HTTP-only session cookies — tokens never touch client-side JS
- Fully brandable widget (colors, logo, position) with real-time contrast validation, delivered as a self-contained JS bundle via esbuild
- Upstash Redis rate limiting across all public endpoints

`Next.js 16` `TypeScript` `Prisma` `Qdrant` `Groq` `Scalekit OAuth` `Upstash Redis`

**[Live](https://ai-customer-support-agent-nine.vercel.app)** · **[Code](https://github.com/Uzair-Debugger/AI-Customer-Support-Agent)** 

---

### 🎬 [YouTube Shorts AI Converter](https://github.com/Uzair-Debugger/Youtube_Shorts_Converter)
Turns long-form YouTube videos into multiple short clips automatically.

- `yt-dlp` download → audio extraction/compression → **Groq Whisper transcription** → LLM-based highlight selection → `ffmpeg` clipping into individual shorts
- Async job pipeline: `POST /api/convert` kicks off background processing, polled via `GET /api/status/:jobId`
- Per-short metadata returned (title, hook, reason, duration, file size) via a dedicated shorts endpoint

`Next.js` `Express.js` `Groq (Whisper + LLM)` `yt-dlp` `FFmpeg`

**[Code](https://github.com/Uzair-Debugger/Youtube_Shorts_Converter)**

---

### 🏥 [MedocBills Healthcare](https://www.medocbills.com)
Production, client-facing healthcare RCM and medical billing site — *now expanding into a full-stack platform (see above).*

- Multi-page SPA (Home, Services, Career, Clients, About) with per-page **SEO metadata**, Open Graph, and JSON-LD structured data (organization, FAQ, job postings)
- Searchable/filterable career listings, testimonial carousel, animated counters via Framer Motion
- Production Vite build: Terser minification + vendor chunk splitting, deployed on Vercel with SPA rewrites

`React` `TypeScript` `Vite` `Tailwind CSS` `Framer Motion` `React Helmet Async`

**[Live](https://www.medocbills.com)** · **[Code](https://github.com/Uzair-Debugger/MedocBills-Healthcare)**

---

### 🛒 [Tech-Tronics E-Commerce](https://ecommerce-frontend-chi-ten-25.vercel.app)
Full-stack e-commerce app with a React frontend and Flask REST API.

- JWT auth with role-based UI (admin/user), full cart → checkout → order-history flow
- Admin dashboard for product CRUD and order status tracking
- Flask + SQLAlchemy backend with Supabase-backed image storage

`React 19` `Flask` `MySQL` `SQLAlchemy` `JWT`

**[Live](https://ecommerce-frontend-chi-ten-25.vercel.app)** · **[Code](https://github.com/Uzair-Debugger/Ecommerce-Website)**

---

## 📊 GitHub Activity

<div align="center">
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=Uzair-Debugger&theme=tokyonight" alt="GitHub Streak" />
</div>

---

## 🌐 Let's Connect

<p align="left">
  <a href="mailto:smuzair14cse@gmail.com">
    <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" />
  </a>
  <a href="https://www.linkedin.com/in/syed-muhammad-uzair-">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />
  </a>
  <a href="https://iam-uzair.vercel.app/">
    <img src="https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=vercel&logoColor=white" />
  </a>
</p>

<sub>Open to backend, full-stack, and AI-integration roles — always happy to talk architecture.</sub>

</div>
