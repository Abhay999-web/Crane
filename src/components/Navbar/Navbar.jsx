import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Contact from "../Contact/Contact";
import Service from "../Service/Service";
import About from "../About/About";
import SpareParts from "../SpareParts/SpareParts";
import { Menu, X } from "lucide-react"; 

const MenuLinks = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Services", link: "/service" },
  { id: 3, name: "About", link: "/about" },
  { id: 4, name: "Contact", link: "/contact" },
  {id:5 , name: "Spare Parts", link: "/spareParts"}
];

const Navbar = () => {
  const [showPopup, setShowPopup] = useState(false);  
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* Navbar */}
      <nav className="py-4 shadow-md bg-gray-300 ">
        <div className="flex justify-between items-center px-6 sm:px-10 md:px-16">
          {/* Left Side: Logo */}
          <div className="flex items-center space-x-2">
            <h1 className="text-3xl sm:text-4xl font-normal text-blue-900 font-antonio pointer-events-none">CRANE</h1>
            <h3 className="text-3xl sm:text-4xl font-seminormal text-black font-antonio pointer-events-none">PARTS</h3>
          </div>

          {/* Desktop Navigation + Button */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8 font-antonio">
              {MenuLinks.map((menu) => (
                <li key={menu.id} className="relative">
                  <Link
                    to={menu.link}
                    className="text-black text-lg font-semibold transition duration-300 hover:text-blue-800 hover:underline"
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch Button */}
          <button
            onClick={() => setShowPopup(true)}
            className="hidden md:block bg-blue-900 text-white px-4 py-2 font-seminormal rounded-lg transition duration-500 transform hover:scale-105 hover:bg-blue-800"
          >
            Get in Touch
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu (Dropdown) */}
        {menuOpen && (
          <div className="md:hidden bg-gray-100 shadow-lg py-4">
            <ul className="flex flex-col space-y-4 text-center">
              {MenuLinks.map((menu) => (
                <li key={menu.id}>
                  <Link
                    to={menu.link}
                    className="block py-2 text-black text-lg font-seminormal transition duration-300 hover:text-blue-600"
                    onClick={() => setMenuOpen(false)}
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile "Get in Touch" Button */}
            <button
              onClick={() => setShowPopup(true)}
              className="bg-blue-900 text-white px-4 py-2 rounded-lg"
            >
              Get in Touch
            </button>
          </div>
        )}
      </nav>

      {/* Popup Modal - Only Show When showPopup is true */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm sm:max-w-md text-center relative">
            {/* Close Button */}
            <button
              className="absolute top-2 right-3 text-black text-2xl font-normal cursor-pointer"
              onClick={() => setShowPopup(false)}
            >
              &times;
            </button>

            {/* Form Title */}
            <h3 className="text-lg font-semibold text-blue-800">Get in Touch</h3>

            {/* Contact Form */}
            <form className="mt-4 space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border border-gray-300 p-2 rounded-md"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 p-2 rounded-md"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full border border-gray-300 p-2 rounded-md"
                  required
                />
              </div>
              <div>
                <button className="bg-blue-800 text-white px-6 py-2 rounded-md font-normal w-full">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/spareParts" element={<SpareParts/>}/>
      </Routes>
    </div>
  );
};

export default Navbar;
