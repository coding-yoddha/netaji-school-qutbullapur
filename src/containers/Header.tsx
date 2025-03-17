"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaUser,
  FaEnvelope,
  FaChalkboardTeacher,
} from "react-icons/fa";
import appLogo from "../../public/schoolLogo1.png";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
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
    <header className="bg-gradient-to-r from-gray-900 to-blue-900 text-white shadow-lg py-4 relative z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
        {/* Logo & School Name */}
        <Link href="/" className="flex items-center">
          <Image
            src={appLogo}
            alt="School Logo"
            width={80}
            height={80}
            className="rounded-full"
          />
          <h1 className="text-xl sm:text-2xl font-bold ml-3">
            Netaji High School
          </h1>
        </Link>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="hidden sm:flex space-x-8">
            <Link
              href="/about"
              className="flex items-center gap-2 text-lg font-medium hover:text-yellow-400 transition"
            >
              <FaUser /> About Us
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 text-lg font-medium hover:text-yellow-400 transition"
            >
              <FaEnvelope /> Contact
            </Link>
            <Link
              href="/faculty"
              className="flex items-center gap-2 text-lg font-medium hover:text-yellow-400 transition"
            >
              <FaChalkboardTeacher /> Faculty
            </Link>
          </nav>
        )}

        {/* Mobile Menu Toggle */}
        {isMobile && (
          <button
            onClick={toggleMobileMenu}
            className="text-white text-2xl focus:outline-none"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        )}
      </div>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0  bg-opacity-50 z-40"
          onClick={toggleMobileMenu}
        >
          <div
            className="fixed top-0 right-0 w-64 h-full bg-white text-gray-800 shadow-lg p-6 transform transition-transform duration-300 ease-in-out"
            style={{
              transform: isMobileMenuOpen
                ? "translateX(0)"
                : "translateX(100%)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={toggleMobileMenu}
              className="text-2xl text-blue-800 absolute top-4 right-4"
            >
              <FaTimes />
            </button>

            <nav className="flex flex-col space-y-6 mt-10">
              <Link
                href="/about"
                onClick={toggleMobileMenu}
                className="flex items-center gap-3 text-lg font-medium text-blue-800 hover:text-yellow-500 transition"
              >
                <FaUser /> About Us
              </Link>
              <Link
                href="/contact"
                onClick={toggleMobileMenu}
                className="flex items-center gap-3 text-lg font-medium text-blue-800 hover:text-yellow-500 transition"
              >
                <FaEnvelope /> Contact
              </Link>
              <Link
                href="/faculty"
                onClick={toggleMobileMenu}
                className="flex items-center gap-3 text-lg font-medium text-blue-800 hover:text-yellow-500 transition"
              >
                <FaChalkboardTeacher /> Faculty
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
