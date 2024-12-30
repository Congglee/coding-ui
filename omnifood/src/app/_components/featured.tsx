import styles from "@/styles/featured.module.css";

const logos = [
  "techcrunch.png",
  "business-insider.png",
  "the-new-york-times.png",
  "forbes.png",
  "usa-today.png",
];

export default function Featured() {
  return (
    <section className={styles.sectionFeatured}>
      <div className="container">
        <h2 className={styles.headingFeaturedIn}>As featured in</h2>
        <div className={styles.logos}>
          {logos.map((logo, index) => (
            <img key={index} src={`/logos/${logo}`} alt={`${logo} logo`} />
          ))}
        </div>
      </div>
    </section>
  );
}
