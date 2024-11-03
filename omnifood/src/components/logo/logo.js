import Link from "next/link";
import styles from "./logo.module.css";

export default function Logo({ className }) {
  return (
    <Link href="#">
      <img
        src="/omnifood-logo.png"
        alt="Omnifood logo"
        className={`${styles.logo} ${className}`}
      />
    </Link>
  );
}
