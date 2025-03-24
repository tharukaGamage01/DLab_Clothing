// pages/Contact.jsx
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you for your message! We will get back to you shortly.'
    });
    
    // In a real application, you would send the data to your backend here
    console.log('Form submitted:', formData);
    
    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="font-sans text-gray-800 pt-16">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">Get in touch with our team to discuss your custom apparel needs or request a quote.</p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">Have questions about our custom apparel services? Need a quote for your project? Our team is here to help. Fill out the form and we'll get back to you as soon as possible.</p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-2xl text-blue-900">📍</div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900">Our Address</h3>
                    <p className="text-gray-600">123 Apparel Street, Fashion City, FC 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="text-2xl text-blue-900">📞</div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900">Phone</h3>
                    <p className="text-gray-600">(123) 456-7890</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="text-2xl text-blue-900">✉️</div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900">Email</h3>
                    <p className="text-gray-600">info@threadcraft.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="text-2xl text-blue-900">⏰</div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p className="text-gray-600">Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Send Us a Message</h2>
              
              {formStatus.submitted && formStatus.success ? (
                <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6">
                  <p>{formStatus.message}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your phone (optional)"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Subject"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Tell us about your project or inquiry"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-md transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Find Us</h2>
          <div className="h-96 bg-gray-300 rounded-lg shadow-md">
            {/* Map placeholder - in a real app, you would integrate with Google Maps or similar */}
            <div className="w-full h-full flex items-center justify-center bg-blue-100">
              <p className="text-blue-900 text-xl font-semibold">Interactive Map Would Display Here</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;