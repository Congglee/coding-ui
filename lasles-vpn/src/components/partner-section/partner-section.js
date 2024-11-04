import styles from "./partner-section.module.css";

const partners = [
  "./images/logo-netflix.png",
  "./images/logo-reddit.png",
  "./images/logo-amazon.png",
  "./images/logo-discord.png",
  "./images/logo-spotify.png",
];

export default function PartnerSection() {
  return (
    <section className={styles.partner}>
      <div className="container">
        <div className={styles["partner-container"]}>
          {partners.map((partner, index) => (
            <div className="partner-item" key={index}>
              <img srcSet={partner + " 2x"} alt="Partner logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
