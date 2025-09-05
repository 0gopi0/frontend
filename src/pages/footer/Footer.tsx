// Footer.tsx
import { Link } from "react-router-dom";
import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/logo.png";

const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={styles.icon}
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={styles.icon}
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const LocationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={styles.icon}
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={styles.socialIcon}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={styles.socialIcon}
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={styles.socialIcon}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const YoutubeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={styles.socialIcon}
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17Z" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* About Section */}
        <div className={styles.aboutSection}>
          <img src={logo} alt="Trawel Wild Trip Logo" className={styles.logo} />
          <h3 className={styles.heading}>About Trawel Wild trip</h3>
          <p className={styles.text}>
            We as an Adventure Travel company aim to show you nice people the
            most beautiful and pristine places in Karnataka.
          </p>
          <button className={styles.sitemapButton}>Sitemap</button>
        </div>

        {/* Links Section */}
        <div className={styles.linksSection}>
          <h3 className={styles.heading}>Our Company</h3>
          <ul className={styles.linkList}>
            {[
              "Home",
              "About us",
              "Blogs",
              "Career",
              "Privacy Policy",
              "Refund and Returns Policy",
              "Terms & Conditions",
              "Pay Now",
            ].map((text, idx) => (
              <li className={styles.linkListItem} key={text}>
                <Link
                  to={`/${text.replace(/\s+/g, "-").toLowerCase()}`}
                  className={styles.link}
                >
                  → {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Destinations Section */}
        <div className={styles.linksSection}>
          <h3 className={styles.heading}>Destinations</h3>
          <ul className={styles.linkList}>
            {[
              "Dubai",
              "Goa",
              "Karnataka",
              "Kerala",
              "Ooty",
              "Dakshina Kannada",
              "Coorg",
            ].map((text, idx) => (
              <li className={styles.linkListItem} key={text}>
                <a href="#" className={styles.link}>
                  → {text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Address Section */}
        <div className={styles.addressSection}>
          <h3 className={styles.heading}>Address</h3>
          <ul className={styles.addressList}>
            <li className={styles.addressListItem}>
              <MailIcon />
              <div className={styles.addressTextContainer}>
                <span>support@trawelwildtrip.in</span>
                <span>trawelwildtrip1@gmail.com</span>
              </div>
            </li>
            <li className={styles.addressListItem}>
              <PhoneIcon />
              <div className={styles.addressTextContainer}>
                <span>8328212741</span>
              </div>
            </li>
            <li className={styles.addressListItem}>
              <LocationIcon />
              <span>
                #TrawelWild Trip, HSR layout, 1st Sector, Bangalore 560098
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright and Social Media Section */}
      <div className={styles.bottomBar}>
        <p>
          © Copyright 2025{" "}
          <a href="#" className={styles.companyLink}>
            Trawel Wild Trip
          </a>
          . All Rights Reserved.
        </p>
        <div className={styles.socialLinks}>
          <a href="#" className={styles.socialLink}>
            <FacebookIcon />
          </a>
          <a href="#" className={styles.socialLink}>
            <XIcon />
          </a>
          <a href="#" className={styles.socialLink}>
            <InstagramIcon />
          </a>
          <a href="#" className={styles.socialLink}>
            <YoutubeIcon />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
