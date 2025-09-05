import { useState } from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      number: '',
      subject: '',
      message: ''
    });
  };

  return (
    <>
      <div className={styles.bannerContainer}>
        <div className={styles.bannerOverlay}>
          <h1 className={styles.bannerTitle}>Contact Us</h1>
          <p className={styles.bannerSubtitle}>
            Get in touch with Travel Wild for your next adventure
          </p>
        </div>
      </div>

      <div className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.leftContainer}>
            <h2 className={styles.sectionTitle}>Get in Touch</h2>
            <p className={styles.sectionDescription}>
              Ready to embark on your next adventure?
            </p>
            
            <div className={styles.contactCards}>
              <div className={styles.contactCard}>
                <div className={styles.iconContainer}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
                  </svg>
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>Our Address</h3>
                  <p className={styles.cardText}>
                    #Travel Wild, Near Shanmugam Temple Road,<br />
                    Rajarajeshwarinagar, Bangalore 560098
                  </p>
                </div>
              </div>

              <div className={styles.contactCard}>
                <div className={styles.iconContainer}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor"/>
                  </svg>
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>Our Contact</h3>
                  <p className={styles.cardText}>
                    For Backpacking Trips: 9035418999<br />
                    For Two Day Trek: 9980950279
                  </p>
                </div>
              </div>

              <div className={styles.contactCard}>
                <div className={styles.iconContainer}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
                  </svg>
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>Our Email</h3>
                  <p className={styles.cardText}>
                    support@travelwild.in<br />
                    travelwild1@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.rightContainer}>
            <div className={styles.imageFrame}>
              <img 
                src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                alt="Adventure travel destination"
                className={styles.adventureImage}
              />
              <div className={styles.imageOverlay}>
                <div className={styles.overlayContent}>
                  <h3 className={styles.overlayTitle}>Start Your Adventure</h3>
                  <p className={styles.overlayText}>Experience the beauty of Karnataka</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className={styles.formBannerContainer}>
        <div className={styles.formBannerOverlay}>
          <div className={styles.formContainer}>
            <div className={styles.formLeftContent}>
              <h2 className={styles.formTitle}>Get in touch</h2>
              <h3 className={styles.formMainHeading}>Hi there! What can I do for you today?</h3>
              <p className={styles.formDescription}>
                We'd love to hear from you. Our friendly team is always here to chat and help you plan your next amazing adventure with Travel Wild.
              </p>
            </div>

            <div className={styles.formRightContent}>
              <form className={styles.contactForm} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <div className={styles.inputContainer}>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name *"
                      className={styles.formInput}
                      required
                    />
                    <div className={styles.inputIcon}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <div className={styles.inputContainer}>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email *"
                      className={styles.formInput}
                      required
                    />
                    <div className={styles.inputIcon}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <div className={styles.inputContainer}>
                    <input
                      type="tel"
                      name="number"
                      value={formData.number}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number *"
                      className={styles.formInput}
                      required
                    />
                    <div className={styles.inputIcon}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor"/>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <div className={styles.inputContainer}>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Enter your subject *"
                      className={styles.formInput}
                      required
                    />
                    <div className={styles.inputIcon}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" fill="currentColor"/>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <div className={styles.inputContainer}>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Enter your message *"
                      className={`${styles.formInput} ${styles.textareaInput}`}
                      rows={4}
                      required
                    />
                    <div className={styles.inputIcon}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" fill="currentColor"/>
                      </svg>
                    </div>
                  </div>
                </div>

                <button type="submit" className={styles.submitButton}>
                  Send Message
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" fill="currentColor"/>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Google Maps Section */}
      <div className={styles.mapSection}>
        <div className={styles.mapContainer}>
          <div className={styles.mapHeader}>
            <h2 className={styles.mapTitle}>Find Us</h2>
            <p className={styles.mapSubtitle}>Visit our office in Bangalore</p>
          </div>
          
          <div className={styles.mapWrapper}>
            <div 
              className={styles.mapPlaceholder}
              onClick={() => window.open('https://maps.google.com/?q=Travel+Wild,+Near+Shanmugam+Temple+Road,+Rajarajeshwarinagar,+Bangalore+560098', '_blank')}
            >
              <div className={styles.mapOverlay}>
                <div className={styles.mapInfo}>
                  <h3 className={styles.mapLocationTitle}>Travel Wild Office</h3>
                  <p className={styles.mapAddress}>
                    Near Shanmugam Temple Road,<br />
                    Rajarajeshwarinagar,<br />
                    Bangalore 560098, Karnataka
                  </p>
                  <button className={styles.mapButton}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
                    </svg>
                    View on Google Maps
                  </button>
                </div>
              </div>
              
              {/* Map Image Placeholder */}
              <div className={styles.mapImage}>
                <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                  alt="Map location of Travel Wild office in Bangalore"
                  className={styles.mapImageContent}
                />
                <div className={styles.mapPin}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#22c55e"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
