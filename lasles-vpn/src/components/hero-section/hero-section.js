import styles from "./hero-section.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles["hero-container"]}>
          <div className={styles["hero-content"]}>
            <h1 className={styles["hero-heading"]}>
              Want anything to be easy with <strong>LaslesVPN.</strong>
            </h1>
            <p className={`${styles["hero-desc"]} text`}>
              Provide a network for all your needs with ease and fun using
              <span className="text-medium">LaslesVPN</span> discover
              interesting features from us.
            </p>
            <a href="#" className="button button--rounded button--primary">
              Get Started
            </a>
          </div>
          <div className={styles["hero-image"]}>
            <img srcSet="./images/hero-image.png 2x" alt />
          </div>
        </div>
      </div>
    </section>
  );
}
