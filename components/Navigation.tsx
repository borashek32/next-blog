"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export type NavLink = {
    label: string;
    href: string;
};
type Props = {
    navLinks: NavLink[];
};
const Navigation = ({ navLinks }: Props) => {
    const pathname = usePathname();

    return (
        <>
            {navLinks.map((navLink) => {
                const isActive = pathname === navLink.href;

                return (
                    <Link
                        key={navLink.label}
                        href={navLink.href}
                        className={isActive ? "active" : ""}
                    >
                        {navLink.label}
                    </Link>
                );
            })}
        </>
    );
};
export { Navigation };
