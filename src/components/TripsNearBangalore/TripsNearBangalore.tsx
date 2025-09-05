import React, { useState, useRef, useEffect } from 'react';
import styles from './TripsNearBangalore.module.css';

interface TripCardProps {
  id: number;
  title: string;
  imageUrl: string;
  price: string;
  forWomen?: boolean;
  tag?: string;
}

const TripCard: React.FC<TripCardProps> = ({ title, imageUrl, price, forWomen, tag }) => {
  return (
    <div className={styles.tripCard}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt={title} className={styles.tripImage} />
        {tag && <span className={styles.tripTag}>{tag}</span>}
      </div>
      <div className={styles.tripInfo}>
        <h3 className={styles.tripTitle}>{title}</h3>
        <p className={styles.tripPrice}>Starts From ₹{price}</p>
      </div>
    </div>
  );
};

const TripsNearBangalore: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const tripsWrapperRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);
  
  // Add event listener for window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const trips = [
    {
      id: 1,
      title: 'Uttari Betta Sunrise Trek for Women From Banglore',
      imageUrl: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=1000&auto=format&fit=crop',
      price: '999',
      forWomen: true,
      tag: '1D'
    },
    {
      id: 2,
      title: 'Horagina Betta Sunrise Trek',
      imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop',
      price: '999',
      tag: '1D'
    },
    {
      id: 3,
      title: 'Ravugodlu Sunrise Trek from Banglore',
      imageUrl: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1000&auto=format&fit=crop',
      price: '999',
      tag: '1D'
    },
    {
      id: 4,
      title: 'SRS sunrise Trek from Banglore',
      imageUrl: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1000&auto=format&fit=crop',
      price: '999',
      tag: '1D'
    },
    {
      id: 5,
      title: 'Anthargange Night Trek',
      imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop',
      price: '1299',
      tag: '1D'
    },
    {
      id: 6,
      title: 'Nandi Hills Sunrise Trek',
      imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop',
      price: '899',
      tag: '1D'
    },
    {
      id: 7,
      title: 'Makalidurga Night Trek',
      imageUrl: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1000&auto=format&fit=crop',
      price: '1199',
      tag: '1D'
    },
    {
      id: 8,
      title: 'Skandagiri Sunrise Trek',
      imageUrl: 'https://images.unsplash.com/photo-1517427677506-ade074eb1432?q=80&w=1000&auto=format&fit=crop',
      price: '1099',
      tag: '1D'
    }
  ];

  // Calculate total pages based on screen size
  const itemsPerPage = isMobile ? 1 : 4;
  const totalPages = Math.ceil(trips.length / itemsPerPage);

  const goToPage = (pageIndex: number) => {
    if (pageIndex >= 0 && pageIndex < totalPages) {
      setCurrentPage(pageIndex);
    }
  };

  const displayedTrips = trips.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  return (
    <section className={styles.tripsNearBangaloreSection}>
      <div className={styles.sectionHeader}>
        <p className={styles.subHeading}>Explore the Karnataka with These Upcoming Trips</p>
        <h2 className={styles.heading}>Trips & Treks Near Bangaluru</h2>
      </div>
      
      <div className={styles.tripsContainer}>
        <div className={styles.tripsWrapper} ref={tripsWrapperRef}>
          {displayedTrips.map(trip => (
            <TripCard 
              key={trip.id}
              id={trip.id}
              title={trip.title}
              imageUrl={trip.imageUrl}
              price={trip.price}
              forWomen={trip.forWomen}
              tag={trip.tag}
            />
          ))}
        </div>
      </div>
      
      <div className={styles.pagination}>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button 
            key={index} 
            className={`${styles.paginationDot} ${index === currentPage ? styles.activeDot : ''}`}
            onClick={() => goToPage(index)}
            aria-label={`Page ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default TripsNearBangalore;