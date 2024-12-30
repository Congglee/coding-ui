"use client";

import styles from "@/styles/footer.module.css";
import Logo from "@/components/logo";
import Link from "next/link";
import { useEffect, useState } from "react";
import cn from "clsx";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState("");

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={cn("container grid", styles.gridFooter)}>
        <div className={styles.logoCol}>
          <Logo className={styles.footerLogo} />
          <ul className={styles.socialLinks}>
            <li>
              <Link href="#" className={styles.footerLink}>
                <FaInstagram className={styles.socialIcon} />
              </Link>
            </li>
            <li>
              <Link href="#" className={styles.footerLink}>
                <FaFacebook className={styles.socialIcon} />
              </Link>
            </li>
            <li>
              <Link href="#" className={styles.footerLink}>
                <FaTwitter className={styles.socialIcon} />
              </Link>
            </li>
          </ul>
          <p className={styles.copyright}>
            Copyright © <span>{currentYear}</span> by Omnifood, Inc. All rights
            reserved.
          </p>
        </div>
        <div className={styles.addressCol}>
          <p className={styles.footerHeading}>Contact us</p>
          <div className={styles.contacts}>
            <p className={styles.address}>
              623 Harrison St., 2nd Floor, San Francisco, CA 94107
            </p>
            <p>
              <Link href="tel:415-201-6370" className={styles.footerLink}>
                415-201-6370
              </Link>
              <br />
              <Link
                href="mailto:hello@omnifood.com"
                className={styles.footerLink}
              >
                hello@omnifood.com
              </Link>
            </p>
          </div>
        </div>
        <nav className={styles.navCol}>
          <p className={styles.footerHeading}>Account</p>
          <ul className={styles.footerNav}>
            <li>
              <Link href="#" className={styles.footerLink}>
                Create account
              </Link>
            </li>
            <li>
              <Link href="#" className={styles.footerLink}>
                Sign in
              </Link>
            </li>
            <li>
              <Link href="#" className={styles.footerLink}>
                IOS app
              </Link>
            </li>
            <li>
              <Link href="#" className={styles.footerLink}>
                Android app
              </Link>
            </li>
          </ul>
        </nav>
        <nav className={styles.navCol}>
          <p className={styles.footerHeading}>Company</p>
          <ul className={styles.footerNav}>
            <li>
              <Link href="#" className={styles.footerLink}>
                About Omnifood
              </Link>
            </li>
            <li>
              <Link href="#" className={styles.footerLink}>
                For Business
              </Link>
            </li>
            <li>
              <Link href="#" className={styles.footerLink}>
                Cooking partners
              </Link>
            </li>
            <li>
              <Link href="#" className={styles.footerLink}>
                Careers
              </Link>
            </li>
          </ul>
        </nav>
        <nav className={styles.navCol}>
          <p className={styles.footerHeading}>Resources</p>
          <ul className={styles.footerNav}>
            <li>
              <Link href="#" className={styles.footerLink}>
                Recipe directory
              </Link>
            </li>
            <li>
              <Link href="#" className={styles.footerLink}>
                Help center
              </Link>
            </li>
            <li>
              <Link href="#" className={styles.footerLink}>
                Privacy &amp; terms
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
