/**
 * Navigation configuration for sidebar
 * Each item corresponds to a section anchor on the page
 */

export type NavItem = {
    id: string;
    label: string;
    href: string;
};

export const navigation: NavItem[] = [
    {
        id: "about",
        label: "About",
        href: "#about",
    },
    {
        id: "experience",
        label: "Experience",
        href: "#experience",
    },
    {
        id: "projects",
        label: "Projects",
        href: "#projects",
    },
    {
        id: "writing",
        label: "Writing",
        href: "#writing",
    },
    {
        id: "contact",
        label: "Contact",
        href: "#contact",
    },
];
