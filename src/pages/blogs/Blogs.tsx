import styles from "./Blogs.module.css";

const Blogs = () => {
  return (
    <>
      <div className={styles.bannerContainer}>
        <div className={styles.bannerOverlay}>
          <h1 className={styles.bannerTitle}>Blogs</h1>
          <p className={styles.bannerSubtitle}>
            Discover amazing travel stories and adventure tips
          </p>
        </div>
      </div>
    </>
  );
};

export default Blogs;
