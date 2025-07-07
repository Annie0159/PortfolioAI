import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, ArrowLeft, ExternalLink } from 'lucide-react';

const Experience: React.FC = () => {
  const [selectedExperience, setSelectedExperience] = useState<string | null>(null);

  const experiences = [
    {
      id: 'project-engineer',
      title: 'Project Engineer',
      company: 'Soliton Technologies',
      location: 'India',
      period: 'June 2023 - June 2024',
      type: 'Industry Experience',
      shortDescription: 'Full-stack development and system architecture design.',
      description: 'Led full-stack development projects and contributed to system architecture design. Worked on scalable web applications and database optimization.',
      achievements: [
        'Developed and deployed 3 major web applications serving 1000+ users',
        'Improved system performance by 40% through database optimization',
        'Led a team of 3 junior developers on critical project deliverables',
        'Implemented CI/CD pipelines reducing deployment time by 60%'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Docker'],
      responsibilities: [
        'Design and implement scalable web applications',
        'Collaborate with cross-functional teams to define project requirements',
        'Mentor junior developers and conduct code reviews',
        'Optimize application performance and database queries'
      ]
    },
    {
      id: 'research-assistant',
      title: 'Research Assistant',
      company: 'AICV Lab, University of Arkansas',
      location: 'Arkansas, USA',
      period: 'Current',
      type: 'Research Experience',
      shortDescription: 'AI and computer vision research in machine learning applications.',
      description: 'Conducting cutting-edge research in artificial intelligence and computer vision, focusing on machine learning applications for real-world problems.',
      achievements: [
        'Published 2 research papers in peer-reviewed conferences',
        'Developed novel computer vision algorithms for object detection',
        'Collaborated with industry partners on AI solutions',
        'Presented research findings at international conferences'
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'CUDA'],
      responsibilities: [
        'Conduct literature reviews and identify research gaps',
        'Design and implement machine learning experiments',
        'Analyze experimental results and draw meaningful conclusions',
        'Collaborate with other researchers and present findings'
      ]
    },
    {
      id: 'teaching-assistant',
      title: 'Programming Foundations Teaching Assistant',
      company: 'University of Arkansas',
      location: 'Arkansas, USA',
      period: 'June 2025 - Dec 2025',
      type: 'Teaching Experience',
      shortDescription: 'Supporting undergraduate students in programming fundamentals.',
      description: 'Assisted undergraduate students in learning programming fundamentals, conducted lab sessions, and provided one-on-one mentoring.',
      achievements: [
        'Mentored 50+ students in programming fundamentals',
        'Achieved 95% student satisfaction rating in course evaluations',
        'Developed supplementary learning materials and exercises',
        'Improved student performance by 30% through targeted support'
      ],
      technologies: ['Python', 'Java', 'Git', 'VS Code', 'Online Learning Platforms'],
      responsibilities: [
        'Conduct weekly lab sessions and tutorials',
        'Grade assignments and provide constructive feedback',
        'Hold office hours for student consultations',
        'Assist in curriculum development and improvement'
      ]
    }
  ];

  if (selectedExperience) {
    const experience = experiences.find(exp => exp.id === selectedExperience);
    if (!experience) return null;

    return (
      <div className="pt-16 min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <button
            onClick={() => setSelectedExperience(null)}
            className="flex items-center space-x-2 text-slate-600 hover:text-slate-800 mb-8 transition-colors duration-200"
          >
            <ArrowLeft size={20} />
            <span>Back to Experience Overview</span>
          </button>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{experience.title}</h1>
                  <h2 className="text-xl opacity-90 mb-4">{experience.company}</h2>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} />
                      <span>{experience.period}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin size={16} />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                </div>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">{experience.type}</span>
              </div>
            </div>

            <div className="p-8">
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Overview</h3>
                <p className="text-slate-600 leading-relaxed">{experience.description}</p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Key Responsibilities</h3>
                <ul className="space-y-2">
                  {experience.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-600">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Key Achievements</h3>
                <ul className="space-y-2">
                  {experience.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-600">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Professional Experience</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            My journey through industry, research, and teaching roles that have shaped my expertise in computer science and engineering.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              onClick={() => setSelectedExperience(experience.id)}
              className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-lg transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors duration-200">
                    <Briefcase className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 group-hover:text-blue-600 transition-colors duration-200">
                      {experience.title}
                    </h3>
                    <h4 className="text-lg text-blue-600 font-medium">{experience.company}</h4>
                    <div className="flex items-center space-x-4 text-sm text-slate-500 mt-2">
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{experience.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={14} />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">
                    {experience.type}
                  </span>
                  <ExternalLink className="text-slate-400 group-hover:text-blue-600 transition-colors duration-200" size={20} />
                </div>
              </div>

              <p className="text-slate-600 mb-4">{experience.shortDescription}</p>

              <div className="flex flex-wrap gap-2">
                {experience.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
                {experience.technologies.length > 4 && (
                  <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-sm">
                    +{experience.technologies.length - 4} more
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;