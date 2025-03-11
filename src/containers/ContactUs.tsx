"use client";

import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import schoolChildren from "../../public/schoolChildren.svg";

export default function ContactUs() {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white py-16 px-6 sm:px-12 lg:px-20">
      {/* Animated Heading */}
      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900 mb-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Get in Touch with Us
      </motion.h2>

      {/* Contact Details Section */}
      <div className="grid grid-cols-1 gap-16">
        {/* Contact Information Row */}
        <motion.div
          className="bg-white p-10 rounded-2xl shadow-xl border border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-600" /> Visit Our Campus
            </h3>
            <p className="text-gray-700 mt-2">
              123 School Street, Education City, India
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <FaPhoneAlt className="text-blue-600" /> Call Our Office
            </h3>
            <p className="text-gray-700 mt-2">
              +91 98765 43210 / +91 87654 32109
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <FaClock className="text-blue-600" /> School Timings
            </h3>
            <p className="text-gray-700 mt-2">
              Monday - Saturday: 8:00 AM - 3:00 PM
            </p>
            <p className="text-gray-700">Sunday: Closed</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <FaEnvelope className="text-blue-600" /> Drop Us an Email
            </h3>
            <p className="text-gray-700 mt-2">contact@ourschool.com</p>
          </div>
        </motion.div>
      </div>

      {/* Google Maps */}
      <motion.div
        className="relative overflow-hidden rounded-2xl shadow-xl bg-white p-6 mt-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <iframe
          title="Google Maps Location"
          className="w-full h-[350px] rounded-2xl border border-gray-300"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.083036038793!2d-122.41941548468169!3d37.77492927975909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c2f2f3f5d%3A0xb1e6350e1f3e10f9!2sOur%20School!5e0!3m2!1sen!2sin!4v1633029859404!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </motion.div>

      {/* School Image */}
      <motion.img
        src={schoolChildren.src}
        alt="Happy School Children"
        className="w-3/4 mx-auto mt-8 rounded-2xl shadow-md object-cover"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />

      {/* Social Media Links */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Connect with Us
        </h3>
        <div className="flex justify-center gap-8 text-5xl">
          <motion.a
            href="#"
            className="text-blue-600 hover:text-blue-800"
            whileHover={{ scale: 1.2, rotate: 5 }}
          >
            <FaFacebook />
          </motion.a>
          <motion.a
            href="#"
            className="text-blue-600 hover:text-blue-800"
            whileHover={{ scale: 1.2, rotate: -5 }}
          >
            <FaTwitter />
          </motion.a>
          <motion.a
            href="#"
            className="text-blue-600 hover:text-blue-800"
            whileHover={{ scale: 1.2, rotate: 5 }}
          >
            <FaInstagram />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
