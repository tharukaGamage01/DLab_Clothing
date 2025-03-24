import React, { useState, useRef } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/~Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import hero1 from "../images/img3.jpg";
import hero2 from "../images/img4.jpg";
import hero3 from "../images/img1.jpg";

import design1 from "../images/cd2.png";
import design2 from "../images/cd2.png";
import design3 from "../images/cd2.png";
import design4 from "../images/cd1.png";
import design5 from "../images/cd1.png";
import design6 from "../images/cd1.png";

const sliderImages = [hero1, hero2, hero3];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  pauseOnHover: false,
  fade: true,
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
  pauseOnHover: true,
  responsive: [
    {
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const features = [
  {
    icon: "★",
    title: "Premium Quality",
    desc: "We use only the highest quality materials and advanced production techniques.",
  },
  {
    icon: "🎨",
    title: "Custom Design",
    desc: "Our expert designers work with you to create unique, personalized apparel.",
  },
  {
    icon: "🚚",
    title: "Fast Delivery",
    desc: "Quick turnaround times and reliable shipping to meet your deadlines.",
  },
  {
    icon: "💯",
    title: "Satisfaction Guaranteed",
    desc: "We're committed to ensuring your complete satisfaction with every order.",
  },
];

const completedDesigns = [
  {
    img: design1,
    name: "Elite Sports Kit",
    desc: "This premium-quality sports jersey is crafted for maximum comfort and breathability. Designed with moisture-wicking polyester fabric, it keeps you cool during intense activities. The lightweight, durable material ensures long-lasting wear, making it perfect for athletes, fitness enthusiasts, and casual outings.",
    material: "100% Polyester with moisture-wicking technology.",
    type: "Athletic Fit Sportswear",
  },
  {
    img: design2,
    name: "Elite Sports Kit",
    desc: "This premium-quality sports jersey is crafted for maximum comfort and breathability. Designed with moisture-wicking polyester fabric, it keeps you cool during intense activities. The lightweight, durable material ensures long-lasting wear, making it perfect for athletes, fitness enthusiasts, and casual outings.",
    material: "100% Polyester with moisture-wicking technology.",
    type: "Athletic Fit Sportswear",
  },
  {
    img: design3,
    name: "Elite Sports Kit",
    desc: "This premium-quality sports jersey is crafted for maximum comfort and breathability. Designed with moisture-wicking polyester fabric, it keeps you cool during intense activities. The lightweight, durable material ensures long-lasting wear, making it perfect for athletes, fitness enthusiasts, and casual outings.",
    material: "100% Polyester with moisture-wicking technology.",
    type: "Athletic Fit Sportswear",
  },
  {
    img: design4,
    name: "Elite Sports Kit",
    desc: "This premium-quality sports jersey is crafted for maximum comfort and breathability. Designed with moisture-wicking polyester fabric, it keeps you cool during intense activities. The lightweight, durable material ensures long-lasting wear, making it perfect for athletes, fitness enthusiasts, and casual outings.",
    material: "100% Polyester with moisture-wicking technology.",
    type: "Athletic Fit Sportswear",
  },
  {
    img: design5,
    name: "Elite Sports Kit",
    desc: "This premium-quality sports jersey is crafted for maximum comfort and breathability. Designed with moisture-wicking polyester fabric, it keeps you cool during intense activities. The lightweight, durable material ensures long-lasting wear, making it perfect for athletes, fitness enthusiasts, and casual outings.",
    material: "100% Polyester with moisture-wicking technology.",
    type: "Athletic Fit Sportswear",
  },
  {
    img: design6,
    name: "Elite Sports Kit",
    desc: "This premium-quality sports jersey is crafted for maximum comfort and breathability. Designed with moisture-wicking polyester fabric, it keeps you cool during intense activities. The lightweight, durable material ensures long-lasting wear, making it perfect for athletes, fitness enthusiasts, and casual outings.",
    material: "100% Polyester with moisture-wicking technology.",
    type: "Athletic Fit Sportswear",
  },
];

const Home = () => {
  const [selectedDesign, setSelectedDesign] = useState(null);
  const designsRef = useRef(null);

  const handleScrollToDesigns = () => {
    if (designsRef.current) {
      designsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="font-poppins text-gray-200 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative">
        <Slider {...sliderSettings}>
          {sliderImages.map((img, index) => (
            <div key={index} className="relative">
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-screen object-cover brightness-50"
              />
            </div>
          ))}
        </Slider>
        <div className="absolute bottom-10 left-10 max-w-lg bg-white p-6 rounded-lg border shadow-lg">
          <h1 className="text-4xl  text-black font-bold leading-tight tracking-wide">
            Custom Apparel Solutions for Every Occasion
          </h1>
          <p className="text-sm text-black mt-4">
            From sportswear to corporate attire, we provide high-quality custom
            clothing designed to elevate your brand.
          </p>
          <button
            onClick={handleScrollToDesigns}
            className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md transition-all duration-300 shadow-lg"
          >
            Explore Our Custom Designs
          </button>
        </div>
      </section>

      {/* Completed Designs Section */}
      <section
        ref={designsRef}
        className="py-20 bg-transparent backdrop-blur-lg"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl text-white mb-12">Our Custom Designs</h2>
          <Slider {...settings}>
            {completedDesigns.map((design, index) => (
              <div key={index} className="px-4">
                {" "}
                <div
                  className="relative group w-110 h-96 overflow-hidden rounded-2xl border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer bg-white/20 backdrop-blur-md"
                  onClick={() => setSelectedDesign(design)}
                >
                  <img
                    src={design.img}
                    alt={design.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 text-white rounded-2xl">
                    <h3 className="text-2xl font-bold mb-2">{design.name}</h3>
                    <p className="text-gray-300 mb-4">{design.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {selectedDesign && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={() => setSelectedDesign(null)}
        >
          <div
            className="bg-white/80 rounded-2xl shadow-2xl w-full max-w-3xl flex flex-col md:flex-row items-center space-x-6 h-auto md:h-120 p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left Side: Image */}
            <div className="w-full md:w-1/2">
              <img
                src={selectedDesign.img}
                alt={selectedDesign.name}
                className="w-full h-full object-cover rounded-xl "
              />
            </div>

            {/* Right Side: Details */}
            <div className="w-full md:w-1/2 text-black space-y-4">
              <h2 className="text-3xl font-bold">{selectedDesign.name}</h2>
              <p className="text-black">{selectedDesign.desc}</p>
              <p>
                <strong>Material:</strong> {selectedDesign.material}
              </p>
              <p>
                <strong>Type:</strong> {selectedDesign.type}
              </p>
              <button
                className="mt-4 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition duration-300"
                onClick={() => setSelectedDesign(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Features Section */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl  text-white relative inline-block">
              Why Choose Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-4xl text-black mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-black mb-3">
                  {feature.title}
                </h3>
                <p className="text-black">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-white bg-opacity-10 backdrop-blur-lg text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl mb-4">
            Ready to Create Your Custom Apparel?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Contact us today to discuss your project requirements
          </p>
          <Link
            to="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md transition-all duration-300"
          >
            Get Started
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
