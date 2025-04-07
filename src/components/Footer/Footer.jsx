import React from "react";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 ">
        
        {/* Company Info */}
        <div>
          <h3 className="text-lg font-seminormal text-white pointer-events-none">Crane Parts</h3>
          <p className="mt-2  pointer-events-none">Leading Supplier of Crane Parts</p>
          <p className="mt-2 pointer-events-none">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <p className="mt-2 pointer-events-none">📞 8737938494792</p>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="text-lg font-seminormal text-white pointer-events-none">Important Links</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="/" className="hover:text-blue-400 cursor-pointer">Home</a></li>
            <li><a href="/about" className="hover:text-blue-400">About</a></li>
            <li><a href="/services" className="hover:text-blue-400">Services</a></li>
            <li><a href="/login" className="hover:text-blue-400">Login</a></li>
          </ul>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-seminormal text-white pointer-events-none">Links</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="/privacy-policy" className="hover:text-blue-400">Privacy Policy</a></li>
            <li><a href="/services" className="hover:text-blue-400">Services</a></li>
            <li><a href="/login" className="hover:text-blue-400">Login</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-seminormal text-white pointer-events-none">Social Links</h3>
          <p className="mt-2 pointer-events-none">Subscribe to our newsletter</p>
          <input
            type="email"
            placeholder="Enter your email"
            className="mt-2 p-2 w-full bg-gray-800 text-white border border-gray-700 rounded-md"
          />
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-white hover:text-blue-400 text-2xl"><FaInstagram /></a>
            <a href="#" className="text-white hover:text-blue-400 text-2xl"><FaLinkedin /></a>
            <a href="#" className="text-white hover:text-blue-400 text-2xl"><FaFacebook /></a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
