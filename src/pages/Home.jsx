import React, { useState, useRef } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/~Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import video from "../videos/bg.mp4";

// import hero1 from "../images/img3.jpg";
// import hero2 from "../images/img4.jpg";
// import hero3 from "../images/img1.jpg";

import design1 from "../images/img1.jpg";
import design2 from "../images/img2.jpg";
import design3 from "../images/img3.jpg";
import design4 from "../images/img6.jpeg";
import design5 from "../images/img7.jpeg";
import design6 from "../images/img8.jpeg";

// const sliderImages = [hero1, hero2, hero3];

// const sliderSettings = {
//   dots: true,
//   infinite: true,
//   speed: 1500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 3000,
//   arrows: false,
//   pauseOnHover: false,
//   fade: true,
// };

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
    <div className="font-poppins text-white bg-gradient-to-b from-[#1F1F1F] to-[#333333] min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-screen">
        <div className="absolute inset-0">
          <video
            className="w-full h-full object-cover brightness-50"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="absolute bottom-10 left-10 max-w-lg bg-[#000000] bg-opacity-80 p-6 rounded-lg border border-gray-700 shadow-lg">
          <h1 className="text-4xl text-white font-bold leading-tight tracking-wide">
            Custom Apparel Solutions for Every Occasion
          </h1>
          <p className="text-sm text-gray-300 mt-4">
            From sportswear to corporate attire, we provide high-quality custom
            clothing designed to elevate your brand.
          </p>
          <button
            onClick={handleScrollToDesigns}
            className="mt-6 bg-[#E60000] hover:bg-red-700 text-white font-bold py-3 px-8 rounded-md transition-all duration-300 shadow-lg"
          >
            Explore Our Custom Designs
          </button>
        </div>
      </section>

      {/* Completed Designs Section */}
      <section
        ref={designsRef}
        className="py-10 bg-transparent backdrop-blur-lg"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl text-white relative inline-block">
            Designs created for clients
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-3 w-12 h-1 bg-[#E60000]"></span>
          </h2>
          <p className="text-xl max-w-6xl mx-auto text-gray-300  pt-4">
            Check out our latest collection of high-quality, custom-designed
            clothing created for our valued customers. Below, you’ll find a
            showcase of our past designs, giving you a glimpse of our
            craftsmanship and attention to detail. We take pride in delivering
            premium-quality apparel that meets the highest standards of style
            and durability. Browse through our work to see the quality for
            yourself, and feel free to contact us to bring your own unique
            designs to life!
          </p>

          <Slider {...settings}>
            {completedDesigns.map((design, index) => (
              <div key={index} className="px-4 pt-12">
                <div
                  className="relative group w-110 h-90 overflow-hidden rounded-2xl border border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer bg-[#1F1F1F] backdrop-blur-md"
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
            className="bg-[#1F1F1F] text-white rounded-2xl shadow-2xl w-full max-w-3xl flex flex-col md:flex-row items-center space-x-6 h-auto md:h-120 p-8 border border-gray-700"
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
            <div className="w-full md:w-1/2 space-y-4">
              <h2 className="text-3xl font-bold text-[#E60000]">
                {selectedDesign.name}
              </h2>
              <p className="text-gray-300">{selectedDesign.desc}</p>
              <p>
                <strong className="text-white">Material:</strong>{" "}
                {selectedDesign.material}
              </p>
              <p>
                <strong className="text-white">Type:</strong>{" "}
                {selectedDesign.type}
              </p>
              <button
                className="mt-4 bg-[#E60000] hover:bg-red-700 text-white py-2 px-4 rounded-lg transition duration-300"
                onClick={() => setSelectedDesign(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Features Section */}
      <section className="py-10 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-white relative inline-block">
              Why Choose Us
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-4 w-12 h-1 bg-[#E60000]"></span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#000000] bg-opacity-80 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700 text-white"
              >
                <div className="text-4xl text-[#E60000] mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-10 bg-[#1F1F1F] text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl mb-4">
            Ready to Create Your Custom Apparel?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Contact us today to discuss your project requirements
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#E60000] hover:bg-red-700 text-white font-bold py-3 px-8 rounded-md transition-all duration-300"
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
