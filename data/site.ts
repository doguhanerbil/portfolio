/**
 * Site-wide configuration and personal information
 * Edit this file to customize your portfolio
 * Content must stay consistent with the CV and LinkedIn profile
 */

export const siteConfig = {
  name: "Ahmet Doguhan Erbil",
  title: "Software Developer",

  tagline: "Engineering Scalable Solutions",
  headline: "Software Developer",
  elevatorPitch:
    "I build the systems businesses run on—from warehouse management platforms to the ERP and CRM integrations that connect them. Working with Java Spring Boot and React/Next.js, I bridge backend architecture with performant frontends.",
  location: "Istanbul, Turkey",
  email: "doguhanerbil@gmail.com",
  phone: "+90 (531) 690 43 61",
  resumeUrl: "/Ahmet%20Doguhan%20Erbil%20CV.pdf",

  // SEO & Metadata
  siteUrl: "https://doguhanerbil.com",
  ogImage: "/og-image.png",
  description: "Software Developer with 3 years building enterprise systems. Working with Java Spring Boot, React/Next.js, and PostgreSQL across WMS/ERP solutions, CI/CD pipelines, and system integration.",
};


/**
 * About Section - Technical Focus
 * Best for: Developer audiences, technical recruiters, engineering teams
 * Tone: Technical competence, problem-solving focus, ownership and scope
 */
export const aboutTechnical = `
Software Developer with 3 years of experience building enterprise systems that solve real business problems. I work with Java Spring Boot backends, React/Next.js frontends, and PostgreSQL databases—delivering end-to-end solutions from architecture to deployment.

At Hisar Intercontinental Hospital, in Aurora Bilişim—its software development unit—I developed and supported a warehouse management platform for enterprise clients, covering the inventory, order and shipment modules. I owned the REST API endpoints and service layers, handled data access with Spring Data JPA, and delivered ERP and CRM integrations with client systems. I set up and ran the CI/CD pipelines, and was responsible for taking developments through test and production.

I also contributed to an R&D project for a hospital medication-dispensing and stock-tracking system, building the integration layer that fed drug-consumption data into the hospital information system.

My background in IT infrastructure and test automation (Selenium, Postman) gives me strong debugging instincts and a quality-first mindset. I work well in agile teams and take ownership of problems from root cause to production fix.
`.trim();

/**
 * About Section - Recruiter Focus
 * Best for: Non-technical recruiters, HR professionals, general audiences
 * Tone: Ownership and scope, accessible language
 */
export const aboutRecruiter = `
I'm a Software Developer who turns complex technical challenges into solutions that 
deliver real business impact. With 3 years of experience in enterprise software, I've 
built and supported systems that companies rely on for their day-to-day operations.

At Hisar Intercontinental Hospital, in Aurora Bilişim—its software development unit—I 
developed and maintained a warehouse management platform for enterprise clients, along 
with the ERP and CRM integrations that connect it to their systems, and I was responsible 
for taking work through test and production. Earlier in my career I worked in test 
automation and IT infrastructure, and I completed my compulsory military service as a 
reserve officer operating a wide area network.

Known for problem-solving, adaptability, and clear communication—I deliver business-focused 
solutions while collaborating effectively across cross-functional teams in agile settings.
`.trim();

// Default about text - choose which version to display
export const about = aboutTechnical;

/**
 * Skills organized by category
 * Matches CV Technical Skills section
 */
export const skills = {
  backend: ["Java", "Spring Boot", "Spring Data JPA", "RESTful APIs", "PostgreSQL", "MySQL"],
  frontend: ["React", "Next.js", "JavaScript (ES6+)", "TypeScript", "HTML/CSS", "Tailwind CSS"],
  tools: ["Docker", "Git", "GitHub", "GitLab", "CI/CD Pipelines", "Selenium", "Postman"],
  practices: ["Agile/Scrum", "Manual Testing", "API Design", "Performance Optimization", "Code Review"],
  familiar: ["Microservices", "Spring Security", "Swagger/OpenAPI", "Redis", "Kafka", "AWS", "Kubernetes"],
};

/**
 * Education
 */
export const education = {
  degree: "Bachelor of Science in Computer Engineering",
  university: "Altınbaş University",
  location: "Istanbul, Turkey",
  years: "2016 – 2021",
  highlights: [
    "Focused on software development, database systems, and network security",
    "Senior projects in Java-based web applications with agile practices",
    "Active in coding competitions and university tech communities",
  ],
};

/**
 * Certifications
 */
export const certifications = [
  "Modern JavaScript Courses ES6+ (Udemy)",
  "BTK Academy Network Fundamentals Training",
];

/**
 * Languages
 */
export const languages = [
  { name: "Turkish", level: "Native" },
  { name: "English", level: "C1 (Professional Working Proficiency)" },
];
