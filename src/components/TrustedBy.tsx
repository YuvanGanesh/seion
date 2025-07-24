import React from 'react';

interface TrustedByProps {
  darkMode: boolean;
}

const TrustedBy: React.FC<TrustedByProps> = ({ darkMode }) => {
  const clients = [
    'Microsoft', 'Amazon', 'Google', 'IBM', 'Oracle', 'Salesforce', 
    'Adobe', 'Intel', 'Cisco', 'Dell', 'HP', 'VMware'
  ];

  return (
    <section className={`py-16 border-b ${
      darkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className={`text-sm font-semibold tracking-wide uppercase ${
            darkMode ? 'text-slate-400' : 'text-slate-500'
          }`}>
            Trusted by Industry Leaders
          </p>
        </div>

        {/* Client Logos Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className={`flex-shrink-0 mx-8 px-6 py-4 rounded-lg transition-all duration-300 hover:scale-105 ${
                  darkMode ? 'bg-slate-800 hover:bg-slate-700' : 'bg-slate-50 hover:bg-slate-100'
                }`}
              >
                <div className={`text-2xl font-bold ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {client}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
          {[
            { value: '500+', label: 'Global Enterprises' },
            { value: '50+', label: 'Countries Served' },
            { value: '99.9%', label: 'Uptime SLA' },
            { value: '24/7', label: 'Support Coverage' }
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

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default TrustedBy;