"use client";

import useEmblaCarousel from "embla-carousel-react";
import styles from "./customer-section.module.css";
import { useCallback, useEffect, useState } from "react";

const customers = [
  {
    name: "Viezh Robert",
    address: "Warsaw, Poland",
    rating: 4.5,
    desc: `“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.`,
  },
  {
    name: "Yessica Christy",
    address: "Shanxi, China",
    rating: 4.5,
    desc: `“I like it because I like to travel far and still can connect with high speed.”`,
  },
  {
    name: "Kim Young Jou",
    address: "Seoul, South Korea",
    rating: 4.5,
    desc: `“This is very unusual for my business that currently requires a virtual private network that has high security.”`,
  },
  {
    name: "Hazuki Toma",
    address: "Osaka, Japan",
    rating: 4.5,
    desc: `“I discovered this VPN while surfing the internet and it is very good to use.”`,
  },
];

export default function CustomerSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onDotButtonClick = useCallback(
    (index) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onInit = useCallback(() => {
    setScrollSnaps(
      Array(customers.length)
        .fill(0)
        .map((_, i) => i)
    );
  }, []);

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <section className={styles.customer}>
      <div className="container">
        <div className={`boxed ${styles.boxed}`}>
          <h2 className={`heading ${styles["heading"]}`}>
            Trusted by Thousands of Happy Customer
          </h2>
          <p className="text">
            These are the stories of our customers who have joined us with great
            pleasure when using this crazy feature.
          </p>
        </div>

        <div className={styles["embla"]}>
          <div className={styles["embla__viewport"]} ref={emblaRef}>
            <div className={styles["embla__container"]}>
              {customers.map((customer, index) => (
                <div className={styles["embla__slide"]} key={index}>
                  <div
                    className={`${styles["customer-item"]} ${
                      index === selectedIndex ? `${styles["is-selected"]}` : ""
                    }`}
                  >
                    <div className={styles["customer-top"]}>
                      <div className={styles["customer-info"]}>
                        <div className={styles["customer-avatar"]}>
                          <img
                            srcSet="./images/avatar.png 2x"
                            alt={customer.name}
                          />
                        </div>
                        <div className={styles["customer-content"]}>
                          <h3
                            className={`heading-small ${styles["customer-name"]}`}
                          >
                            {customer.name}
                          </h3>
                          <span
                            className={`text-small ${styles["customer-address"]}`}
                          >
                            {customer.address}
                          </span>
                        </div>
                      </div>
                      <div className={styles["customer-rating"]}>
                        <span>{customer.rating}</span>
                        <img src="./images/icon-star.svg" alt="" />
                      </div>
                    </div>
                    <div className={`text ${styles["customer-desc"]}`}>
                      {customer.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles["embla__controls"]}>
            <div className={styles["embla__dots"]}>
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => onDotButtonClick(index)}
                  className={`${styles["embla__dot"]} ${
                    index === selectedIndex
                      ? `${styles["embla__dot--selected"]}`
                      : ""
                  }`}
                />
              ))}
            </div>

            <div className={styles["embla__buttons"]}>
              <button
                className={`${styles["embla__button"]} ${styles["embla__button--prev"]}`}
                onClick={onPrevButtonClick}
              >
                <img src="./images/arrow-left.svg" />
              </button>
              <button
                className={`${styles["embla__button"]} ${styles["embla__button--next"]}`}
                onClick={onNextButtonClick}
              >
                <img src="./images/arrow-right.svg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
