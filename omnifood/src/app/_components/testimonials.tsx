import styles from "@/styles/testimonials.module.css";

const testimonials = [
  {
    img: "/customers/dave.jpg",
    text: "Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical.",
    name: "Dave Bryson",
  },
  {
    img: "/customers/ben.jpg",
    text: "The AI algorithm is crazy good, it chooses the right meals for me every time. It's amazing not to worry about food anymore!",
    name: "Ben Hadley",
  },
  {
    img: "/customers/steve.jpg",
    text: "Omnifood is a life saver! I just started a company, so there's no time for cooking. I couldn't live without my daily meals now!",
    name: "Steve Miller",
  },
  {
    img: "/customers/hannah.jpg",
    text: "I got Omnifood for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic.",
    name: "Hannah Smith",
  },
];

const gallery = [
  "/gallery/gallery-1.jpg",
  "/gallery/gallery-2.jpg",
  "/gallery/gallery-3.jpg",
  "/gallery/gallery-4.jpg",
  "/gallery/gallery-5.jpg",
  "/gallery/gallery-6.jpg",
  "/gallery/gallery-7.jpg",
  "/gallery/gallery-8.jpg",
  "/gallery/gallery-9.jpg",
  "/gallery/gallery-10.jpg",
  "/gallery/gallery-11.jpg",
  "/gallery/gallery-12.jpg",
];

export default function Testimonials() {
  return (
    <section className={styles.sectionTestimonials} id="testimonials">
      <div className={styles.testimonialsContainer}>
        <span className="subheading">Testimonials</span>
        <h2 className="heading-secondary">
          Once you try it, you can&apos;t go back
        </h2>
        <div className={styles.testimonials}>
          {testimonials.map((testimonial, index) => (
            <figure key={index} className="testimonial">
              <img
                className={styles.testimonialImg}
                alt={`Photo of customer ${testimonial.name}`}
                src={testimonial.img}
              />
              <blockquote className={styles.testimonialText}>
                {testimonial.text}
              </blockquote>
              <p className={styles.testimonialName}>— {testimonial.name}</p>
            </figure>
          ))}
        </div>
      </div>
      <div className={styles.gallery}>
        {gallery.map((img, index) => (
          <figure key={index} className={styles.galleryItem}>
            <img src={img} alt="Photo of beautifully arranged food" />
          </figure>
        ))}
      </div>
    </section>
  );
}
