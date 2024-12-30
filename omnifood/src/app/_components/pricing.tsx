import styles from "@/styles/pricing.module.css";
import { Apple, Check, Infinity, Leaf, Pause, X } from "lucide-react";
import Link from "next/link";

const features = [
  {
    // icon: "infinite-outline",
    icon: Infinity,
    title: "Never cook again!",
    text: "Our subscriptions cover 365 days per year, even including major holidays.",
  },
  {
    // icon: "apple-outline",
    icon: Apple,
    title: "Local and organic",
    text: "Our cooks only use local, fresh, and organic products to prepare your meals.",
  },
  {
    // icon: "leaf-outline",
    icon: Leaf,
    title: "No waste",
    text: "All our partners only use reusable containers to package all your meals.",
  },
  {
    // icon: "pause-outline",
    icon: Pause,
    title: "Pause anytime",
    text: "Going on vacation? Just pause your subscription, and we refund unused days.",
  },
];

export default function Pricing() {
  return (
    <section className={styles.sectionPricing} id="pricing">
      <div className="container">
        <span className="subheading">Pricing</span>
        <h2 className="heading-secondary">
          Eating well without breaking the bank
        </h2>
      </div>
      <div className="container grid grid--2-cols margin-bottom-md">
        <div className={`${styles.pricingPlan} ${styles.pricingPlanStarter}`}>
          <header className={styles.planHeader}>
            <p className={styles.planName}>Starter</p>
            <p className={styles.planPrice}>
              <span>$</span>399
            </p>
            <p className={styles.planText}>
              per month. That&apos;s just $13 per meal!
            </p>
          </header>
          <ul className="list">
            <li className="list-item">
              <Check className="list-icon" name="checkmark-outline" />
              <span>1 meal per day</span>
            </li>
            <li className="list-item">
              <Check className="list-icon" name="checkmark-outline" />
              <span>Order from 11am to 9pm</span>
            </li>
            <li className="list-item">
              <Check className="list-icon" name="checkmark-outline" />
              <span>Delivery is free</span>
            </li>
            <li className="list-item">
              <X className="list-icon" name="close-outline" />
            </li>
          </ul>
          <div className={styles.planSignUp}>
            <Link href="#" className="btn btn--full">
              Start eating well
            </Link>
          </div>
        </div>
        <div className={`${styles.pricingPlan} ${styles.pricingPlanComplete}`}>
          <header className={styles.planHeader}>
            <p className={styles.planName}>Complete</p>
            <p className={styles.planPrice}>
              <span>$</span>649
            </p>
            <p className={styles.planText}>
              per month. That&apos;s just $11 per meal!
            </p>
          </header>
          <ul className="list">
            <li className="list-item">
              <Check className="list-icon" name="checkmark-outline" />
              <span>
                <strong>2 meals</strong> per day
              </span>
            </li>
            <li className="list-item">
              <Check className="list-icon" name="checkmark-outline" />
              <span>
                Order <strong>24/7</strong>
              </span>
            </li>
            <li className="list-item">
              <Check className="list-icon" name="checkmark-outline" />
              <span>Delivery is free</span>
            </li>
            <li className="list-item">
              <Check className="list-icon" name="checkmark-outline" />
              <span>Get access to latest recipes</span>
            </li>
          </ul>
          <div className={styles.planSignUp}>
            <Link href="#" className="btn btn--full">
              Start eating well
            </Link>
          </div>
        </div>
      </div>
      <div className="container grid">
        <aside className={styles.planDetails}>
          Prices include all applicable taxes. You can cancel at any time. Both
          plans include the following:
        </aside>
      </div>
      <div className="container grid grid--4-cols">
        {features.map((feature, index) => (
          <div key={index} className={styles.feature}>
            <feature.icon className={styles.featureIcon} />
            <p className={styles.featureTitle}>{feature.title}</p>
            <p className={styles.featureText}>{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
