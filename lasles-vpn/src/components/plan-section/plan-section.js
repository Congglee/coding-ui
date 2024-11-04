import Link from "next/link";
import styles from "./plan-section.module.css";

const plans = [
  {
    title: "Free Plan",
    details: [
      "Unlimited Bandwitch",
      "Encrypted Connection",
      "No Traffic Logs",
      "Works on All Devices",
    ],
    price: "Free",
  },
  {
    title: "Standard Plan",
    details: [
      "Unlimited Bandwitch",
      "Encrypted Connection",
      "Yes Traffic Logs",
      "Works on All Devices",
      "Connect Anyware",
    ],
    price: "$9",
  },
  {
    title: "Premium Plan",
    details: [
      "Unlimited Bandwitch",
      "Encrypted Connection",
      "Yes Traffic Logs",
      "Works on All Devices",
      "Connect Anyware",
      "Get New Features",
    ],
    price: "$12",
  },
];

export default function PlanSection() {
  return (
    <section className={styles.plan}>
      <div className="container">
        <div className={styles["plan-header"]}>
          <h2 className="heading">Choose Your Plan</h2>
          <p className="text">
            Let's choose the package that is best for you and explore it happily
            and cheerfully.
          </p>
        </div>
        <div className={styles["plan-list"]}>
          {plans.map((plan, index) => (
            <div
              className={`${styles["plan-item"]} ${
                index === 0 ? styles["is-active"] : ""
              }`}
              key={index}
            >
              <div className={styles["plan-image"]}>
                <img srcSet="./images/plan.png 2x" alt="Plan image" />
              </div>
              <h3 className={styles["plan-title"]}>{plan.title}</h3>
              <div className={styles["plan-details"]}>
                {plan.details.map((detail) => (
                  <div className={styles["plan-info"]} key={detail}>
                    <img src="./images/icon-check-line.svg" alt="Check icon" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
              <h4 className={styles["plan-price"]}>
                {plan.price}
                <span>{plan.price === "Free" ? "" : " / mo"}</span>
              </h4>
              <Link href="#" className="button button--primary button--shadow">
                Select
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="boxed">
        <h2 className={`heading ${styles["network-heading"]}`}>
          Huge Global Network of Fast VPN
        </h2>
        <p className="text">
          See <span className="text-medium">LaslesVPN</span> everywhere to make
          it easier for you when you move locations.
        </p>
      </div>
      <div className={styles["network-image"]}>
        <img srcSet="./images/network-image.png 2x" alt="Network image" />
      </div>
    </section>
  );
}
