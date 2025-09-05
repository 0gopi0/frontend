import { useState, useEffect } from "react";
import styles from "./BannerCarousel.module.css";

const BannerCarousel = () => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  // Banner data with Travel Wild content and Unsplash images
  const banners = [
    {
      id: 1,
      title: "Grab up to",
      highlight: "35% off",
      subtitle: "on your favorite Destination",
      description: "Limited time offer, don't miss the opportunity",
      buttonText: "Book Now",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      alt: "Adventure travel destination"
    },
    {
      id: 2,
      title: "Explore",
      highlight: "Karnataka",
      subtitle: "Discover the beauty of nature",
      description: "Experience pristine landscapes and unforgettable adventures",
      buttonText: "Explore Now",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      alt: "Mountain hiking adventure"
    },
    {
      id: 3,
      title: "Adventure",
      highlight: "Awaits",
      subtitle: "Join our thrilling expeditions",
      description: "Create memories that last a lifetime with Travel Wild",
      buttonText: "Start Adventure",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      alt: "Scenic mountain landscape"
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex((prevIndex) => 
        prevIndex === banners.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000); // Change banner every 6 seconds

    return () => clearInterval(interval);
  }, [banners.length]);

  const nextBanner = () => {
    setCurrentBannerIndex((prevIndex) => 
      prevIndex === banners.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevBanner = () => {
    setCurrentBannerIndex((prevIndex) => 
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  };

  const goToBanner = (index: number) => {
    setCurrentBannerIndex(index);
  };

  return (
    <div className={styles.bannerCarouselContainer}>
      <div className={styles.carouselWrapper}>
        <div 
          className={styles.carouselTrack}
          style={{ transform: `translateX(-${currentBannerIndex * 100}%)` }}
        >
          {banners.map((banner) => (
            <div key={banner.id} className={styles.bannerSlide}>
              <div className={styles.bannerContent}>
                <div className={styles.textSection}>
                  <div className={styles.textContent}>
                    <h2 className={styles.bannerTitle}>
                      {banner.title} <span className={styles.highlight}>{banner.highlight}</span>
                    </h2>
                    <p className={styles.bannerSubtitle}>{banner.subtitle}</p>
                    <p className={styles.bannerDescription}>{banner.description}</p>
                    <button className={styles.ctaButton}>
                      {banner.buttonText}
                    </button>
                  </div>
                </div>
                <div className={styles.imageSection}>
                  <img 
                    src={banner.image} 
                    alt={banner.alt}
                    className={styles.bannerImage}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button 
        className={styles.navArrow} 
        onClick={prevBanner}
        aria-label="Previous banner"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      
      <button 
        className={`${styles.navArrow} ${styles.navArrowRight}`} 
        onClick={nextBanner}
        aria-label="Next banner"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Indicators */}
      <div className={styles.indicators}>
        {banners.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${index === currentBannerIndex ? styles.active : ''}`}
            onClick={() => goToBanner(index)}
            aria-label={`Go to banner ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerCarousel;
