import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/~Footer";

const Contact = () => {
  return (
    <div className="font-poppins text-white bg-black pt-10">
      {/* Hero Section */}
      <Navbar />
      <section className="text-white py-10 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl text-red-600 mb-6">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-400">
            Get in touch with our team to discuss your custom apparel needs or
            request a quote.
          </p>
        </div>
      </section>

      {/* Contact Information & Map Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Contact Information */}
            <div className="bg-[#1F1F1F] p-6 rounded-xl shadow-xl border border-gray-700">
              <h2 className="text-2xl text-left font-bold text-red-600 mb-4">
                Get In Touch
              </h2>
              <p className="text-gray-300 mb-4">
                Have questions about our custom apparel services? Need a quote
                for your project? Fill out the form, and we’ll get back to you
                soon.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <span className="text-xl text-red-600" aria-hidden="true">
                    📍
                  </span>
                  <div>
                    <h3 className="text-md font-semibold text-gray-300">
                      Our Address
                    </h3>
                    <p className="text-gray-300">
                      123 Apparel Street, Fashion City, FC 12345
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="text-xl text-red-600" aria-hidden="true">
                    📞
                  </span>
                  <div>
                    <h3 className="text-md font-semibold text-gray-300">
                      Phone
                    </h3>
                    <p className="text-gray-300">(123) 456-7890</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="text-xl text-red-600" aria-hidden="true">
                    ✉️
                  </span>
                  <div>
                    <h3 className="text-md font-semibold text-gray-300">
                      Email
                    </h3>
                    <p className="text-gray-300">info@threadcraft.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="text-xl text-red-600" aria-hidden="true">
                    ⏰
                  </span>
                  <div>
                    <h3 className="text-md font-semibold text-gray-300">
                      Business Hours
                    </h3>
                    <p className="text-gray-300">Mon - Fri: 9 AM - 5 PM</p>
                    <p className="text-gray-300">Sat - Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#1F1F1F] p-6 rounded-xl shadow-xl border border-gray-700">
              <h2 className="text-2xl font-bold text-red-600 mb-4">
                Send a Message
              </h2>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 rounded-md bg-[#333333] text-white border border-gray-600 focus:ring-2 focus:ring-red-600"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 rounded-md bg-[#333333] text-white border border-gray-600 focus:ring-2 focus:ring-red-600"
                />
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full p-3 rounded-md bg-[#333333] text-white border border-gray-600 focus:ring-2 focus:ring-red-600"
                ></textarea>
                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transition-all duration-300">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
