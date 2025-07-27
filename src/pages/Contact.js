import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: ["+91-98765-43210", "+91-98765-43211"],
      link: "tel:+91-98765-43210"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: ["info@slnsecurity.com", "support@slnsecurity.com"],
      link: "mailto:info@slnsecurity.com"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Address",
      details: ["Delhi NCR, India", "Gurgaon, Haryana"],
      link: "https://maps.google.com"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      details: ["Mon-Fri: 8AM-6PM", "Sat: 9AM-4PM", "Sun: Emergency Only"],
      link: null
    }
  ];

  const services = [
    "Residential Security",
    "Commercial Security",
    "Vehicle Security",
    "Mobile Security",
    "Security Consulting",
    "Other"
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="sln-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Get in touch with our security experts for a free consultation 
            and customized security solution for Delhi NCR.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="security-card p-8">
              <h2 className="text-3xl font-bold text-white mb-6">
                Get a Free Quote
              </h2>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Thank You!
                  </h3>
                  <p className="text-gray-400 mb-6">
                    Your message has been sent successfully. We'll get back to you within 24 hours.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="btn-security"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-white font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-sln-yellow-500"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-white font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-sln-yellow-500"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-white font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-sln-yellow-500"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-white font-medium mb-2">
                        Service Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-sln-yellow-500"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-sln-yellow-500"
                      placeholder="Tell us about your security needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-security text-lg py-4 flex items-center justify-center"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Get in Touch
                </h2>
                <p className="text-gray-400 text-lg mb-8">
                  Ready to secure your property in Delhi NCR? Contact us today for a free consultation 
                  and customized security solution.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-sln-yellow-500 mt-1">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">
                        {info.title}
                      </h3>
                      {info.link ? (
                        <a 
                          href={info.link} 
                          className="text-gray-400 hover:text-sln-yellow-500 transition-colors"
                        >
                          {info.details.map((detail, detailIndex) => (
                            <div key={detailIndex}>{detail}</div>
                          ))}
                        </a>
                      ) : (
                        <div className="text-gray-400">
                          {info.details.map((detail, detailIndex) => (
                            <div key={detailIndex}>{detail}</div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Emergency Contact */}
              <div className="security-card p-6 border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-white mb-2">
                  Emergency Contact
                </h3>
                <p className="text-gray-400 mb-3">
                  For urgent security issues, call our 24/7 emergency line:
                </p>
                <a 
                  href="tel:+91-98765-43212" 
                  className="text-2xl font-bold text-red-500 hover:text-red-400 transition-colors"
                >
                  +91-98765-43212
                </a>
              </div>

              {/* Owner Contact */}
              <div className="security-card p-6 border-l-4 border-sln-yellow-500">
                <h3 className="text-xl font-bold text-white mb-2">
                  Owner: Pawan Chaudhary
                </h3>
                <p className="text-gray-400 mb-3">
                  For direct consultation with the owner:
                </p>
                <a 
                  href="tel:+91-98765-43213" 
                  className="text-xl font-bold text-sln-yellow-500 hover:text-sln-yellow-400 transition-colors"
                >
                  +91-98765-43213
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Visit Our Office
            </h2>
            <p className="text-gray-400 text-lg">
              Stop by our office for a face-to-face consultation in Delhi NCR
            </p>
          </div>
          
          <div className="security-card p-8">
            <div className="aspect-w-16 aspect-h-9 bg-gray-700 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-sln-yellow-500 mx-auto mb-4" />
                <p className="text-gray-400 text-lg">
                  Interactive map would be embedded here
                </p>
                <p className="text-white font-medium mt-2">
                  Delhi NCR, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 