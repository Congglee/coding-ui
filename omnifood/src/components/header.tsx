"use client";

import { AlignJustify, X } from "lucide-react";
import styles from "@/styles/header.module.css";
import Logo from "@/components/logo";
import Navigation from "@/components/navigation";
import { useState } from "react";
import cn from "clsx";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className={cn(styles.header, isNavOpen && styles.navOpen)}>
      <Logo />
      <Navigation onToggleNav={toggleNav} />
      <button className={styles.btnMobileNav} onClick={toggleNav}>
        <AlignJustify className={styles.iconMobileNav} name="menu-outline" />
        <X className={styles.iconMobileNav} name="close-outline" />
      </button>
    </header>
  );
}
