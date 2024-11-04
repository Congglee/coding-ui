import Link from "next/link";
import styles from "./subscribe-section.module.css";

export default function SubscribeSection() {
  return (
    <section className="subscribe">
      <div className="container">
        <div className={styles["subscribe-container"]}>
          <div className={styles["subscribe-content"]}>
            <h2 className="heading">Subscribe Now for Get Special Features!</h2>
            <p className="text">Let's subscribe with us and find the fun.</p>
          </div>
          <Link
            href="#"
            className="button button--primary button--rounded button--shadow"
          >
            Subscribe Now
          </Link>
        </div>
      </div>
    </section>
  );
}
