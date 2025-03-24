// pages/About.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="font-sans text-gray-800 pt-16">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About ThreadCraft</h1>
          <p className="text-xl max-w-2xl mx-auto">Learn more about our journey, our mission, and what makes us the leading custom apparel solution provider.</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden h-96 shadow-xl" style={{ backgroundImage: "url('/images/about.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}></div>
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">Founded in 2015, ThreadCraft has established itself as a leader in the custom apparel industry. We specialize in creating high-quality, customized clothing solutions for businesses, sports teams, and promotional events.</p>
              <p className="text-gray-600 mb-6 leading-relaxed">Our dedicated team of designers, production specialists, and customer service representatives work together to ensure that every project exceeds expectations. With state-of-the-art equipment and a commitment to excellence, we deliver exceptional products that help our clients make a lasting impression.</p>
              <p className="text-gray-600 mb-6 leading-relaxed">From small local businesses to large corporate clients, we've helped thousands of customers create custom apparel that perfectly represents their brand and meets their specific needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 relative inline-block">
              Our Mission & Values
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-4 w-12 h-1 bg-red-500"></span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl text-blue-900 mb-4">🎯</div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Our Mission</h3>
              <p className="text-gray-600">To provide high-quality, customized apparel solutions that help our clients stand out, make a statement, and bring their vision to life.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl text-blue-900 mb-4">👁️</div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Our Vision</h3>
              <p className="text-gray-600">To become the most trusted and innovative custom apparel provider, known for exceptional quality, creativity, and customer service.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl text-blue-900 mb-4">💫</div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Our Values</h3>
              <p className="text-gray-600">Excellence, integrity, innovation, sustainability, and customer satisfaction drive everything we do.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 relative inline-block">
              Our Team
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-4 w-12 h-1 bg-red-500"></span>
            </h2>
            <p className="text-xl max-w-2xl mx-auto mt-6">Meet the talented individuals who make ThreadCraft the industry leader it is today.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md text-center">
              <div className="h-64 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900">Sarah Johnson</h3>
                <p className="text-gray-500 mb-4">Founder & CEO</p>
                <p className="text-gray-600">With over 15 years in the apparel industry, Sarah leads with passion and innovation.</p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md text-center">
              <div className="h-64 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900">David Chen</h3>
                <p className="text-gray-500 mb-4">Head of Design</p>
                <p className="text-gray-600">David brings creativity and technical expertise to every design challenge.</p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md text-center">
              <div className="h-64 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900">Maria Rodriguez</h3>
                <p className="text-gray-500 mb-4">Production Manager</p>
                <p className="text-gray-600">Maria ensures every product meets our high standards of quality.</p>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md text-center">
              <div className="h-64 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900">James Wilson</h3>
                <p className="text-gray-500 mb-4">Customer Relations</p>
                <p className="text-gray-600">James is dedicated to providing exceptional service to our clients.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">Let's create custom apparel that perfectly represents your brand and meets your specific needs.</p>
          <Link to="/contact" className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-md transition-all duration-300">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;