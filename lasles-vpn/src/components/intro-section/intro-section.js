import styles from "./intro-section.module.css";

export default function IntroSection() {
  return (
    <section className={styles.intro}>
      <div className="container">
        <div className={styles["intro-container"]}>
          <div className={styles["intro-item"]}>
            <div className={styles["intro-icon"]}>
              <img srcSet="./images/user.png 2x" alt="User icon" />
            </div>
            <div className={styles["intro-info"]}>
              <h3 className={styles["intro-title"]}>90+</h3>
              <span className={styles["intro-text"]}>Users</span>
            </div>
          </div>
          <div className={styles["intro-item"]}>
            <div className={styles["intro-icon"]}>
              <img srcSet="./images/location.png 2x" alt="Location icon" />
            </div>
            <div className={styles["intro-info"]}>
              <h3 className={styles["intro-title"]}>30+</h3>
              <span className={styles["intro-text"]}>Locations</span>
            </div>
          </div>
          <div className={styles["intro-item"]}>
            <div className={styles["intro-icon"]}>
              <img srcSet="./images/server.png 2x" alt="Server icon" />
            </div>
            <div className={styles["intro-info"]}>
              <h3 className={styles["intro-title"]}>50+</h3>
              <span className={styles["intro-text"]}>Servers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
