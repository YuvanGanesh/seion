import React from 'react';
import { Award, Users, Globe, Shield } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const leadership = [
    {
      name: 'Sarah Chen',
      role: 'Chief Executive Officer',
      bio: 'Former VP of AI at Microsoft with 15+ years in enterprise technology.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Chief Technology Officer',
      bio: 'Ex-Google AI researcher, PhD in Machine Learning from Stanford.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Head of AI Research',
      bio: 'Published researcher with 50+ papers in AI and automation.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'David Kim',
      role: 'VP of Enterprise Solutions',
      bio: '20+ years leading digital transformation at Fortune 100 companies.',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: 'Industry Recognition',
      items: ['Gartner Magic Quadrant Leader', 'Forbes AI Company of the Year', 'MIT Technology Review Innovator']
    },
    {
      icon: Users,
      title: 'Expert Team',
      items: ['200+ AI/ML Engineers', '50+ PhD Researchers', '24/7 Global Support']
    },
    {
      icon: Globe,
      title: 'Global Presence',
      items: ['15 Global Offices', '50+ Countries Served', '24/7 Operations']
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      items: ['SOC 2 Type II Certified', 'GDPR Compliant', 'ISO 27001 Certified']
    }
  ];

  return (
    <section id="about" className={`py-24 ${
      darkMode ? 'bg-slate-900' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            About SEION
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            darkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Leading the future of enterprise technology with AI-driven solutions 
            that deliver measurable business impact.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className={`p-8 rounded-2xl ${
            darkMode ? 'bg-slate-800' : 'bg-slate-50'
          }`}>
            <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Our Mission
            </h3>
            <p className={`text-lg leading-relaxed ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              To empower enterprises with cutting-edge AI and automation solutions that 
              drive operational excellence, reduce costs, and accelerate growth in the digital age.
            </p>
          </div>

          <div className={`p-8 rounded-2xl ${
            darkMode ? 'bg-slate-800' : 'bg-slate-50'
          }`}>
            <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Our Vision
            </h3>
            <p className={`text-lg leading-relaxed ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              To be the global leader in enterprise AI transformation, setting the standard 
              for innovation, reliability, and business impact across all industries.
            </p>
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-20">
          <h3 className={`text-3xl font-bold text-center mb-12 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Leadership Team
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <div
                key={index}
                className={`text-center group ${
                  darkMode ? 'bg-slate-800' : 'bg-white'
                } p-6 rounded-2xl border ${
                  darkMode ? 'border-slate-700' : 'border-slate-200'
                } hover:shadow-lg transition-all duration-300`}
              >
                <div className="relative mb-4">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover"
                  />
                </div>
                <h4 className={`text-lg font-bold mb-1 ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  {leader.name}
                </h4>
                <p className={`text-sm font-medium mb-3 ${
                  darkMode ? 'text-blue-400' : 'text-blue-600'
                }`}>
                  {leader.role}
                </p>
                <p className={`text-sm ${
                  darkMode ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {leader.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div
                key={index}
                className={`p-6 rounded-2xl text-center ${
                  darkMode ? 'bg-slate-800' : 'bg-slate-50'
                }`}
              >
                <div className="inline-flex p-3 rounded-xl bg-blue-600 mb-4">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h4 className={`text-lg font-bold mb-4 ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  {achievement.title}
                </h4>
                <ul className="space-y-2">
                  {achievement.items.map((item, itemIndex) => (
                    <li key={itemIndex} className={`text-sm ${
                      darkMode ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Company Stats */}
        <div className={`mt-20 p-12 rounded-2xl text-center ${
          darkMode ? 'bg-gradient-to-r from-slate-800 to-slate-700' : 'bg-gradient-to-r from-slate-50 to-slate-100'
        }`}>
          <h3 className={`text-3xl font-bold mb-8 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            By the Numbers
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '2018', label: 'Founded' },
              { value: '500+', label: 'Enterprise Clients' },
              { value: '$2.5B+', label: 'Client Revenue Generated' },
              { value: '99.9%', label: 'Uptime SLA' }
            ].map((stat, index) => (
              <div key={index}>
                <div className={`text-4xl font-bold mb-2 ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  {stat.value}
                </div>
                <div className={`text-sm ${
                  darkMode ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;