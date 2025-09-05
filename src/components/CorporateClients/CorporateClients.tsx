import React from 'react';
import styles from './CorporateClients.module.css';

const clientLogos = [
  {
    id: 1,
    name: 'Google',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
  },
  {
    id: 2,
    name: 'Microsoft',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg',
  },
  {
    id: 3,
    name: 'Amazon',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
  },
  {
    id: 4,
    name: 'Facebook',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg',
  },
  {
    id: 5,
    name: 'Apple',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
  },
  {
    id: 6,
    name: 'Netflix',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
  },
];

const CorporateClients: React.FC = () => {
  return (
    <section className={styles.clientsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.subHeading}>Proudly Showcasing Our Valued Clients</p>
          <h2 className={styles.heading}>Corporate Clients</h2>
        </div>
        <div className={styles.logosWrapper}>
          {clientLogos.map((client) => (
            <div key={client.id} className={styles.logoContainer}>
              <img src={client.logo} alt={client.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorporateClients;