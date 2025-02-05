import React from "react";
import { Link } from "react-router-dom";
import { FaPenFancy, FaBookOpen, FaQuestionCircle } from "react-icons/fa";

const Home = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Explore Inspiring Intern Stories & Insights
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Read experiences from real interns, learn industry tips, and prepare
            for your journey.
          </p>
          <Link to="/stories">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-bold text-lg shadow-md hover:bg-gray-200 transition">
              Read Stories
            </button>
          </Link>
        </div>
      </section>

      {/* Featured Stories Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-700">
          Featured Stories
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Sample Blog Post */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-xl mb-2">
              My First Internship Experience
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              By Jane Doe - Jan 25, 2025
            </p>
            <p className="text-gray-600">
              A journey through my first internship at a tech startup, filled
              with challenges and growth...
            </p>
            <Link
              to="/stories"
              className="text-blue-600 font-bold mt-4 inline-block"
            >
              Read More →
            </Link>
          </div>
          {/* Sample Blog Post */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-xl mb-2">
              Landing Your Dream Internship
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              By Mark Smith - Feb 2, 2025
            </p>
            <p className="text-gray-600">
              Tips and strategies on how to secure an internship in your dream
              company...
            </p>
            <Link
              to="/stories"
              className="text-blue-600 font-bold mt-4 inline-block"
            >
              Read More →
            </Link>
          </div>
          {/* Sample Blog Post */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-xl mb-2">The Power of Networking</h3>
            <p className="text-gray-600 text-sm mb-4">
              By Emily Johnson - Jan 15, 2025
            </p>
            <p className="text-gray-600">
              How networking helped me land multiple internship opportunities
              and build my career
            </p>
            <Link
              to="/stories"
              className="text-blue-600 font-bold mt-4 inline-block"
            >
              Read More →
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="max-w-6xl mx-auto py-8 px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-700">
          Explore More
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <Link
            to="/about"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <FaBookOpen className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="font-bold text-xl">About Us</h3>
            <p className="text-gray-600 mt-2">
              Learn more about our mission and vision.
            </p>
          </Link>
          <Link
            to="/stories"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <FaPenFancy className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="font-bold text-xl">Stories</h3>
            <p className="text-gray-600 mt-2">
              Read inspiring internship experiences.
            </p>
          </Link>
          <Link
            to="/faqs"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <FaQuestionCircle className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="font-bold text-xl">FAQs</h3>
            <p className="text-gray-600 mt-2">
              Find answers to common internship questions.
            </p>
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Start Your Internship Journey Today
        </h2>
        <p className="text-lg mb-6">
          Read, learn, and prepare for your internship experience.
        </p>
        <Link to="/stories">
          <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-bold text-lg shadow-md hover:bg-gray-200 transition">
            Explore Blogs
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Home;
