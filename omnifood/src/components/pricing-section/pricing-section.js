import styles from "./pricing-section.module.css";

const features = [
  {
    icon: "infinite-outline",
    title: "Never cook again!",
    text: "Our subscriptions cover 365 days per year, even including major holidays.",
  },
  {
    icon: "nutrition-outline",
    title: "Local and organic",
    text: "Our cooks only use local, fresh, and organic products to prepare your meals.",
  },
  {
    icon: "leaf-outline",
    title: "No waste",
    text: "All our partners only use reusable containers to package all your meals.",
  },
  {
    icon: "pause-outline",
    title: "Pause anytime",
    text: "Going on vacation? Just pause your subscription, and we refund unused days.",
  },
];

export default function PricingSection() {
  return (
    <section className={styles["section-pricing"]} id="pricing">
      <div className="container">
        <span className="subheading">Pricing</span>
        <h2 className="heading-secondary">
          Eating well without breaking the bank
        </h2>
      </div>
      <div className="container grid grid--2-cols margin-bottom-md">
        <div
          className={`${styles["pricing-plan"]} ${styles["pricing-plan--starter"]}`}
        >
          <header className={styles["plan-header"]}>
            <p className={styles["plan-name"]}>Starter</p>
            <p className={styles["plan-price"]}>
              <span>$</span>399
            </p>
            <p className={styles["plan-text"]}>
              per month. That's just $13 per meal!
            </p>
          </header>
          <ul className="list">
            <li className="list-item">
              <ion-icon className="list-icon" name="checkmark-outline" />
              <span>1 meal per day</span>
            </li>
            <li className="list-item">
              <ion-icon className="list-icon" name="checkmark-outline" />
              <span>Order from 11am to 9pm</span>
            </li>
            <li className="list-item">
              <ion-icon className="list-icon" name="checkmark-outline" />
              <span>Delivery is free</span>
            </li>
            <li className="list-item">
              <ion-icon className="list-icon" name="close-outline" />
            </li>
          </ul>
          <div className={styles["plan-sing-up"]}>
            <a href="#" className="btn btn--full">
              Start eating well
            </a>
          </div>
        </div>
        <div
          className={`${styles["pricing-plan"]} ${styles["pricing-plan--complete"]}`}
        >
          <header className={styles["plan-header"]}>
            <p className={styles["plan-name"]}>Complete</p>
            <p className={styles["plan-price"]}>
              <span>$</span>649
            </p>
            <p className={styles["plan-text"]}>
              per month. That's just $11 per meal!
            </p>
          </header>
          <ul className="list">
            <li className="list-item">
              <ion-icon className="list-icon" name="checkmark-outline" />
              <span>
                <strong>2 meals</strong> per day
              </span>
            </li>
            <li className="list-item">
              <ion-icon className="list-icon" name="checkmark-outline" />
              <span>
                Order <strong>24/7</strong>
              </span>
            </li>
            <li className="list-item">
              <ion-icon className="list-icon" name="checkmark-outline" />
              <span>Delivery is free</span>
            </li>
            <li className="list-item">
              <ion-icon className="list-icon" name="checkmark-outline" />
              <span>Get access to latest recipes</span>
            </li>
          </ul>
          <div className={styles["plan-sing-up"]}>
            <a href="#" className="btn btn--full">
              Start eating well
            </a>
          </div>
        </div>
      </div>
      <div className="container grid">
        <aside className={styles["plan-details"]}>
          Prices include all applicable taxes. You can cancel at any time. Both
          plans include the following:
        </aside>
      </div>
      <div className="container grid grid--4-cols">
        {features.map((feature, index) => (
          <div key={index} className="feature">
            <ion-icon className={styles["feature-icon"]} name={feature.icon} />
            <p className={styles["feature-title"]}>{feature.title}</p>
            <p className={styles["feature-text"]}>{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
