import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom"; 
import Product from '../Products/Product';

const BackgroundImage = "/assets/background.jpg";
const MissionImage = "/assets/missionImage.jpg";
const AboutUsImage = "/assets/about.jpg";
const WhyChooseUsImage = "/assets/whyChooseUs.jpg";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.5 } }
};

const slideInLeft = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1 } }
};

const slideInRight = {
  hidden: { x: 50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1 } }
};

const Home = () => {
  const navigate = useNavigate(); 

  return (
    <div>
      {/* Hero Section */}
      <motion.div
        className="relative h-[80vh] flex justify-center items-center text-white text-center px-4 sm:px-8 "
        style={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative">
          <motion.h1 className="text-2xl  md:text-6xl font-normal pointer-events-none"
            variants={slideInLeft}>
           Manufacturing Overhead, Jib, Gantry and Portable Gantry Cranes
          </motion.h1>
          <br/>
          
          {/* Contact Us and Phone Button Fix */}
          <div className="flex justify-center gap-5 hover:-translate-y-2 transition-transform duration-300">
            <button
              onClick={() => navigate("/contact")} 
              className="bg-transparent border border-white text-white text-lg px-6 py-2 rounded-md hover:bg-white hover:text-black transition duration-300"
            >
              Contact Us
            </button>

            <button className="bg-transparent border border-white text-white text-lg px-6 py-2 rounded-md hover:bg-white hover:text-black transition">
              +91 8498838383
            </button>
          </div>

          <motion.h5 className="mt-4 text-lg sm:text-2xl md:text-4xl text-white pointer-events-none"
            variants={slideInRight}>
         'SPECIALISED' INDUSTRIAL LIFTING EQUIPMENT TO YOUR REQUIREMENTS
          </motion.h5>
        </div>
      </motion.div>
      
      {/* Mission & Vision Section */}
      <motion.div
        className="relative bg-center text-white py-12 px-6 sm:px-12 h-auto md:h-[665px] pointer-events-none shadow-lg"
        style={{ backgroundImage: `url('/assets/whyChooseUs.jpg')`, backgroundSize: "cover", backgroundPosition: "center" }}
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative flex flex-col-reverse md:flex-row items-center max-w-6xl mx-auto gap-10">
          
          {/* Right Section (Image) */}
          <motion.div className="w-full md:w-1/3 flex justify-center" variants={slideInRight}>
            <img src={MissionImage} alt="Mission" className="rounded-lg shadow-xl w-full max-w-[250px] sm:max-w-[300px] object-cover"/>
          </motion.div>

          {/* Left Section (Text) */}
          <motion.div className="w-full md:w-2/3 text-center md:text-left" variants={slideInLeft}>
            <h2 className="text-3xl sm:text-5xl font-normal">MISSION</h2>
            <p className="text-base sm:text-xl mt-4 leading-relaxed">
            To provide high-quality, durable crane parts and exceptional service, ensuring maximum uptime and efficiency for our clients. We are committed to safety, reliability, and innovation, delivering cost-effective solutions that keep operations running smoothly.
               Our goal is to be the trusted partner for all crane maintenance and repair needs.
            </p>
            <h2 className="text-3xl sm:text-5xl font-normal mt-8">VISION</h2>
            <p className="text-base sm:text-xl mt-4 leading-relaxed">
       	
   Our vision is to be the leading provider of high-quality crane parts and expert services, ensuring safety, reliability, and efficiency in every lift. 
   We strive to minimize downtime, maximise performance, and support industries with durable solutions that keep operations running smoothly, setting new standards in crane maintenance and innovation.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* About Us Section - Read More Fix */}
      <motion.div className="relative bg-cover bg-center sm:h-screen flex flex-col justify-center items-center text-white px-4 sm:px-8 "
        style={{ backgroundImage: `url(${AboutUsImage})` }}
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative text-center">
          <h2 className="text-4xl sm:text-6xl font-normal pointer-events-none">About Us</h2>
          <p className="text-base sm:text-xl mt-4 pointer-events-none">
          We specialize in providing high-quality crane parts and expert servicing to keep your operations running efficiently.
          With a commitment to reliability, safety, and performance, we offer a wide65 range of genuine and aftermarket parts, maintenance solutions, and technical support for all types of cranes.
          </p>
          <motion.button
            onClick={() => navigate("/about")} 
            className="mt-6 inline-block bg-black text-white hover:text-black hover:bg-white font-normal py-2 px-6 rounded-full border-2 border-white transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            READ MORE
          </motion.button>
        </div>
      </motion.div>

      {/* Product Section */}
      <Product />

      <motion.div 
  className="relative bg-cover bg-center py-16 text-white"
  style={{ backgroundImage: `url(${WhyChooseUsImage})` }}  
  initial="hidden"
  animate="visible"
  variants={fadeIn}
>
  <p className="text-center text-4xl font-semibold pointer-events-none">Why We Stand Out?</p>

  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 m-9 cursor-default">
    {["PROFESSIONAL STAFF", "QUALITY PRODUCTS", "CERTIFIED ENGINEERS", "THE RIGHT CHOICE FOR YOU", "365 DAYS SUPPORT", "BEST SERVICES"].map((title, index) => (
      <motion.div 
        key={index} 
        className="bg-blue-900 p-6 rounded-lg shadow-xl text-center hover:bg-blue-800 transition duration-300"
        whileHover={{ scale: 1.05 }}
      >
        <h3 className="text-xl font-normal">{title}</h3>
        <p className="mt-2 text-sm sm:text-base">Ensuring excellence in crane parts supply.</p>
      </motion.div>
    ))}
  </div>
</motion.div>
<motion.div 
className="relative bg-cover bg-center text-white p-6 sm:p-12 flex justify-center items-center min-h-[500px] mt-0"

  style={{ 
    backgroundImage: `url(${WhyChooseUsImage})`,  
    backgroundSize: "cover",
    backgroundPosition: "center"
  }}
  initial="hidden"
  animate="visible"
  variants={fadeIn}
>
  <motion.div 
    className="bg-blue-900 p-6 rounded-lg shadow-lg w-full max-w-lg"
    whileHover={{ scale: 1.05 }}
  >
    <h2 className="text-2xl font-normal pointer-events-none">Get in Touch</h2>
    <form className="mt-4 space-y-4">
      <input type="text" className="block w-full p-2 bg-gray-200 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Name" />
      <input type="email" className="block w-full p-2 bg-gray-200 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Email" />
      <input type="phone" className="block w-full p-2 bg-gray-200 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Phone Number" />
      <button type="submit" className="mt-4 w-full bg-black text-white py-2 px-4 rounded-full hover:bg-white hover:text-black transition duration-300">
        SUBMIT
      </button>
    </form>
  </motion.div>
</motion.div>

</div>
);
}

export default Home;

