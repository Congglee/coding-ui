import Link from "next/link";
import styles from "./navigation.module.css";
import { smoothScroll } from "@/lib/utils";

export default function Navigation({ onToggleNav }) {
  const onClick = (e, target) => {
    smoothScroll(e, target);
    onToggleNav();
  };

  return (
    <nav className={styles["main-nav"]}>
      <ul className={styles["main-nav-list"]}>
        <li>
          <Link
            href="#how"
            className={styles["main-nav-link"]}
            onClick={(e) => onClick(e, "#how")}
          >
            How it works
          </Link>
        </li>
        <li>
          <Link
            href="#meals"
            className={styles["main-nav-link"]}
            onClick={(e) => onClick(e, "#meals")}
          >
            Meals
          </Link>
        </li>
        <li>
          <Link
            href="#testimonials"
            className={styles["main-nav-link"]}
            onClick={(e) => onClick(e, "#testimonials")}
          >
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            href="#pricing"
            className={styles["main-nav-link"]}
            onClick={(e) => onClick(e, "#pricing")}
          >
            Pricing
          </Link>
        </li>
        <li>
          <Link
            href="#cta"
            className={`${styles["main-nav-link"]} ${styles["nav-cta"]}`}
            onClick={(e) => onClick(e, "#cta")}
          >
            Try for free
          </Link>
        </li>
      </ul>
    </nav>
  );
}
