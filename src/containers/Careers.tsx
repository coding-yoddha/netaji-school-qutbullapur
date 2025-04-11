"use client";

import { FaChalkboardTeacher } from "react-icons/fa";
import { useState, useEffect } from "react";

const Careers = () => {
  // Mock API response data
  const mockApiResponse = {
    openings: [
      {
        id: 1,
        title: "Primary Teacher (Classes 1-5)",
        description:
          "Teach core subjects to young learners. Requires B.Ed and 2+ years of experience.",
      },
      {
        id: 2,
        title: "Secondary Math Teacher (Classes 6-10)",
        description:
          "Specialize in Mathematics for higher classes. Requires M.Sc/B.Sc and B.Ed.",
      },
      {
        id: 3,
        title: "School Librarian",
        description:
          "Manage library resources and promote reading. Requires B.Lib or equivalent.",
      },
    ],
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
  });
  const [openings, setOpenings] = useState([]);

  // Simulate fetching data from API
  useEffect(() => {
    // In a real scenario, this would be an API call like:
    // fetch('/api/openings').then(res => res.json()).then(data => setOpenings(data.openings));
    setOpenings(mockApiResponse.openings);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const subject = `Career Enquiry - Netaji High School - ${formData.name}`
      const text = `
        Applicant Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone}
        Applying For Position: ${formData.position}
        Message: ${formData.message}
      `
      const body = {
        text,
        subject
      }
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
  
      if (response.ok) {
        alert("Application submitted successfully!");
        setFormData({ name: "", email: "", phone: "", position: "", message: "" });
        setSubmitted(true);
      } else {
        alert("Application submission unsuccessfully!");
        console.error("Failed to send email");
      }
      
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-[#1e90ff] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Join Our Team at Netaji High School
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            We are seeking passionate educators and staff to inspire our
            students and contribute to our legacy. Join one of the premier
            schools in Hyderabad and help us deliver exceptional education in
            India.
          </p>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Current Openings
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {openings.map((job) => (
              <div
                key={job.id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  {job.title}
                </h3>
                <p className="text-gray-700 mb-4">{job.description}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-6 text-gray-600">
            No suitable position? Send us your details anyway!
          </p>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-12 bg-white">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Apply Now</h2>
          <p className="text-lg text-center mb-8 text-gray-600">
            Fill out the form below to express your interest in joining our
            team.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="+91 12345-67890"
              />
            </div>

            <div>
              <label
                htmlFor="position"
                className="block text-sm font-medium text-gray-700"
              >
                Position Applying For
              </label>
              <select
                id="position"
                name="position"
                value={formData.position}
                onChange={handleChange}
                required
                className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select a position</option>
                {openings.map((job) => (
                  <option key={job.id} value={job.title}>
                    {job.title}
                  </option>
                ))}
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Additional Information
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Tell us about yourself..."
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-[40%] bg-[#1e90ff] text-white py-3 rounded-md hover:bg-blue-800 transition"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Why Work With Us?
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center">
              <FaChalkboardTeacher className="text-4xl text-blue-900 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Supportive Environment
              </h3>
              <p className="text-gray-700">
                Work with a dedicated team committed to educational excellence.
              </p>
            </div>
            <div className="text-center">
              <FaChalkboardTeacher className="text-4xl text-blue-900 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Professional Growth
              </h3>
              <p className="text-gray-700">
                Opportunities for training and career advancement.
              </p>
            </div>
            <div className="text-center">
              <FaChalkboardTeacher className="text-4xl text-blue-900 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Impact Lives</h3>
              <p className="text-gray-700">Shape the future of our students.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
