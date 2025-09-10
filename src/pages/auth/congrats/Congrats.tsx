import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Congrats.module.css";
import { FaCheckCircle } from "react-icons/fa";

const Congrats: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className={styles.congratsContainer}>
      <div className={styles.congratsCard}>
        <div className={styles.congratsHeader}>
          <FaCheckCircle className={styles.successIcon} />
          <h1 className={styles.title}>Welcome to Travel Wild!</h1>
          <p className={styles.subtitle}>
            You have successfully logged in to your account.
          </p>
        </div>

        <div className={styles.congratsContent}>
          <p className={styles.message}>
            Get ready to explore amazing destinations and create unforgettable memories with us!
          </p>
        </div>

        <button
          onClick={handleGoHome}
          className={styles.homeButton}
        >
          Go to Home Page
        </button>
      </div>
    </div>
  );
};

export default Congrats;