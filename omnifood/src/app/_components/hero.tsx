"use client";

import { smoothScroll } from "@/lib/utils";
import styles from "@/styles/hero.module.css";
import Link from "next/link";

export default function Hero() {
  return (
    <section className={styles.sectionHero}>
      <div className={styles.hero}>
        <div className={styles.heroTextBox}>
          <h1 className="heading-primary">
            A healthy meal delivered to your door, every single day
          </h1>
          <p className={styles.heroDescription}>
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
          <div className={styles.deliveredMeals}>
            <div className={styles.deliveredImgs}>
              <img src="/customers/customer-1.jpg" alt="Customer photo" />
              <img src="/customers/customer-2.jpg" alt="Customer photo" />
              <img src="/customers/customer-3.jpg" alt="Customer photo" />
              <img src="/customers/customer-4.jpg" alt="Customer photo" />
              <img src="/customers/customer-5.jpg" alt="Customer photo" />
              <img src="/customers/customer-6.jpg" alt="Customer photo" />
            </div>
            <p className={styles.deliveredText}>
              <span>250,000+</span> meals delivered last year!
            </p>
          </div>
        </div>
        <div className={styles.heroImgBox}>
          <picture>
            <source srcSet="/hero.webp" type="image/webp" />
            <source srcSet="/hero-min.png" type="image/png" />
            <img
              src="/hero-min.png"
              className={styles.heroImg}
              alt="Woman enjoying food, meals in storage container, and food bowls on a table"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
