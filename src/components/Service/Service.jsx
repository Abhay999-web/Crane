import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Wrench, Settings, Package } from "lucide-react"; 


const serviceBackground = "/assets/serviceBackground.jpg";

const services = [
  {
    id: 1,
    title: "Service & Maintenance",
    description: "Expert service and maintenance to keep your cranes running smoothly.",
    icon: <Settings size={50} className="text-blue-500" />,
  },
  {
    id: 2,
    title: "Crane Repair Work",
    description: "Professional crane repair work ensuring safety and efficiency.",
    icon: <Wrench size={50} className="text-blue-500" />,
  },
  {
    id: 3,
    title: "Industrial Products",
    description: "High-quality industrial products for all your operational needs.",
    icon: <Package size={50} className="text-blue-500" />,
  },
];

const parts = [
  { name: "C-Hook", image: "/assets/c-hook.jpg", description: "Handles heavy loads with precision." },
  { name: "Davit Crane", image: "/assets/davitCrane.jpg", description: "Portable crane for confined spaces." },
  { name: "Electric Chain Hoist", image: "/assets/electric-chain-hoist.jpg", description: "Ensures smooth lifting." },
  { name: "Electric Winches", image: "/assets/electric-winches.jpg", description: "Used in construction sites." },
  { name: "Grabs Clam Shell", image: "/assets/grabsClamShell.jpg", description: "Handles bulk materials efficiently." },
  { name: "Lorry", image: "/assets/lorry.jpg", description: "A powerful transport vehicle used for carrying heavy industrial and construction materials." },
  { name: "Manual Chain Hoist", image: "/assets/manualChainHoist.jpg", description: "A reliable, manually operated lifting device for small to medium loads." },
  { name: "Manual Overhead", image: "/assets/manualOverhead.jpg", description: "A manual crane system used in factories to lift and move materials efficiently." },
  { name: "Manual Winches", image: "/assets/manualWinches.jpg", description: "Durable hand-operated winches designed for lifting and pulling heavy loads." },
  { name: "Peel", image: "/assets/peel.jpg", description: "A specialized gripping tool used in material handling applications." },
  { name: "Portable Gantry", image: "/assets/portableGantry.jpg", description: "A mobile lifting frame offering easy transportation and assembly." },
  { name: "Joy Stick", image: "/assets/joystick.jpg", description: "A precision control device used in crane operations and industrial machinery." },
  { name: "Open Conductor System", image: "/assets/openConductorSystem.jpg", description: "A power distribution system for cranes ensuring a continuous energy supply." },
  { name: "Vignola Rail", image: "/assets/vignolarail.jpg", description: "A heavy-duty rail system specifically designed for overhead cranes and material handling." },
  { name: "4 Point Lifting Beam", image: "/assets/4PointLiftingBeam.jpg", description: "An advanced lifting solution that evenly distributes heavy loads using four lifting points." },
  { name: "Cable Reel", image: "/assets/cableReel.jpg", description: "Designed for managing and storing cables efficiently in industrial applications." },
  { name: "Rotating Mirror Beacon", image: "/assets/rotatingMirrorBeacon.jpg", description: "A highly visible safety device used in industrial and construction environments." },
  { name: "Crane Anti-Collision", image: "/assets/craneAntiCollision.jpg", description: "An intelligent safety system that detects nearby objects and prevents crane collisions." },
  { name: "Low Web Crane Rail", image: "/assets/lowWebCraneRail.jpg", description: "A specialized rail system optimized for low-clearance crane operations." },
  { name: "Signal Horn", image: "/assets/SignalHorn.jpg", description: "A powerful warning device used in cranes and industrial machinery to alert workers." },
  { name: "Enclosed Conductor Bar", image: "/assets/enclosedConductorBar.jpg", description: "A reliable power supply system that delivers continuous energy to moving cranes." },
  { name: "Lifting Beam", image: "/assets/liftingBeam.jpg", description: "A reinforced horizontal beam used to stabilize and lift heavy loads." },
  { name: "Gear", image: "/assets/gear.jpg", description: "A fundamental mechanical component in crane and lifting systems." },
  { name: "Motor", image: "/assets/motor.jpg", description: "A high-performance motor designed to power cranes, hoists, and other industrial equipment." },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const modalAnimation = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.3 } },
};

const Service = () => {
  const [selectedPart, setSelectedPart] = useState(null);
  const navigate = useNavigate();

  return (
    <div>
      {/* Service Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[30vh] flex justify-center items-center text-white text-center pointer-events-none"
        style={{ backgroundImage: `url(${serviceBackground})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 "></div>
        <motion.div className="relative" initial="hidden" animate="visible" variants={fadeInUp}>
          <h2 className="text-6xl font-normal uppercase">OUR SERVICES</h2>
         
          <div className="w-24 h-1 bg-white mx-auto mt-4"></div>
        </motion.div>
      </motion.div>


      <div>
     

      {/* Our Services Section */}
      <motion.div className="py-16 bg-gray-950 cursor-default ">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
         
        </motion.div>
        

        <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }} 
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-7 bg-gray-800 rounded-lg shadow-md flex flex-col items-center text-white hover:bg-gray-700 transition duration-300"
            >
              {service.icon}
              <h3 className="text-2xl font-seminormal mt-4">{service.title}</h3>
              <p className="text-center text-gray-300 mt-2">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>


      {/* Parts Section */}
      <div className="bg-gray-300 py-16">
        <h2 className="text-center text-5xl text-gray-800 font-normal mb-12 pointer-events-none">Our Parts</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
          {parts.map((part, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-4 shadow-lg text-center hover:scale-105 transition duration-300 cursor-pointer"
              onClick={() => setSelectedPart(part)}
            >
              <img src={part.image} alt={part.name} className="w-full h-48 object-contain rounded-md shadow-md group transform transition duration-200 hover:scale-105" />
              <h3 className="text-lg text-blue-700 font-semibold font-seminormal mt-4">{part.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Part Details Modal */}
      <AnimatePresence>
  {selectedPart && (
    <motion.div
      className="fixed inset-0 bg-white bg-opacity-50 flex justify-center items-center p-4 z-50 cursor-default"
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div
        className="relative bg-white p-6 rounded-lg shadow-lg max-w-lg w-full text-center "
        variants={modalAnimation}
      >
        {/* Close Button */}
        <button
          className="absolute top-3 right-4 text-normal"
          onClick={() => setSelectedPart(null)}
        >
          ✖
        </button>

        {/* Modal Content */}
        <img src={selectedPart.image} alt={selectedPart.name} className="w-full h-48 object-contain rounded-md" />
        <h3 className="text-2xl font-seminormal mt-4">{selectedPart.name}</h3>
        <p className="text-gray-700 mt-2">{selectedPart.description}</p>
        
        {/* Get in Touch Button */}
        <button
          className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-800 transition"
          onClick={() => navigate("/contact")}
        >
        Contact Us
        </button>
      </motion.div>
    </motion.div>
  )}
  
</AnimatePresence>

    </div>
  );
};

export default Service;
