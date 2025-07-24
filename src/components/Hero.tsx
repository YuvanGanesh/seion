import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
      darkMode ? 'bg-slate-900' : 'bg-white'
    }`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-slate-800 to-slate-900"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></span>
            Trusted by Fortune 500 Companies
          </div>

          {/* Main Headline */}
          <h1 className={`text-5xl md:text-7xl font-bold tracking-tight mb-6 ${darkMode ? 'text-white' : 'text-slate-900'} animate-fadeInUp`} style={{ animationDelay: '0.1s' }}>
            Transforming Business with{' '}
            <span className="text-aquamarine-gradient">Advanced AI</span>{' '}
            & Digital Solutions
          </h1>

          {/* Subtitle */}
          <p className={`text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed ${
            darkMode ? 'text-slate-300' : 'text-slate-600'
          } animate-fadeInUp`} style={{ animationDelay: '0.3s' }}>
            Enterprise-grade AI automation, custom development, and strategic consulting 
            that delivers measurable ROI for industry leaders.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#contact"
              className="btn-aquamarine px-8 py-4 text-lg font-semibold rounded-lg group inline-flex items-center transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl animate-fadeInUp"
              style={{ animationDelay: '0.5s' }}
            >
              Connect with Our Experts
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <button className={`btn-aquamarine group inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg border-2 transition-all duration-300 animate-fadeInUp`} style={{ animationDelay: '0.7s' }}>
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {[
              { value: '500+', label: 'Enterprise Clients' },
              { value: '98%', label: 'Client Retention' },
              { value: '$2.5B+', label: 'Revenue Generated' },
              { value: '24/7', label: 'Expert Support' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-3xl font-bold mb-2 ${
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

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className={`w-6 h-10 border-2 rounded-full flex justify-center ${
          darkMode ? 'border-slate-600' : 'border-slate-300'
        }`}>
          <div className={`w-1 h-3 rounded-full mt-2 animate-bounce ${
            darkMode ? 'bg-slate-400' : 'bg-slate-600'
          }`}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;