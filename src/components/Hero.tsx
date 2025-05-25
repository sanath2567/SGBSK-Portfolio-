
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-purple-50 to-blue-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Hello, I'm{' '}
                <span className="text-purple-600">Sriram Gnana Brahma Sanath Kumar</span>
              </h1>
              <p className="text-xl text-gray-600 font-medium">
                Full-Stack Developer | AI Enthusiast | Driven by Innovation
              </p>
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
              I am a recent B.Tech graduate with expertise in full-stack development, 
              specializing in React.js and Spring Boot. I have foundational knowledge 
              in UI/UX design, cloud computing, and AI prompt engineering with a passion 
              for creating impactful digital solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToPortfolio}
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              >
                View Projects
              </Button>
              <Button 
                variant="outline"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300"
              >
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-white">
                  <img 
                    src="https://i.postimg.cc/2yd2kqXs/Whats-App-Image-2024-03-31-at-8-29-56-AM.jpg" 
                    alt="Sriram Gnana Brahma Sanath Kumar"
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
