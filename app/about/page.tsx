import { Metadata } from "next";
import styles from "./../page.module.css";

export const metadata: Metadata = {
    title: "Next About",
    description: "Generated by Nataly",
};

export default function About() {
    return (
        <div className={styles.description}>
            <div className={styles.center}>
                <h3>Select subitem</h3>
            </div>
        </div>
    );
}
