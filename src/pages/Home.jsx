import React, { useState, useRef } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import Navbar from "../components/Navbar";
import Footer from "../components/~Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import video from "../videos/bg.mp4";
import "../App.css";

import design1 from "../images/cd2.png";
import design2 from "../images/cd2.png";
import design3 from "../images/cd2.png";
import design4 from "../images/img6.jpeg";
import design5 from "../images/img7.jpeg";
import design6 from "../images/img8.jpeg";

const scrollToSection = (ref) => {
  ref.current.scrollIntoView({ behavior: "smooth" });
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
      breakpoint: 1024,
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
        arrows: false,
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
    desc: "Premium athletic wear designed for maximum performance with moisture-wicking technology that keeps you cool and dry during intense activities.",
    material: "100% Polyester with moisture-wicking technology",
    type: "Athletic Fit Sportswear",
    category: "Sports",
  },
  {
    img: design2,
    name: "Corporate Collection",
    desc: "Professional attire that combines style with comfort, perfect for office environments. Modern cuts and durable fabrics ensure a polished look all day.",
    material: "Cotton-Polyester Blend",
    type: "Business Casual",
    category: "Corporate",
  },
  {
    img: design3,
    name: "Event Staff Uniforms",
    desc: "Eye-catching uniforms that help staff stand out while providing comfort during long events. Customizable with your branding and event details.",
    material: "Lightweight Breathable Cotton",
    type: "Uniform Apparel",
    category: "Events",
  },
  {
    img: design1,
    name: "Elite Sports Kit",
    desc: "Premium athletic wear designed for maximum performance with moisture-wicking technology that keeps you cool and dry during intense activities.",
    material: "100% Polyester with moisture-wicking technology",
    type: "Athletic Fit Sportswear",
    category: "Sports",
  },
  {
    img: design2,
    name: "Corporate Collection",
    desc: "Professional attire that combines style with comfort, perfect for office environments. Modern cuts and durable fabrics ensure a polished look all day.",
    material: "Cotton-Polyester Blend",
    type: "Business Casual",
    category: "Corporate",
  },
  {
    img: design3,
    name: "Event Staff Uniforms",
    desc: "Eye-catching uniforms that help staff stand out while providing comfort during long events. Customizable with your branding and event details.",
    material: "Lightweight Breathable Cotton",
    type: "Uniform Apparel",
    category: "Events",
  },
];

