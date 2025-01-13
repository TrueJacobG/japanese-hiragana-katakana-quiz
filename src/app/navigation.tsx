import Link from "next/link";
import styles from "./page.module.css";

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.link}>
        All
      </Link>
      <Link href="/hiragana" className={styles.link}>
        Hiragana
      </Link>
      <Link href="/katakana" className={styles.link}>
        Katakana
      </Link>
    </nav>
  );
};

export default Navigation;
