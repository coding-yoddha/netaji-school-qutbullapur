"use client";

import { Counter } from "./components/layout/countup";
import { Carousel } from "./components/ui/carousel";

const images = [
  { src: "/school1.png", alt: "Award Ceremony" },
  { src: "/school2.png", alt: "Sports Day" },
  { src: "/school3.png", alt: "Cultural Event" },
];

export default function Home() {
  return (
    <>
      <section className="text-white py-16 bg-gradient-to-r from-blue-500 to-teal-500">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            Welcome to{" "}
            <span className="text-yellow-300">Bright Future School</span>
          </h2>
          <p className="text-lg sm:text-xl mb-6">
            Nurturing future leaders with quality education and holistic
            development.
          </p>
          <a
            href="/about"
            className="bg-yellow-300 text-gray-900 font-medium px-6 py-3 rounded-lg hover:bg-yellow-400 transition duration-300"
          >
            Discover Our Vision
          </a>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-800">
            School Gallery
          </h2>
          <div className="flex justify-center items-center w-full">
            <div className="w-[80%] max-w-3xl">
              <Carousel images={images} />
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-800">
            About Bright Future School
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed text-center">
            At Bright Future School, we believe in empowering students with a
            strong academic foundation, life skills, and values that prepare
            them for a successful future. With a commitment to excellence, we
            provide a safe and nurturing environment where every student can
            thrive.
          </p>
        </div>
      </section>

      {/* Count Up Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-800">
            Our Enrollment Stats
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Students Enrolled */}
            <Counter
              end={1500}
              duration={3}
              title="Students Enrolled This Year"
              icon="📚"
            />

            {/* Passed Out Students */}
            <Counter
              end={5000}
              duration={3}
              title="Students Graduated"
              icon="🎓"
            />

            {/* Awards Won */}
            <Counter end={50} duration={3} title="Awards Won" icon="🏆" />
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-800">
            Our Achievements
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "100% Results",
                description: "Consistent academic excellence in board exams.",
              },
              {
                title: "Award-Winning Programs",
                description: "Recognized for innovative teaching methods.",
              },
              {
                title: "Top Sports Team",
                description: "Winners of inter-school championships.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Experienced Teachers",
                description:
                  "Highly qualified staff committed to nurturing students.",
                icon: "🎓", // Education Icon
              },
              {
                title: "Holistic Development",
                description:
                  "Focus on academics, sports, and extracurricular activities.",
                icon: "⚽", // Sports Icon
              },
              {
                title: "Modern Facilities",
                description: "Smart classrooms, laboratories, and a library.",
                icon: "🏫", // School Icon
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              >
                <div className="text-5xl text-yellow-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-yellow-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
