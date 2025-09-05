import React, { useState, useEffect, useRef } from 'react';
import styles from './Testimonials.module.css';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonialsData = [
  {
    id: 1,
    name: 'Jane Doe',
    title: 'Adventure Seeker',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D',
    review: 'Travel Wild provided an unforgettable experience! The guides were professional, the locations breathtaking, and every detail was perfectly managed. Highly recommend for anyone looking for a true adventure.',
  },
  {
    id: 2,
    name: 'John Smith',
    title: 'Corporate Trekker',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop',
    review: 'Our corporate team building trek with Travel Wild was a huge success. The custom itinerary suited our needs perfectly, and the team came back energized and cohesive. Excellent service!',
  },
  {
    id: 3,
    name: 'Emily White',
    title: 'Solo Explorer',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop',
    review: 'As a solo traveler, I felt completely safe and included on my trip with Travel Wild. It was an amazing opportunity to explore new places and meet incredible people. I\'m already planning my next trip!',
  },
  {
    id: 4,
    name: 'Michael Brown',
    title: 'Nature Lover',
    avatar: 'https://images.unsplash.com/photo-1722322426803-101270837197?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjBwaWN8ZW58MHx8MHx8fDA%3D',
    review: 'The beauty of Karnataka was truly unveiled through Travel Wild\'s expertly curated trek. Every moment was a joy, from the scenic trails to the comfortable accommodations. A five-star experience!',
  },
];

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const timeoutRef = useRef<number | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() =>
      setCurrentTestimonial((prev) =>
        prev === testimonialsData.length - 1 ? 0 : prev + 1
      ),
      7000
    );

    return () => {
      resetTimeout();
    };
  }, [currentTestimonial]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.subHeading}>What Our Clients Say</p>
          <h2 className={styles.heading}>Testimonials</h2>
        </div>
        <div className={styles.sliderContainer}>
          <button className={styles.navButton} onClick={prevTestimonial}>
            <FaChevronLeft />
          </button>
          <div className={styles.testimonialCardsContainer}> {/* New wrapper for cards */}
            <div
              className={styles.testimonialCardsInner}
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonialsData.map((testimonial) => (
                <div key={testimonial.id} className={styles.testimonialCard}>
                  <FaQuoteLeft className={styles.quoteIcon} />
                  <p className={styles.reviewText}>{testimonial.review}</p>
                  <div className={styles.reviewerInfo}>
                    <img src={testimonial.avatar} alt={testimonial.name} className={styles.reviewerAvatar} />
                    <div className={styles.reviewerDetails}>
                      <h3 className={styles.reviewerName}>{testimonial.name}</h3>
                      <p className={styles.reviewerTitle}>{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className={styles.navButton} onClick={nextTestimonial}>
            <FaChevronRight />
          </button>
        </div>
        <div className={styles.dotsContainer}>
          {testimonialsData.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${index === currentTestimonial ? styles.activeDot : ''}`}
              onClick={() => setCurrentTestimonial(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;