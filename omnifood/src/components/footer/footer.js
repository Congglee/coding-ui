import Link from "next/link";
import styles from "./footer.module.css";
import Logo from "@/components/logo/logo";

const socialLinks = [
  {
    icon: "logo-instagram",
    href: "#",
  },
  {
    icon: "logo-facebook",
    href: "#",
  },
  {
    icon: "logo-twitter",
    href: "#",
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container grid ${styles["grid--footer"]}`}>
        <div className={styles["logo-col"]}>
          <Logo />
          <ul className={styles["social-links"]}>
            {socialLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.href} className={styles["footer-link"]}>
                  <ion-icon
                    className={styles["social-icon"]}
                    name={link.icon}
                  />
                </Link>
              </li>
            ))}
          </ul>
          <p className={styles.copyright}>
            Copyright © <span className="year">2027</span> by Omnifood, Inc. All
            rights reserved.
          </p>
        </div>
        <div className={styles["address-col"]}>
          <p className={styles["footer-heading"]}>Contact us</p>
          <address className={styles.contacts}>
            <p className={styles.address}>
              623 Harrison St., 2nd Floor, San Francisco, CA 94107
            </p>
            <p>
              <Link href="tel:415-201-6370" className={styles["footer-link"]}>
                415-201-6370
              </Link>
              <br />
              <Link
                href="mailto:hello@omnifood.com"
                className={styles["footer-link"]}
              >
                hello@omnifood.com
              </Link>
            </p>
          </address>
        </div>
        <nav className={styles["nav-col"]}>
          <p className={styles["footer-heading"]}>Account</p>
          <ul className={styles["footer-nav"]}>
            <li>
              <Link href="#" className={styles["footer-link"]}>
                Create account
              </Link>
            </li>
            <li>
              <Link href="#" className={styles["footer-link"]}>
                Sign in
              </Link>
            </li>
            <li>
              <Link href="#" className={styles["footer-link"]}>
                iOS app
              </Link>
            </li>
            <li>
              <Link href="#" className={styles["footer-link"]}>
                Android app
              </Link>
            </li>
          </ul>
        </nav>
        <nav className={styles["nav-col"]}>
          <p className={styles["footer-heading"]}>Company</p>
          <ul className={styles["footer-nav"]}>
            <li>
              <Link href="#" className={styles["footer-link"]}>
                About Omnifood
              </Link>
            </li>
            <li>
              <Link href="#" className={styles["footer-link"]}>
                For Business
              </Link>
            </li>
            <li>
              <Link href="#" className={styles["footer-link"]}>
                Cooking partners
              </Link>
            </li>
            <li>
              <Link href="#" className={styles["footer-link"]}>
                Careers
              </Link>
            </li>
          </ul>
        </nav>
        <nav className={styles["nav-col"]}>
          <p className={styles["footer-heading"]}>Resources</p>
          <ul className={styles["footer-nav"]}>
            <li>
              <Link href="#" className={styles["footer-link"]}>
                Recipe directory
              </Link>
            </li>
            <li>
              <Link href="#" className={styles["footer-link"]}>
                Help center
              </Link>
            </li>
            <li>
              <Link href="#" className={styles["footer-link"]}>
                Privacy &amp; terms
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
