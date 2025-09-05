import { NavLink, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import { FaPlus, FaMinus, FaBars, FaTimes } from "react-icons/fa";

import logo from "../../assets/logo.png"; // Assuming you have a logo image
import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [mobileSubMenu, setMobileSubMenu] = useState("");
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMouseEnter = (menu: string) => {
    if (!isMobile) {
      setIsMenuOpen(menu);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsMenuOpen("");
    }
  };

  const handleMobileSubMenuToggle = (menu: string) => {
    setMobileSubMenu(mobileSubMenu === menu ? "" : menu);
  };

  const isSubMenuActive = (path: string) => {
    return location.pathname.startsWith(path);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="logo" className={styles.img} />
      </div>
      <div className={styles.hamburger} onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <nav
        className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ""}`}
      >
        <ul className={styles.listContainer}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
            >
              Home
            </NavLink>
          </li>
          <li
            onMouseEnter={() => handleMouseEnter("destinations")}
            onMouseLeave={handleMouseLeave}
          >
            <div
              onClick={() =>
                isMobile && handleMobileSubMenuToggle("destinations")
              }
              className={styles.mobileMenuToggle}
            >
              <NavLink
                to="/destinations"
                className={({ isActive }) =>
                  isActive || isSubMenuActive("/destinations")
                    ? styles.activeLink
                    : ""
                }
                onClick={(e) => isMobile && e.preventDefault()}
              >
                Destinations{" "}
                {isMenuOpen === "destinations" && !isMobile ? (
                  <FaMinus className={styles.icons} />
                ) : mobileSubMenu === "destinations" && isMobile ? (
                  <FaMinus className={styles.icons} />
                ) : (
                  <FaPlus className={styles.icons} />
                )}
              </NavLink>
            </div>
            {isMenuOpen === "destinations" && !isMobile && (
              <ul className={styles.dropdownMenu}>
                <li>
                  <NavLink to="/destinations/goa">Goa</NavLink>
                </li>
                <li>
                  <NavLink to="/destinations/karnataka">Karnataka</NavLink>
                </li>
                <li>
                  <NavLink to="/destinations/kerala">Kerala</NavLink>
                </li>
              </ul>
            )}
            {isMobile && mobileSubMenu === "destinations" && (
              <ul className={styles.mobileSubMenu}>
                <li>
                  <NavLink to="/destinations/goa">Goa</NavLink>
                </li>
                <li>
                  <NavLink to="/destinations/karnataka">Karnataka</NavLink>
                </li>
                <li>
                  <NavLink to="/destinations/kerala">Kerala</NavLink>
                </li>
              </ul>
            )}
          </li>
          <li
            onMouseEnter={() => handleMouseEnter("categories")}
            onMouseLeave={handleMouseLeave}
          >
            <div
              onClick={() =>
                isMobile && handleMobileSubMenuToggle("categories")
              }
              className={styles.mobileMenuToggle}
            >
              <NavLink
                to="/categories"
                className={({ isActive }) =>
                  isActive || isSubMenuActive("/categories")
                    ? styles.activeLink
                    : ""
                }
                onClick={(e) => isMobile && e.preventDefault()}
              >
                Categories{" "}
                {isMenuOpen === "categories" && !isMobile ? (
                  <FaMinus className={styles.icons} />
                ) : mobileSubMenu === "categories" && isMobile ? (
                  <FaMinus className={styles.icons} />
                ) : (
                  <FaPlus className={styles.icons} />
                )}
              </NavLink>
            </div>
            {isMenuOpen === "categories" && !isMobile && (
              <ul className={styles.dropdownMenu}>
                <li>
                  <NavLink to="/categories/oneday">Oneday Trip</NavLink>
                </li>
                <li>
                  <NavLink to="/categories/twoday">Two Day Trip</NavLink>
                </li>
                <li>
                  <NavLink to="/categories/women">Women Trip</NavLink>
                </li>
              </ul>
            )}
            {isMobile && mobileSubMenu === "categories" && (
              <ul className={styles.mobileSubMenu}>
                <li>
                  <NavLink to="/categories/oneday">Oneday Trip</NavLink>
                </li>
                <li>
                  <NavLink to="/categories/twoday">Two Day Trip</NavLink>
                </li>
                <li>
                  <NavLink to="/categories/women">Women Trip</NavLink>
                </li>
              </ul>
            )}
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={styles.contactContainer}>
        <span>+91-8328212741</span>
        <button className={styles.upcomingEvents}>Upcoming Events</button>

        <button className={styles.login}>LogIn</button>
      </div>
    </header>
  );
};

export default Header;
