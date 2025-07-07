import React, { useState } from 'react';
import { FolderOpen, ExternalLink, Github, Calendar, Users, ArrowLeft } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const projects = [
    {
      id: 'parking-system',
      title: 'Raspberry PI-based Intelligent Car Parking System',
      category: 'IoT & Hardware',
      status: 'Completed',
      period: '2023',
      team: '4 members',
      shortDescription: 'Cloud-based IoT system helping drivers book parking spots efficiently.',
      description: 'Developed an intelligent car parking system using Raspberry Pi that helps drivers find and book available parking spots through a cloud-based IoT system. The system integrates hardware sensors, cloud computing, and mobile application for seamless user experience.',
      features: [
        'Real-time parking spot detection using ultrasonic sensors',
        'Cloud-based data management and processing',
        'Mobile application for spot booking and navigation',
        'Automated payment integration',
        'Live parking availability dashboard'
      ],
      technologies: ['Raspberry Pi', 'Python', 'IoT Sensors', 'Cloud Computing', 'Mobile App Development'],
      challenges: [
        'Accurate sensor calibration for different vehicle types',
        'Real-time data synchronization between hardware and cloud',
        'Optimizing power consumption for 24/7 operation'
      ],
      outcomes: [
        'Reduced parking search time by 70%',
        'Improved parking space utilization efficiency',
        'Positive user feedback from beta testing'
      ],
      images: ['parking-system-1.jpg', 'parking-system-2.jpg'],
      demoLink: 'https://example.com/parking-demo',
      githubLink: 'https://github.com/example/parking-system'
    },
    {
      id: 'computer-vision-research',
      title: 'Advanced Computer Vision for Object Detection',
      category: 'AI & Machine Learning',
      status: 'Ongoing',
      period: '2024 - Present',
      team: '3 researchers',
      shortDescription: 'Research project developing novel computer vision algorithms for improved object detection.',
      description: 'Ongoing research project at AICV Lab focusing on developing advanced computer vision algorithms for enhanced object detection accuracy in complex environments. The research aims to improve detection performance in challenging conditions.',
      features: [
        'Novel CNN architecture for improved accuracy',
        'Real-time object detection and tracking',
        'Multi-class object recognition system',
        'Performance optimization for edge devices',
        'Robust detection in varying lighting conditions'
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'CUDA', 'Computer Vision'],
      challenges: [
        'Handling occlusion and complex backgrounds',
        'Optimizing model size for real-time performance',
        'Training on diverse datasets for generalization'
      ],
      outcomes: [
        'Achieved 15% improvement in detection accuracy',
        'Published research paper in international conference',
        'Collaboration with industry partners initiated'
      ],
      images: ['cv-research-1.jpg', 'cv-research-2.jpg'],
      paperLink: 'https://example.com/research-paper',
      githubLink: 'https://github.com/example/cv-research'
    },
    {
      id: 'web-application',
      title: 'Full-Stack Web Application Platform',
      category: 'Web Development',
      status: 'Completed',
      period: '2023',
      team: '5 developers',
      shortDescription: 'Scalable web platform serving 1000+ users with modern architecture.',
      description: 'Led the development of a comprehensive full-stack web application platform that serves over 1000 active users. The platform features modern architecture, responsive design, and robust backend systems.',
      features: [
        'User authentication and authorization system',
        'Real-time data synchronization',
        'Responsive design for all devices',
        'Admin dashboard with analytics',
        'RESTful API with comprehensive documentation'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'AWS', 'Docker'],
      challenges: [
        'Scaling architecture for increasing user load',
        'Implementing real-time features efficiently',
        'Ensuring data security and privacy compliance'
      ],
      outcomes: [
        'Successfully deployed with 99.9% uptime',
        'Positive user adoption and engagement metrics',
        'Reduced loading time by 60% through optimization'
      ],
      images: ['webapp-1.jpg', 'webapp-2.jpg'],
      liveLink: 'https://example.com/webapp',
      githubLink: 'https://github.com/example/webapp'
    },
    {
      id: 'machine-learning-model',
      title: 'Healthcare ML Prediction Model',
      category: 'Machine Learning',
      status: 'Completed',
      period: '2024',
      team: '2 researchers',
      shortDescription: 'Machine learning model for healthcare predictions with high accuracy.',
      description: 'Developed a sophisticated machine learning model for healthcare applications that provides accurate predictions for patient outcomes. The model incorporates various patient data points and medical history for comprehensive analysis.',
      features: [
        'Multi-parameter patient data analysis',
        'Predictive modeling with high accuracy',
        'Data visualization and reporting tools',
        'Integration with hospital management systems',
        'Privacy-compliant data handling'
      ],
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'TensorFlow'],
      challenges: [
        'Handling sensitive healthcare data securely',
        'Ensuring model interpretability for medical professionals',
        'Achieving high accuracy with limited training data'
      ],
      outcomes: [
        'Achieved 92% prediction accuracy',
        'Reduced diagnosis time by 40%',
        'Positive feedback from healthcare professionals'
      ],
      images: ['ml-model-1.jpg', 'ml-model-2.jpg'],
      paperLink: 'https://example.com/ml-paper',
      githubLink: 'https://github.com/example/ml-model'
    },
    {
      id: 'mobile-app',
      title: 'Cross-Platform Mobile Application',
      category: 'Mobile Development',
      status: 'Completed',
      period: '2023',
      team: '3 developers',
      shortDescription: 'Cross-platform mobile app with modern UI and seamless user experience.',
      description: 'Developed a cross-platform mobile application that provides seamless user experience across iOS and Android devices. The app features modern UI design, offline capabilities, and integration with cloud services.',
      features: [
        'Cross-platform compatibility (iOS & Android)',
        'Offline data synchronization',
        'Push notifications system',
        'In-app purchases and payments',
        'Social media integration'
      ],
      technologies: ['React Native', 'Firebase', 'Redux', 'Node.js', 'MongoDB'],
      challenges: [
        'Ensuring consistent UI across different devices',
        'Implementing offline-first architecture',
        'Optimizing app performance and battery usage'
      ],
      outcomes: [
        'Successfully launched on both app stores',
        '10,000+ downloads in first month',
        '4.5-star average rating from users'
      ],
      images: ['mobile-app-1.jpg', 'mobile-app-2.jpg'],
      appStoreLink: 'https://apps.apple.com/example',
      githubLink: 'https://github.com/example/mobile-app'
    },
    {
      id: 'data-analytics',
      title: 'Big Data Analytics Dashboard',
      category: 'Data Science',
      status: 'Completed',
      period: '2023',
      team: '4 analysts',
      shortDescription: 'Comprehensive analytics dashboard for business intelligence and insights.',
      description: 'Created a comprehensive big data analytics dashboard that processes large datasets and provides actionable business insights. The dashboard features real-time data visualization and automated reporting capabilities.',
      features: [
        'Real-time data processing and visualization',
        'Interactive charts and graphs',
        'Automated report generation',
        'Custom KPI tracking',
        'Export capabilities for presentations'
      ],
      technologies: ['Python', 'Tableau', 'SQL', 'Apache Spark', 'AWS', 'D3.js'],
      challenges: [
        'Processing large volumes of data efficiently',
        'Creating intuitive visualizations for non-technical users',
        'Ensuring data accuracy and consistency'
      ],
      outcomes: [
        'Reduced reporting time by 80%',
        'Improved decision-making speed',
        'Identified key business optimization opportunities'
      ],
      images: ['analytics-1.jpg', 'analytics-2.jpg'],
      demoLink: 'https://example.com/analytics-demo',
      githubLink: 'https://github.com/example/analytics'
    }
  ];

  if (selectedProject) {
    const project = projects.find(p => p.id === selectedProject);
    if (!project) return null;

    return (
      <div className="pt-16 min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <button
            onClick={() => setSelectedProject(null)}
            className="flex items-center space-x-2 text-slate-600 hover:text-slate-800 mb-8 transition-colors duration-200"
          >
            <ArrowLeft size={20} />
            <span>Back to Projects</span>
          </button>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
                  <p className="text-xl opacity-90">{project.category}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  project.status === 'Ongoing' ? 'bg-green-500/20 text-green-100' : 'bg-blue-500/20 text-blue-100'
                }`}>
                  {project.status}
                </span>
              </div>
              
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Calendar size={16} />
                  <span>{project.period}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users size={16} />
                  <span>{project.team}</span>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Project Overview</h3>
                <p className="text-slate-600 leading-relaxed">{project.description}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
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

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">Challenges & Solutions</h3>
                  <ul className="space-y-2">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-slate-600">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">Outcomes & Impact</h3>
                  <ul className="space-y-2">
                    {project.outcomes.map((outcome, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-slate-600">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors duration-200"
                  >
                    <Github size={20} />
                    <span>View Code</span>
                  </a>
                )}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                )}
                {project.paperLink && (
                  <a
                    href={project.paperLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors duration-200"
                  >
                    <ExternalLink size={20} />
                    <span>Research Paper</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const categories = Array.from(new Set(projects.map(p => p.category)));

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Featured Projects</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A showcase of my technical projects spanning AI, web development, mobile apps, and research initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project.id)}
              className="bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-lg transition-all duration-300 cursor-pointer group overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors duration-200">
                    <FolderOpen className="text-blue-600" size={24} />
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Ongoing' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {project.status}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 text-sm mb-4">{project.shortDescription}</p>
                
                <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                  <span className="bg-slate-100 px-2 py-1 rounded">{project.category}</span>
                  <span>{project.period}</span>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-sm text-slate-500">
                    <Users size={14} />
                    <span>{project.team}</span>
                  </div>
                  <div className="text-blue-600 text-sm font-medium group-hover:translate-x-1 transition-transform duration-200">
                    View Details →
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

export default Projects;