import { useState, useEffect } from "react";
import styles from "./Home.module.css";
import goa from "../../assets/goa.jpg";
import hyderabad from "../../assets/hyderabad.jpg";
import kerala from "../../assets/kerala.jpg";
import TourCategories from "../../components/TourCategories/TourCategories";
import UpcomingEvents from "../../components/UpcomingEvents/UpcomingEvents";
import PopularTreks from "../../components/PopularTreks/PopularTreks";
import TripsNearBangalore from "../../components/TripsNearBangalore/TripsNearBangalore";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import TreksAndTripsNearBengaluru from "../../components/TreksAndTripsNearBengaluru/TreksAndTripsNearBengaluru";
import FAQ from "../../components/FAQ/FAQ";
import CorporateClients from "../../components/CorporateClients/CorporateClients";
import Testimonials from "../../components/Testimonials/Testimonials";
import EmailSubscribe from "../../components/EmailSubscribe/EmailSubscribe";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: goa,
      alt: "Goa",
    },
    {
      id: 2,
      image: hyderabad,
      alt: "Hyderabad",
    },
    {
      id: 3,
      image: kerala,
      alt: "Kerala",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <div className={styles.heroContainer}>
        <div className={styles.sliderContainer}>
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`${styles.slide} ${
                index === currentSlide ? styles.active : ""
              }`}
            >
              <img src={slide.image} alt={slide.alt} />
            </div>
          ))}

          {/* Hero Content Overlay */}
          <div className={styles.heroContent}>
            <p className={styles.tagline}>
              Explore the World, Create Memories, Embrace Adventure!
            </p>
            <h1 className={styles.heading}>Embrace Adventure</h1>

            <div className={styles.buttonGroup}>
              <button className={styles.btn}>View More</button>
              <button className={styles.btn}>Find Packages</button>
            </div>

            <div className={styles.searchContainer}>
              <input
                type="text"
                placeholder="Search Your Destination, Categories, Events"
                className={styles.searchInput}
              />
              <button className={styles.searchBtn}>Search Here</button>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button className={styles.navArrow} onClick={prevSlide}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M18 15L12 9L6 L5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className={styles.navArrow} onClick={nextSlide}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 9L12 15L18 9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Slide Indicators */}
          <div className={styles.indicators}>
            {slides.map((_, index) => (
              <button
                key={index}
                className={`${styles.indicator} ${
                  index === currentSlide ? styles.activeIndicator : ""
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
      <TourCategories />
      <UpcomingEvents />
      <PopularTreks />
      <TripsNearBangalore />
      <WhyChooseUs />
      <TreksAndTripsNearBengaluru />
      <FAQ />
      <CorporateClients />
      <Testimonials />
      <EmailSubscribe />
    </>
  );
};

export default Home;
