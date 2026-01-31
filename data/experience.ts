/**
 * Work experience data with impact metrics
 * Ordered from most recent to oldest
 * Matches CV and LinkedIn work history
 */

export type Experience = {
    id: string;
    title: string;
    company: string;
    companyUrl?: string;
    companyDescription?: string;
    location: string;
    startDate: string;
    endDate: string | "Present";
    description: string;
    achievements: Achievement[];
    technologies: string[];
};

export type Achievement = {
    metric: string;
    impact: string;
    description: string;
};

export const experiences: Experience[] = [
    {
        id: "aurora-2024",
        title: "Full Stack Developer",
        company: "Aurora Bilisim",
        companyUrl: "https://aurorabilisim.com",
        companyDescription: "Provider of warehouse and logistics software, developing modern ERP platforms for enterprise clients",
        location: "Istanbul, Turkey",
        startDate: "May 2024",
        endDate: "Present",
        description:
            "Architecting and maintaining a warehouse management platform using Java Spring Boot, React, and PostgreSQL. Leading CI/CD implementation and system scaling initiatives for enterprise-grade logistics operations. Additionally, developed a customer and supplier management system for a food production client using Next.js and PostgreSQL with direct database connectivity, Zod-based form validation, and a shadcn/ui interface.",
        achievements: [
            {
                metric: "100K+",
                impact: "monthly transactions",
                description: "Built WMS platform handling over 100,000 transactions per month",
            },
            {
                metric: "30%",
                impact: "faster processing",
                description: "Reduced order-processing time through optimized workflows",
            },
            {
                metric: "15 min",
                impact: "deployment time",
                description: "Transformed deployment cycles from days to under 15 minutes via CI/CD",
            },
            {
                metric: "40%",
                impact: "fewer rollbacks",
                description: "Reduced rollback incidents through automated quality gates",
            },
            {
                metric: "3x",
                impact: "user capacity",
                description: "Scaled system for 3x concurrent users via API and database optimization",
            },
            {
                metric: "25%",
                impact: "faster page loads",
                description: "Improved page-load speeds through frontend optimizations",
            },
            {
                metric: "50%",
                impact: "faster incidents",
                description: "Accelerated incident response with observability dashboards",
            },
            {
                metric: "20%",
                impact: "higher satisfaction",
                description: "Boosted customer satisfaction through collaborative feature delivery",
            },
            {
                metric: "30%",
                impact: "efficiency gain",
                description:
                    "Improved operational efficiency by building a Next.js-based customer and supplier management system with direct DB access and validated form workflows",
            },

        ],
        technologies: [
            "Java",
            "Spring Boot",
            "React",
            "PostgreSQL",
            "Docker",
            "CI/CD",
            "REST APIs",
        ],
    },

    {
        id: "ndu-2023",
        title: "Network & IT Specialist",
        company: "National Defense University",
        companyUrl: "https://www.msu.edu.tr/eng/",
        companyDescription: "Turkey's leading military higher education institution with strict security protocols",
        location: "Istanbul, Turkey",
        startDate: "Jun 2023",
        endDate: "May 2024",
        description:
            "Managed IT infrastructure across the university, ensuring system availability and security compliance. Provided rapid-response technical support during field operations while maintaining military-grade security standards.",
        achievements: [
            {
                metric: "300+",
                impact: "endpoints managed",
                description: "Maintained computers, printers, and routers across the institution",
            },
            {
                metric: "99.8%",
                impact: "uptime achieved",
                description: "Ensured near-perfect system availability for critical operations",
            },
            {
                metric: "25%",
                impact: "faster resolution",
                description: "Reduced incident resolution time through improved processes",
            },
            {
                metric: "Zero",
                impact: "data breaches",
                description: "Maintained secure communications during field operations",
            },
            {
                metric: "40%",
                impact: "faster onboarding",
                description: "Reduced new team member onboarding via standardized documentation",
            },
        ],
        technologies: [
            "Network Administration",
            "Security Protocols",
            "Hardware Diagnostics",
            "Documentation",
            "Technical Support",
        ],
    },
    {
        id: "aurora-2022",
        title: "Full Stack Developer",
        company: "Aurora Bilisim",
        companyUrl: "https://aurorabilisim.com",
        companyDescription: "Provider of warehouse and logistics software, developing modern ERP platforms for enterprise clients",
        location: "Istanbul, Turkey",
        startDate: "Aug 2022",
        endDate: "May 2023",
        description:
            "Engineered scalable backend services in Java while leading end-to-end manual and automated testing initiatives with Python (Selenium) and Postman. Introduced automated CI/CD test pipelines and collaborated closely with product teams to align testing goals with business objectives.",
        achievements: [
            {
                metric: "35%",
                impact: "faster APIs",
                description: "Reduced API response times through query and cache optimization",
            },
            {
                metric: "85%",
                impact: "test coverage",
                description: "Increased regression test coverage with comprehensive test suites",
            },
            {
                metric: "40%",
                impact: "fewer defects",
                description: "Lowered production defects through improved testing processes",
            },
            {
                metric: "Days → Hours",
                impact: "validation time",
                description: "Cut release validation time with automated CI/CD test pipelines",
            },
            {
                metric: "20%",
                impact: "faster delivery",
                description: "Accelerated feature delivery by aligning testing with business objectives",
            },
        ],
        technologies: [
            "Java",
            "Spring Boot",
            "Python",
            "Selenium",
            "Postman",
            "CI/CD",
            "Manual Testing",
        ],
    },
];

// Internship experiences (optional display)
export const internships = [
    {
        id: "basarisoft-2020",
        title: "Computer Intern",
        company: "Basari Soft",
        location: "Istanbul, Turkey",
        period: "Jul 2020 – Aug 2020",
        description: "Assisted in software installation, network configuration, and system maintenance for client environments.",
    },
    {
        id: "abkteknik-2018",
        title: "Computer Intern",
        company: "ABKTeknik",
        location: "Istanbul, Turkey",
        period: "Jul 2018 – Aug 2018",
        description: "Supported server setup, hardware diagnostics, and routine network maintenance.",
    },
];
