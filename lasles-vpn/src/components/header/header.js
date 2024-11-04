import Link from "next/link";
import styles from "./header.module.css";
import Logo from "@/components/logo/logo";
import Menu from "@/components/menu/menu";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles["header-container"]}>
          <Logo />
          <Menu />
          <div className={styles["header-auth"]}>
            <Link href="#" className={styles["header-signin"]}>
              Sign in
            </Link>
            <Link href="#" className="button button--outline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
