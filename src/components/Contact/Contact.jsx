import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Header Section */}
      <div 
        className="relative bg-cover bg-center h-[300px] flex items-center justify-center pointer-events-none"
        style={{ backgroundImage: "url('/assets/contactBackground.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative text-center text-white">
          <h2 className="text-5xl font-normal">
            CONTACT <span className="text-white">INFO</span>
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mt-4"></div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-normal text-black uppercase border-b-2 border-blue-800 pb-2 pointer-events-none">
          Contact Crane Parts & Supply
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 items-center">
          {/* Contact Info & Map */}
          <div>
            <div className="mb-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093334!2d144.953735315666!3d-37.81720987975157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1d86b0b%3A0x5045675218ce6e0!2sMelbourne%2C+Australia!5e0!3m2!1sen!2us!4v1534297963490"
                width="100%"  
                height="400"  
                allowFullScreen
                loading="lazy"
                className="rounded-md border border-gray-300"
              ></iframe>
            </div>
            <h3 className="text-lg font-normal text-blue-800 pointer-events-none">
              Crane Parts Location and Phone Number
            </h3>
            <p className="text-gray-700 pointer-events-none">
              Crane Parts & Supply, Inc. <br />
              8701 Industrial Drive <br />
              Dubai, Texas 77584 <br />
              Phone: (281) 489-9994 | Toll-Free: (877) 272-6372 <br />
            </p>
          </div>

          {/* Contact Form */}
          <div className="flex justify-center w-full">
            <div className="w-full max-w-md bg-white shadow-lg p-6 rounded-md">
              <h3 className="text-lg font-normal text-blue-800 pointer-events-none">Contact Crane Parts</h3>
              <form className="mt-4 space-y-4">
                <div>
                  <label className="block text-sm font-seminormal">Your Name (required)</label>
                  <input type="text" className="w-full border border-gray-300 p-2 rounded-md" required />
                </div>
                <div>
                  <label className="block text-sm font-seminormal">Your Email (required)</label>
                  <input type="email" className="w-full border border-gray-300 p-2 rounded-md" required />
                </div>
                <div>
                  <label className="block text-sm font-seminormal">Subject</label>
                  <input type="text" className="w-full border border-gray-300 p-2 rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-seminormal">Your Message</label>
                  <textarea className="w-full border border-gray-300 p-2 rounded-md h-32"></textarea>
                </div>
                <div>
                  <button className="bg-blue-800 text-white px-6 py-2 rounded-md font-normal w-full hover:text-black hover:bg-blue-700">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
