import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/~Footer";

const About = () => {
  return (
    <div className="font-poppins text-gray-200 pt-16 bg-[#1F1F1F]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-16 bg-[#E60000] text-white text-center">
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h1 className="text-5xl font-bold mb-6">About TLab Clothing</h1>
          <p className="text-lg text-gray-100 leading-relaxed">
            Learn more about our journey, our mission, and what makes us the
            leading custom apparel solution provider.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-[#333333] text-white">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className="rounded-xl overflow-hidden shadow-lg h-96 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/about.jpg')" }}
          ></div>
          <div>
            <h2 className="text-4xl font-semibold mb-6 text-[#E60000]">
              Our Story
            </h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Founded in 2024, TLab Clothing has established itself as a leader
              in the custom apparel industry. We specialize in creating
              high-quality, customized clothing solutions for businesses, sports
              teams, and promotional events.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Our dedicated team of designers, production specialists, and
              customer service representatives work together to ensure every
              project exceeds expectations. With state-of-the-art equipment and
              a commitment to excellence, we deliver exceptional products that
              help our clients make a lasting impression.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-[#1F1F1F] text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-semibold text-[#E60000] mb-12">
            Our Mission & Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Our Mission",
                icon: "🎯",
                text: "To provide high-quality, customized apparel solutions that help our clients stand out, make a statement, and bring their vision to life.",
              },
              {
                title: "Our Vision",
                icon: "👁️",
                text: "To become the most trusted and innovative custom apparel provider, known for exceptional quality, creativity, and customer service.",
              },
              {
                title: "Our Values",
                icon: "💫",
                text: "Excellence, integrity, innovation, sustainability, and customer satisfaction drive everything we do.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-[#E60000] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#E60000] text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-semibold mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 text-gray-100 leading-relaxed">
            Let's create custom apparel that perfectly represents your brand and
            meets your specific needs.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-black hover:bg-gray-900 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-md"
          >
            Contact Us Today
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
