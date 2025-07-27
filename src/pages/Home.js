import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, Users, CheckCircle, ArrowRight } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "24/7 Monitoring",
      description: "Round-the-clock surveillance and monitoring services across Delhi NCR to keep your property secure."
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Access Control",
      description: "Advanced access control systems with biometric authentication and smart card technology."
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "CCTV Systems",
      description: "High-definition surveillance cameras with remote monitoring capabilities for Delhi NCR properties."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Security Personnel",
      description: "Trained and licensed security professionals for on-site protection in Delhi NCR."
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Clients in Delhi NCR" },
    { number: "24/7", label: "Support" },
    { number: "99.9%", label: "Uptime" },
    { number: "15+", label: "Years Experience" }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="sln-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 fade-in">
            Professional Security
            <span className="text-sln-yellow-400 block">Solutions in Delhi NCR</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto fade-in">
            Protect what matters most with our comprehensive security services. 
            From residential to commercial, we've got Delhi NCR covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in">
            <Link to="/contact" className="btn-security text-lg px-8 py-4">
              Get Free Quote
            </Link>
            <Link to="/services" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 text-lg">
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose SLN Security?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We provide cutting-edge security solutions with the latest technology 
              and experienced professionals across Delhi NCR.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="security-card p-6 text-center group">
                <div className="text-sln-yellow-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Delhi NCR
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Building trust through reliable security solutions and exceptional service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="security-card p-8 text-center trust-bg">
              <div className="text-sln-yellow-500 mb-4">
                <Shield className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Licensed & Certified</h3>
              <p className="text-gray-400">
                Fully licensed security company with all required certifications for Delhi NCR operations.
              </p>
            </div>
            
            <div className="security-card p-8 text-center trust-bg">
              <div className="text-sln-yellow-500 mb-4">
                <CheckCircle className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Local Expertise</h3>
              <p className="text-gray-400">
                Deep understanding of Delhi NCR security challenges and local regulations.
              </p>
            </div>
            
            <div className="security-card p-8 text-center trust-bg">
              <div className="text-sln-yellow-500 mb-4">
                <Users className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Owner: Pawan Chaudhary</h3>
              <p className="text-gray-400">
                Personal commitment to excellence and customer satisfaction in every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-sln-yellow-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Secure Your Property in Delhi NCR?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Get in touch with our security experts today for a free consultation 
            and customized security solution for Delhi NCR.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-security text-lg px-8 py-4 flex items-center justify-center">
              Contact Us Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a href="tel:+91-98765-43210" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 text-lg flex items-center justify-center">
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 