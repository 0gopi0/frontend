import React, { useState, useRef } from 'react';
import styles from './UpcomingEvents.module.css';

interface EventCardProps {
  id: number;
  title: string;
  imageUrl: string;
  price: string;
  location?: string;
  tag?: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, imageUrl, price, location, tag }) => {
  return (
    <div className={styles.eventCard}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt={title} className={styles.eventImage} />
        {tag && <span className={styles.eventTag}>{tag}</span>}
      </div>
      <div className={styles.eventInfo}>
        <h3 className={styles.eventTitle}>{title}</h3>
        {location && <p className={styles.eventLocation}>{location}</p>}
        <p className={styles.eventPrice}>Starts From ₹{price}</p>
      </div>
    </div>
  );
};

const UpcomingEvents: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const eventsWrapperRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);
  
  // Add event listener for window resize
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const events = [
    {
      id: 1,
      title: 'Netravathi Home Stay',
      imageUrl: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1000&auto=format&fit=crop',
      price: '1999',
      location: 'Chikmagalur'
    },
    {
      id: 2,
      title: 'Netravathi One Day Trek from Bangalore',
      imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop',
      price: '1099',
      location: 'Chikmagalur'
    },
    {
      id: 3,
      title: 'Kudremukh Trek From Bangalore',
      imageUrl: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=1000&auto=format&fit=crop',
      price: '2499',
      tag: '20/7'
    },
    {
      id: 4,
      title: 'Netravathi Trek from Bangalore',
      imageUrl: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1000&auto=format&fit=crop',
      price: '2599',
      tag: '20/7'
    },
    {
      id: 5,
      title: 'Hampi Heritage Tour',
      imageUrl: 'https://images.unsplash.com/photo-1517427677506-ade074eb1432?q=80&w=1000&auto=format&fit=crop',
      price: '3499',
      location: 'Hampi'
    },
    {
      id: 6,
      title: 'Coorg Coffee Plantation Stay',
      imageUrl: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1000&auto=format&fit=crop',
      price: '2799',
      location: 'Coorg'
    },
    {
      id: 7,
      title: 'Gokarna Beach Trek',
      imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop',
      price: '1899',
      tag: '15/8'
    },
    {
      id: 8,
      title: 'Kabini Wildlife Safari',
      imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop',
      price: '4299',
      location: 'Kabini'
    }
  ];

  // Calculate total pages based on screen size
  const itemsPerPage = isMobile ? 1 : 4;
  const totalPages = Math.ceil(events.length / itemsPerPage);

  const goToPage = (pageIndex: number) => {
    if (pageIndex >= 0 && pageIndex < totalPages) {
      setCurrentPage(pageIndex);
    }
  };

  const displayedEvents = events.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  return (
    <section className={styles.upcomingEventsSection}>
      <div className={styles.sectionHeader}>
        <p className={styles.subHeading}>Explore the Karnataka with These Upcoming Trips</p>
        <h2 className={styles.heading}>Upcoming Events</h2>
      </div>
      
      <div className={styles.eventsContainer}>
        <div className={styles.eventsWrapper} ref={eventsWrapperRef}>
          {displayedEvents.map(event => (
            <EventCard 
              key={event.id}
              id={event.id}
              title={event.title}
              imageUrl={event.imageUrl}
              price={event.price}
              location={event.location}
              tag={event.tag}
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

export default UpcomingEvents;