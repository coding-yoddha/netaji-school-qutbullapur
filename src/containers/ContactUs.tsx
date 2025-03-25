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
import { useEffect, useState } from "react";
import { fetchContactPageData } from "@/app/utils/apiHelpers";
import { getSocialIcon } from "../app/utils/jsxUtils";

export default function ContactUs() {
  const [data, setData] = useState();
  console.log("data", data?.contact?.socialMedia);
  useEffect(() => {
    fetchContactPageData().then((res) => {
      const data = res?.response;
      setData(data);
    });
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white py-16 px-6 sm:px-12 lg:px-20">
      {/* Animated Heading */}
      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900 mb-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* {data?.contact?.title} */}
        {"Connect with Netaji High School"}
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
          {/* Address Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-600" /> Visit Our Campus
            </h3>
            <p className="text-gray-700 mt-2">
              {`${data?.contact?.address?.street}, ${data?.contact?.address?.city}, ${data?.contact?.address?.state} - ${data?.contact?.address?.zipCode}`}
            </p>
          </div>

          {/* Phone Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <FaPhoneAlt className="text-blue-600" /> Call Our Office
            </h3>
            <div className="mt-2 space-y-2">
              {data?.contact?.phoneNumbers?.map((obj, index) => (
                <a
                  key={index}
                  href={`tel:${obj?.number}`}
                  className="block text-lg text-blue-600 font-semibold hover:underline"
                >
                  {obj?.number}
                </a>
              ))}
            </div>
          </div>

          {/* School Timings Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <FaClock className="text-blue-600" /> School Timings
            </h3>
            <p className="text-gray-700 mt-2">
              Monday - Saturday: 8:30 AM to 5:00 PM
            </p>
            <p className="text-gray-700">Sunday: Closed</p>
          </div>

          {/* Email Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <FaEnvelope className="text-blue-600" /> Drop Us an Email
            </h3>
            <div className="mt-2 space-y-2">
              {data?.contact?.emails?.map((obj, index) => (
                <a
                  key={index}
                  href={`mailto:${obj?.email}`}
                  className="block text-lg text-blue-600 font-semibold hover:underline"
                >
                  {obj?.email}
                </a>
              ))}
            </div>
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
          src={data?.contact?.address?.googleMapLink}
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
          {data?.contact?.socialMedia?.map((media) => (
            <motion.a
              key={media.name}
              href={media.link}
              className="text-blue-600 hover:text-blue-800"
              whileHover={{ scale: 1.2, rotate: 5 }}
              target="_blank"
            >
              {getSocialIcon(media.name, data?.contact?.socialMedia)}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
