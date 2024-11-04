import Link from "next/link";
import styles from "./menu.module.css";

export default function Menu() {
  return (
    <>
      <ul className={styles.menu}>
        <li className={styles["menu-item"]}>
          <Link href="#" className={styles["menu-link"]}>
            About
          </Link>
        </li>
        <li className={styles["menu-item"]}>
          <Link href="#" className={styles["menu-link"]}>
            Features
          </Link>
        </li>
        <li className={styles["menu-item"]}>
          <Link href="#" className={styles["menu-link"]}>
            Pricing
          </Link>
        </li>
        <li className={styles["menu-item"]}>
          <Link href="#" className={styles["menu-link"]}>
            Testimonials
          </Link>
        </li>
        <li className={styles["menu-item"]}>
          <Link href="#" className={styles["menu-link"]}>
            Help
          </Link>
        </li>
      </ul>
      <div className={styles["menu-toggle"]}>
        <span />
        <span />
        <span />
      </div>
    </>
  );
}