const Home = () => {
  // Create refs for each category section
  const casualTshirtsRef = useRef(null);
  const collarNeckRef = useRef(null);
  const vNeckRef = useRef(null);
  const trousersRef = useRef(null);
  const formalWearRef = useRef(null);
  const capsRef = useRef(null);
  const sportsWearRef = useRef(null);

  const designs = {
    casualCollarNeck: [
      {
        id: 1,
        name: "Classic Collar Tee",
        category: "Casual",
        img: design1,
        desc: "Comfortable cotton collar neck t-shirt perfect for everyday wear.",
        material: "100% Cotton",
        type: "Collar Neck",
      },
      {
        id: 2,
        name: "Striped Collar Tee",
        category: "Casual",
        img: design1,
        desc: "Stylish striped pattern with comfortable fit.",
        material: "Cotton Blend",
        type: "Collar Neck",
      },
      {
        id: 12,
        name: "Classic Collar Tee",
        category: "Casual",
        img: design1,
        desc: "Comfortable cotton collar neck t-shirt perfect for everyday wear.",
        material: "100% Cotton",
        type: "Collar Neck",
      },
      // Add more items as needed
    ],
    casualVNeck: [
      {
        id: 3,
        name: "Basic V-Neck",
        category: "Casual",
        img: design1,
        desc: "Simple yet elegant v-neck design for casual outings.",
        material: "Cotton Jersey",
        type: "V Neck",
      },
      {
        id: 4,
        name: "Premium V-Neck",
        category: "Casual",
        img: design1,
        desc: "Premium quality v-neck with enhanced comfort.",
        material: "Soft Cotton",
        type: "V Neck",
      },
      // Add more items as needed
    ],
    trousers: [
      {
        id: 5,
        name: "Slim Fit Chinos",
        category: "Trousers",
        img: design1,
        desc: "Modern slim fit chinos suitable for various occasions.",
        material: "Cotton Twill",
        type: "Chinos",
      },
      {
        id: 6,
        name: "Classic Khakis",
        category: "Trousers",
        img: design1,
        desc: "Timeless khaki trousers with durable construction.",
        material: "Khaki Cotton",
        type: "Casual Trousers",
      },
      // Add more items as needed
    ],
    formalWear: [
      {
        id: 7,
        name: "Business Shirt",
        category: "Formal",
        img: design1,
        desc: "Professional dress shirt for business settings.",
        material: "Cotton Poplin",
        type: "Dress Shirt",
      },
      {
        id: 8,
        name: "Executive Blazer",
        category: "Formal",
        img: design1,
        desc: "Tailored blazer with premium finishing.",
        material: "Wool Blend",
        type: "Blazer",
      },
      // Add more items as needed
    ],
    caps: [
      {
        id: 9,
        name: "Snapback Cap",
        category: "Caps",
        img: design1,
        desc: "Modern snapback with adjustable fit.",
        material: "Cotton Twill",
        type: "Snapback",
      },
      {
        id: 10,
        name: "Trucker Cap",
        category: "Caps",
        img: design1,
        desc: "Classic trucker style with mesh back for breathability.",
        material: "Cotton/Polyester",
        type: "Trucker",
      },
      // Add more items as needed
    ],
    sportsWear: [
      {
        id: 11,
        name: "Performance Tee",
        category: "Sports",
        img: "../images/cd2.png",
        desc: "Moisture-wicking performance t-shirt for active lifestyles.",
        material: "Dri-Fit",
        type: "Athletic",
      },
      {
        id: 12,
        name: "Training Shorts",
        category: "Sports",
        img: "../images/cd2.png",
        desc: "Lightweight shorts perfect for training and exercise.",
        material: "Polyester",
        type: "Athletic Shorts",
      },
      // Add more items as needed
    ],
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [selectedDesign, setSelectedDesign] = useState(null);
  const [expandedDesc, setExpandedDesc] = useState(null);
  const designsRef = useRef(null);

  const handleScrollToDesigns = () => {
    if (designsRef.current) {
      designsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleDescription = (index) => {
    setExpandedDesc(expandedDesc === index ? null : index);
  };

  return (
    <div className="font-poppins text-black bg-white min-h-screen">
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

          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30"></div>
        </div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
          <h1 className="text-5xl md:text-6xl text-white font-extrabold leading-tight tracking-tight drop-shadow-md">
            Custom <span className="text-[#E60000]">Tailored</span> Solutions
            <br className="hidden md:block" /> for Every Occasion
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mt-6 max-w-3xl mx-auto drop-shadow-md">
            From screen printing and embroidery to heat press and sublimation,
            we create premium custom apparel that perfectly fits your needs.
          </p>

          <button
            onClick={handleScrollToDesigns}
            className="mt-8 bg-[#E60000] hover:bg-red-700 text-white font-bold py-3 px-8 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Explore Our Designs
          </button>

          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <span className="text-white text-sm mb-2 animate-pulse">
              Scroll to discover
            </span>
            <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
              <div className="w-1.5 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Portfolio
            </h2>
            <div className="w-20 h-1 bg-[#E60000] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Browse our collection of custom-designed apparel showcasing
              quality and craftsmanship.
            </p>
          </div>

          {/* Category Navigation */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-4 text-center">
              Jump to Category
            </h3>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <button
                onClick={() => scrollToSection(casualTshirtsRef)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
              >
                Casual T-shirts
              </button>
              <button
                onClick={() => scrollToSection(trousersRef)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
              >
                Trousers
              </button>
              <button
                onClick={() => scrollToSection(formalWearRef)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
              >
                Formal Wear
              </button>
              <button
                onClick={() => scrollToSection(capsRef)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
              >
                Caps
              </button>
              <button
                onClick={() => scrollToSection(sportsWearRef)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
              >
                Sports Wear
              </button>
            </div>
          </div>

          {/* Casual T-shirts Section */}
          <div ref={casualTshirtsRef} className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-200 pb-2">
              Casual T-shirts
            </h2>

            {/* Collar Neck Subsection */}
            <div ref={collarNeckRef} className="mb-10">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 ml-2">
                Collar Neck
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {designs.casualCollarNeck.map((design, index) => (
                  <div
                    key={design.id}
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
                  >
                    <div className="relative h-80 overflow-hidden">
                      <img
                        src={design.img}
                        alt={design.name}
                        className="w-full h-full object-cover "
                      />
                      <span className="absolute bottom-3 left-3 bg-[#E60000] text-white text-xs px-2 py-1 rounded">
                        {design.category}
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-gray-900">
                        {design.name}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {design.desc}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                          {design.material}
                        </span>
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                          {design.type}
                        </span>
                      </div>
                      {/* <button className="w-full bg-[#E60000] hover:bg-red-700 text-white py-2 rounded-md transition-colors">
                        View Details
                      </button> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* V Neck Subsection */}
            <div ref={vNeckRef} className="mb-10">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 ml-2">
                V Neck
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {designs.casualVNeck.map((design, index) => (
                  <div
                    key={design.id}
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={design.img}
                        alt={design.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <span className="absolute bottom-3 left-3 bg-[#E60000] text-white text-xs px-2 py-1 rounded">
                        {design.category}
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-gray-900">
                        {design.name}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {design.desc}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                          {design.material}
                        </span>
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                          {design.type}
                        </span>
                      </div>
                      {/* <button className="w-full bg-[#E60000] hover:bg-red-700 text-white py-2 rounded-md transition-colors">
                        View Details
                      </button> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Trousers Section */}
          <div ref={trousersRef} className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-200 pb-2">
              Trousers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {designs.trousers.map((design, index) => (
                <div
                  key={design.id}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={design.img}
                      alt={design.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <span className="absolute bottom-3 left-3 bg-[#E60000] text-white text-xs px-2 py-1 rounded">
                      {design.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">
                      {design.name}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {design.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                        {design.material}
                      </span>
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                        {design.type}
                      </span>
                    </div>
                    {/* <button className="w-full bg-[#E60000] hover:bg-red-700 text-white py-2 rounded-md transition-colors">
                      View Details
                    </button> */}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Formal Wear Section */}
          <div ref={formalWearRef} className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-200 pb-2">
              Formal Wear
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {designs.formalWear.map((design, index) => (
                <div
                  key={design.id}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={design.img}
                      alt={design.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <span className="absolute bottom-3 left-3 bg-[#E60000] text-white text-xs px-2 py-1 rounded">
                      {design.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">
                      {design.name}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {design.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                        {design.material}
                      </span>
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                        {design.type}
                      </span>
                    </div>
                    {/* <button className="w-full bg-[#E60000] hover:bg-red-700 text-white py-2 rounded-md transition-colors">
                      View Details
                    </button> */}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Caps Section */}
          <div ref={capsRef} className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-200 pb-2">
              Caps
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {designs.caps.map((design, index) => (
                <div
                  key={design.id}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={design.img}
                      alt={design.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <span className="absolute bottom-3 left-3 bg-[#E60000] text-white text-xs px-2 py-1 rounded">
                      {design.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">
                      {design.name}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {design.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                        {design.material}
                      </span>
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                        {design.type}
                      </span>
                    </div>
                    {/* <button className="w-full bg-[#E60000] hover:bg-red-700 text-white py-2 rounded-md transition-colors">
                      View Details
                    </button> */}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sports Wear Section */}
          <div ref={sportsWearRef} className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-200 pb-2">
              Sports Wear
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {designs.sportsWear.map((design, index) => (
                <div
                  key={design.id}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={design.img}
                      alt={design.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <span className="absolute bottom-3 left-3 bg-[#E60000] text-white text-xs px-2 py-1 rounded">
                      {design.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">
                      {design.name}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {design.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                        {design.material}
                      </span>
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                        {design.type}
                      </span>
                    </div>
                    {/* <button className="w-full bg-[#E60000] hover:bg-red-700 text-white py-2 rounded-md transition-colors">
                      View Details
                    </button> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview - New Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-black mb-3">
              Our Expertise
            </h2>
            <div className="w-24 h-1 bg-[#E60000] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge technologies and techniques we use to bring your
              designs to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Screen Printing",
                icon: "🎭",
                text: "Perfect for bulk orders with vibrant, long-lasting designs.",
              },
              {
                title: "Embroidery",
                icon: "🧵",
                text: "Premium stitched designs for a professional and elegant finish.",
              },
              {
                title: "Direct to Garment",
                icon: "👕",
                text: "Ideal for detailed, multi-colored designs and small quantities.",
              },
              {
                title: "Vinyl Heat Press",
                icon: "🔥",
                text: "Great for names, numbers, and simple designs with a raised texture.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 border-b-4 border-[#E60000] hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Improved with subtle texture and better spacing */}
      <section className="py-16 bg-gray-50 relative">
        {/* Subtle fabric texture overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/fabric-of-squares.png')] opacity-5"></div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-black font-semibold mb-3">
              Why Choose Us
            </h2>
            <div className="w-20 h-1 bg-[#E60000] mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-[#E60000] group overflow-hidden relative"
              >
                {/* Feature icon with animation */}
                <div className="text-4xl text-[#E60000] mb-5 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#E60000] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-700">{feature.desc}</p>
                {/* Decorative stitching effect */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#E60000] border-dashed opacity-40"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#E60000] border-dashed opacity-40"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section - Improved with background and better visual hierarchy */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl mb-4 font-semibold">
            Ready to Create Your Custom Apparel?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-gray-300">
            Contact us today to discuss your project requirements and bring your
            vision to life.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#E60000] hover:bg-red-700 text-white font-bold py-3 px-8 rounded-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            Get in Touch
          </Link>

          {/* Added social proof */}
          <div ref={ref} className="mt-12 flex flex-wrap justify-center gap-8">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold">
                {inView ? <CountUp end={500} duration={2} /> : "0"}+
              </span>
              <span className="text-gray-300">Satisfied Clients</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold">
                {inView ? <CountUp end={1200} duration={2.5} /> : "0"}+
              </span>
              <span className="text-gray-300">Projects Completed</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold">
                {inView ? <CountUp end={98} duration={2} suffix="%" /> : "0%"}
              </span>
              <span className="text-gray-300">Customer Satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
