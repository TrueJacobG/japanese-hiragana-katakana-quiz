import Link from "next/link";
import styles from "../page.module.css";

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
      <p className={styles.link}>|</p>
      <a className={styles.link} target="_blank" href="https://github.com/TrueJacobG/japanese-hiragana-katakana-quiz">
        Github
      </a>
    </nav>
  );
};

export default Navigation;
