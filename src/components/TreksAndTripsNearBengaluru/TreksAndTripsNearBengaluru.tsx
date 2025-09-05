import React, { useState } from 'react';
import styles from './TreksAndTripsNearBengaluru.module.css';

const tabData = [
  {
    id: 1,
    title: 'Things to do on a one day outing in Bangalore',
    description:
      'Thirsty for a new kind of nature experience, have only one day in hand to try something new, away from the city, walking in the midst of wilderness, finding the glorious mountains enveloped with first rays of the sun, sitting on the highest peak of the roughest mountains of Karnataka, climbing the deep cut rock formations to the top and breathing in the fresh air while catching the sunrise. Trekking in India is a must in your ‘Things-To-Do’ list of adventurous places, to visit in Bangalore whenever you are in Karnataka. Karnataka Tourism is constantly promoting the beauty and serenity of the magnificent mountains, inviting nature lovers, adventure enthusiast and trekkers to safeguard and preserve its rich greenery.',
    image:
      'https://images.unsplash.com/photo-1431794062232-2a99a5431c6c?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Explore The Best Sunrise Trekking Near Bangalore',
    description:
      'Trek and looking for the best sunrise treks and new places to visit in Bangalore. Experience breathtaking sunrise view from the highest mountain peaks, by trekking through the rough terrains with Namma Trip. Plan these edgy trekking tours with your buddies on a one day outing in Bangalore. Namma trip’s carefully curated and well organized treks will definitely give the adrenaline rush you are looking for. To breathe is to travel, to live is to travel. Climb, trek, feel, live and breathe in the mountains of Karnataka. Since its inception in 2017, Namma Trip has provided trekkers, adventure seekers and travelers from all across India, a sense of ‘oneness’ with Nature. Having organized more than 1000 treks around Bangalore over the years, choosing our adventurous treks will make you come back for more.',
    image:
      'https://images.unsplash.com/photo-1506749531272-2f6810e097c9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const TreksAndTripsNearBengaluru: React.FC = () => {
  const [activeTab, setActiveTab] = useState(1);
  const activeContent = tabData.find((tab) => tab.id === activeTab);

  return (
    <section className={styles.treksTripsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.subHeading}>Exploring Nature's Wonders</p>
          <h2 className={styles.heading}>Treks And Trips Near Bangalore</h2>
        </div>
        <div className={styles.tabs}>
          {tabData.map((tab) => (
            <button
              key={tab.id}
              className={`${styles.tabButton} ${
                activeTab === tab.id ? styles.active : ''
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.id}
            </button>
          ))}
           <div className={styles.line}></div>
        </div>
        {activeContent && (
          <div className={styles.tabContent}>
            <div className={styles.imageContainer}>
              <img
                src={activeContent.image}
                alt={activeContent.title}
                className={styles.contentImage}
              />
            </div>
            <div className={styles.textContainer}>
              <h3 className={styles.contentTitle}>{activeContent.title}</h3>
              <p className={styles.contentDescription}>
                {activeContent.description}
              </p>
              <button className={styles.viewAllButton}>View All Tour</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TreksAndTripsNearBengaluru;