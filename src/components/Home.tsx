import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

interface HomeProps {
  setActiveSection: (section: string) => void;
}

const Home: React.FC<HomeProps> = ({ setActiveSection }) => {
  const quickLinks = [
    { id: 'skills', label: 'Technical Skills', description: 'Explore my technical expertise and programming capabilities' },
    { id: 'experience', label: 'Professional Experience', description: 'Learn about my industry and research background' },
    { id: 'projects', label: 'Featured Projects', description: 'Discover my latest work and contributions' },
    { id: 'contact', label: 'Get In Touch', description: 'Let\'s connect and discuss opportunities' },
  ];

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-xl">
                AP
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Annie Prasanna
              <span className="block text-3xl md:text-4xl text-blue-600 mt-2">Manoharan</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Computer Engineering Graduate Student | Research Assistant | 
              Passionate about AI, Computer Vision, and Machine Learning
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button
                onClick={() => setActiveSection('contact')}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <Mail size={20} />
                <span>Get In Touch</span>
              </button>
              
              <button className="border-2 border-slate-300 text-slate-700 px-8 py-3 rounded-lg font-medium hover:border-slate-400 hover:bg-slate-50 transition-all duration-200 flex items-center space-x-2">
                <Download size={20} />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-16">
              <a href="https://annie0159.github.io/Portfolio/Annie_Portfolio.html" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-600 transition-colors duration-200">
                <Github size={24} />
              </a>
              <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors duration-200">
                <Linkedin size={24} />
              </a>
              <a href="mailto:annie@example.com" className="text-slate-500 hover:text-blue-600 transition-colors duration-200">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Explore My Portfolio</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickLinks.map((link) => (
              <div
                key={link.id}
                onClick={() => setActiveSection(link.id)}
                className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-xl border border-slate-200 hover:border-blue-300 cursor-pointer transition-all duration-300 hover:shadow-lg group"
              >
                <h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                  {link.label}
                </h3>
                <p className="text-slate-600 text-sm mb-4">{link.description}</p>
                <div className="flex items-center text-blue-600 text-sm font-medium group-hover:translate-x-1 transition-transform duration-200">
                  <span>Learn more</span>
                  <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">2+</div>
              <div className="text-slate-300">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-400 mb-2">10+</div>
              <div className="text-slate-300">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">5+</div>
              <div className="text-slate-300">Technologies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-400 mb-2">3+</div>
              <div className="text-slate-300">Certifications</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;