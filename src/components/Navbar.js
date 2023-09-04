import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import styles from "./Navbar.module.css";
import { RxBorderWidth } from "react-icons/rx";
import { FaWindowClose } from "react-icons/fa";
import scrollPosition, { useScrollPosition } from "../hooks/scrollPosition";

const Navbar = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);
  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const detectDimension = () => {
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectDimension);
    windowDimension.width > 800 && setNavBarOpen(false);
    return () => {
      window.removeEventListener("resize", detectDimension);
    };
  }, [windowDimension]);

  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "Services",
    },
    {
      id: 3,
      link: "HowWeWork",
    },
    {
      id: 4,
      link: "Benefits",
    },
  ];

  const scrollPosition = useScrollPosition();

  return (
    <div
      className={
        navBarOpen
          ? styles.navOpen
          : scrollPosition > 0
          ? styles.navOnScroll
          : styles.navBar
      }
    >
      {!navBarOpen && <Link to="Home" smooth> <p className={styles.logo}>DISK | Digital Solutions</p> </Link>}
      {!navBarOpen && windowDimension.width < 800 ? (
        <RxBorderWidth onClick={() => setNavBarOpen(!navBarOpen)} color="#f1f1f1" size={25} />
      ) : (
        windowDimension.width < 800 && (
          <FaWindowClose
            onClick={() => setNavBarOpen(!navBarOpen)}
            color="#f1f1f1"
            size={25}
          />
        )
      )}
      {navBarOpen && (
        <ul className={styles.linksContainer}>
          {links.map((x) => (
            <div key={x.id}>
              <Link 
                onClick={() => setNavBarOpen(false)}
                to={x.link}
                smooth
                duration={500}
                className={styles.navLink}
              >
                {x.link === "HowWeWork" ? "How we work" : x.link}
              </Link>
              <div className={styles.border}></div>
            </div>
          ))}
        </ul>
      )}
      {windowDimension.width > 800 && (
        <ul className={styles.linksContainer}>
          {links.map((x) => (
            <div key={x.id}>
              <Link 
                onClick={() => setNavBarOpen(false)}
                to={x.link}
                smooth
                duration={500}
                className={styles.navLink}
              >
                {x.link === "HowWeWork" ? "How we work" : x.link}
              </Link>
              <div className={styles.border}></div>
            </div>
          ))}
          <Link
            onClick={() => setNavBarOpen(false)}
            to="Contact"
            smooth
            duration={500}
            className={styles.contactLink}
          >
            Contact
          </Link>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
