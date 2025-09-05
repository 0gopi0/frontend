import React, { useState } from 'react';
import styles from './FAQ.module.css';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqData = [
    {
        question: 'What does without travel expenses option Mean?',
        answer:
          'This option means that the package price does not include transportation costs to and from the starting point of the trek. You will need to arrange your own travel to the base camp.',
      },
      {
        question: 'Do you customize Tour or Trekkings?',
        answer:
          'Yes, we offer customized tours and treks for groups. Please contact our support team with your requirements, and we will create a personalized itinerary for you.',
      },
      {
        question: 'Where all your departures start from?',
        answer:
          'Our departure points vary depending on the trek. Most of our treks near Bangalore start from a common meeting point in the city, which will be communicated to you upon booking.',
      },
      {
        question: 'What is the minimum & Maximum count of people you to take on the trip?',
        answer:
          'The group size varies for each trek, but typically we require a minimum of 8-10 participants and a maximum of 20-25. This ensures a safe and enjoyable experience for everyone.',
      },
      {
        question: 'I am a solo traveler can i join your treks?',
        answer:
          'Absolutely! We welcome solo travelers on all our treks. It’s a great way to meet like-minded people and make new friends.',
      },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.subHeading}>FAQ's</p>
          <h2 className={styles.heading}>Commonly Asked Questions at Travel Wild</h2>
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.imageContainer}>
            <img src="https://images.unsplash.com/photo-1554062062-e35c29f0f455?q=80&w=705&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Trekking adventure" className={styles.faqImage} />
          </div>
          <div className={styles.faqWrapper}>
            {faqData.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <button className={styles.faqQuestion} onClick={() => toggleFAQ(index)}>
                  <span>{faq.question}</span>
                  <span className={styles.icon}>
                    {openIndex === index ? <FaMinus /> : <FaPlus />}
                  </span>
                </button>
                <div
                  className={`${styles.faqAnswer} ${
                    openIndex === index ? styles.open : ''
                  }`}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;