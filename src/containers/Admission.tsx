"use client";

import { useState } from "react";

const AdmissionPage = () => {
  const [formData, setFormData] = useState({
    childName: "",
    parentName: "",
    email: "",
    phone: "",
    grade: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-white text-gray-900 p-6">
      <div className="max-w-3xl w-full bg-white shadow-xl rounded-2xl p-8 border border-gray-200">
        <h1 className="text-4xl font-extrabold text-center text-blue-800 mb-4">
          Admission Inquiry
        </h1>
        <p className="text-center text-gray-700 mb-6">
          "Shape your child's future with world-class education at{" "}
          <span className="text-gold-600 font-semibold">
            Netaji High School
          </span>
          ! Fill in the details below and our admissions team will get in touch
          with you soon."
        </p>

        {submitted ? (
          <div className="text-center py-6">
            <h2 className="text-2xl font-bold text-green-600">Thank You!</h2>
            <p className="text-gray-700 mt-2">
              Your admission inquiry has been received. Our team will contact
              you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Child's Name</label>
              <input
                type="text"
                name="childName"
                value={formData.childName}
                onChange={handleChange}
                placeholder="Enter your child's full name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Parent's Name</label>
              <input
                type="text"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium">
                Grade Applying For
              </label>
              <input
                type="text"
                name="grade"
                value={formData.grade}
                onChange={handleChange}
                placeholder="E.g., Grade 1, Grade 5, etc."
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">
                Additional Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Any specific concerns or queries you have"
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#1E90FF] text-white py-3 rounded-lg hover:bg-blue-800 transition font-semibold"
            >
              Submit Inquiry
            </button>
          </form>
        )}
      </div>

      <div className="mt-10 max-w-3xl w-full bg-white shadow-xl rounded-2xl p-8 border border-gray-200">
        <h2 className="text-3xl font-bold text-blue-800 text-center">
          Why Choose Netaji High School?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {[
            {
              title: "🏫 Modern Infrastructure",
              desc: "State-of-the-art classrooms, labs, and sports facilities.",
            },
            {
              title: "🎓 Expert Faculty",
              desc: "Highly experienced teachers fostering academic excellence.",
            },
            {
              title: "🌱 Holistic Development",
              desc: "Extracurriculars that shape well-rounded students.",
            },
            {
              title: "📚 Academic Excellence",
              desc: "Proven track record of top-ranking students.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-blue-100 to-blue-50 p-6 rounded-lg shadow-md border-l-4 border-gold-500"
            >
              <h3 className="text-lg font-semibold text-blue-900">
                {item.title}
              </h3>
              <p className="text-gray-700 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdmissionPage;
