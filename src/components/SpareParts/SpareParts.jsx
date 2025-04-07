import React from "react";
import { motion } from "framer-motion";
import { Wrench, Settings, Package } from "lucide-react";

const serviceBackground = "/assets/serviceBackground.jpg";

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

const SpareParts = () => {
  return (
    <div>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[40vh] flex justify-center items-center text-white text-center cursor-default"
        style={{
          backgroundImage: `url(${serviceBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900 to-blue-500 opacity-70 "></div>
        
        <motion.div
          className="relative"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h1 className="text-5xl font-semibold uppercase tracking-wider">
            Premium Crane Spare Parts
          </h1>
          <p className="text-lg mt-4 text-gray-300">
            Trusted solutions for every industrial requirement
          </p>
        </motion.div>
      </motion.div>

      {/* Parts Section */}
      <div className="py-16 bg-gray-300 ">
        <h2 className="text-center text-4xl font-semibold text-gray-800 mb-12 pointer-events-none">
          Explore Our Parts
        </h2>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4 cursor-pointer object-contain w-full">
          {parts.map((part, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-white rounded-lg shadow-lg  group transform transition duration-500 hover:scale-105"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={part.image}
                  alt={part.name}
                  className= "w-full h-full object-contain p-2 transform group-hover:scale-110 transition duration-300" 
                
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">
                  {part.name}
                </h3>
                <p className="text-sm text-gray-600">{part.description}</p>
              </div>
              {/* <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                {index + 1}
              </div> */}
            </motion.div>
          ))}
        </div>
      </div>

    
  {/* Why Choose Us Section */}
  <div className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white pointer-events-none">
        <h2 className="text-center text-4xl font-bold mb-8">
          Why Choose <span className="text-blue-950">Our Spare Parts</span>
        </h2>
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-start space-x-4"
          >
            <Settings size={30} className="text-blue-950" />
            <p>Guaranteed availability for 25 years.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-start space-x-4"
          >
            <Wrench size={30} className="text-blue-950" />
            <p>Expertly crafted for industrial reliability.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-start space-x-4"
          >
            <Package size={30} className="text-blue-950" />
            <p>Immediate stock availability for urgent needs.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-start space-x-4"
          >
            <Settings size={30} className="text-blue-950" />
            <p>Tailored solutions for custom requirements.</p>
          </motion.div>
        </div>
        </div>
        </div>
  );
};

export default SpareParts;
