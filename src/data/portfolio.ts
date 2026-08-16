export const profile = {
  name: "Sakeet Kopparapu",
  roles: ["AI/ML Engineer", "Data Scientist", "Business Analyst", "Data Analyst"],
  tagline:
    "I didn't start in AI. I started in data — and that's why my AI actually works.",
  subline:
    "MS in Information Systems & Technologies @ University of North Texas (May 2026) · Plano, TX · Open to relocate",
  availability: "Open to Full-Time & Internship Opportunities",
  email: "sakeetkopparapu332@gmail.com",
  phone: "+1 (945) 297-5183",
  phoneHref: "+19452975183",
  location: "Plano, TX (open to relocate)",
  linkedin: "https://linkedin.com/in/kopparapu-sakeet",
  github: "https://github.com/Sakeet",
  medium: "https://medium.com/@sakeetkopparapu",
  resume: "/resume.pdf",
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
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
  { value: 6, suffix: "", label: "hackathons and national competitions placed in" },
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
    location: "Gurugram, India",
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
  githubUrl: string;
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
    title: "SURAKSHA — AI-Driven IT Support & Task Automation",
    category: "AI & GenAI",
    hook: "Intelligent chatbot for IT incident management and automated ticketing.",
    description:
      "Integrated with SolarWinds APIs for real-time autonomous workflow execution via natural language.",
    tech: ["Python", "LLMs", "SolarWinds API", "NLP", "Automation"],
    impact:
      "2nd prize out of 25+ teams at the AIS 2025 Conference; self-healing mechanisms cut manual troubleshooting effort. Also a published paper.",
    award: true,
    githubUrl: "https://github.com/Sakeet/AI_Driven_IT_Support_System",
    role: "AI Engineer",
    timeline: "Research project + published paper",
    caseStudy: {
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
    impact: "Top 6 nationwide finalist out of 25+ university teams.",
    award: true,
    githubUrl: profile.github,
    role: "Analytics lead",
    timeline: "National case competition",
    caseStudy: {
      problem:
        "HCA needed to understand what actually drives clinician burnout and attrition across a very large, deidentified workforce dataset.",
      approach: [
        "Explored 200,000+ rows of deidentified employee data in Python and Pandas, profiling data quality before drawing conclusions.",
        "Formulated and statistically validated hypotheses about workload, scheduling, and resilience indicators.",
        "Packaged findings as summary statistics and visualizations, then shipped a functional website so non-analysts could use them.",
      ],
      outcome: [
        "Recommendations that optimized resource allocation across staffing decisions.",
        "Top 6 nationwide finalist out of 25+ university teams.",
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
    githubUrl: profile.github,
    role: "Data & backend architecture",
    timeline: "5-week hackathon",
    caseStudy: {
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
    title: "AI Voice Agent — Missed Call Prioritization",
    category: "AI & GenAI",
    hook: "Triages missed calls for service businesses by analyzing caller intent and urgency.",
    description:
      "A centralized Google Sheets reporting layer acts as a lightweight BI dashboard for non-technical users.",
    tech: ["Python", "SQL", "Voice AI", "Google Sheets API"],
    impact: "End-to-end product from data capture to user-facing reporting.",
    githubUrl: profile.github,
    role: "Solo build",
    timeline: "Side project",
    caseStudy: {
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
  {
    title: "Enterprise Workforce Data Pipeline @ Capgemini",
    category: "Data Engineering",
    hook: "SQL stored procedures and SSIS ETL pipelines for employee data integration and migration.",
    description: "Validated source-to-target mappings across multiple enterprise systems.",
    tech: ["SQL Server", "SSIS", "T-SQL", "ETL", "Data Validation"],
    impact: "100K+ records/week at 99%+ accuracy.",
    githubUrl: profile.github,
    role: "Associate Consultant",
    timeline: "14 months",
    caseStudy: {
      problem:
        "Payroll and workforce reporting for 1,000+ employees depended on data spread across multiple enterprise systems with inconsistent definitions.",
      approach: [
        "Built SSIS ETL pipelines and T-SQL stored procedures to integrate and migrate employee data between systems.",
        "Documented and validated source-to-target mappings so every field had a traceable origin.",
        "Added data-quality checks at load time to catch breakage before it reached downstream reports.",
      ],
      outcome: [
        "100K+ records processed weekly at 99%+ accuracy.",
        "Accurate payroll and workforce reports delivered on a reliable weekly cadence.",
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
      "Retrieval-Augmented Generation (RAG)",
      "Prompt Engineering",
      "OCR",
      "Whisper",
      "SeamlessM4T",
      "Scikit-learn",
      "Feature Engineering",
      "Model Evaluation",
      "XGBoost",
      "CatBoost",
      "Random Forests",
    ],
  },
  {
    title: "Data & Analytics",
    icon: "database",
    skills: [
      "SQL",
      "Python",
      "SAS Viya",
      "ETL Pipeline Development",
      "Data Modeling",
      "Exploratory Data Analysis",
      "Data Validation",
      "Data Quality",
      "Data Migration",
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
    ],
  },
  {
    title: "Databases & Tools",
    icon: "server",
    skills: [
      "Oracle",
      "SQL Server",
      "SSIS",
      "Snowflake",
      "Salesforce",
      "Linux",
      "SSH",
      "Git",
      "Azure",
      "Google Cloud",
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: "code",
    skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Plotly", "SciPy"],
  },
  {
    title: "Business Analysis",
    icon: "briefcase",
    skills: [
      "Requirements Gathering & Elicitation",
      "Business Rules Documentation",
      "Functional Specifications",
      "Data Mapping",
      "Test Case Documentation",
      "UAT",
      "Defect Tracking",
      "Stakeholder Communication",
      "Agile",
    ],
  },
];

export const awards = [
  "Top 6 Worldwide — AIS SCLC 2026, Microsoft & James Elliott Cybersecurity Challenge",
  "1 of 6 Teams Worldwide — \u201cRising Stars in Data and AI,\u201d SAS Innovate 2026",
  "Top 6 Nationwide Finalist — HCA Healthcare Analytics Challenge",
  "2nd Place — AIS Student Chapter Leadership Conference 2025, Southern Company Challenge",
  "3rd Place — Prompt Engineers AI Spring 2026 Hackathon",
  "Winner — UC Davis Graduate School of Management × Financial Times Biz Quiz",
  "Tata Crucible Business Quiz — Online Winner",
  "ETV Champion",
];

export const certifications = [
  "CompTIA Security+ (SY0-701) Cert Prep: Security Operations",
  "Planning a Microsoft Azure Solution",
  "Accenture North America — Data Analytics and Visualization Job Simulation",
  "Tata Group — Data Analytics Job Simulation",
  "Introduction to Python",
];

export const publication = "\u201cSURAKSHA: AI-Driven IT Support and Automation\u201d";

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
