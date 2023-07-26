import Link from "next/link";
import { Navigation, NavLink } from "@/components/Navigation";

const navItems: NavLink[] = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "./about" },
];

const TheHeader = () => {
    return (
        <header>
            <Navigation navLinks={navItems} />
        </header>
    );
};

export { TheHeader };
