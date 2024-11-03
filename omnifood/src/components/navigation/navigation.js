import Link from "next/link";
import styles from "./navigation.module.css";

export default function Navigation() {
  return (
    <nav className="main-nav">
      <ul className={styles["main-nav-list"]}>
        <li>
          <Link href="#how" className={styles["main-nav-link"]}>
            How it works
          </Link>
        </li>
        <li>
          <Link href="#meals" className={styles["main-nav-link"]}>
            Meals
          </Link>
        </li>
        <li>
          <Link href="#testimonials" className={styles["main-nav-link"]}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link href="#pricing" className={styles["main-nav-link"]}>
            Pricing
          </Link>
        </li>
        <li>
          <Link
            href="#cta"
            className={`${styles["main-nav-link"]} ${styles["nav-cta"]}`}
          >
            Try for free
          </Link>
        </li>
      </ul>
    </nav>
  );
}
