"use client";

import Link from "next/link";
import styles from "./hero-section.module.css";
import { smoothScroll } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section className={styles["section-hero"]}>
      <div className={styles["hero"]}>
        <div className={styles["hero-text-box"]}>
          <h1 className="heading-primary">
            A healthy meal delivered to your door, every single day
          </h1>
          <p className={styles["hero-description"]}>
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs.
          </p>
          <Link href="#cta" className="btn btn--full margin-right-sm">
            Start eating well
          </Link>
          <Link
            href="#how"
            className="btn btn--outline"
            onClick={(e) => smoothScroll(e, "#how")}
          >
            Learn more ↓
          </Link>
          <div className={styles["delivered-meals"]}>
            <div className={styles["delivered-imgs"]}>
              <img src="/customers/customer-1.jpg" alt="Customer photo" />
              <img src="/customers/customer-2.jpg" alt="Customer photo" />
              <img src="/customers/customer-3.jpg" alt="Customer photo" />
              <img src="/customers/customer-4.jpg" alt="Customer photo" />
              <img src="/customers/customer-5.jpg" alt="Customer photo" />
              <img src="/customers/customer-6.jpg" alt="Customer photo" />
            </div>
            <p className={styles["delivered-text"]}>
              <span>250,000+</span> meals delivered last year!
            </p>
          </div>
        </div>
        <div className={styles["hero-img-box"]}>
          <picture>
            <source srcSet="/hero.webp" type="image/webp" />
            <source srcSet="/hero-min.png" type="image/png" />
            <img
              src="/hero-min.png"
              className={styles["hero-img"]}
              alt="Woman enjoying food, meals in storage container, and food bowls on a table"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
