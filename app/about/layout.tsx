import React from "react";
import Link from "next/link";

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return (
        <div
            style={{ display: "flex", alignItems: "center", flexDirection: "column", gap: "20px" }}
        >
            <h1>About us</h1>

            <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
                <Link href={"/about/contacts"}>Contacts</Link>
                <Link href={"/about/team"}>Team</Link>
            </div>

            {children}
        </div>
    );
}
