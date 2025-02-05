import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdLogin } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  // Handle navigation for buttons
  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false); // Navigate to the given path and close the menu
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <nav className="bg-blue-600 text-white p-4 md:p-6">
      <div className="max-w-auto mx-auto flex justify-between items-center">
        {/* Left - Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu}>
            <FaBars className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Center - Desktop Menu */}
        <div className="hidden lg:flex space-x-8 lg:space-x-16">
          <button
            onClick={() => handleNavigation("/")}
            className="text-base md:text-lg font-bold  border-b-4 border-transparent hover:border-white pb-2 transition-all duration-300 ml-16"
          >
            Home
          </button>
          <button
            onClick={() => handleNavigation("/about")}
            className="text-base md:text-lg font-bold  border-b-4 border-transparent hover:border-white pb-2 transition-all duration-300"
          >
            About
          </button>
          <button
            onClick={() => handleNavigation("/stories")}
            className="text-base md:text-lg font-bold  border-b-4 border-transparent hover:border-white pb-2 transition-all duration-300"
          >
            Stories
          </button>
          <button
            onClick={() => handleNavigation("/faqs")}
            className="text-base md:text-lg font-bold  border-b-4 border-transparent hover:border-white pb-2 transition-all duration-300"
          >
            FAQs
          </button>
        </div>

        {/* Right - Login Button (Always on Right) */}
        <div className=" ml-auto ">
          <button
            onClick={togglePopup}
            className="text-sm md:text-md lg:text-lg font-bold flex items-center space-x-2 cursor-pointer border-b-4 border-transparent hover:border-white pb-2 transition-all duration-300"
          >
            <MdLogin className="w-5 h-5 md:w-6 md:h-6 " />
            <span>LOGIN</span>
          </button>
        </div>
      </div>

      {/* Pop-up for Login (Positioned under the Login Button) */}
      {showPopup && (
        <div
          className="absolute top-[60px] right-0 bg-white p-6 rounded-lg shadow-lg w-72 max-w-xs z-50 transform scale-95 opacity-0 transition-all duration-500 ease-out"
          style={{
            transform: "scale(1)",
            opacity: "1",
            transition: "transform 0.5s ease-out, opacity 0.5s ease-out",
          }}
        >
          <div className="relative">
            {/* Close Button */}
            <button
              onClick={togglePopup}
              className="absolute top-2 right-2 text-xl font-bold text-gray-500 hover:text-gray-800"
            >
              &times;
            </button>

            {/* Login Form */}
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Login</h3>

            {/* Username / Email Input */}
            <input
              type="text"
              placeholder="Username or Email"
              className="border border-gray-300 p-2 w-full rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            {/* Password Input */}
            <input
              type="password"
              placeholder="Password"
              className="border border-gray-300 p-2 w-full rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            {/* Login Button */}
            <button className="bg-blue-600 text-white py-2 w-full rounded-md mb-4 hover:bg-blue-700 transition-colors duration-200">
              Log In
            </button>

            {/* Alternative Login Methods */}
            <div className="flex flex-col space-y-3">
              {/* Google Login Button */}
              <button className="flex items-center justify-center space-x-2 border border-gray-300 text-gray-700 py-2 w-full rounded-md hover:bg-gray-100 transition-colors duration-200">
                <FaGoogle className="w-5 h-5 text-red-600" />
                <span>Log in with Google</span>
              </button>

              {/* Face Scan Login Button */}
              <button className="flex items-center justify-center space-x-2 border border-gray-300 text-gray-700 py-2 w-full rounded-md hover:bg-gray-100 transition-colors duration-200">
                <AiOutlineUser className="w-5 h-5 text-blue-600" />
                <span>Log in with Face Scan</span>
              </button>
            </div>

            {/* Forgot Password Link */}
            <div className="text-center mt-4 text-sm">
              <a href="#" className="text-blue-600 hover:underline">
                Forgot your password?
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu (Slides in) */}
      <div
        className={`fixed inset-0 bg-blue-600 z-50 flex flex-col items-center justify-center space-y-4 transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        {/* Close Button */}
        <button
          className="absolute top-5 right-5 text-white"
          onClick={toggleMobileMenu}
        >
          <FaTimes className="w-6 h-6" />
        </button>

        {/* Menu Items */}
        <button
          className="text-base md:text-lg font-bold "
          onClick={() => handleNavigation("/")}
        >
          Home
        </button>
        <button
          className="text-base md:text-lg font-bold "
          onClick={() => handleNavigation("/about")}
        >
          About
        </button>
        <button
          className="text-base md:text-lg font-bold "
          onClick={() => handleNavigation("/stories")}
        >
          Stories
        </button>
        <button
          className="text-base md:text-lg font-bold "
          onClick={() => handleNavigation("/faqs")}
        >
          FAQs
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
