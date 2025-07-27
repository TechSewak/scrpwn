import React from 'react';
import { Shield, Award, Users, Target, CheckCircle, Star } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Reliability",
      description: "We provide dependable security solutions that you can count on 24/7 across Delhi NCR."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our security services in Delhi NCR."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Integrity",
      description: "We operate with honesty and transparency in all our business dealings."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Innovation",
      description: "We continuously adopt the latest security technologies and best practices."
    }
  ];

  const team = [
    {
      name: "Pawan Chaudhary",
      position: "CEO & Founder",
      experience: "20+ years in security",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Rajesh Kumar",
      position: "Security Director",
      experience: "15+ years experience",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Amit Singh",
      position: "Technical Manager",
      experience: "12+ years in tech",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Priya Sharma",
      position: "Operations Manager",
      experience: "10+ years experience",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const achievements = [
    { number: "15+", label: "Years of Experience" },
    { number: "500+", label: "Happy Clients in Delhi NCR" },
    { number: "1000+", label: "Security Systems Installed" },
    { number: "99.9%", label: "Customer Satisfaction" }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="sln-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About SLN Security
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Leading the way in professional security solutions in Delhi NCR with over 15 years 
            of experience protecting homes and businesses.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Story
              </h2>
              <p className="text-gray-400 mb-6 text-lg">
                Founded in 2009 by Pawan Chaudhary, SLN Security began with a simple mission: to provide 
                reliable, professional security solutions that give our clients peace of mind in Delhi NCR.
              </p>
              <p className="text-gray-400 mb-6 text-lg">
                What started as a small local security company has grown into a trusted 
                partner for hundreds of businesses and homeowners across Delhi NCR. 
                Our commitment to excellence and customer satisfaction has remained 
                unchanged throughout our journey.
              </p>
              <p className="text-gray-400 text-lg">
                Today, we continue to innovate and adapt to the latest security 
                technologies while maintaining the personal touch that sets us apart 
                from larger corporations in Delhi NCR.
              </p>
            </div>
            <div className="security-card p-8">
              <div className="text-center">
                <Shield className="h-16 w-16 text-sln-yellow-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-400 text-lg">
                  To provide cutting-edge security solutions that protect what matters 
                  most in Delhi NCR, while delivering exceptional customer service and peace of mind 
                  to every client we serve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-400">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="security-card p-6 text-center">
                <div className="text-sln-yellow-500 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-400">
              Experienced professionals dedicated to your security in Delhi NCR
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="security-card p-6 text-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-sln-yellow-500 font-medium mb-2">
                  {member.position}
                </p>
                <p className="text-gray-400 text-sm">
                  {member.experience}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-400">
              Numbers that speak for themselves in Delhi NCR
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-sln-yellow-500 mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-400 font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Certifications & Awards
            </h2>
            <p className="text-xl text-gray-400">
              Recognized for excellence in security services in Delhi NCR
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="security-card p-6 text-center">
              <Award className="h-12 w-12 text-sln-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Licensed & Insured
              </h3>
              <p className="text-gray-400">
                Fully licensed and insured security company with all required certifications for Delhi NCR.
              </p>
            </div>
            <div className="security-card p-6 text-center">
              <Star className="h-12 w-12 text-sln-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Industry Awards
              </h3>
              <p className="text-gray-400">
                Multiple industry awards for excellence in security services and customer satisfaction in Delhi NCR.
              </p>
            </div>
            <div className="security-card p-6 text-center">
              <CheckCircle className="h-12 w-12 text-sln-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Quality Certified
              </h3>
              <p className="text-gray-400">
                ISO certified quality management system ensuring consistent service delivery in Delhi NCR.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 