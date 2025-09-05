import React, { useRef } from 'react';
import styles from './TourCategories.module.css';

interface TourCategoryProps {
  title: string;
  imageUrl: string;
  eventCount: number;
}

const TourCategoryCard: React.FC<TourCategoryProps> = ({ title, imageUrl, eventCount }) => {
  return (
    <div className={styles.categoryCard}>
      <img src={imageUrl} alt={title} className={styles.categoryImage} />
      <div className={styles.categoryInfo}>
        <h3 className={styles.categoryTitle}>{title}</h3>
        <p className={styles.eventCount}>{eventCount} Events</p>
      </div>
    </div>
  );
};

const TourCategories: React.FC = () => {
  const categoriesWrapperRef = useRef<HTMLDivElement>(null);
  
  const scrollLeft = () => {
    if (categoriesWrapperRef.current) {
      categoriesWrapperRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (categoriesWrapperRef.current) {
      categoriesWrapperRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };
  
  const categories = [
    {
      id: 1,
      title: 'One day Trips',
      imageUrl: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1000&auto=format&fit=crop',
      eventCount: 12
    },
    {
      id: 2,
      title: 'Water Sports',
      imageUrl: 'https://images.unsplash.com/photo-1530866495561-507c9faab2ed?q=80&w=1000&auto=format&fit=crop',
      eventCount: 1
    },
    {
      id: 3,
      title: 'Two Days Trek',
      imageUrl: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1000&auto=format&fit=crop',
      eventCount: 15
    },
    {
      id: 4,
      title: 'All Tours',
      imageUrl: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1000&auto=format&fit=crop',
      eventCount: 63
    },
    {
      id: 5,
      title: 'One day outing',
      imageUrl: 'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?q=80&w=1000&auto=format&fit=crop',
      eventCount: 6
    },
    {
      id: 6,
      title: 'Upcoming Treks And Trips Bangalore',
      imageUrl: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1000&auto=format&fit=crop',
      eventCount: 5
    },
    {
      id: 7,
      title: 'Weekend Getaways',
      imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1000&auto=format&fit=crop',
      eventCount: 8
    },
    {
      id: 8,
      title: 'Adventure Tours',
      imageUrl: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=1000&auto=format&fit=crop',
      eventCount: 10
    },
    {
      id: 9,
      title: 'Cultural Experiences',
      imageUrl: 'https://images.unsplash.com/photo-1513581166391-887a96ddeafd?q=80&w=1000&auto=format&fit=crop',
      eventCount: 7
    },
    {
      id: 10,
      title: 'Wildlife Safaris',
      imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1000&auto=format&fit=crop',
      eventCount: 4
    },
  ];

  return (
    <section className={styles.tourCategoriesSection}>
      <div className={styles.sectionHeader}>
        <p className={styles.subHeading}>Wonderful Place For You</p>
        <h2 className={styles.heading}>Tour Categories</h2>
      </div>
      
      <div className={styles.categoriesContainer}>
        <button 
          className={`${styles.navButton} ${styles.prevButton}`}
          onClick={scrollLeft}
          aria-label="Previous categories"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        
        <div className={styles.categoriesWrapper} ref={categoriesWrapperRef}>
          {categories.map(category => (
            <TourCategoryCard 
              key={category.id}
              title={category.title}
              imageUrl={category.imageUrl}
              eventCount={category.eventCount}
            />
          ))}
        </div>
        
        <button 
          className={`${styles.navButton} ${styles.nextButton}`}
          onClick={scrollRight}
          aria-label="Next categories"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      
      <div className={styles.viewMoreContainer}>
        <button className={styles.viewMoreButton}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className={styles.arrowIcon}>
            <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          View More
        </button>
      </div>
    </section>
  );
};

export default TourCategories;