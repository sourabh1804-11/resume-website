# Session Context: Resume Website & Job Matcher Project
**Date:** Tuesday, May 26, 2026

## Project Status
- **Portfolio Reactivation:** Successfully reactivated https://ss11-portfolio.vercel.app/. Fixed Vercel SSO protection by officially adding custom domains.
- **Job Matcher Application:** Built a full-stack Python (FastAPI) and React (Vite) app. Includes a scam validation pipeline and LLM-ready semantic matching logic. Located in `Resume Website/job_hunt`.
- **Hybrid Resume Template:** Created a pixel-perfect, two-page A4 resume template (`ResumeTemplate.tsx`) with a high-impact executive summary and technical deep-dives.
    - **Visuals:** Dark technical aesthetic, slate-900 headers, indigo/blue gradients, and a centered vertical timeline.
    - **Optimization:** Fully ATS-optimized with categorized keywords.
    - **PDF Fidelity:** Forced strict `297mm` height and global CSS `print-color-adjust` to ensure PDFs are identical to the screen.
    - **Interactivity:** Added live links for contact info, company sites, and portfolio.

## Future Tasks
- Deploy the Job Matcher and Resume Template to the live portfolio or a new Vercel project.
- Integrate real Job APIs (e.g., JSearch) into the backend.
- Connect the semantic matcher to a live LLM (Gemini API).

## Memory State
- User preference saved: Always start dev servers in background at the end of sessions.
- Currently running: Frontend on port 5174, Backend on port 8000.

---
*Conversation context saved. Ready to resume tomorrow.*
