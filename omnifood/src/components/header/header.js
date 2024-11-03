import styles from "./header.module.css";
import Logo from "@/components/logo/logo";
import Navigation from "@/components/navigation/navigation";

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <Navigation />

      {/* <button>
        <ion-icon name="menu-outline" />
        <ion-icon name="close-outline" />
      </button> */}
    </header>
  );
}
