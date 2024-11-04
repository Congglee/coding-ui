import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles["footer-container"]}>
          <div className="footer-column">
            <Link href="/" className={styles["footer-logo"]}>
              <img srcSet="./images/logo.png 2x" alt="LaslesVPN logo" />
            </Link>
            <p className={`text ${styles["footer-desc"]}`}>
              <span className="text-medium">LaslesVPN</span> is a private
              virtual network that has unique features and has high security.
            </p>
            <div className={styles.social}>
              <Link href="#" className="social-item">
                <img srcSet="./images/Facebook.png 2x" alt="Facebook" />
              </Link>
              <Link href="#" className="social-item">
                <img srcSet="./images/Twitter.png 2x" alt="Twitter" />
              </Link>
              <Link href="#" className="social-item">
                <img srcSet="./images/Instagram.png 2x" alt="Instagram" />
              </Link>
            </div>
            <p className={styles.copyright}>
              ©2020Lasles<span className="text-medium">VPN</span>
            </p>
          </div>
          <div className="footer-column">
            <h3 className={`heading-small ${styles["footer-heading"]}`}>
              Product
            </h3>
            <ul className={styles["footer-links"]}>
              <li className={styles["footer-item"]}>
                <Link href="#" className={styles["footer-link"]}>
                  Download
                </Link>
              </li>
              <li className={styles["footer-item"]}>
                <Link href="#" className={styles["footer-link"]}>
                  Pricing
                </Link>
              </li>
              <li className={styles["footer-item"]}>
                <Link href="#" className={styles["footer-link"]}>
                  Locations
                </Link>
              </li>
              <li className={styles["footer-item"]}>
                <Link href="#" className={styles["footer-link"]}>
                  Server
                </Link>
              </li>
              <li className={styles["footer-item"]}>
                <Link href="#" className={styles["footer-link"]}>
                  Countries
                </Link>
              </li>
              <li className={styles["footer-item"]}>
                <Link href="#" className={styles["footer-link"]}>
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3 className={`heading-small ${styles["footer-heading"]}`}>
              Engage
            </h3>
            <ul className={styles["footer-links"]}>
              <li className={styles["footer-item"]}>
                <Link href="#" className={styles["footer-link"]}>
                  LaslesVPN ?
                </Link>
              </li>
              <li className={styles["footer-item"]}>
                <Link href="#" className={styles["footer-link"]}>
                  FAQ
                </Link>
              </li>
              <li className={styles["footer-item"]}>
                <Link href="#" className={styles["footer-link"]}>
                  Tutorials
                </Link>
              </li>
              <li className={styles["footer-item"]}>
                <Link href="#" className={styles["footer-link"]}>
                  About Us
                </Link>
              </li>
              <li className={styles["footer-item"]}>
                <Link href="#" className={styles["footer-link"]}>
                  Privacy Policy
                </Link>
              </li>
              <li className={styles["footer-item"]}>
                <Link href="#" className={styles["footer-link"]}>
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3 className={`heading-small ${styles["footer-heading"]}`}>
              Earn Money
            </h3>
            <ul className={styles["footer-links"]}>
              <li className={styles["footer-item"]}>
                <Link href="#" className={styles["footer-link"]}>
                  Affiliate
                </Link>
              </li>
              <li className={styles["footer-item"]}>
                <Link href="#" className={styles["footer-link"]}>
                  Become Partner
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
