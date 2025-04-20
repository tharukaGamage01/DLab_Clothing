import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/~Footer";

const About = () => {
  return (
    <div className="font-poppins text-black bg-white min-h-screen">
      <Navbar />

      {/* Hero Section with improved design and depth */}
      <section className="relative py-24 bg-gradient-to-r from-[#E60000] to-[#FF3333] text-white text-center">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/fabric-plaid.png')] opacity-10"></div>
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            About TLab Clothing
          </h1>
          <div className="w-24 h-1 bg-white mx-auto mb-8 opacity-70"></div>
          <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
            TLAB specializes in custom T-shirt manufacturing, offering
            high-quality, personalized apparel for individuals, businesses, and
            events. With a focus on creativity and customer satisfaction, TLAB
            provides unique designs, premium materials, and exceptional printing
            services. We pride ourselves on delivering your orders right on
            time, ensuring a seamless and reliable experience every time.
          </p>
        </div>

        {/* Added decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-12 bg-white opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-full">
          <svg
            className="text-white fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 48"
          >
            <path
              fillOpacity="0.15"
              d="M0,32L80,32C160,32,320,32,480,21.3C640,11,800,0,960,0C1120,0,1280,11,1360,16L1440,21L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Our Story Section with improved layout and visual interest */}
      <section className="py-20 bg-gray-50 text-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-400 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-700"></div>
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <div
                  className="h-96 bg-cover bg-center transform transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: "url('/images/about.jpg')" }}
                ></div>
                {/* Decorative elements */}
                <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-white opacity-70"></div>
                <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-white opacity-70"></div>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold mb-3 text-[#E60000]">
                  Our Story
                </h2>
                <div className="w-16 h-1 bg-[#E60000] mb-6"></div>
              </div>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                Founded in 2024, TLab Clothing has established itself as a
                leader in the custom apparel industry. We specialize in creating
                high-quality, customized clothing solutions for businesses,
                sports teams, and promotional events.
              </p>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                Our dedicated team of designers, production specialists, and
                customer service representatives work together to ensure every
                project exceeds expectations. With state-of-the-art equipment
                and a commitment to excellence, we deliver exceptional products
                that help our clients make a lasting impression.
              </p>

              {/* Added key stats */}
              <div className="flex flex-wrap gap-6 mt-8 pt-6 border-t border-gray-200">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-[#E60000]">10+</span>
                  <span className="text-gray-600">Years Experience</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-[#E60000]">5k+</span>
                  <span className="text-gray-600">Happy Clients</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-[#E60000]">
                    15k+
                  </span>
                  <span className="text-gray-600">Orders Completed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values with improved visual style */}
      <section className="py-20 bg-white text-center">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-black mb-3">
              Our Mission & Values
            </h2>
            <div className="w-24 h-1 bg-[#E60000] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What drives us every day and shapes how we work with our clients
              and partners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Our Mission",
                icon: "🎯",
                text: "To provide high-quality, customized apparel solutions that help our clients stand out, make a statement, and bring their vision to life.",
                color: "from-red-600 to-red-400",
              },
              {
                title: "Our Vision",
                icon: "👁️",
                text: "To become the most trusted and innovative custom apparel provider, known for exceptional quality, creativity, and customer service.",
                color: "from-red-500 to-red-300",
              },
              {
                title: "Our Values",
                icon: "💫",
                text: "Excellence, integrity, innovation, sustainability, and customer satisfaction drive everything we do.",
                color: "from-red-600 to-red-400",
              },
            ].map((item, index) => (
              <div key={index} className="group relative">
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${item.color} rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-700`}
                ></div>
                <div className="relative bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                  <div className="text-5xl mb-6">{item.icon}</div>
                  <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-[#E60000] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed flex-grow">
                    {item.text}
                  </p>

                  {/* Decorative element */}
                  <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#E60000] border-dashed opacity-20 group-hover:opacity-60 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with improved design */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-gray-300 leading-relaxed">
            Let's create custom apparel that perfectly represents your brand and
            meets your specific needs.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#E60000] hover:bg-red-700 text-white font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Contact Us Today
          </Link>

          {/* Testimonial preview */}
          <div className="mt-16 max-w-lg mx-auto bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <div className="text-2xl text-gray-200 mb-4">"</div>
            <p className="text-gray-200 italic mb-4">
              Working with TLab Clothing exceeded our expectations. Their
              attention to detail and commitment to quality made our company
              uniforms stand out. Highly recommended!
            </p>
            <div className="flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-gray-400 mr-3"></div>
              <div className="text-left">
                <p className="font-semibold text-white">Sarah Johnson</p>
                <p className="text-sm text-gray-300">
                  Marketing Director, XYZ Corp
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
