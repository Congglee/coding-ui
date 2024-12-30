import styles from "@/styles/cta.module.css";

export default function CTA() {
  return (
    <section className={styles.sectionCta} id="cta">
      <div className="container">
        <div className={styles.cta}>
          <div className={styles.ctaTextBox}>
            <h2 className="heading-secondary">Get your first meal for free!</h2>
            <p className={styles.ctaText}>
              Healthy, tasty and hassle-free meals are waiting for you. Start
              eating well today. You can cancel or pause anytime. And the first
              meal is on us!
            </p>
            <form className={styles.ctaForm} name="sign-up">
              <div>
                <label htmlFor="full-name">Full Name</label>
                <input
                  id="full-name"
                  type="text"
                  placeholder="John Smith"
                  name="full-name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="me@example.com"
                  name="email"
                  required
                />
              </div>
              <div>
                <label htmlFor="select-where">
                  Where did you hear from us?
                </label>
                <select id="select-where" name="select-where" required>
                  <option value="">Please choose one option:</option>
                  <option value="friends">Friends and family</option>
                  <option value="youtube">YouTube video</option>
                  <option value="podcast">Podcast</option>
                  <option value="ad">Facebook ad</option>
                  <option value="others">Others</option>
                </select>
              </div>
              <button className="btn btn--form">Sign up now</button>
            </form>
          </div>
          <div
            className={styles.ctaImgBox}
            role="img"
            aria-label="Woman enjoying food"
          />
        </div>
      </div>
    </section>
  );
}
