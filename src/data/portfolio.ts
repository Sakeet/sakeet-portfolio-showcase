export const RESUME_URL = "/Kopparapu_Sakeet_Resume.pdf";
export const FORMSPREE_ENDPOINT = "https://formspree.io/f/xqpzyzjg";

export const profile = {
  name: "Sakeet Kopparapu",
  roles: ["AI/ML Engineer", "Data Scientist", "Business Analyst", "Data Analyst"],
  tagline:
    "I didn't start in AI. I started in data — and that's why my AI actually works.",
  subline:
    "MS in Information Systems & Technologies @ University of North Texas (May 2026) · Plano, TX · Open to relocate",
  availability: "Open to Full-Time, Internship & Co-op Opportunities",
  email: "sakeetkopparapu332@gmail.com",
  location: "Plano, TX (open to relocate)",
  linkedin: "https://www.linkedin.com/in/kopparapu-sakeet/",
  github: "https://github.com/Sakeet",
  medium: "https://medium.com/@sakeetkopparapu",
  resume: RESUME_URL,
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "research", label: "Research" },
  { id: "skills", label: "Skills" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export const aboutNarrative = [
  "My first job was at Capgemini. For 14 months, I built data pipelines and checked datasets so that 1,000 employees got the right payroll every week. It taught me something I still believe: the smartest AI in the world is useless if the data going into it is wrong.",
  "So when I moved into machine learning, I did not treat data as an afterthought. I plan for it from day one.",
  "That approach has taken me to some interesting places. I led a team of 10 people building an AI platform for real estate. I helped build FirstVox, a translation system for 911 dispatchers that works in real time and never sends a call over the internet - so a language barrier never costs someone help. I built a model on 130 hospitals worth of data that showed how to free up 8 to 12 beds a day.",
  "I do not only build models. I design databases, write prompts, build dashboards in Tableau and Power BI, and lead teams through problems that start out messy and undefined.",
  "I recently finished my MS in Information Systems at the University of North Texas, where I also taught 200+ students as a teaching assistant. I am now looking for work in Analyst, Data Scientist, Machine Learning Engineer, Analytics Engineer, Business Intelligence Engineer, AI Consultant (Entry Level), AI Solutions Engineering,  AI Product Management, and AI engineering — full-time, internship, or co-op.",
  "If you are building something that has to work at scale and actually matter, I would like to hear about it.",
];

export const quickFacts = [
  { label: "Location", value: "Plano, TX (open to relocate)", icon: "map-pin" },
  {
    label: "Education",
    value: "MS Information Systems & Technologies, University of North Texas — GPA 3.6/4",
    icon: "graduation-cap",
  },
  { label: "Undergrad", value: "BTech Computer Science, Amrita Vishwa Vidyapeetham", icon: "book-open" },
  { label: "Focus", value: "AI/ML Engineering, Data Science, Analytics", icon: "target" },
  { label: "Languages", value: "Telugu, Hindi, English, Tamil", icon: "languages" },
];

export const stats = [
  { value: 100, suffix: "K+", label: "records processed weekly" },
  { value: 200, suffix: "+", label: "students taught as TA" },
  { value: 10, suffix: "", label: "person team led" },
];

export const researchHighlights = [
  {
    label: "Published",
    subLabel: "Information Systems Student Research Journal, 2025",
  },
  {
    label: "1 of 6 Worldwide",
    subLabel: "\"Rising Stars in Data and AI,\" SAS Innovate 2026",
  },
  {
    label: "Top 6 Internationally",
    subLabel: "HCA Healthcare Analytics Challenge, AIS SCLC 2025",
  },
  {
    label: "Conference Presenter",
    subLabel: "SWDSI 2026",
  },
];


export type Experience = {
  company: string;
  role: string;
  dates: string;
  location?: string;
  bullets: string[];
};

export const experiences: Experience[] = [
  {
    company: "University of North Texas",
    role: "Teaching / Instructional Assistant",
    dates: "May 2025 – May 2026",
    location: "Denton, TX",
    bullets: [
      "Supported instruction for 200+ students across data, analytics, and information systems courses; led weekly labs and office hours resolving 300+ SQL, Python, and analytics queries, cutting problem-resolution turnaround by 40%.",
      "Created end-user documentation, instructional lab videos, and Respondus 4.0 assessment content to streamline course delivery.",
      "Graded 200+ assignments and exams with a focus on analytical rigor and reproducibility, maintaining 99% on-time feedback.",
      "Collaborated weekly with faculty to redesign assignments around real-world business use cases, improving applied assessment performance by 20%.",
    ],
  },
  {
    company: "AriesView",
    role: "AI Research & Engineering",
    dates: "June 2025 – August 2025",
    location: "Remote",
    bullets: [
      "Led a core platform feature end-to-end, from requirements elicitation to rollout, managing a 10-member cross-functional team across backend, frontend, and database layers.",
      "Translated stakeholder requirements into scalable system architecture, business rules, and data models for a real estate data product.",
      "Built production data pipelines using OCR, LLMs, and Retrieval-Augmented Generation (RAG) to automate structured extraction from complex documents.",
      "Built evaluation and testing frameworks to verify outputs against defined requirements.",
    ],
  },
  {
    company: "Dallas AI",
    role: "Summer Research Program",
    dates: "June 2025 – August 2025",
    location: "Dallas, TX",
    bullets: [
      "Built FirstVox, a secure on-premise real-time translation system that eliminates language barriers for 911 dispatchers.",
      "Architected an end-to-end audio pipeline using OpenAI Whisper for transcription and Meta SeamlessM4T for translation and speech synthesis, routed through a virtual audio device with zero network dependency for full privacy compliance.",
      "Delivered a production-ready system in 8 weeks with a 5-person cross-functional team under faculty mentorship.",
    ],
  },
  {
    company: "Capgemini",
    role: "Associate I, Software Engineer",
    dates: "June 2023 – August 2024",
    location: "India",
    bullets: [
      "Built SQL stored procedures and SSIS ETL pipelines processing 100K+ records per week, improving ingestion efficiency by 30% and achieving 100% accuracy on target-database loads.",
      "Served as technical point of contact for attendance-system data quality, defining and executing test cases against documented business rules across employee, manager, and supervisor roles.",
      "Performed data cleaning, validation, and reconciliation across multiple source systems, raising data quality to 99%+ for downstream analytics.",
      "Partnered with business and technical stakeholders to translate operational requirements into scalable workflows, cutting report turnaround time by 25–30%.",
    ],
  },
  {
    company: "Senselearner Technologies",
    role: "Cyber Security Intern",
    dates: "Sept 2023 – Oct 2023",
    bullets: [
      "Conducted full reconnaissance and vulnerability assessment on a live domain using Nmap, Nikto, Gobuster, Burp Suite, and Subfinder, producing a remediation-focused security report.",
      "Applied pentesting concepts across the attack lifecycle: network scanning, OS fingerprinting, VAPT, and OWASP Top 10 web vulnerabilities.",
    ],
  },
  {
    company: "Oasis Infobyte",
    role: "Machine Learning Intern",
    dates: "Nov 2022 – Dec 2022",
    bullets: [
      "Processed real-world datasets of 10K–50K+ records with Python, Pandas, and NumPy, improving data usability by 30–40% through preprocessing and feature engineering.",
      "Built and tuned classification and regression models, achieving 10–20% performance gains through feature optimization and hyperparameter tuning.",
    ],
  },
];

export const earlierExperience = [
  {
    company: "Pinnacle Full-Stack Interns",
    role: "Data Analyst Intern",
    dates: "Jul – Aug 2021",
  },
  {
    company: "Internshala",
    role: "Student Partner",
    dates: "May – Aug 2020",
  },
];

export const projectCategories = [
  "All",
  "AI & GenAI",
  "Machine Learning",
  "Analytics & BI",
  "Data Engineering",
] as const;

export type CaseStudy = {
  problem: string;
  approach: string[];
  /** "What I Owned" — leave empty to hide the section in the case study modal. */
  owned: string[];
  outcome: string[];
};

export type Project = {
  title: string;
  category: (typeof projectCategories)[number];
  hook: string;
  description: string;
  tech: string[];
  impact: string;
  award?: boolean;
  clientCapstone?: boolean;
  publishedResearch?: boolean;
  hideGithub?: boolean;
  githubUrl: string;
  paperUrl?: string;
  role?: string;
  timeline?: string;
  caseStudy: CaseStudy;
};

export const projects: Project[] = [
  {
    title: "FirstVox — Real-Time 911 Translation System",
    category: "AI & GenAI",
    hook: "Live, bidirectional translation for emergency dispatchers with zero network dependency.",
    description:
      "Built with OpenAI Whisper and Meta SeamlessM4T routed through a virtual audio device so no call data leaves the premises.",
    tech: ["Python", "Whisper", "SeamlessM4T", "Audio Pipelines", "On-Prem Deployment"],
    impact: "Production-ready in 8 weeks with a 5-person team.",
    githubUrl: profile.github,
    role: "AI Engineer, 5-person team",
    timeline: "8 weeks",
    caseStudy: {
      owned: [],
      problem:
        "911 dispatchers lose critical minutes when a caller does not speak English, and cloud translation services are off the table because emergency call audio cannot leave the premises.",
      approach: [
        "Routed live call audio through a virtual audio device so both caller and dispatcher streams could be captured without changing existing telephony hardware.",
        "Ran OpenAI Whisper for streaming transcription and Meta SeamlessM4T for bidirectional speech translation, fully on-premise.",
        "Tuned chunking and buffering so translated speech comes back fast enough to hold a natural back-and-forth conversation.",
      ],
      outcome: [
        "Production-ready system delivered in 8 weeks with a 5-person team.",
        "Zero network dependency — no call data ever leaves the dispatch center.",
        "Bidirectional translation lets dispatchers keep control of the call instead of waiting on a human interpreter.",
      ],
    },
  },
  {
    title: "Frontline Forecast — Hospital Length-of-Stay Prediction",
    category: "Machine Learning",
    hook: "Predictive model on a 101,766-row healthcare dataset spanning 130 hospitals.",
    description:
      "Built with SQL and SAS Viya. What-if simulations showed earlier discharge for 10% of patients could free 8–12 beds per day.",
    tech: ["SAS Viya", "SQL", "Python", "Predictive Modeling"],
    impact:
      "1 of 6 teams worldwide selected for the \u201cRising Stars in Data and AI\u201d showcase at SAS Innovate 2026.",
    award: true,
    githubUrl: "https://github.com/Sakeet/SAS_Curiosity_Cup",
    role: "Data Scientist",
    timeline: "Competition project",
    caseStudy: {
      owned: [],
      problem:
        "Hospitals cannot plan capacity without knowing how long patients will stay, so beds sit blocked while admissions queue up.",
      approach: [
        "Cleaned and modeled a 101,766-row dataset covering 130 hospitals in SQL before feature engineering.",
        "Built and compared predictive models in SAS Viya, evaluating on clinically meaningful error rather than raw accuracy.",
        "Ran what-if simulations on discharge timing to translate model output into bed-capacity language administrators use.",
      ],
      outcome: [
        "Simulations showed that discharging 10% of patients one day earlier frees 8–12 beds per day.",
        "Selected as 1 of 6 teams worldwide for the “Rising Stars in Data and AI” showcase at SAS Innovate 2026.",
      ],
    },
  },
  {
    title: "Snowflake Platform Evaluation — Wisdom Index Advisors (Capstone)",
    category: "Data Engineering",
    hook: "A cloud data platform evaluation delivered to a live client, presented to their leadership team in person.",
    description:
      "Evaluated Snowflake as a cloud data platform for Wisdom Index Advisors, a wealth management firm in Prosper, TX, as the capstone project for my MS at UNT's G. Brint Ryan College of Business. Delivered a full recommendation covering platform capabilities, comparable deployments in financial services, a proposed solution architecture spanning data ingestion, storage, processing, and real-time dashboards for both advisors and clients, and a staffing model for implementation. Built tiered cost estimates across three deployment scenarios — Pilot at $381/month, Small Scale at $3,348/month, and Enterprise at $12,683/month — and presented the findings to the client's leadership team in person alongside faculty.",
    tech: [
      "Snowflake",
      "Cloud Data Architecture",
      "Solution Design",
      "Cost Modeling",
      "Vendor Evaluation",
      "Data Ingestion & Storage",
      "Real-Time Dashboards",
      "Stakeholder Presentation",
    ],
    impact: "Client leadership attended the presentation in person and is considering Snowflake as a platform for their business.",
    clientCapstone: true,
    hideGithub: true,
    githubUrl: profile.github,
    role: "Data & Analytics Consultant",
    timeline: "Jan 2026 – May 2026",
    caseStudy: {
      owned: [],
      problem:
        "Wisdom Index Advisors needed a modern cloud data platform that could unify client and advisor data, support real-time dashboards, and scale with the firm's growth without overengineering the initial deployment.",
      approach: [
        "Evaluated Snowflake against the firm's requirements, comparable financial-services deployments, and the college's capstone evaluation rubric.",
        "Designed a target architecture covering ingestion, storage, processing, and real-time BI dashboards for advisors and clients.",
        "Built tiered cost estimates for Pilot, Small Scale, and Enterprise deployment scenarios to give leadership a clear decision framework.",
        "Presented findings, risks, and recommendations directly to the client's leadership team in person alongside faculty advisors.",
      ],
      outcome: [
        "Delivered a complete vendor evaluation and solution recommendation to the client.",
        "Provided three budget-scaled deployment options with monthly cost estimates.",
        "Client leadership attended the presentation and is considering Snowflake as a platform for their business.",
      ],
    },
  },
  {
    title: "SURAKSHA — AI-Driven IT Support & Task Automation",
    category: "AI & GenAI",
    hook: "Intelligent chatbot for IT incident management and automated ticketing.",
    description:
      "Integrated with SolarWinds APIs for real-time autonomous workflow execution via natural language.",
    tech: [
      "Model Context Protocol (MCP)",
      "LLMs (Claude 3.7 Sonnet)",
      "Federated Learning",
      "RBAC",
      "JWT Authentication",
      "Anomaly Detection",
      "SolarWinds Service Desk API",
      "Python",
      "Prompt Engineering",
    ],
    impact:
      "2nd prize out of 25+ teams at the AIS 2025 Conference; self-healing mechanisms cut manual troubleshooting effort. Also a published paper.",
    award: true,
    publishedResearch: true,
    githubUrl: "https://github.com/Sakeet/AI_Driven_IT_Support_System",
    paperUrl:
      "https://www.issrj.org/wp-content/uploads/2025/12/SURAKSHA-AI-Driven-IT-Support-and-Automation.pdf",
    role: "AI Engineer",
    timeline: "Research project + published paper",
    caseStudy: {
      owned: [],
      problem:
        "IT teams burn hours on repetitive incidents — triaging tickets, checking monitors, and running the same remediation steps by hand.",
      approach: [
        "Built an LLM-driven chatbot that interprets natural-language incident reports and maps them to concrete IT workflows.",
        "Integrated SolarWinds APIs so the agent can read live monitoring state and execute remediation autonomously.",
        "Added self-healing routines for known failure classes, with ticket creation and updates handled end-to-end.",
      ],
      outcome: [
        "2nd prize out of 25+ teams at the AIS 2025 Conference.",
        "Self-healing mechanisms measurably cut manual troubleshooting effort.",
        "Work published as “SURAKSHA: AI-Driven IT Support and Automation.”",
      ],
    },
  },
  {
    title: "HCA Healthcare Resilience Platform",
    category: "Analytics & BI",
    hook: "EDA and hypothesis validation on 200,000+ rows of deidentified employee data.",
    description:
      "Summary statistics and visualizations that optimized resource allocation, plus a functional website to make the solution accessible to end users.",
    tech: ["Python", "Pandas", "Data Visualization", "Statistical Analysis"],
    impact: "Top 6 internationally out of 25+ university teams.",
    githubUrl: profile.github,
    role: "Analytics lead",
    timeline: "International case competition",
    caseStudy: {
      owned: [],
      problem:
        "HCA needed to understand what actually drives clinician burnout and attrition across a very large, deidentified workforce dataset.",
      approach: [
        "Explored 200,000+ rows of deidentified employee data in Python and Pandas, profiling data quality before drawing conclusions.",
        "Formulated and statistically validated hypotheses about workload, scheduling, and resilience indicators.",
        "Packaged findings as summary statistics and visualizations, then shipped a functional website so non-analysts could use them.",
      ],
      outcome: [
        "Recommendations that optimized resource allocation across staffing decisions.",
        "Top 6 internationally out of 25+ university teams.",
      ],
    },
  },
  {
    title: "PEAR — AI Founder–Investor Matching Platform",
    category: "AI & GenAI",
    hook: "AI-powered matching platform built in a 5-week hackathon.",
    description:
      "Owned database architecture and data modeling, and designed a matching pipeline that improved recommendation relevance through structured workflows and iterative testing.",
    tech: ["Python", "LLMs", "Database Design", "Recommendation Systems"],
    impact: "3rd place out of 18 teams.",
    award: true,
    githubUrl: "https://github.com/Team5-AI-HackAThon/HackAThon-Crucible-BE-Python-App",
    role: "Data & backend architecture",
    timeline: "5-week hackathon",
    caseStudy: {
      owned: [],
      problem:
        "Early-stage founders and investors waste cycles on mismatched intros because there is no structured signal connecting thesis, stage, and sector.",
      approach: [
        "Designed the database schema and data model for founder, investor, and deal-thesis entities.",
        "Built an LLM-assisted matching pipeline that scores fit on structured attributes plus narrative signals.",
        "Iterated on ranking through structured evaluation workflows and repeated relevance testing.",
      ],
      outcome: [
        "Noticeably higher recommendation relevance versus the naive attribute-only baseline.",
        "3rd place out of 18 teams.",
      ],
    },
  },
  {
    title: "Echoes of the Unheard — Agentic Voice AI for Missed Call Prioritization",
    category: "AI & GenAI",
    hook: "Triages missed calls for service businesses by analyzing caller intent and urgency.",
    description:
      "An agentic AI framework that helps small hospitality businesses recover revenue lost to missed calls during peak hours. Speech-to-text converts calls into structured signals, AI extraction scores each on sentiment, urgency, and expected business value, and a multi-criteria decision model ranks callbacks so limited staff respond to the highest-value customers first. Results surface through a dynamic dashboard.",
    tech: [
      "Agentic AI",
      "Speech-to-Text",
      "Sentiment Analysis",
      "Multi-Criteria Decision Analysis (MCDA)",
      "LLMs",
      "Python",
      "SQL",
      "Dashboard Design",
    ],
    impact: "Presented at the Southwest Decision Sciences Institute (SWDSI) 2026 Conference.",
    publishedResearch: true,
    githubUrl: "",
    role: "Solo build",
    timeline: "Aug 2025 – May 2026",
    caseStudy: {
      owned: [],
      problem:
        "Small service businesses miss calls all day and have no way to tell which missed callers were ready to buy and which can wait.",
      approach: [
        "Captured missed-call events and transcripts, then classified caller intent and urgency with a voice-AI pipeline.",
        "Stored structured call outcomes in SQL so triage decisions are auditable, not one-off.",
        "Pushed results into a centralized Google Sheets layer that acts as a lightweight BI dashboard for non-technical owners.",
      ],
      outcome: [
        "Owners get a ranked callback list instead of an undifferentiated missed-call log.",
        "End-to-end product from data capture through user-facing reporting.",
      ],
    },
  },
];

export const skillGroups = [
  {
    title: "AI & Machine Learning",
    icon: "brain",
    skills: [
      "LLMs",
      "Generative AI",
      "Agentic AI",
      "Retrieval-Augmented Generation (RAG)",
      "Prompt Engineering",
      "LLM Fine-Tuning",
      "LangChain",
      "Model Context Protocol (MCP)",
      "OCR & Document Intelligence",
      "AI Evaluation",
      "Conversational AI",
      "Custom GPTs",
    ],
  },
  {
    title: "Statistics & Modeling",
    icon: "line-chart",
    skills: [
      "Hypothesis Testing",
      "A/B Testing",
      "Regression Analysis",
      "Classification",
      "Time Series Forecasting",
      "Feature Engineering",
      "Model Evaluation",
      "Predictive Modeling",
      "Multi-Criteria Decision Analysis (MCDA)",
      "Sentiment Analysis",
      "Decision Modeling",
    ],
  },
  {
    title: "Data & Analytics",
    icon: "database",
    skills: [
      "SQL",
      "Python",
      "SAS Viya",
      "Data Modeling",
      "Exploratory Data Analysis",
      "Data Cleaning",
      "Data Preprocessing",
      "Data Validation",
      "Data Quality",
      "Data Migration",
    ],
  },
  {
    title: "Cloud & MLOps",
    icon: "cloud",
    skills: [
      "Azure OpenAI",
      "Google Cloud",
      "GitLab",
      "REST APIs",
      "Git",
      "GitHub",
      "GitHub Actions",
    ],
  },
  {
    title: "BI & Visualization",
    icon: "chart",
    skills: [
      "Tableau",
      "Power BI",
      "Alteryx",
      "Excel",
      "Sigma Computing",
      "Dashboard Design",
      "Data Visualization",
      "Reporting",
    ],
  },
  {
    title: "Databases & Tools",
    icon: "server",
    skills: [
      "Oracle",
      "SQL Server",
      "PostgreSQL",
      "MySQL",
      "SSIS",
      "Snowflake",
      "Salesforce",
      "Linux",
      "Shell Scripting",
      "Jira",
      "VS Code",
      "Confluence",
    ],
  },
  {
    title: "Business Analysis",
    icon: "briefcase",
    skills: [
      "Requirements Gathering & Elicitation",
      "User Stories & Acceptance Criteria",
      "Business Rules Documentation",
      "Functional Specifications",
      "Data Mapping",
      "User Journey Mapping",
      "Process Mapping",
      "Test Case Documentation",
      "UAT",
      "Defect Tracking",
      "Stakeholder Communication",
      "Agile",
      "Vendor Evaluation",
      "Solution Architecture",
      "Cost & TCO Analysis",
      "Client Presentations",
    ],
  },
];

export const awards = [
  "2nd Place — AIS Student Chapter Leadership Conference 2025, Southern Company Challenge",
  "3rd Place — Prompt Engineers AI Spring 2026 Hackathon",
  "Winner — UC Davis Graduate School of Management × Financial Times Biz Quiz 2024",
  "Top 6 Worldwide — AIS SCLC 2026, Microsoft & James Elliott Cybersecurity Challenge",
  "1 of 6 Teams Worldwide — \u201cRising Stars in Data and AI,\u201d SAS Innovate 2026",
  "Top 6 Internationally — HCA Healthcare Analytics Challenge, AIS SCLC 2025",
  
];

export type Credential = {
  name: string;
  type: "program" | "simulation";
  verifyUrl?: string;
  verified?: boolean;
};

export const credentials: Credential[] = [
  {
    name: "SQL (Intermediate) — HackerRank Verified",
    type: "program",
    verified: true,
    verifyUrl: "https://www.hackerrank.com/certificates/5c31f745d315",
  },
  {
    name: "CodePath.org — Foundations of AI Engineering Certificate",
    type: "program",
    verifyUrl: "https://certificates.codepath.org/976164b7-1206-4152-b40f-57b78c117849.pdf",
  },
  {
    name: "McKinsey.org Forward Program",
    type: "program",
    verifyUrl:
      "https://www.credly.com/badges/b0e69f34-3776-4548-a78a-8031886b3762/linked_in_profile",
  },
  {
    name: "2025 SAS Hackathon Participant — issued by SAS",
    type: "program",
    verifyUrl:
      "https://www.credly.com/badges/14f3b571-0b0e-42d2-b86c-7b376d921def/linked_in_profile",
  },
  {
    name: "Accenture North America — Data Analytics & Visualization",
    type: "simulation",
    verifyUrl:
      "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/T6kdcdKSTfg2aotxT/hzmoNKtzvAzXsEqx8_T6kdcdKSTfg2aotxT_2Rxo6LjZS6bD3BJWe_1749696820935_completion_certificate.pdf",
  },
  {
    name: "Tata Group — Data Analytics",
    type: "simulation",
    verifyUrl:
      "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_2Rxo6LjZS6bD3BJWe_1747258418632_completion_certificate.pdf",
  },
  {
    name: "Deloitte Australia — Data Analytics",
    type: "simulation",
    verifyUrl:
      "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_2Rxo6LjZS6bD3BJWe_1747024847657_completion_certificate.pdf",
  },
  {
    name: "CBRE — Project Management",
    type: "simulation",
    verifyUrl:
      "https://www.theforage.com/completion-certificates/PDmHHPmLyCgdQWzdt/STkypM8iMfn4Gk9BF_PDmHHPmLyCgdQWzdt_2Rxo6LjZS6bD3BJWe_1783395369441_completion_certificate.pdf",
  },
];

export const publication = {
  title: "SURAKSHA: AI-Driven IT Support and Automation",
  venue: "Information Systems Student Research Journal, Vol. 2, Innovation Snapshot 4 (2025)",
  coAuthors: "A. Chilappagari, N. Pendekanti, T. Mandaloju, S. Kopparapu",
  summary:
    "An IT support framework using the Model Context Protocol to connect LLMs to service-desk tools, with self-healing infrastructure, role-based access control, and a federated learning layer for privacy.",
  paperUrl:
    "https://www.issrj.org/wp-content/uploads/2025/12/SURAKSHA-AI-Driven-IT-Support-and-Automation.pdf",
};

export type ResearchEntry = {
  type: "Publication" | "Conference Presentation" | "Showcase Selection";
  title: string;
  venue: string;
  coAuthors?: string;
  summary: string;
  paperUrl?: string;
};

export const researchEntries: ResearchEntry[] = [
  {
    type: "Publication",
    title: "SURAKSHA: AI-Driven IT Support and Automation",
    venue: "Information Systems Student Research Journal, Vol. 2, Innovation Snapshot 4 (2025)",
    coAuthors: "A. Chilappagari, N. Pendekanti, T. Mandaloju, S. Kopparapu",
    summary:
      "An IT support framework using the Model Context Protocol to connect LLMs to service-desk tools, with self-healing infrastructure, role-based access control, and a federated learning layer for privacy.",
    paperUrl:
      "https://www.issrj.org/wp-content/uploads/2025/12/SURAKSHA-AI-Driven-IT-Support-and-Automation.pdf",
  },
  {
    type: "Conference Presentation",
    title: "Echoes of the Unheard: An Agentic Voice AI Framework for Small-Business Missed Call Prioritization",
    venue: "Southwest Decision Sciences Institute (SWDSI) 2026 Conference, Federation of Business Disciplines",
    coAuthors: "C. Pulletikurthi, N. D'sa, U. Kaviraj, R. Yenurkar, S. Kopparapu",
    summary:
      "An agentic AI framework that converts missed calls into ranked follow-up actions for small hospitality businesses. Speech-to-text and AI signal extraction score each call on sentiment, urgency, and expected business value, and a multi-criteria decision model (MCDA) ranks callbacks so limited staff act on the highest-value interactions first.",
  },
  {
    type: "Showcase Selection",
    title: "Frontline Forecast: Hospital Length-of-Stay Prediction",
    venue: "\"Rising Stars in Data and AI\" showcase, SAS Innovate 2026",
    summary:
      "Selected as 1 of 6 student teams worldwide. Presented predictive modeling and operational impact to an international professional audience.",
  },
];

export const leadership = [
  {
    org: "Association for Information Systems",
    role: "Graduate Chair",
    dates: "Apr 2025 – May 2026",
    description:
      "Liaison between graduate students, AIS leadership, and faculty; organized graduate-focused events; shared internship, research, and conference opportunities.",
  },
  {
    org: "Business Analytics Club",
    role: "Vice President",
    dates: "Apr 2025 – May 2026",
    description:
      "Led the UNT Sports Analytics Hackathon 2025 (95+ students, 34 teams), coordinating officers, sponsors, faculty advisors, and industry partners; hosted speaker sessions on analytics and BI tools including Alteryx.",
  },
];
