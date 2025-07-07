import React, { useState } from 'react';
import { GraduationCap, Calendar, MapPin, ArrowLeft, Award } from 'lucide-react';

const Education: React.FC = () => {
  const [selectedEducation, setSelectedEducation] = useState<string | null>(null);

  const education = [
    {
      id: 'masters',
      degree: 'Master of Science in Computer Engineering',
      school: 'University of Arkansas',
      location: 'Arkansas, USA',
      period: 'Aug 2024 - May 2026 (Expected)',
      gpa: '4.0/4.0',
      status: 'Current',
      shortDescription: 'Advanced studies in computer engineering with focus on AI and machine learning.',
      description: 'Pursuing advanced studies in computer engineering with specialization in artificial intelligence, machine learning, and computer vision. Engaged in cutting-edge research at the AICV Lab.',
      coursework: [
        'Advanced Machine Learning',
        'Computer Vision',
        'Deep Learning',
        'Data Structures and Algorithms',
        'Database Systems',
        'Software Engineering',
        'Research Methodology'
      ],
      achievements: [
        'Maintained perfect 4.0 GPA',
        'Research Assistant at AICV Lab',
        'Published research papers in conferences',
        'Teaching Assistant for programming courses'
      ],
      projects: [
        'Developed advanced computer vision models for object detection',
        'Research on machine learning applications in healthcare',
        'Collaborative AI projects with industry partners'
      ]
    },
    {
      id: 'bachelors',
      degree: 'Bachelor of Engineering in Electronics and Communication',
      school: 'University Institution',
      location: 'India',
      period: 'Aug 2019 - May 2023',
      gpa: '8.5/10.0',
      status: 'Completed',
      shortDescription: 'Foundation in electronics and communication engineering with strong technical background.',
      description: 'Comprehensive undergraduate program covering electronics, communication systems, signal processing, and programming fundamentals. Built strong foundation in engineering principles.',
      coursework: [
        'Digital Signal Processing',
        'Communication Systems',
        'Microprocessors and Microcontrollers',
        'Programming in C/C++',
        'Mathematics for Engineers',
        'Circuit Analysis',
        'Electronic Devices and Circuits'
      ],
      achievements: [
        'Graduated with distinction (8.5/10.0 GPA)',
        'Department rank in top 10%',
        'Completed multiple technical projects',
        'Active participation in technical societies'
      ],
      projects: [
        'IoT-based smart parking system using Raspberry Pi',
        'Digital communication system design',
        'Microcontroller-based automation projects'
      ]
    }
  ];

  if (selectedEducation) {
    const edu = education.find(e => e.id === selectedEducation);
    if (!edu) return null;

    return (
      <div className="pt-16 min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <button
            onClick={() => setSelectedEducation(null)}
            className="flex items-center space-x-2 text-slate-600 hover:text-slate-800 mb-8 transition-colors duration-200"
          >
            <ArrowLeft size={20} />
            <span>Back to Education Overview</span>
          </button>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-600 to-blue-600 p-8 text-white">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{edu.degree}</h1>
                  <h2 className="text-xl opacity-90 mb-4">{edu.school}</h2>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin size={16} />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award size={16} />
                      <span>GPA: {edu.gpa}</span>
                    </div>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  edu.status === 'Current' ? 'bg-green-500/20 text-green-100' : 'bg-blue-500/20 text-blue-100'
                }`}>
                  {edu.status}
                </span>
              </div>
            </div>

            <div className="p-8">
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Program Overview</h3>
                <p className="text-slate-600 leading-relaxed">{edu.description}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">Key Coursework</h3>
                  <ul className="space-y-2">
                    {edu.coursework.map((course, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-slate-600">{course}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">Academic Achievements</h3>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-slate-600">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Notable Projects</h3>
                <ul className="space-y-2">
                  {edu.projects.map((project, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-600">{project}</span>
                    </li>
                  ))}
                </ul>
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
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Education</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            My academic journey in computer science and engineering, building a strong foundation for innovation and research.
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <div
              key={edu.id}
              onClick={() => setSelectedEducation(edu.id)}
              className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-lg transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-start space-x-6">
                <div className="p-4 bg-emerald-100 rounded-lg group-hover:bg-emerald-200 transition-colors duration-200 flex-shrink-0">
                  <GraduationCap className="text-emerald-600" size={32} />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 group-hover:text-emerald-600 transition-colors duration-200">
                        {edu.degree}
                      </h3>
                      <h4 className="text-lg text-emerald-600 font-medium">{edu.school}</h4>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      edu.status === 'Current' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {edu.status}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin size={14} />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Award size={14} />
                      <span>GPA: {edu.gpa}</span>
                    </div>
                  </div>

                  <p className="text-slate-600 mb-4">{edu.shortDescription}</p>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-slate-500">
                      {edu.coursework.length} courses • {edu.projects.length} major projects
                    </div>
                    <div className="text-emerald-600 text-sm font-medium group-hover:translate-x-1 transition-transform duration-200">
                      View Details →
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;