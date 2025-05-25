
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log('Sending email with EmailJS...');
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Sriram Sanath',
      };

      const result = await emailjs.send(
        'service_p5srzyq', // Your Service ID
        'template_n8luedk', // Your Template ID
        templateParams,
        'SUuBonUM5YiD3oRIc' // Your Public Key
      );

      console.log('Email sent successfully:', result);
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

    } catch (error) {
      console.error('Failed to send email:', error);
      
      toast({
        title: "Error Sending Message",
        description: "Something went wrong. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sriramsanath002@gmail.com',
      href: 'mailto:sriramsanath002@gmail.com',
      description: 'Send me an email anytime'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 83098 22404',
      href: 'tel:+918309822404',
      description: 'Available Mon-Fri, 9AM-6PM'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Nellore, Andhra Pradesh, India',
      href: '#',
      description: 'Open to remote opportunities'
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/sanath2567',
      color: 'hover:bg-gray-900 hover:text-white'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/sriramsanath',
      color: 'hover:bg-blue-600 hover:text-white'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://x.com/SanathSriram',
      color: 'hover:bg-blue-400 hover:text-white'
    },
  ];

  return (
    <>
      <style>{`
      /* Contact.css */

/* Base styling */
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 20px;
}

/* Ensure images or cards resize properly */
.card,
img {
  max-width: 100%;
  height: auto;
  object-fit: cover;
}

/* Media query for smaller screens */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
    padding: 10px;
  }

  .card {
    width: 100% !important;
    margin: 10px 0;
  }

  h1,
  p {
    font-size: 1rem;
    text-align: center;
  }

  .image-wrapper img {
    width: 100%;
    height: auto;
  }

  /* Optional: Hide extra content or simplify layout */
  .sidebar,
  .non-essential {
    display: none;
  }
}

      
      `}</style>
      <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full -translate-y-48 translate-x-48 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full translate-y-48 -translate-x-48 opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Let's Work Together</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mt-8 rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-5 gap-16">
            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h3>
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <a
                      key={info.label}
                      href={info.href}
                      className="group flex items-start space-x-6 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200"
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl flex items-center justify-center group-hover:from-purple-200 group-hover:to-blue-200 transition-all duration-300">
                        <info.icon className="w-7 h-7 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900 text-lg mb-1">{info.label}</p>
                        <p className="text-purple-600 font-medium text-lg mb-2">{info.value}</p>
                        <p className="text-gray-500 text-sm">{info.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Connect With Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-md transition-all duration-300 hover:scale-110 hover:shadow-lg border border-gray-100 ${social.color}`}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
                <h3 className="text-3xl font-bold text-gray-900 mb-8">Send Me a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Name field - separate row */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full h-12 px-4 text-lg border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-purple-500 transition-colors"
                      placeholder="Your Full Name"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Email field - separate row */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full h-12 px-4 text-lg border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-purple-500 transition-colors"
                      placeholder="your.email@example.com"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  {/* Subject field */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-3">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full h-12 px-4 text-lg border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-purple-500 transition-colors"
                      placeholder="Project Discussion"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  {/* Message field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-4 py-3 text-lg border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-purple-500 transition-colors resize-none"
                      placeholder="Tell me about your project ideas, requirements, or any questions you have..."
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  {/* Submit button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg hover:shadow-xl"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      'Send Message'
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
