# Sakeet's Showcase

Build a modern, single-page personal portfolio website for a graduate AI/ML and data professional. Use React + Tailwind CSS + shadcn/ui components, lucide-react icons, and framer-motion for scroll animations. It must be fully responsive (mobile-first) and deploy-ready.

## DESIGN DIRECTION
- Dark theme by default with a light-mode toggle in the navbar. Base: deep charcoal/navy (#0B1120 / #0F172A). Accent: electric teal-to-indigo gradient (#22D3EE → #6366F1) used on headings, buttons, hover states, and section dividers.
- Typography: a clean geometric sans (Inter or Space Grotesk) for headings, generous letter spacing on section labels, comfortable line height on body text.
- Subtle depth: soft glassmorphism cards with 1px translucent borders, gentle glow on hover, faint animated gradient mesh or grid pattern behind the hero only.
- Sticky top navbar with smooth-scroll anchor links: Home · About · Experience · Projects · Skills · Achievements · Contact. Collapses into a hamburger sheet on mobile. Active section highlights as you scroll.
- Every section fades/slides in on scroll. Keep animations tasteful, never distracting.
- Include a "Back to top" floating button and a custom favicon using the initials "SK".

## SECTION 1 — HERO
- Name: **Sakeet Kopparapu**
- Animated rotating role text: "AI/ML Engineer" → "Data Scientist" → "Business Analyst" → "Data Analyst"
- Tagline: "I didn't start in AI. I started in data — and that's why my AI actually works."
- Sub-line: MS in Information Systems & Technologies @ University of North Texas (May 2026) · Plano, TX · Open to relocate
- Availability badge (pill, pulsing dot): "Open to Full-Time & Internship Opportunities"
- Two CTA buttons: "View My Work" (scrolls to Projects) and "Download Resume" (links to a placeholder /resume.pdf).
- Social icon row: LinkedIn (https://linkedin.com/in/kopparapu-sakeet), GitHub (https://github.com/Sakeet), Medium (https://medium.com/@sakeetkopparapu), Email (sakeetkopparapu332@gmail.com).
- Circular profile photo placeholder on the right (desktop) / above text (mobile) with a gradient ring border.

## SECTION 2 — ABOUT
Two columns: narrative on the left, a quick-facts card on the right.

Narrative copy (use this, lightly polished):
"I started my career at Capgemini, spending 14 months doing the work that makes everything else possible — building ETL pipelines, validating datasets, and making sure 1,000+ employees got accurate payroll and workforce reports every single week. It wasn't flashy, but it taught me the lesson that still shapes how I work: the smartest AI system in the world is only as good as the data flowing into it.

That mindset carried into machine learning and generative AI. Instead of treating data as an afterthought, I design for it from the start — whether that's leading a 10-member team building an AI-driven real estate platform, architecting RAG and OCR pipelines for document extraction, or building a real-time translation system so no 911 emergency call gets lost in a language barrier.

What I bring is the full stack of AI and data work — not just modeling. Database schemas, prompt engineering, dashboards in Tableau and Power BI, and leading cross-functional teams through ambiguous technical problems."

Quick-facts card: Location: Plano, TX (open to relocate) · Education: MS Information Systems & Technologies, UNT — GPA 3.6/4 · BTech Computer Science, Amrita Vishwa Vidyapeetham · Focus: AI/ML Engineering, Data Science, Analytics · Languages: Telugu, Hindi, English, Tamil

Animated counter stat strip below (numbers count up on scroll):
- 100K+ records processed weekly
- 200+ students taught as TA
- 10-member team led
- 6 hackathons & national competitions placed in

## SECTION 3 — EXPERIENCE (vertical timeline, alternating left/right on desktop, stacked on mobile)
Each entry: company, role, dates, location, and 3–4 bullets. Company logo placeholder circle on the timeline spine.

**1. University of North Texas — Teaching/Instructional Assistant** | May 2025 – May 2026 | Denton, TX
- Supported instruction for 200+ students across data, analytics, and information systems courses; led weekly labs and office hours resolving 300+ SQL, Python, and analytics queries, cutting problem-resolution turnaround by 40%.
- Created end-user documentation, instructional lab videos, and Respondus 4.0 assessment content to streamline course delivery.
- Graded 200+ assignments and exams with a focus on analytical rigor and reproducibility, maintaining 99% on-time feedback.
- Collaborated weekly with faculty to redesign assignments around real-world business use cases, improving applied assessment performance by 20%.

**2. AriesView — AI Research & Engineering** | June 2025 – August 2025 | Remote
- Led a core platform feature end-to-end, from requirements elicitation to rollout, managing a 10-member cross-functional team across backend, frontend, and database layers.
- Translated stakeholder requirements into scalable system architecture, business rules, and data models for a real estate data product.
- Built production data pipelines using OCR, LLMs, and Retrieval-Augmented Generation (RAG) to automate structured extraction from complex documents.
- Built evaluation and testing frameworks to verify outputs against defined requirements.

**3. Dallas AI — Summer Research Program** | June 2025 – August 2025 | Dallas, TX
- Built FirstVox, a secure on-premise real-time translation system that eliminates language barriers for 911 dispatchers.
- Architected an end-to-end audio pipeline using OpenAI Whisper for transcription and Meta SeamlessM4T for translation and speech synthesis, routed through a virtual audio device with zero network dependency for full privacy compliance.
- Delivered a production-ready system in 8 weeks with a 5-person cross-functional team under faculty mentorship.

**4. Capgemini — Associate I, Software Engineer** | June 2023 – August 2024 | Gurugram, India
- Built SQL stored procedures and SSIS ETL pipelines processing 100K+ records per week, improving ingestion efficiency by 30% and achieving 100% accuracy on target-database loads.
- Served as technical point of contact for attendance-system data quality, defining and executing test cases against documented business rules across employee, manager, and supervisor roles.
- Performed data cleaning, validation, and reconciliation across multiple source systems, raising data quality to 99%+ for downstream analytics.
- Partnered with business and technical stakeholders to translate operational requirements into scalable workflows, cutting report turnaround time by 25–30%.

**5. Senselearner Technologies — Cyber Security Intern** | Sept 2023 – Oct 2023
- Conducted full reconnaissance and vulnerability assessment on a live domain using Nmap, Nikto, Gobuster, Burp Suite, and Subfinder, producing a remediation-focused security report.
- Applied pentesting concepts across the attack lifecycle: network scanning, OS fingerprinting, VAPT, and OWASP Top 10 web vulnerabilities.

**6. Oasis Infobyte — Machine Learning Intern** | Nov 2022 – Dec 2022
- Processed real-world datasets of 10K–50K+ records with Python, Pandas, and NumPy, improving data usability by 30–40% through preprocessing and feature engineering.
- Built and tuned classification and regression models, achieving 10–20% performance gains through feature optimization and hyperparameter tuning.

Add a collapsed "Earlier Experience" accordion at the bottom containing: Pinnacle Full-Stack Interns — Data Analyst Intern (Jul–Aug 2021) and Internshala — Student Partner (May–Aug 2020).

## SECTION 4 — PROJECTS
Responsive card grid (3 columns desktop / 1 mobile) with filter pills at the top: All · AI & GenAI · Machine Learning · Analytics & BI · Data Engineering. Each card has a gradient header block, title, one-line hook, description, tech-stack chips, an outcome/impact line in accent color, and GitHub / Case Study buttons. Cards lift and glow on hover. Add an "Award Winner" ribbon on the ones marked below.

**FirstVox — Real-Time 911 Translation System** (AI & GenAI)
Live, bidirectional translation for emergency dispatchers with zero network dependency. Built with OpenAI Whisper and Meta SeamlessM4T routed through a virtual audio device so no call data leaves the premises. Tech: Python, Whisper, SeamlessM4T, Audio Pipelines, On-Prem Deployment. Impact: Production-ready in 8 weeks with a 5-person team.

**Frontline Forecast — Hospital Length-of-Stay Prediction** (Machine Learning) — AWARD
Predictive model on a 101,766-row healthcare dataset spanning 130 hospitals, built with SQL and SAS Viya. What-if simulations showed earlier discharge for 10% of patients could free 8–12 beds per day. Tech: SAS Viya, SQL, Python, Predictive Modeling. Impact: 1 of 6 teams worldwide selected for the "Rising Stars in Data and AI" showcase at SAS Innovate 2026.

**SURAKSHA — AI-Driven IT Support & Task Automation** (AI & GenAI) — AWARD
Intelligent chatbot for IT incident management and automated ticketing, integrated with SolarWinds APIs for real-time autonomous workflow execution via natural language. Tech: Python, LLMs, SolarWinds API, NLP, Automation. Impact: 2nd prize out of 25+ teams at the AIS 2025 Conference; self-healing mechanisms cut manual troubleshooting effort. Also a published paper.

**HCA Healthcare Resilience Platform** (Analytics & BI) — AWARD
EDA and hypothesis validation on 200,000+ rows of deidentified employee data, with summary statistics and visualizations that optimized resource allocation, plus a functional website to make the solution accessible to end users. Tech: Python, Pandas, Data Visualization, Statistical Analysis. Impact: Top 6 nationwide finalist out of 25+ university teams.

**PEAR — AI Founder–Investor Matching Platform** (AI & GenAI) — AWARD
AI-powered matching platform built in a 5-week hackathon; owned database architecture and data modeling, and designed a matching pipeline that improved recommendation relevance through structured workflows and iterative testing. Tech: Python, LLMs, Database Design, Recommendation Systems. Impact: 3rd place out of 18 teams.

**AI Voice Agent — Missed Call Prioritization** (AI & GenAI)
Voice agent that triages missed calls for service businesses by analyzing caller intent and urgency, with a centralized Google Sheets reporting layer acting as a lightweight BI dashboard for non-technical users. Tech: Python, SQL, Voice AI, Google Sheets API. Impact: End-to-end product from data capture to user-facing reporting.

**Enterprise Workforce Data Pipeline @ Capgemini** (Data Engineering)
SQL stored procedures and SSIS ETL pipelines for employee data integration and migration, with validated source-to-target mappings. Tech: SQL Server, SSIS, T-SQL, ETL, Data Validation. Impact: 100K+ records/week at 99%+ accuracy.

Below the grid, add a centered "View all 18 repositories on GitHub" button linking to https://github.com/Sakeet

## SECTION 5 — SKILLS
Grouped cards, each with an icon and skill chips that highlight on hover:
- **AI & Machine Learning:** LLMs, Retrieval-Augmented Generation (RAG), Prompt Engineering, OCR, Whisper, SeamlessM4T, Scikit-learn, Feature Engineering, Model Evaluation, XGBoost, CatBoost, Random Forests
- **Data & Analytics:** SQL, Python, SAS Viya, ETL Pipeline Development, Data Modeling, Exploratory Data Analysis, Data Validation, Data Quality, Data Migration
- **BI & Visualization:** Tableau, Power BI, Alteryx, Excel, Sigma Computing, Dashboard Design, Data Visualization
- **Databases & Tools:** Oracle, SQL Server, SSIS, Snowflake, Salesforce, Linux, SSH, Git, Azure, Google Cloud
- **Frameworks & Libraries:** NumPy, Pandas, Matplotlib, Seaborn, Plotly, SciPy
- **Business Analysis:** Requirements Gathering & Elicitation, Business Rules Documentation, Functional Specifications, Data Mapping, Test Case Documentation, UAT, Defect Tracking, Stakeholder Communication, Agile

## SECTION 6 — ACHIEVEMENTS & CERTIFICATIONS
Two-tab or two-column layout.

**Awards** (trophy-icon cards):
- Top 6 Worldwide — AIS SCLC 2026, Microsoft & James Elliott Cybersecurity Challenge
- 1 of 6 Teams Worldwide — "Rising Stars in Data and AI," SAS Innovate 2026
- Top 6 Nationwide Finalist — HCA Healthcare Analytics Challenge
- 2nd Place — AIS Student Chapter Leadership Conference 2025, Southern Company Challenge
- 3rd Place — Prompt Engineers AI Spring 2026 Hackathon
- Winner — UC Davis Graduate School of Management × Financial Times Biz Quiz
- Tata Crucible Business Quiz — Online Winner
- ETV Champion

**Certifications:**
- CompTIA Security+ (SY0-701) Cert Prep: Security Operations
- Planning a Microsoft Azure Solution
- Accenture North America — Data Analytics and Visualization Job Simulation
- Tata Group — Data Analytics Job Simulation
- Introduction to Python

**Publication:** "SURAKSHA: AI-Driven IT Support and Automation"

## SECTION 7 — LEADERSHIP
Two side-by-side cards:
- **Association for Information Systems — Graduate Chair** (Apr 2025 – May 2026): Liaison between graduate students, AIS leadership, and faculty; organized graduate-focused events; shared internship, research, and conference opportunities.
- **Business Analytics Club — Vice President** (Apr 2025 – May 2026): Led the UNT Sports Analytics Hackathon 2025 (95+ students, 34 teams), coordinating officers, sponsors, faculty advisors, and industry partners; hosted speaker sessions on analytics and BI tools including Alteryx.

## SECTION 8 — CONTACT
- Heading: "Let's build something that actually matters."
- Sub-line: "I'm currently seeking full-time, internship, and co-op opportunities in Data Science, ML Engineering, AI Engineering, and Analytics."
- Left: contact detail rows with icons — Email sakeetkopparapu332@gmail.com (mailto link), Phone +1 (945) 297-5183 (tel link), Location Plano, TX (open to relocate), LinkedIn, GitHub.
- Right: contact form (Name, Email, Subject, Message) with validation and a success toast. Wire it to a simple mailto fallback if no backend.
- Footer: "© 2026 Sakeet Kopparapu — Built with React & Tailwind" plus social icons.

## TECHNICAL REQUIREMENTS
- Smooth scroll behavior and scroll-spy on the navbar.
- Fully responsive at 375px, 768px, and 1440px breakpoints.
- Semantic HTML, alt text on all images, keyboard-accessible navigation, WCAG AA contrast.
- SEO meta tags and Open Graph: title "Sakeet Kopparapu | AI/ML Engineer & Data Scientist", description "AI/ML Engineer and Data Scientist. MS Information Systems @ UNT. Building AI and data systems that work at scale."
- Store all content (experience, projects, skills, awards) in structured data arrays in a single `src/data/portfolio.ts` file so it's easy to edit later.
- Use placeholder images where photos are needed; do not invent logos.

Start by building the full page structure with all sections and real content, then refine styling.

---

## Follow-up prompts to send after the first build

1. `Make the hero more striking — add an animated gradient mesh background and a subtle typewriter effect on the rotating role text.`
2. `Add a light/dark mode toggle in the navbar that persists the choice, and make sure all sections look good in both.`
3. `Turn the Projects section into a modal-based layout: clicking a card opens a detailed case study modal with problem, approach, tech stack, and outcome.`
4. `Add a "Currently" widget under the hero showing what I'm working on right now, with a small pulsing indicator.`
5. `Optimize for mobile — tighten spacing, reduce hero font sizes, and make the timeline single-column with a left-aligned spine.`
6. `Replace the placeholder profile photo with the image I'm uploading and adjust the gradient ring to match its tones.`

## Before you publish — checklist
- Upload your resume PDF and wire the "Download Resume" button to it.
- Upload a professional headshot to replace the placeholder.
- Add real GitHub repo links to each project card (currently they all point to your profile).
- Decide whether to keep both AriesView and Dallas AI as separate June–August 2025 roles, or merge them.
- Consider hiding your phone number if you'd rather not have it publicly scraped — email and LinkedIn are usually enough.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://sakeet-portfolio-showcase.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/3d04abd8-b179-453d-9681-c1d445f3c109).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
