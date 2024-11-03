import styles from "./featured-section.module.css";

export default function FeaturedSection() {
  return (
    <section className={styles["section-featured"]}>
      <div className="container">
        <h2 className={styles["heading-featured-in"]}>As featured in</h2>
        <div className={styles["logos"]}>
          <img src="/logos/techcrunch.png" alt="Techcrunch logo" />
          <img src="/logos/business-insider.png" alt="Business Insider logo" />
          <img
            src="/logos/the-new-york-times.png"
            alt="The New York Times logo"
          />
          <img src="/logos/forbes.png" alt="Forbes logo" />
          <img src="/logos/usa-today.png" alt="USA Today logo" />
        </div>
      </div>
    </section>
  );
}
