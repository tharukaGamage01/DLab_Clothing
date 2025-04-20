import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/~Footer";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import emailjs from "@emailjs/browser";

const Contact = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      delete L.Icon.Default.prototype._getIconUrl;

      L.Icon.Default.mergeOptions({
        iconRetinaUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });
    }

    // Initialize the map after fixing icon paths
    if (typeof window !== "undefined") {
      if (!document.getElementById("map")) return;

      const storeLocation = [6.849611285744387, 79.94073934171486];

      if (!window.mapInstance) {
        const map = L.map("map").setView(storeLocation, 15);
        window.mapInstance = map;

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          maxZoom: 19,
        }).addTo(map);

        // Add marker with popup
        const marker = L.marker(storeLocation).addTo(map);

        // Store info popup content (customize with your store details)
        const popupContent = `
          <div class="store-info">
            <h3 style="margin: 0 0 10px 0; color: #E60000; font-size: 18px;">TLab</h3>
            <p style="margin: 5px 0;"><strong>Address:</strong> 795/B Pragathi Mawatha, Pannipitiya 10230</p>
            <p style="margin: 5px 0;"><strong>Phone:</strong> 0760179196</p>
            <p style="margin: 5px 0;"><strong>Hours:</strong> Mon-Fri 9am-6pm, Sat 10am-4pm</p>
            <p style="margin: 5px 0;"><a href="https://maps.google.com/maps?q=${storeLocation[0]},${storeLocation[1]}" target="_blank">Get Directions</a></p>
          </div>
        `;

        // Bind popup to marker
        marker.bindPopup(popupContent);

        // Open popup by default (optional)
        marker.openPopup();
      }
    }

    // Cleanup function to prevent memory leaks
    return () => {
      if (window.mapInstance) {
        window.mapInstance.remove();
        window.mapInstance = null;
      }
    };
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset status states
    setSubmitSuccess(false);
    setSubmitError("");

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        // from_phone: formData.phone || "Not provided",
        subject: formData.subject || "New contact form submission",
        message: formData.message,
      };

      await emailjs.send(
        "service_i97w14q",
        "template_5iqjad8",
        templateParams,
        "bT8Mr7Sjku7X-Txpz"
      );

      // Reset form on success
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      setSubmitSuccess(true);

      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitError(
        "Failed to send message. Please try again or contact us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="font-poppins text-black bg-white min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-r from-[#E60000] to-[#FF3333] text-white text-center">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/fabric-plaid.png')] opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <div className="w-24 h-1 bg-white mx-auto mb-6 opacity-70"></div>
          <p className="text-xl max-w-2xl mx-auto text-gray-100">
            Have questions about our custom apparel services? We're here to
            help!
          </p>
        </div>
        {/* Added decorative elements */}
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
      {/* Contact Information & Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Section intro */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-3">
                Get In Touch With Us
              </h2>
              <div className="w-24 h-1 bg-[#E60000] mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We're ready to help you create the perfect custom apparel for
                your needs. Reach out to us using any of the methods below or
                fill out our contact form.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Contact Information */}
              <div className="lg:col-span-2 space-y-6">
                {/* Info Cards */}
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-50 p-3 rounded-full text-[#E60000]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">
                        Our Address
                      </h3>
                      <p className="text-gray-600">
                        795/B Pragathi Mawatha, Pannipitiya 10230
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-50 p-3 rounded-full text-[#E60000]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">
                        Phone
                      </h3>
                      <p className="text-gray-600">0760179196</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-50 p-3 rounded-full text-[#E60000]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">
                        Email
                      </h3>
                      <p className="text-gray-600">tlab.maharagama@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-50 p-3 rounded-full text-[#E60000]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">
                        Business Hours
                      </h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9 AM - 5 PM
                      </p>
                      <p className="text-gray-600">Saturday - Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="pt-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    Follow Us or Chat
                  </h3>
                  <div className="flex space-x-4">
                    {[
                      {
                        name: "facebook",
                        href: "https://www.facebook.com/share/1CA3CZXv8z/?mibextid=wwXIfr",
                        svg: (
                          <svg
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.406.593 24 1.325 24h11.495v-9.294H9.691V11.01h3.129V8.309c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.467 3.696h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .593 23.406 0 22.675 0z" />
                          </svg>
                        ),
                      },
                      {
                        name: "whatsapp",
                        href: "https://wa.me/94760179169",
                        svg: (
                          <svg
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 32 32"
                          >
                            <path d="M19.11 17.04c-.29-.14-1.71-.84-1.98-.93-.27-.1-.47-.14-.67.14-.19.29-.77.93-.95 1.12-.17.19-.34.21-.63.07-.29-.14-1.23-.45-2.34-1.45-.86-.77-1.43-1.71-1.6-2-.17-.29-.02-.45.12-.6.12-.12.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.67-1.61-.91-2.21-.24-.57-.49-.5-.67-.51-.17-.01-.36-.01-.55-.01s-.5.07-.77.36c-.26.29-1 1-1 2.42s1.02 2.8 1.16 2.99c.14.19 2 3.05 4.89 4.28.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.71-.7 1.95-1.38.24-.67.24-1.26.17-1.38-.08-.11-.26-.17-.55-.29zm-2.1 11.45c-2.33 0-4.63-.63-6.63-1.83l-7.2 1.88 1.92-7.02c-1.26-2.06-1.92-4.39-1.92-6.78 0-7.18 5.84-13 13-13s13 5.82 13 13-5.84 13-13 13z" />
                          </svg>
                        ),
                      },
                      // {
                      //   name: "twitter",
                      //   href: "https://twitter.com/yourprofile",
                      //   svg: (
                      //     <svg
                      //       className="h-5 w-5"
                      //       fill="currentColor"
                      //       viewBox="0 0 24 24"
                      //     >
                      //       <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.566-2.005.978-3.127 1.2A4.92 4.92 0 0016.616 3c-2.733 0-4.946 2.21-4.946 4.943 0 .387.044.763.128 1.124C7.69 8.837 4.066 6.885 1.64 3.905a4.908 4.908 0 00-.666 2.482c0 1.71.87 3.215 2.188 4.099a4.904 4.904 0 01-2.24-.616v.06c0 2.386 1.698 4.374 3.946 4.827a4.935 4.935 0 01-2.224.084 4.927 4.927 0 004.604 3.42A9.867 9.867 0 010 19.54a13.94 13.94 0 007.548 2.212c9.057 0 14.007-7.507 14.007-14.007 0-.213-.004-.425-.014-.636A10.012 10.012 0 0024 4.557z" />
                      //     </svg>
                      //   ),
                      // },
                      // {
                      //   name: "instagram",
                      //   href: "https://instagram.com/yourprofile",
                      //   svg: (
                      //     <svg
                      //       className="h-5 w-5"
                      //       fill="currentColor"
                      //       viewBox="0 0 24 24"
                      //     >
                      //       <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.34 3.608 1.316.974.975 1.252 2.242 1.314 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.34 2.633-1.314 3.608-.975.974-2.242 1.252-3.608 1.314-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.34-3.608-1.314-.974-.975-1.252-2.242-1.314-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.849c.062-1.366.34-2.633 1.314-3.608.975-.974 2.242-1.252 3.608-1.314C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.737 0 8.332.012 7.052.07 5.775.128 4.6.398 3.603 1.395 2.607 2.392 2.338 3.567 2.28 4.845.012 8.332 0 8.737 0 12s.012 3.668.07 4.948c.058 1.277.328 2.452 1.325 3.449.997.997 2.172 1.267 3.449 1.325C8.332 23.988 8.737 24 12 24s3.668-.012 4.948-.07c1.277-.058 2.452-.328 3.449-1.325.997-.997 1.267-2.172 1.325-3.449.058-1.28.07-1.685.07-4.948s-.012-3.668-.07-4.948c-.058-1.277-.328-2.452-1.325-3.449C19.4.398 18.225.128 16.948.07 15.668.012 15.263 0 12 0z" />
                      //       <path d="M12 5.838A6.162 6.162 0 105.838 12 6.17 6.17 0 0012 5.838zm0 10.162A3.999 3.999 0 1116 12a4.005 4.005 0 01-4 4z" />
                      //       <circle cx="18.406" cy="5.594" r="1.44" />
                      //     </svg>
                      //   ),
                      // },
                      // {
                      //   name: "linkedin",
                      //   href: "https://linkedin.com/in/yourprofile",
                      //   svg: (
                      //     <svg
                      //       className="h-5 w-5"
                      //       fill="currentColor"
                      //       viewBox="0 0 24 24"
                      //     >
                      //       <path d="M22.23 0H1.77C.79 0 0 .774 0 1.728v20.543C0 23.225.79 24 1.77 24h20.46C23.21 24 24 23.225 24 22.271V1.728C24 .774 23.21 0 22.23 0zM7.09 20.452H3.56V9h3.53v11.452zM5.325 7.52a2.05 2.05 0 110-4.1 2.05 2.05 0 010 4.1zM20.452 20.452h-3.528v-5.605c0-1.337-.027-3.06-1.865-3.06-1.867 0-2.152 1.46-2.152 2.966v5.699h-3.528V9h3.39v1.561h.048c.472-.89 1.626-1.83 3.344-1.83 3.573 0 4.232 2.353 4.232 5.415v6.306z" />
                      //     </svg>
                      //   ),
                      // },
                    ].map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white p-3 rounded-full shadow-md text-gray-600 hover:text-[#E60000] hover:shadow-lg transition-all duration-300"
                      >
                        {social.svg}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-3">
                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 relative overflow-hidden">
                  {/* Decorative element */}
                  <div className="absolute top-0 right-0 h-16 w-16">
                    <div
                      className="absolute transform rotate-45 bg-[#E60000] text-white shadow-lg"
                      style={{
                        width: "200%",
                        height: "200%",
                        top: "-100%",
                        left: "-100%",
                      }}
                    ></div>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Fill out the form below and we'll get back to you as soon as
                    possible.
                  </p>

                  {/* Success Message */}
                  {submitSuccess && (
                    <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 text-green-700 rounded-md flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Message sent successfully! We'll get back to you shortly.
                    </div>
                  )}

                  {/* Error Message */}
                  {submitError && (
                    <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded-md flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {submitError}
                    </div>
                  )}

                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full p-3 rounded-lg bg-gray-50 text-gray-800 border ${
                            errors.name ? "border-red-500" : "border-gray-200"
                          } focus:ring-2 focus:ring-[#E60000] focus:border-transparent outline-none transition-all duration-300`}
                          disabled={isSubmitting}
                          placeholder="John Doe"
                        />
                        {errors.name && (
                          <p className="mt-1 text-red-500 text-sm">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Your Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full p-3 rounded-lg bg-gray-50 text-gray-800 border ${
                            errors.email ? "border-red-500" : "border-gray-200"
                          } focus:ring-2 focus:ring-[#E60000] focus:border-transparent outline-none transition-all duration-300`}
                          disabled={isSubmitting}
                          placeholder="john@example.com"
                        />
                        {errors.email && (
                          <p className="mt-1 text-red-500 text-sm">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Phone (Optional)
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full p-3 rounded-lg bg-gray-50 text-gray-800 border border-gray-200 focus:ring-2 focus:ring-[#E60000] focus:border-transparent outline-none transition-all duration-300"
                          disabled={isSubmitting}
                          placeholder="(123) 456-7890"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full p-3 rounded-lg bg-gray-50 text-gray-800 border border-gray-200 focus:ring-2 focus:ring-[#E60000] focus:border-transparent outline-none transition-all duration-300"
                          disabled={isSubmitting}
                          placeholder="Custom T-shirt Inquiry"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        className={`w-full p-3 rounded-lg bg-gray-50 text-gray-800 border ${
                          errors.message ? "border-red-500" : "border-gray-200"
                        } focus:ring-2 focus:ring-[#E60000] focus:border-transparent outline-none transition-all duration-300`}
                        disabled={isSubmitting}
                        placeholder="Tell us about your project or question..."
                      ></textarea>
                      {errors.message && (
                        <p className="mt-1 text-red-500 text-sm">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className={`w-full bg-[#E60000] hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg ${
                          isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                        }`}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center">
                            <svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          "Send Message"
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Map Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-800 mb-3">Find Us</h2>
              <div className="w-24 h-1 bg-[#E60000] mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Visit our store location to see our products and meet our team
                in person
              </p>
            </div>

            <div className="relative rounded-xl overflow-hidden shadow-xl h-96 border-4 border-white">
              {/* Leaflet map container */}
              <div id="map" className="absolute inset-0"></div>
            </div>
          </div>
        </div>
      </section>
      `{/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-3">
                Frequently Asked Questions
              </h2>
              <div className="w-24 h-1 bg-[#E60000] mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Find answers to the most common questions about our services
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: "What types of garments can you customize?",
                  answer:
                    "We can customize a wide range of garments including t-shirts, polo shirts, hoodies, sweatshirts, jackets, caps, and more. We source from various suppliers to ensure we can meet your specific needs.",
                },
                {
                  question: "What are your minimum order quantities?",
                  answer:
                    "Our minimum order quantity varies depending on the customization method. Screen printing typically requires a minimum of 12 pieces, while direct-to-garment printing can accommodate orders as small as 1 piece.",
                },
                {
                  question: "How long does it take to fulfill an order?",
                  answer:
                    "Standard production time is 7-10 business days after design approval. Rush orders may be accommodated for an additional fee, depending on our current production schedule.",
                },
                {
                  question: "Do you offer design services?",
                  answer:
                    "Yes! Our in-house design team can help create custom designs or refine your ideas. Basic design services are included in our pricing, with more complex design work available at an additional cost.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md overflow-hidden"
                >
                  <details className="group">
                    <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-semibold">
                      <span>{faq.question}</span>
                      <span className="transition-transform duration-300 group-open:rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-[#E60000]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </summary>
                    <div className="px-6 pb-6 text-gray-600">{faq.answer}</div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
