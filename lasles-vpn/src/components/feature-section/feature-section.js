import styles from "./feature-section.module.css";

const features = [
  {
    icon: "./images/icon-check.svg",
    text: "Powerfull online protection.",
  },
  {
    icon: "./images/icon-check.svg",
    text: "Internet without borders.",
  },
  {
    icon: "./images/icon-check.svg",
    text: "Supercharged VPN",
  },
  {
    icon: "./images/icon-check.svg",
    text: "No specific time limits.",
  },
];

export default function FeatureSection() {
  return (
    <section className={styles.feature}>
      <div className="container">
        <div className={styles["feature-container"]}>
          <div className={styles["feature-image"]}>
            <img src="./images/feature-image.png" alt />
          </div>
          <div className={styles["feature-content"]}>
            <h2 className="heading">We Provide Many Features You Can Use</h2>
            <p className={`text ${styles["feature-desc"]}`}>
              You can explore the features that we provide with fun and have
              their own functions each feature.
            </p>
            <div className={`ul ${styles["feature-list"]}`}>
              {features.map((feature, index) => (
                <li className={styles["feature-item"]} key={index}>
                  <img
                    src={feature.icon}
                    alt
                    className={styles["feature-icon"]}
                  />
                  <span>{feature.text}</span>
                </li>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
