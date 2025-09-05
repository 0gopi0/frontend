import React from "react";
import styles from "./EmailSubscribe.module.css";
import { FaEnvelope } from "react-icons/fa";

const EmailSubscribe: React.FC = () => {
  return (
    <section className={styles.subscribeSection}>
      <div className={styles.container}>
        <div className={styles.iconWrapper}>
          <FaEnvelope className={styles.emailIcon} aria-label="Envelope Icon" />
        </div>
        <h2 className={styles.heading}>Your Travel Journey Starts Here</h2>
        <div className={styles.divider}></div>
        <p className={styles.subHeading}>
          Sign up and we'll send the best deals to you
        </p>
        <form className={styles.subscribeForm} autoComplete="off">
          <div className={styles.inputWrapper}>
            <input
              type="email"
              placeholder="Enter your email *"
              className={styles.emailInput}
              autoComplete="email"
              aria-label="Email address"
              required
            />
            <FaEnvelope className={styles.inputIcon} />
          </div>
          <button type="submit" className={styles.subscribeButton}>
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSubscribe;
