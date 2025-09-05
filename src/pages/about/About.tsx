import { useState, useEffect } from "react";
import styles from "./About.module.css";
import CorporateClients from "../../components/CorporateClients/CorporateClients";
import BannerCarousel from "../../components/BannerCarousel/BannerCarousel";

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Travel-related images from Unsplash
  const carouselImages = [
    {
      url: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      alt: "Mountain hiking adventure"
    },
    {
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      alt: "Beautiful forest trail"
    },
    {
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      alt: "Scenic mountain landscape"
    },
    {
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      alt: "Adventure travel destination"
    }
  ];

  // Travel Wild points
  const travelPoints = [
    "We as an Adventure Travel company aim to show you nice people the most beautiful and pristine places in Karnataka.",
    "Preserving the cleanliness & beauty of our beautiful land is our topmost priority",
    "Go deep into nature",
    "Hike to see the beauty of the sunrise",
    "Trek to beautiful mountains",
    "Dip in the beaches of our beautiful coast.",
    "Hike through the mystical rainforest of the Western Ghats",
    "Experience Karnataka's beauty"
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <>
      <div className={styles.bannerContainer}>
        <div className={styles.bannerOverlay}>
          <h1 className={styles.bannerTitle}>About Us</h1>
        </div>
      </div>

      <div className={styles.aboutSection}>
        <div className={styles.container}>
          <div className={styles.leftContainer}>
            <h2 className={styles.aboutTitle}>Why Travel Wild Trip?</h2>
            <div className={styles.pointsList}>
              {travelPoints.map((point, index) => (
                <div key={index} className={styles.pointItem}>
                  <div className={styles.tickIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="#22c55e"/>
                    </svg>
                  </div>
                  <p className={styles.pointText}>{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.rightContainer}>
            <div className={styles.carouselContainer}>
              <div className={styles.carouselWrapper}>
                <div 
                  className={styles.carouselTrack}
                  style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                >
                  {carouselImages.map((image, index) => (
                    <div key={index} className={styles.carouselSlide}>
                      <img 
                        src={image.url} 
                        alt={image.alt}
                        className={styles.carouselImage}
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              <button 
                className={styles.carouselArrow} 
                onClick={prevImage}
                aria-label="Previous image"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              <button 
                className={`${styles.carouselArrow} ${styles.carouselArrowRight}`} 
                onClick={nextImage}
                aria-label="Next image"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              <div className={styles.carouselIndicators}>
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    className={`${styles.indicator} ${index === currentImageIndex ? styles.active : ''}`}
                    onClick={() => goToImage(index)}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <CorporateClients/>
      <BannerCarousel/>
    </>
  );
};

export default About;

