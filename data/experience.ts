/**
 * Work experience data
 * Ordered from most recent to oldest
 * Matches CV and LinkedIn work history — no unverifiable metrics
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
    responsibilities: string[];
    technologies: string[];
};

export const experiences: Experience[] = [
    {
        id: "hisar-2024",
        title: "Software Developer",
        company: "Hisar Intercontinental Hospital",
        companyDescription:
            "Aurora Bilişim — the software development unit at Hisar Intercontinental Hospital, building warehouse management and ERP/CRM integration systems for enterprise clients",
        location: "Istanbul, Turkey",
        startDate: "Jul 2024",
        endDate: "Sep 2026",
        description:
            "Backend-focused development on a warehouse management platform for enterprise clients, together with the ERP and CRM integrations around it, in an agile team working with product and QA.",
        responsibilities: [
            "Developed and supported a warehouse management platform for enterprise clients — a Java / Spring Boot backend on PostgreSQL with a ReactJS frontend — covering the inventory, order and shipment modules.",
            "Owned REST API endpoints and service layers: endpoint contracts, validation, error handling and data access with Spring Data JPA, plus ERP and CRM integrations with client systems.",
            "Set up and ran the CI/CD pipelines for builds, containerised deployments and automated test runs, and was responsible for taking developments through test and production.",
            "Contributed to an R&D project for a hospital medication-dispensing and stock-tracking system, including the integration layer feeding drug-consumption data into the hospital information system.",
        ],
        technologies: [
            "Java",
            "Spring Boot",
            "Spring Data JPA",
            "PostgreSQL",
            "React",
            "Docker",
            "CI/CD",
            "REST APIs",
        ],
    },

    {
        id: "military-2023",
        title: "Military Service — Reserve Officer (Wide Area Network Operator)",
        company: "Turkish Armed Forces (National Defence University)",
        companyDescription: "Compulsory military service",
        location: "Istanbul, Turkey",
        startDate: "May 2023",
        endDate: "May 2024",
        description:
            "Compulsory military service, served as a reserve officer assigned to wide area network operations and end-user technical support.",
        responsibilities: [
            "Operated and supported the wide area network: switch and port configuration, structured cabling and internet connectivity.",
            "Provided live technical support to end users, including hardware and printer troubleshooting.",
        ],
        technologies: [
            "Network Operations",
            "Switch & Port Configuration",
            "Structured Cabling",
            "Hardware Troubleshooting",
            "Technical Support",
        ],
    },

    {
        id: "hisar-2022",
        title: "Software Test Engineer / Software Assistant Specialist",
        company: "Hisar Intercontinental Hospital",
        companyDescription:
            "Aurora Bilişim — the software development unit at Hisar Intercontinental Hospital, building warehouse management and ERP/CRM integration systems for enterprise clients",
        location: "Istanbul, Turkey",
        startDate: "Aug 2022",
        endDate: "Apr 2023",
        description:
            "Started as a software specialist assistant on the company's ERP product, then continued as a software test engineer owning its automated and manual test coverage.",
        responsibilities: [
            "Supported backend development in Java for the company's ERP product and contributed frontend components in Angular.",
            "Built automated regression tests with Selenium (Python), ran API tests with Postman, and carried out manual testing.",
            "Integrated the test automation into the CI/CD pipeline so regression runs happened as part of the build.",
        ],
        technologies: [
            "Java",
            "Angular",
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
