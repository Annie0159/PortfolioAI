import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'annie.manoharan@email.com',
      link: 'mailto:annie.manoharan@email.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (479) 123-4567',
      link: 'tel:+14791234567'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Fayetteville, Arkansas, USA',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      value: 'annie0159',
      link: 'https://github.com/annie0159'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Annie Prasanna Manoharan',
      link: 'https://linkedin.com/in/annie-prasanna'
    },
    {
      icon: ExternalLink,
      label: 'Portfolio',
      value: 'annie0159.github.io',
      link: 'https://annie0159.github.io/Portfolio/Annie_Portfolio.html'
    }
  ];

  const inquiryTypes = [
    'General Inquiry',
    'Job Opportunity',
    'Research Collaboration',
    'Project Discussion',
    'Mentorship',
    'Speaking Engagement',
    'Other'
  ];

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Get In Touch</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            I'm always excited to connect with fellow researchers, potential collaborators, and anyone interested in AI and technology. Let's start a conversation!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="p-3 bg-blue-100 rounded-lg">
                        <IconComponent className="text-blue-600" size={20} />
                      </div>
                      <div>
                        <div className="text-sm text-slate-500">{info.label}</div>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="text-slate-900 font-medium hover:text-blue-600 transition-colors duration-200"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-slate-900 font-medium">{info.value}</div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Connect with Me</h2>
              
              <div className="space-y-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-3 rounded-lg hover:bg-slate-50 transition-colors duration-200 group"
                    >
                      <div className="p-2 bg-slate-100 rounded-lg group-hover:bg-blue-100 transition-colors duration-200">
                        <IconComponent className="text-slate-600 group-hover:text-blue-600" size={20} />
                      </div>
                      <div>
                        <div className="text-sm text-slate-500">{social.label}</div>
                        <div className="text-slate-900 font-medium group-hover:text-blue-600 transition-colors duration-200">
                          {social.value}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Let's Collaborate!</h3>
              <p className="text-blue-100 mb-4">
                I'm open to research collaborations, speaking opportunities, and interesting project discussions. 
                Whether you're a fellow researcher, industry professional, or student, I'd love to hear from you.
              </p>
              <ul className="text-blue-100 text-sm space-y-2">
                <li>• Research collaborations in AI/ML</li>
                <li>• Guest speaking at conferences/events</li>
                <li>• Mentoring and career guidance</li>
                <li>• Open source project contributions</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select inquiry type</option>
                  {inquiryTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Please share details about your inquiry, project, or collaboration opportunity..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2 ${
                  isSubmitting
                    ? 'bg-slate-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                } text-white`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-700">
                  <div className="font-medium">Message sent successfully!</div>
                  <div className="text-sm">Thank you for reaching out. I'll get back to you within 24-48 hours.</div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
                  <div className="font-medium">Error sending message</div>
                  <div className="text-sm">Please try again or contact me directly via email.</div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;