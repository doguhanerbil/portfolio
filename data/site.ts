/**
 * Site-wide configuration and personal information
 * Edit this file to customize your portfolio
 */

export const siteConfig = {
  name: "Ahmet Doguhan Erbil",
  title: "Full Stack Developer",

  tagline: "Engineering Scalable Solutions",
  headline: "Full Stack Developer",
  elevatorPitch:
    "I build scalable systems that power real businesses—from warehouse management platforms handling 100K+ monthly transactions to enterprise ERP solutions. Specializing in Java Spring Boot and React/Next.js, I bridge backend architecture with performant frontends.",
  location: "Istanbul, Turkey",
  email: "doguhanerbil@gmail.com",
  phone: "+90 (531) 690 43 61",
  resumeUrl: "/Ahmet%20Doguhan%20Erbil%20CV.pdf",

  // SEO & Metadata
  siteUrl: "https://doguhanerbil.com",
  ogImage: "/og-image.png",
  description: "Full Stack Developer with 3+ years building scalable enterprise systems. Specializing in Java Spring Boot, React/Next.js, and PostgreSQL. Expert in WMS/ERP solutions, CI/CD pipelines, and system architecture.",
};


/**
 * About Section - Technical Focus
 * Best for: Developer audiences, technical recruiters, engineering teams
 * Tone: Technical competence, problem-solving focus, metrics-driven
 */
export const aboutTechnical = `
Full Stack Java Developer with 3+ years of experience building enterprise systems that solve real business problems. I specialize in Java Spring Boot backends, React/Next.js frontends, and PostgreSQL databases—delivering end-to-end solutions from architecture to deployment.

At Aurora Bilisim, I built and scaled a Warehouse Management System that processes 100K+ monthly transactions. I designed the REST API layer, implemented CI/CD pipelines that reduced deployment time from days to minutes, and optimized database queries to support 3x more concurrent users. The system now reliably handles the company's entire logistics operation.

I also developed a Customer & Supplier Management System for a food production company using Next.js, PostgreSQL, and shadcn/ui. The application streamlined their vendor workflows and improved operational efficiency by 30%—replacing manual spreadsheet processes with a robust, validated data system.

My background in IT infrastructure and test automation (Selenium, Postman) gives me strong debugging instincts and a quality-first mindset. I work well in agile teams and take ownership of problems from root cause to production fix.
`.trim();

/**
 * About Section - Recruiter Focus
 * Best for: Non-technical recruiters, HR professionals, general audiences
 * Tone: Impact-driven, results-focused, accessible language
 */
export const aboutRecruiter = `
I'm a Full Stack Developer who turns complex technical challenges into solutions that 
deliver real business impact. With 3+ years of experience across enterprise logistics 
and defense sectors, I've built systems handling 100,000+ monthly transactions while 
consistently improving efficiency, reliability, and user satisfaction.

At Aurora Bilisim, I architect and maintain a Warehouse Management System that reduced 
order processing time by 30% and scaled to support 3x more concurrent users. I also 
developed a Next.js-based customer and supplier management system for a food production 
client, boosting their operational efficiency by 30%.

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
  backend: ["Java", "Spring Boot", "RESTful APIs", "Microservices Architecture", "PostgreSQL", "MySQL"],
  frontend: ["React", "Next.js", "JavaScript (ES6+)", "TypeScript", "HTML/CSS", "Tailwind CSS"],
  tools: ["Docker", "Git", "GitHub", "GitLab", "CI/CD Pipelines", "Selenium", "Postman"],
  practices: ["Agile/Scrum", "Manual Testing", "API Design", "Performance Optimization", "Code Review"],
};

/**
 * Education
 */
export const education = {
  degree: "Bachelor of Science in Computer Engineering",
  university: "Altınbaş University",
  location: "Istanbul, Turkey",
  years: "2018 – 2022",
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
  "Blockchain and Bitcoin Training (Udemy)",
];

/**
 * Languages
 */
export const languages = [
  { name: "Turkish", level: "Native" },
  { name: "English", level: "C1 (Professional Working Proficiency)" },
];
