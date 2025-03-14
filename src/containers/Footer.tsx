"use client";

import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#212016] py-10">
      <div className="container mx-auto px-6 sm:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          {/* Branding */}
          <div>
            <h2 className="text-3xl font-bold">Netaji High School</h2>
            <p className="text-gray-300 mt-2">Shaping Bright Futures</p>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-6 mt-6 md:mt-0">
            <Link
              href="https://youtube.com"
              target="_blank"
              className="text-white hover:text-red-500 transition"
            >
              <FaYoutube size={28} />
            </Link>
            <Link
              href="https://facebook.com"
              target="_blank"
              className="text-white hover:text-blue-400 transition"
            >
              <FaFacebookF size={28} />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              className="text-white hover:text-pink-500 transition"
            >
              <FaInstagram size={28} />
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-500 my-6"></div>

        {/* Quick Links */}
        <div className="flex flex-col sm:flex-row justify-between text-gray-300 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Your School. All Rights Reserved.
          </p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Link href="/about" className="hover:text-white transition">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-white transition">
              Contact
            </Link>
            <Link href="/admissions" className="hover:text-white transition">
              Admissions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
