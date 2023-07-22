import { Metadata } from "next";
import styles from "app/page.module.css";

export const metadata: Metadata = {
    title: "Next Team",
    description: "Generated by Nataly",
};

export default function Team() {
    return (
        <div className={styles.description}>
            <div className={styles.center}>
                <h1>Team</h1>
            </div>
        </div>
    );
}