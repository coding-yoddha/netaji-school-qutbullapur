"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  FaBars,
  FaTimes,
  FaUser,
  FaEnvelope,
  FaChalkboardTeacher,
} from "react-icons/fa";
import appLogo from "../../public/schoollogo.png";

const styles = {
  headerStyle: {
    backgroundImage: "linear-gradient(to right, #0F172A, #1E40AF)",
    color: "white",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    padding: "1rem",
    position: "relative",
    zIndex: 100,
  },
  containerStyle: {
    width: "100%",
    maxWidth: "1200px",
    padding: "0 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0 auto",
  },
  navLinkStyle: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginRight: "24px",
    color: "white",
    fontSize: "18px",
    fontWeight: "500",
    textDecoration: "none",
    transition: "all 0.3s ease",
    position: "relative",
  },
  navLinkHover: {
    textDecoration: "underline",
    color: "#FACC15",
  },
  sidebarStyle: {
    position: "fixed",
    top: 0,
    right: 0,
    backgroundColor: "white",
    color: "#333",
    width: "256px",
    padding: "24px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    height: "100%",
    zIndex: 50,
    overflowY: "auto" as "const",
    transform: "translateX(0)",
    transition: "transform 0.3s ease-in-out",
  },
  mobileToggle: {
    cursor: "pointer",
  },
};

const Sidebar = ({ isMobileMenuOpen, toggleMobileMenu }) => {
  return (
    isMobileMenuOpen && (
      <div style={styles.sidebarStyle}>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            onClick={toggleMobileMenu}
            style={{
              fontSize: "24px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              color: "#1E40AF",
            }}
            aria-label="Close Sidebar"
          >
            <FaTimes />
          </button>
        </div>
        <nav style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <Link
            href="/about"
            style={{ ...styles.navLinkStyle, color: "#1E40AF" }}
          >
            <FaUser style={{ color: "#1E40AF" }} /> About Us
          </Link>
          <Link
            href="/contact"
            style={{ ...styles.navLinkStyle, color: "#1E40AF" }}
          >
            <FaEnvelope style={{ color: "#1E40AF" }} /> Contact
          </Link>
          <Link
            href="/faculty"
            style={{ ...styles.navLinkStyle, color: "#1E40AF" }}
          >
            <FaChalkboardTeacher style={{ color: "#1E40AF" }} /> Faculty
          </Link>
        </nav>
      </div>
    )
  );
};

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleResize = () => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= 768);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header style={styles.headerStyle}>
      <div style={styles.containerStyle}>
        <Link href="/" style={{ display: "flex", alignItems: "center" }}>
          <Image
            src={appLogo}
            alt="School Logo"
            style={{ borderRadius: "50%", width: "100px", height: "100px" }}
          />
          <h1
            style={{ fontSize: "28px", fontWeight: "bold", marginLeft: "1rem" }}
          >
            Netaji High School
          </h1>
        </Link>

        {!isMobile && (
          <nav style={{ display: "flex" }}>
            <Link href="/about" style={styles.navLinkStyle}>
              <FaUser /> About Us
            </Link>
            <Link href="/contact" style={styles.navLinkStyle}>
              <FaEnvelope /> Contact
            </Link>
            <Link href="/faculty" style={styles.navLinkStyle}>
              <FaChalkboardTeacher /> Faculty
            </Link>
          </nav>
        )}

        {isMobile && (
          <div onClick={toggleMobileMenu} style={styles.mobileToggle}>
            {isMobileMenuOpen ? (
              <FaTimes style={{ color: "white", fontSize: "24px" }} />
            ) : (
              <FaBars style={{ color: "white", fontSize: "24px" }} />
            )}
          </div>
        )}
      </div>
      {isMobileMenuOpen && (
        <Sidebar
          isMobileMenuOpen={isMobileMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
        />
      )}
    </header>
  );
};

export default Header;
