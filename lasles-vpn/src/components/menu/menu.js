"use client";

import Link from "next/link";
import styles from "./menu.module.css";
import headerStyles from "@/components/header/header.module.css";
import { useEffect, useState } from "react";

export default function Menu() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const onToggleClick = () => {
    setIsMenuVisible((prev) => !prev);
  };

  const onWindowClick = (e) => {
    if (
      !e.target.closest(`.${styles.menu}`) &&
      !e.target.closest(`.${styles["menu-toggle"]}`)
    ) {
      setIsMenuVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", onWindowClick);

    return () => {
      window.removeEventListener("click", onWindowClick);
    };
  }, []);

  return (
    <>
      <ul
        className={`${styles.menu} ${isMenuVisible ? styles["is-show"] : ""}`}
      >
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
        <li className={`${styles["menu-item"]} ${styles["menu-item--auth"]}`}>
          <Link href="#" className={headerStyles["header-signin"]}>
            Sign in
          </Link>
          <Link href="#" className="button button--outline">
            Sign up
          </Link>
        </li>
      </ul>
      <div className={styles["menu-toggle"]} onClick={onToggleClick}>
        <span />
        <span />
        <span />
      </div>
    </>
  );
}
