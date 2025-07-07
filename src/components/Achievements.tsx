import React from 'react';
import { Trophy, Award, Star, Medal, BookOpen, Users } from 'lucide-react';

const Achievements: React.FC = () => {
  const achievements = [
    {
      id: 'academic',
      title: 'Academic Excellence',
      icon: Trophy,
      color: 'yellow',
      items: [
        {
          title: 'Perfect GPA',
          description: 'Maintained 4.0/4.0 GPA in Master\'s program',
          year: '2024-Present',
          type: 'Academic'
        },
        {
          title: 'Dean\'s List',
          description: 'Consistently recognized for academic performance',
          year: '2022-2023',
          type: 'Academic'
        },
        {
          title: 'Merit Scholarship',
          description: 'Awarded merit-based scholarship for outstanding performance',
          year: '2024',
          type: 'Scholarship'
        }
      ]
    },
    {
      id: 'research',
      title: 'Research & Publications',
      icon: BookOpen,
      color: 'blue',
      items: [
        {
          title: 'Conference Publications',
          description: 'Published 2 papers in peer-reviewed international conferences',
          year: '2024',
          type: 'Publication'
        },
        {
          title: 'Best Research Paper Award',
          description: 'Recognized for innovative work in computer vision',
          year: '2024',
          type: 'Award'
        },
        {
          title: 'Research Grant',
          description: 'Secured funding for AI research project',
          year: '2024',
          type: 'Grant'
        }
      ]
    },
    {
      id: 'professional',
      title: 'Professional Recognition',
      icon: Medal,
      color: 'purple',
      items: [
        {
          title: 'Outstanding Employee',
          description: 'Recognized as top performer at Soliton Technologies',
          year: '2023',
          type: 'Professional'
        },
        {
          title: 'Innovation Award',
          description: 'Awarded for developing innovative solutions',
          year: '2023',
          type: 'Innovation'
        },
        {
          title: 'Team Leadership',
          description: 'Successfully led cross-functional project teams',
          year: '2023-2024',
          type: 'Leadership'
        }
      ]
    },
    {
      id: 'certifications',
      title: 'Certifications & Skills',
      icon: Award,
      color: 'green',
      items: [
        {
          title: 'AWS Certified Developer',
          description: 'Associate level certification in cloud development',
          year: '2023',
          type: 'Certification'
        },
        {
          title: 'Machine Learning Specialization',
          description: 'Completed advanced ML course from Stanford/Coursera',
          year: '2023',
          type: 'Certification'
        },
        {
          title: 'Python for Data Science',
          description: 'Professional certification in Python programming',
          year: '2022',
          type: 'Certification'
        }
      ]
    },
    {
      id: 'community',
      title: 'Community & Leadership',
      icon: Users,
      color: 'pink',
      items: [
        {
          title: 'Teaching Excellence',
          description: '95% student satisfaction as teaching assistant',
          year: '2024',
          type: 'Teaching'
        },
        {
          title: 'Volunteer Mentor',
          description: 'Mentored 20+ students in programming and career guidance',
          year: '2023-Present',
          type: 'Mentorship'
        },
        {
          title: 'Technical Society Member',
          description: 'Active member of IEEE and ACM student chapters',
          year: '2022-Present',
          type: 'Community'
        }
      ]
    },
    {
      id: 'competitions',
      title: 'Competitions & Hackathons',
      icon: Star,
      color: 'orange',
      items: [
        {
          title: 'Hackathon Winner',
          description: 'First place in university AI hackathon',
          year: '2024',
          type: 'Competition'
        },
        {
          title: 'Coding Competition',
          description: 'Top 10 finish in national programming contest',
          year: '2023',
          type: 'Competition'
        },
        {
          title: 'Innovation Challenge',
          description: 'Selected for final round of tech innovation challenge',
          year: '2023',
          type: 'Innovation'
        }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      yellow: { bg: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-700', icon: 'text-yellow-600' },
      blue: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700', icon: 'text-blue-600' },
      purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700', icon: 'text-purple-600' },
      green: { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-700', icon: 'text-green-600' },
      pink: { bg: 'bg-pink-50', border: 'border-pink-200', text: 'text-pink-700', icon: 'text-pink-600' },
      orange: { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-700', icon: 'text-orange-600' },
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Achievements & Recognition</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A comprehensive overview of my academic, professional, and personal accomplishments throughout my journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {achievements.map((category) => {
            const IconComponent = category.icon;
            const colors = getColorClasses(category.color);
            
            return (
              <div
                key={category.id}
                className={`${colors.bg} ${colors.border} border-2 rounded-2xl p-6 hover:shadow-lg transition-all duration-300`}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-white rounded-lg shadow-sm">
                    <IconComponent className={colors.icon} size={28} />
                  </div>
                  <h2 className={`text-2xl font-bold ${colors.text}`}>{category.title}</h2>
                </div>
                
                <div className="space-y-4">
                  {category.items.map((item, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-200">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-slate-900">{item.title}</h3>
                        <div className="flex items-center space-x-2">
                          <span className={`${colors.bg} ${colors.text} px-2 py-1 rounded text-xs font-medium`}>
                            {item.type}
                          </span>
                          <span className="text-slate-500 text-sm">{item.year}</span>
                        </div>
                      </div>
                      <p className="text-slate-600 text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary Statistics */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-center text-slate-900 mb-8">Achievement Summary</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-yellow-600 mb-2">15+</div>
              <div className="text-slate-600">Total Achievements</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">2</div>
              <div className="text-slate-600">Research Publications</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">3</div>
              <div className="text-slate-600">Professional Certifications</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">4.0</div>
              <div className="text-slate-600">Current GPA</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;