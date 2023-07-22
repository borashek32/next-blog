import Link from "next/link";
import styles from "./../app/page.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <Link href={"/"}>Home</Link>
            <Link href={"/pages/about"}>About</Link>
            <Link href={"/pages/blog"}>Blog</Link>
        </header>
    );
}
