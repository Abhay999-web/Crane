import React from 'react';
import { motion } from 'framer-motion';

const aboutBackground = "/assets/aboutBackground.jpg"; 
const aboutImage = "/assets/aboutSideImage.jpg"; 
const aFewWordImage = "/assets/fewWords.jpg"; 
const numbersBackground = "/assets/whyChooseUs.jpg"; 
const blueprintBackground = "/assets/missionVisionBG.jpg"; 

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

const About = () => {
  return (
    <div >
      {/* About Us Section */}
      <motion.div 
        className="relative h-[30vh] flex justify-center items-center text-white pointer-events-none"
        style={{ backgroundImage: `url(${aboutBackground})`, backgroundSize: "cover", backgroundPosition: "center" }}
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50  "></div>
        <div className="relative text-center ">
          <motion.h2 className="text-5xl font-normal uppercase " variants={slideInLeft}>ABOUT</motion.h2>
          <motion.h2 className="text-5xl font-normal uppercase text-white mt-2" variants={slideInRight}>OUR COMPANY</motion.h2>
          <motion.div className="w-24 h-1 bg-white mx-auto mt-4" variants={fadeIn}></motion.div>
        </div>
      </motion.div>

      {/* Mission & Vision Section */}
      <motion.div 
        className="relative bg-fixed py-24 text-white bg-cover bg-center flex flex-col items-center pointer-events-none"
        style={{ backgroundImage: `url(${blueprintBackground})` }}
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl">
          <motion.div className="bg-gray-900 bg-opacity-80 p-8 rounded-lg shadow-lg text-center" variants={slideInLeft}>
            <h3 className="text-blue-900 text-2xl font-normal">VISION</h3>
            <p className="font-thin text-white"> 
 	
   Our vision is to be the leading provider of high-quality crane parts and expert services, ensuring safety, reliability, and efficiency in every lift. 
   We strive to minimize downtime, maximise performance, and support industries with durable solutions that keep operations running smoothly, setting new standards in crane maintenance and innovation. </p>
          </motion.div>
          <motion.div className="bg-gray-900 bg-opacity-80 p-8 rounded-lg shadow-lg text-center" variants={slideInRight}>
            <h3 className="text-blue-900 text-2xl font-normal">MISSION</h3>
            <p className="font-thin text-white">To provide high-quality, durable crane parts and exceptional service, ensuring maximum uptime and efficiency for our clients. We are committed to safety, reliability, and innovation, delivering cost-effective solutions that keep operations running smoothly.
               Our goal is to be the trusted partner for all crane maintenance and repair needs.</p>
          </motion.div>
        </div>
      </motion.div>

      {/* About Us Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center bg-gray-900 pointer-events-none">
        <motion.div className="text-white flex flex-col justify-center px-16 py-20" variants={slideInLeft} initial="hidden" animate="visible">
          <h2 className="text-4xl font-normal text-blue-900">ABOUT US</h2>
          <p className="text-gray-300 mt-4">Backed by years of industry expertise, we ensure fast delivery, competitive pricing, and exceptional service to minimize downtime and maximize productivity. Whether you need spare parts, repairs, or customized solutions, we are your trusted partner for all crane-related needs.</p>
        </motion.div>
        <motion.div className="relative w-full" variants={slideInRight} initial="hidden" animate="visible">
          <img src={aboutImage} alt="About Us" className="w-full h-auto object-cover" />
        </motion.div>
      </div>

      {/* A Few Words Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center bg-gray-900 pointer-events-none">
        <motion.div className="relative w-full" variants={slideInLeft} initial="hidden" animate="visible">
          <img src={aFewWordImage} alt="Few Words" className="w-full h-auto object-cover" />
        </motion.div>
        <motion.div className="text-white flex flex-col justify-center px-16 py-20" variants={slideInRight} initial="hidden" animate="visible">
          <h2 className="text-4xl font-normal text-blue-900">A FEW WORDS</h2>
          <p className="text-gray-300 mt-4">To provide durable, high-performance crane solutions that keep industries moving forward.
            Quality Parts | Expert Service | Trusted Support </p>
        </motion.div>
      </div>

      {/* Numbers Speak Section */}
      <motion.div 
        className="relative py-20 text-white text-center bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: `url(${numbersBackground})` }}
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative grid grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto text-lg font-seminormal">
          {["10K+ Happy Clients", "6 Years Exp.", "30+ Professionals", "24 Cities"].map((item, index) => (
            <motion.div key={index} variants={fadeIn}>
              <h2 className="text-4xl text-blue-900 font-normal">{item.split(" ")[0]}</h2>
              <p>{item.split(" ").slice(1).join(" ")}</p>
            </motion.div>
          ))}
        </div>
        <motion.div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 h-0.5 w-12 bg-blue-900" variants={fadeIn}></motion.div>
        <motion.h2 className="relative text-2xl font-normal uppercase mt-10 tracking-wider" variants={fadeIn}>NUMBERS SPEAK</motion.h2>
      </motion.div>

      {/* Contact Form Section */}
      <motion.div 
        className="flex justify-center items-center py-12 bg-gray-100 cursor-default"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.div 
          className="bg-blue-900 p-6 rounded-lg shadow-lg w-full md:w-1/2 max-w-lg"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-2xl font-normal text-white text-center">Contact Us</h2>
          <form className="mt-4">
            <label className="block">
              <span className="text-white font-seminormal">Your Name</span>
              <input type="text" className="mt-1 block w-full p-2 bg-gray-200 text-gray-700 rounded-md" placeholder="Enter your name" />
            </label>
            <label className="block mt-4">
              <span className="text-white font-seminormal">Your Email</span>
              <input type="email" className="mt-1 block w-full p-2 bg-gray-200 text-gray-700 rounded-md" placeholder="Enter your email" />
            </label>
            <motion.button 
              type="submit" 
              className="mt-4 w-full bg-black text-blue-900 font-normal py-2 px-4 rounded-full hover:bg-gray-800 hover:text-white transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              SUBMIT
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
