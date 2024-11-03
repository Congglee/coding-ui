import Link from "next/link";
import styles from "./logo.module.css";

export default function Logo() {
  return (
    <Link href="#">
      <img
        src="/omnifood-logo.png"
        alt="Omnifood logo"
        className={styles.logo}
      />
    </Link>
  );
}
