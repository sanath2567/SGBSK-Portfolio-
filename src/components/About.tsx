
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-semibold text-gray-900">Know Me More</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              I am a recent graduate with a strong foundation in full-stack development, 
              specializing in React.js for the frontend and Spring Boot for the backend. 
              I also have a basic understanding of UI/UX design, cloud computing, and 
              prompt engineering for AI-driven applications.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I am highly motivated to contribute to impactful projects, apply my skills 
              in real-world scenarios, and continue growing as a software developer in a 
              dynamic, learning-focused environment.
            </p>
          </div>

          {/* Education Timeline */}
          <div className="space-y-8 animate-scale-in">
            <h3 className="text-2xl font-semibold text-gray-900">Education</h3>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-purple-200"></div>
              
              <div className="relative pl-12 pb-8">
                <div className="absolute left-0 top-2 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    B.Tech in Computer Science and Engineering
                  </h4>
                  <p className="text-purple-600 font-medium mb-3">2021 - 2025</p>
                  <p className="text-gray-700">
                    Comprehensive coursework including Data Structures, Algorithms, 
                    Operating Systems, DBMS, Web Development, Cloud Computing, and AI.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
