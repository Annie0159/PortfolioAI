import React from 'react';
import { Heart, Code, Lightbulb, Target, Coffee, Camera, Music, Plane } from 'lucide-react';

const About: React.FC = () => {
  const personalInfo = {
    introduction: "I'm a passionate Computer Engineering graduate student with a deep love for artificial intelligence, machine learning, and innovative technology solutions. My journey in tech began with curiosity about how things work and has evolved into a dedication to creating meaningful impact through code.",
    mission: "To bridge the gap between cutting-edge research and practical applications, developing AI solutions that make a positive difference in people's lives.",
    values: [
      {
        icon: Lightbulb,
        title: "Innovation",
        description: "Always seeking creative solutions to complex problems"
      },
      {
        icon: Target,
        title: "Excellence",
        description: "Committed to delivering high-quality work and continuous improvement"
      },
      {
        icon: Heart,
        title: "Impact",
        description: "Focused on creating technology that benefits society"
      },
      {
        icon: Code,
        title: "Collaboration",
        description: "Believing in the power of teamwork and knowledge sharing"
      }
    ]
  };

  const interests = [
    {
      icon: Code,
      title: "AI Research",
      description: "Exploring the frontiers of machine learning and computer vision"
    },
    {
      icon: Coffee,
      title: "Teaching",
      description: "Mentoring students and sharing knowledge with the community"
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Capturing moments and exploring visual storytelling"
    },
    {
      icon: Music,
      title: "Music",
      description: "Listening to diverse genres and occasionally playing instruments"
    },
    {
      icon: Plane,
      title: "Travel",
      description: "Discovering new cultures and gaining fresh perspectives"
    }
  ];

  const journey = [
    {
      year: "2019",
      title: "Started Engineering Journey",
      description: "Began Bachelor's in Electronics and Communication Engineering"
    },
    {
      year: "2021",
      title: "Discovered AI",
      description: "First exposure to machine learning sparked my passion for AI"
    },
    {
      year: "2023",
      title: "Industry Experience",
      description: "Joined Soliton Technologies as Project Engineer"
    },
    {
      year: "2024",
      title: "Graduate Studies",
      description: "Started MS in Computer Engineering at University of Arkansas"
    },
    {
      year: "Present",
      title: "Research & Innovation",
      description: "Actively researching AI applications and teaching programming"
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">About Me</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Get to know the person behind the code - my story, values, and what drives me in my journey through technology and research.
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Hello, I'm Annie!</h2>
              <p className="text-slate-600 leading-relaxed mb-6">{personalInfo.introduction}</p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <p className="text-blue-700 font-medium italic">"{personalInfo.mission}"</p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-xl">
                AP
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {personalInfo.values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-200 text-center">
                  <div className="p-3 bg-blue-100 rounded-lg inline-block mb-4">
                    <IconComponent className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{value.title}</h3>
                  <p className="text-slate-600 text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Personal Interests */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">Personal Interests</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interests.map((interest, index) => {
              const IconComponent = interest.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-6 border border-blue-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <IconComponent className="text-blue-600" size={20} />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">{interest.title}</h3>
                  </div>
                  <p className="text-slate-600 text-sm">{interest.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">My Journey</h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="space-y-8">
              {journey.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold">{milestone.year}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{milestone.title}</h3>
                    <p className="text-slate-600">{milestone.description}</p>
                  </div>
                  {index < journey.length - 1 && (
                    <div className="absolute left-6 top-12 w-0.5 h-8 bg-blue-200"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fun Facts */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold text-center mb-8">Fun Facts About Me</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">☕</div>
              <div className="text-sm opacity-90">Coffee cups per day</div>
              <div className="text-2xl font-semibold">3+</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">🌍</div>
              <div className="text-sm opacity-90">Countries visited</div>
              <div className="text-2xl font-semibold">5</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">📚</div>
              <div className="text-sm opacity-90">Books read this year</div>
              <div className="text-2xl font-semibold">12</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">🎵</div>
              <div className="text-sm opacity-90">Favorite music genre</div>
              <div className="text-2xl font-semibold">Indie</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;