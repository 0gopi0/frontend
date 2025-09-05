import React from 'react';
import styles from './WhyChooseUs.module.css';
import { FaGem, FaShieldAlt, FaUserTie } from 'react-icons/fa';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className={styles.featureItem}>
      <div className={styles.featureIcon}>{icon}</div>
      <div className={styles.featureContent}>
        <h3 className={styles.featureTitle}>{title}</h3>
        <p className={styles.featureDescription}>{description}</p>
      </div>
    </div>
  );
};

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <FaGem />,
      title: 'Exclusive Trip',
      description: "Handpicked trips to explore Karnataka's hidden gems."
    },
    {
      icon: <FaShieldAlt />,
      title: 'Safety First Always',
      description: 'We prioritize your safety on every adventure.'
    },
    {
      icon: <FaUserTie />,
      title: 'Professional Guide',
      description: 'Expert guides to enhance your travel experience.'
    },
    {
      icon: <FaUserTie />,
      title: 'Professional Guide',
      description: 'Expert guides to enhance your travel experience.'
    }
  ];

  return (
    <section className={styles.whyChooseUsSection}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <h4 className={styles.subHeading}>Why Choose Travel Wild</h4>
            <h2 className={styles.heading}>Your Travel, Our Passion</h2>
            <p className={styles.description}>
              At Travel Wild, we provide unique trips that showcase the beauty of
              Karnataka with a focus on safety and expert guidance.
            </p>
            <div className={styles.featuresList}>
              {features.map((feature, index) => (
                <FeatureItem
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
          <div className={styles.imageContent}>
            <img 
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop" 
              alt="Luxury resort with swimming pool" 
              className={styles.resortImage} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;