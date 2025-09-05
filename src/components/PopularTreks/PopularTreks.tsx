import React, { useState, useRef, useEffect } from 'react';
import styles from './PopularTreks.module.css';

interface TrekCardProps {
  id: number;
  title: string;
  imageUrl: string;
  price: string;
  duration?: string;
  difficulty?: string;
}

const TrekCard: React.FC<TrekCardProps> = ({ title, imageUrl, price, duration, difficulty }) => {
  return (
    <div className={styles.trekCard}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt={title} className={styles.trekImage} />
        {difficulty && <span className={styles.difficultyTag}>{difficulty}</span>}
      </div>
      <div className={styles.trekInfo}>
        <h3 className={styles.trekTitle}>{title}</h3>
        {duration && <p className={styles.trekDuration}>{duration}</p>}
        <p className={styles.trekPrice}>Starts From ₹{price}</p>
      </div>
    </div>
  );
};

const PopularTreks: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const treksWrapperRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);
  
  // Add event listener for window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const treks = [
    {
      id: 1,
      title: 'Kudremukh Trek',
      imageUrl: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1000&auto=format&fit=crop',
      price: '2499',
      duration: '2 Days',
      difficulty: 'Moderate'
    },
    {
      id: 2,
      title: 'Kumara Parvatha Trek',
      imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop',
      price: '2899',
      duration: '2 Days',
      difficulty: 'Hard'
    },
    {
      id: 3,
      title: 'Tadiandamol Trek',
      imageUrl: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=1000&auto=format&fit=crop',
      price: '1999',
      duration: '1 Day',
      difficulty: 'Easy'
    },
    {
      id: 4,
      title: 'Kodachadri Trek',
      imageUrl: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1000&auto=format&fit=crop',
      price: '2299',
      duration: '2 Days',
      difficulty: 'Moderate'
    },
    {
      id: 5,
      title: 'Skandagiri Night Trek',
      imageUrl: 'https://images.unsplash.com/photo-1517427677506-ade074eb1432?q=80&w=1000&auto=format&fit=crop',
      price: '1499',
      duration: '1 Day',
      difficulty: 'Easy'
    },
    {
      id: 6,
      title: 'Savandurga Trek',
      imageUrl: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1000&auto=format&fit=crop',
      price: '1299',
      duration: '1 Day',
      difficulty: 'Moderate'
    },
    {
      id: 7,
      title: 'Mullayanagiri Trek',
      imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop',
      price: '1899',
      duration: '1 Day',
      difficulty: 'Easy'
    },
    {
      id: 8,
      title: 'Netravati Trek',
      imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop',
      price: '2199',
      duration: '2 Days',
      difficulty: 'Moderate'
    }
  ];

  // Calculate total pages based on screen size
  const itemsPerPage = isMobile ? 1 : 4;
  const totalPages = Math.ceil(treks.length / itemsPerPage);

  const goToPage = (pageIndex: number) => {
    if (pageIndex >= 0 && pageIndex < totalPages) {
      setCurrentPage(pageIndex);
    }
  };

  const displayedTreks = treks.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  return (
    <section className={styles.popularTreksSection}>
      <div className={styles.sectionHeader}>
        <p className={styles.subHeading}>Discover the Best Trekking Experiences in Karnataka</p>
        <h2 className={styles.heading}>Popular Treks & Trips</h2>
      </div>
      
      <div className={styles.treksContainer}>
        <div className={styles.treksWrapper} ref={treksWrapperRef}>
          {displayedTreks.map(trek => (
            <TrekCard 
              key={trek.id}
              id={trek.id}
              title={trek.title}
              imageUrl={trek.imageUrl}
              price={trek.price}
              duration={trek.duration}
              difficulty={trek.difficulty}
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

export default PopularTreks;