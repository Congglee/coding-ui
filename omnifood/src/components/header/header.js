"use client";

import Logo from "@/components/logo/logo";
import Navigation from "@/components/navigation/navigation";
import { useState } from "react";
import styles from "./header.module.css";
import navStyles from "@/components/navigation/navigation.module.css";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header
      className={`${styles.header} ${isNavOpen ? navStyles["nav-open"] : ""}`}
    >
      <Logo />
      <Navigation onToggleNav={toggleNav} />

      <button className={navStyles["btn-mobile-nav"]} onClick={toggleNav}>
        <ion-icon
          className={navStyles["icon-mobile-nav"]}
          name="menu-outline"
        />
        <ion-icon
          className={navStyles["icon-mobile-nav"]}
          name="close-outline"
        />
      </button>
    </header>
  );
}
