
const Services = () => {
  const services = [
    {
      title: 'Full-Stack Web Development',
      description: 'Complete web solutions using React.js and Spring Boot with modern development practices.',
      icon: '💻',
    },
    {
      title: 'UI/UX Interface Design',
      description: 'User-centered design approach creating intuitive and engaging digital experiences.',
      icon: '🎨',
    },
    {
      title: 'AI Prompt Engineering',
      description: 'Optimize AI interactions and develop intelligent systems for enhanced user experiences.',
      icon: '🤖',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What I Provide</h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 border border-gray-100 animate-fade-in`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-center space-y-4">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                <div className="pt-4">
                  <button className="text-purple-600 font-medium hover:text-purple-700 transition-colors">
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
