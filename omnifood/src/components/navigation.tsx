import Link from "next/link";
import styles from "@/styles/header.module.css";
import cn from "clsx";
import { smoothScroll } from "@/lib/utils";

const navLinks = [
  { href: "#how", text: "How it works", isCta: false },
  { href: "#meals", text: "Meals", isCta: false },
  { href: "#testimonials", text: "Testimonials", isCta: false },
  { href: "#pricing", text: "Pricing", isCta: false },
  { href: "#cta", text: "Try for free", isCta: true },
];

interface NavigationProps {
  onToggleNav: () => void;
}

export default function Navigation({ onToggleNav }: NavigationProps) {
  const onClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    target: string
  ) => {
    smoothScroll(e, target);
    onToggleNav();
  };

  return (
    <nav className={styles.mainNav}>
      <ul className={styles.mainNavList}>
        {navLinks.map((link) => {
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(styles.mainNavLink, link.isCta && styles.navCta)}
                onClick={(e) => onClick(e, link.href)}
              >
                {link.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
