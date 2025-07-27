import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, Users, Home, Building, Car, Smartphone, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Home className="h-12 w-12" />,
      title: "Residential Security",
      description: "Complete home security solutions including alarm systems, CCTV cameras, and smart home integration for Delhi NCR homes.",
      features: ["24/7 Monitoring", "Smart Home Integration", "Mobile App Control", "Professional Installation"],
      price: "From ₹15,000/month"
    },
    {
      icon: <Building className="h-12 w-12" />,
      title: "Commercial Security",
      description: "Comprehensive business security systems designed to protect your assets and employees in Delhi NCR.",
      features: ["Access Control Systems", "Video Surveillance", "Security Personnel", "Emergency Response"],
      price: "From ₹30,000/month"
    },
    {
      icon: <Car className="h-12 w-12" />,
      title: "Vehicle Security",
      description: "Advanced vehicle tracking and security systems for fleet management and personal vehicles in Delhi NCR.",
      features: ["GPS Tracking", "Real-time Monitoring", "Geofencing", "Theft Prevention"],
      price: "From ₹5,000/month"
    },
    {
      icon: <Smartphone className="h-12 w-12" />,
      title: "Mobile Security",
      description: "Mobile security solutions for remote monitoring and control of your security systems.",
      features: ["Remote Access", "Push Notifications", "Live Video Feed", "System Control"],
      price: "Included with all plans"
    }
  ];

  const additionalServices = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Security Consulting",
      description: "Expert security assessment and recommendations for your specific needs in Delhi NCR."
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Access Control",
      description: "Biometric and card-based access control systems for enhanced security."
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "CCTV Installation",
      description: "Professional installation of high-definition surveillance camera systems."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Security Guards",
      description: "Licensed and trained security personnel for on-site protection in Delhi NCR."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="sln-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Security Services
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Comprehensive security solutions tailored to your specific needs in Delhi NCR. 
            From residential to commercial, we provide cutting-edge technology 
            and professional service.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Security Solutions
            </h2>
            <p className="text-xl text-gray-400">
              Choose the security package that best fits your needs in Delhi NCR
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="security-card p-8">
                <div className="text-sln-yellow-500 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <ArrowRight className="h-4 w-4 text-sln-yellow-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-sln-yellow-500">
                    {service.price}
                  </span>
                  <Link to="/contact" className="btn-security">
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-400">
              Specialized security services to enhance your protection in Delhi NCR
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="security-card p-6 text-center">
                <div className="text-sln-yellow-500 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {service.description}
                </p>
                <Link to="/contact" className="text-sln-yellow-500 hover:text-sln-yellow-400 font-medium">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need a Custom Security Solution for Delhi NCR?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Our security experts can design a custom solution tailored to your specific requirements in Delhi NCR.
          </p>
          <Link to="/contact" className="btn-security text-lg px-8 py-4">
            Schedule Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services; 