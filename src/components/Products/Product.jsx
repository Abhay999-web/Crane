import React from "react";

const products = [
  { src: "/assets/c-hook.jpg", name: "C Hook" },
  { src: "/assets/davitCrane.jpg", name: "Davit Crane" },
  { src: "/assets/electric-chain-hoist.jpg", name: "Electric Chain Hoist" },
  { src: "/assets/electric-winches.jpg", name: "Electric Winches" },
  { src: "/assets/grabsClamShell.jpg", name: "Grabs Clam Shell" },
  { src: "/assets/lorry.jpg", name: "Lorry" },
  { src: "/assets/manualChainHoist.jpg", name: "Manual Chain Hoist" },
  { src: "/assets/manualOverhead.jpg", name: "Manual Overhead" },
  { src: "/assets/manualWinches.jpg", name: "Manual Winches" },
  { src: "/assets/peel.jpg", name: "Peel" },
  { src: "/assets/portableGantry.jpg", name: "Portable Gantry" },
  { src: "/assets/potence-rotation-totale.jpg", name: "Potence Rotation Totale" },
  { src: "/assets/potence.jpg", name: "Potence" },
  { src: "/assets/slingWebSling.jpg", name: "Sling Web Sling" },
  { src: "/assets/trolley.jpg", name: "Trolley" },
  { src: "/assets/underBracedWall.jpg", name: "Under Braced Wall" },
];

const Product = () => {
  return (
    <div className="w-full py-12 bg-black flex justify-center overflow-hidden">
      <div className="w-full text-center">
        <p className="text-4xl font-normal text-white mb-10 pointer-events-none">Our Products</p>

        {/* Auto-Scrolling Product Carousel */}
        <div className="overflow-hidden whitespace-nowrap w-full relative ">
          <div 
            className="flex w-max"
            style={{
              display: "flex",
              animation: "scrollLeft 30s linear infinite",
            }}
          >
            {[...products, ...products].map((product, index) => (
              <div key={index} className="w-64 mx-4">
                <div className="bg-white rounded-lg shadow-xl shadow-gray-800 p-4 transform transition-all duration-300 hover:scale-105 cursor-default ">
                  <img 
                    src={product.src} 
                    alt={product.name} 
                    className="w-full h-40 object-contain rounded-lg  "
                  />
                  <p className="mt-2 text-lg font-medium text-black">{product.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Custom CSS for Animation */}
        <style>{`
          @keyframes scrollLeft {
            from {
              transform: translateX(0%);
            }
            to {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Product;
