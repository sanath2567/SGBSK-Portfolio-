
import { useState, useEffect } from 'react';
import { Code, Server, Palette, Cloud, Brain, Database } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  const technicalSkills = [
    { name: 'Java', icon: <Code className="h-8 w-8 text-purple-600" /> },
    { name: 'Python', icon: <Code className="h-8 w-8 text-purple-600" /> },
    { name: 'React.js', icon: <Code className="h-8 w-8 text-purple-600" /> },
    { name: 'Spring Boot', icon: <Server className="h-8 w-8 text-purple-600" /> },
    { name: 'MySQL', icon: <Database className="h-8 w-8 text-purple-600" /> },
    { name: 'UI/UX Design', icon: <Palette className="h-8 w-8 text-purple-600" /> },
    { name: 'Cloud Computing', icon: <Cloud className="h-8 w-8 text-purple-600" /> },
    { name: 'AI Prompt Engineering', icon: <Brain className="h-8 w-8 text-purple-600" /> },
  ];

  const softSkills = [
    'Communication',
    'Problem-solving',
    'Teamwork',
    'Adaptability',
    'Critical Thinking',
    'Time Management',
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Skills</h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-gray-900 text-center mb-6">
              <Badge variant="outline" className="text-lg px-4 py-1 border-purple-400 bg-purple-50">Technical Skills</Badge>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-4">
              {technicalSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-100 ${
                    isVisible ? 'animate-fade-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col items-center space-y-3">
                    <div className="p-3 rounded-full bg-purple-50 flex items-center justify-center">
                      {skill.icon}
                    </div>
                    <h4 className="text-lg font-medium text-gray-900">{skill.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-gray-900 text-center mb-6">
              <Badge variant="outline" className="text-lg px-4 py-1 border-purple-400 bg-purple-50">Soft Skills</Badge>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <div
                  key={skill}
                  className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-100 ${
                    isVisible ? 'animate-fade-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <div className="w-6 h-6 bg-purple-600 rounded-full"></div>
                    </div>
                    <h4 className="text-lg font-medium text-gray-900">{skill}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
