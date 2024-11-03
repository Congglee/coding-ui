import styles from "./featured-section.module.css";

const logos = [
  "techcrunch.png",
  "business-insider.png",
  "the-new-york-times.png",
  "forbes.png",
  "usa-today.png",
];

export default function FeaturedSection() {
  return (
    <section className={styles["section-featured"]}>
      <div className="container">
        <h2 className={styles["heading-featured-in"]}>As featured in</h2>
        <div className={styles["logos"]}>
          {logos.map((logo, index) => (
            <img key={index} src={`/logos/${logo}`} alt={`${logo} logo`} />
          ))}
        </div>
      </div>
    </section>
  );
}
