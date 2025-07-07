import React, { useState } from 'react';
import { Code, Database, Brain, Cpu, ArrowLeft } from 'lucide-react';

const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const skillCategories = [
    {
      id: 'programming',
      title: 'Programming Languages',
      icon: Code,
      color: 'blue',
      skills: [
        { name: 'Python', level: 90, description: 'Advanced proficiency in Python for machine learning, data analysis, and backend development.' },
        { name: 'JavaScript', level: 85, description: 'Experienced in modern JavaScript, React, and Node.js development.' },
        { name: 'C++', level: 80, description: 'Strong foundation in C++ for system programming and algorithms.' },
        { name: 'SQL', level: 75, description: 'Database design, optimization, and complex query development.' },
        { name: 'MATLAB', level: 70, description: 'Mathematical computing and signal processing applications.' },
      ],
    },
    {
      id: 'frameworks',
      title: 'Frameworks & Tools',
      icon: Cpu,
      color: 'emerald',
      skills: [
        { name: 'TensorFlow', level: 85, description: 'Deep learning model development and deployment.' },
        { name: 'PyTorch', level: 80, description: 'Neural network research and computer vision projects.' },
        { name: 'React', level: 85, description: 'Modern web application development with hooks and state management.' },
        { name: 'OpenCV', level: 75, description: 'Computer vision and image processing applications.' },
        { name: 'Git', level: 90, description: 'Version control and collaborative development workflows.' },
      ],
    },
    {
      id: 'ai',
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'purple',
      skills: [
        { name: 'Machine Learning', level: 88, description: 'Supervised and unsupervised learning algorithms and applications.' },
        { name: 'Computer Vision', level: 85, description: 'Image classification, object detection, and visual recognition systems.' },
        { name: 'Deep Learning', level: 82, description: 'Neural networks, CNNs, and advanced deep learning architectures.' },
        { name: 'Data Analysis', level: 85, description: 'Statistical analysis, data visualization, and insights extraction.' },
        { name: 'Natural Language Processing', level: 75, description: 'Text processing, sentiment analysis, and language models.' },
      ],
    },
    {
      id: 'databases',
      title: 'Databases & Cloud',
      icon: Database,
      color: 'amber',
      skills: [
        { name: 'MySQL', level: 80, description: 'Relational database design and optimization.' },
        { name: 'MongoDB', level: 75, description: 'NoSQL database development and management.' },
        { name: 'AWS', level: 70, description: 'Cloud infrastructure and deployment services.' },
        { name: 'Docker', level: 65, description: 'Containerization and deployment automation.' },
        { name: 'PostgreSQL', level: 75, description: 'Advanced SQL operations and database administration.' },
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        text: 'text-blue-700',
        icon: 'text-blue-600',
        progress: 'bg-blue-500',
      },
      emerald: {
        bg: 'bg-emerald-50',
        border: 'border-emerald-200',
        text: 'text-emerald-700',
        icon: 'text-emerald-600',
        progress: 'bg-emerald-500',
      },
      purple: {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        text: 'text-purple-700',
        icon: 'text-purple-600',
        progress: 'bg-purple-500',
      },
      amber: {
        bg: 'bg-amber-50',
        border: 'border-amber-200',
        text: 'text-amber-700',
        icon: 'text-amber-600',
        progress: 'bg-amber-500',
      },
    };
    return colors[color as keyof typeof colors];
  };

  if (selectedCategory) {
    const category = skillCategories.find(cat => cat.id === selectedCategory);
    if (!category) return null;

    const colors = getColorClasses(category.color);

    return (
      <div className="pt-16 min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <button
            onClick={() => setSelectedCategory(null)}
            className="flex items-center space-x-2 text-slate-600 hover:text-slate-800 mb-8 transition-colors duration-200"
          >
            <ArrowLeft size={20} />
            <span>Back to Skills Overview</span>
          </button>

          <div className={`${colors.bg} ${colors.border} border-2 rounded-2xl p-8 mb-8`}>
            <div className="flex items-center space-x-4 mb-6">
              <div className={`p-3 ${colors.bg} rounded-lg`}>
                <category.icon className={`${colors.icon}`} size={32} />
              </div>
              <h1 className={`text-3xl font-bold ${colors.text}`}>{category.title}</h1>
            </div>
          </div>

          <div className="space-y-6">
            {category.skills.map((skill, index) => (
              <div key={skill.name} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-200">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-slate-900">{skill.name}</h3>
                  <span className={`${colors.text} font-medium text-lg`}>{skill.level}%</span>
                </div>
                
                <div className="mb-4">
                  <div className="w-full bg-slate-200 rounded-full h-3">
                    <div
                      className={`h-3 ${colors.progress} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
                
                <p className="text-slate-600">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Technical Skills</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across various domains of computer science and engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            const colors = getColorClasses(category.color);
            
            return (
              <div
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`${colors.bg} ${colors.border} border-2 rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 group`}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`p-3 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-shadow duration-200`}>
                    <IconComponent className={`${colors.icon}`} size={32} />
                  </div>
                  <h2 className={`text-2xl font-bold ${colors.text}`}>{category.title}</h2>
                </div>
                
                <div className="space-y-3 mb-6">
                  {category.skills.slice(0, 3).map((skill) => (
                    <div key={skill.name} className="flex justify-between items-center">
                      <span className="text-slate-700 font-medium">{skill.name}</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-16 bg-white rounded-full h-2">
                          <div
                            className={`h-2 ${colors.progress} rounded-full`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                        <span className={`${colors.text} text-sm font-medium`}>{skill.level}%</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className={`${colors.text} text-sm font-medium flex items-center justify-center group-hover:translate-x-1 transition-transform duration-200`}>
                  <span>View all {category.skills.length} skills</span>
                  <ArrowLeft size={16} className="ml-2 rotate-180" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;