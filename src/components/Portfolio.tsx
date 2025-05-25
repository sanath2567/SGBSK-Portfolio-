import { useState } from 'react';

const Portfolio = () => {
  const [clickedCard, setClickedCard] = useState<string | null>(null);

  const projects = [
    {
      title: 'Smarter QR Code Generator',
      description: 'Converts text and images to QR codes with advanced customization options.',
      tech: ['React.js', 'CSS3'],
      category: 'Web Application',
    },
    {
      title: 'Weather Application',
      description: 'Real-time weather updates with location-based forecasting and interactive UI.',
      tech: ['React.js', 'API Integration', 'Responsive Design'],
      category: 'Web Application',
    },
    {
      title: 'Image Search Engine',
      description: 'Upload-based visual search tool with advanced image recognition capabilities.',
      tech: ['React.js', 'API Integration'],
      category: 'Web Application',
      
    },
    {
      title: 'Email Reply Generator',
      description: 'AI-driven contextual email responses using natural language processing.',
      tech: ['Spring Boot', 'Spring AI', 'Java'],
      category: 'AI Application',
    },
    {
      title: 'Q&A System',
      description: 'Intelligent query handling system with context-aware responses.',
      tech: ['Spring Boot', 'AI Integration', 'Database'],
      category: 'AI Application',
    },
  ];

  const handleCardClick = (title: string) => {
    setClickedCard(title);
    setTimeout(() => setClickedCard(null), 200);
  };

  return (
    <section id="portfolio" className="py-16 bg-gradient-to-br from-gray-50 via-white to-purple-50/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.1),transparent_50%),radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.1),transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">My Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              onClick={() => handleCardClick(project.title)}
              className={`group bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden border border-white/20 animate-fade-in h-[400px] flex flex-col ${
                clickedCard === project.title
                  ? 'scale-95 shadow-inner'
                  : 'hover:scale-105 hover:shadow-purple-500/20'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image Header */}
              <div className="h-44 bg-gradient-to-br from-purple-400 via-blue-500 to-indigo-600 relative overflow-hidden flex-shrink-0">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <h3 className="text-white text-xl font-bold text-center leading-tight drop-shadow-lg">
                    {project.title}
                  </h3>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-purple-400/30 to-blue-400/30 blur-xl"></div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col h-full">
                <div className="space-y-5 flex-grow w-full max-w-full">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-sm font-medium rounded-full border border-purple-200">
                  {project.category}
                  </span>
                  <p className="text-gray-600 leading-relaxed text-sm line-clamp-3 break-words">{project.description}</p>

                  <div className="space-y-3">
                  <h4 className="font-medium text-gray-900 text-sm">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md border border-gray-200 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                    >
                      {tech}
                    </span>
                    ))}
                  </div>
                  </div>
                </div>

    
              </div>

              {/* Ripple effect overlay */}
              {clickedCard === project.title && (
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute inset-0 bg-purple-500/10 animate-ping rounded-xl"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
