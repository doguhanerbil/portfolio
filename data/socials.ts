/**
 * Social links configuration
 * Brand icons use react-icons (FaGithub, FaLinkedinIn, FaMediumM)
 * Mail and Resume use Lucide React icons
 */

export type Social = {
    name: string;
    url: string;
    icon: "github" | "linkedin" | "medium" | "mail" | "file-text";
    ariaLabel: string;
};

export const socials: Social[] = [
    {
        name: "GitHub",
        url: "https://github.com/doguhanerbil",
        icon: "github",
        ariaLabel: "View my GitHub profile",
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ahmet-doguhan-erbil",
        icon: "linkedin",
        ariaLabel: "Connect with me on LinkedIn",
    },
    {
        name: "Medium",
        url: "https://medium.com/@doguhanerbil",
        icon: "medium",
        ariaLabel: "Read my articles on Medium",
    },
    {
        name: "Email",
        url: "https://mail.google.com/mail/?view=cm&fs=1&to=doguhanerbil@gmail.com",
        icon: "mail",
        ariaLabel: "Send me an email",
    },
    {
        name: "Resume",
        url: "/Ahmet%20Doguhan%20Erbil%20CV.pdf",
        icon: "file-text",
        ariaLabel: "Download my resume",
    },
];
