'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import toast from 'react-hot-toast';
import Card from '@/components/Card';
import Button from '@/components/Button';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }

    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success('Message sent successfully! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    setLoading(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@krushiscan.com',
      href: 'mailto:hello@krushiscan.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 XXXX XXX XXX',
      href: 'tel:+91XXXXXXXXXX',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'India',
      href: '#',
    },
  ];

  return (
    <main className="min-h-screen py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 dark:text-white">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        {/* Main Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 items-stretch">
          {/* Contact Information Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8 h-full"
          >
            {/* Iterated Contact Items */}
            <div className="flex flex-col gap-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <motion.div key={index} whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
                    <a href={info.href} className="block group">
                      <Card hover className="p-8 transition-colors">
                        <div className="flex items-center gap-6">
                          <div className="p-5 bg-green-100 dark:bg-green-900/50 rounded-2xl flex-shrink-0 group-hover:bg-green-200 dark:group-hover:bg-green-800 transition-colors">
                            <IconComponent size={32} className="text-green-600 dark:text-green-400" />
                          </div>
                          <div>
                            <h3 className="font-bold text-slate-900 dark:text-white text-xl mb-2">{info.label}</h3>
                            <p className="text-slate-600 dark:text-slate-400 font-medium text-lg">{info.value}</p>
                          </div>
                        </div>
                      </Card>
                    </a>
                  </motion.div>
                );
              })}
            </div>

            {/* Additional Info / Response Time - Pushed to bottom to balance with the right side */}
            <Card className="bg-green-50 dark:bg-green-900/30 border border-green-100 dark:border-green-800 p-8 md:p-10 mt-auto flex flex-col justify-center">
              <h3 className="font-bold text-xl mb-4 text-green-900 dark:text-green-100">Response Time</h3>
              <p className="text-green-800 dark:text-green-200/80 font-medium leading-relaxed text-lg">
                We typically respond to inquiries within <span className="font-bold">2-4 hours</span> during business hours (9 AM - 6 PM IST).
              </p>
            </Card>
          </motion.div>

          {/* Contact Form Container */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col h-full"
          >
            <Card className="h-full flex flex-col p-8 md:p-12 shadow-lg">
              <form onSubmit={handleSubmit} className="flex-grow flex flex-col gap-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="block text-sm font-bold text-slate-700 dark:text-slate-300">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-5 py-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 dark:text-white focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all font-medium"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="block text-sm font-bold text-slate-700 dark:text-slate-300">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-5 py-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 dark:text-white focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all font-medium"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="block text-sm font-bold text-slate-700 dark:text-slate-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 dark:text-white focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all font-medium"
                    placeholder="How can we help?"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2 flex-grow">
                  <label htmlFor="message" className="block text-sm font-bold text-slate-700 dark:text-slate-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full h-full min-h-[160px] px-5 py-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 dark:text-white focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all resize-none font-medium"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-2 py-4 text-lg"
                  size="lg"
                  variant="primary"
                >
                  {loading ? (
                    <>
                      <Send size={20} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 md:mt-24 mb-10"
        >
          <h2 className="text-3xl font-bold mb-10 text-center dark:text-white">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            {[
              {
                q: 'How accurate is the disease detection?',
                a: 'Our AI model achieves 95% accuracy in disease detection using advanced CNN algorithms trained on thousands of leaf images.',
              },
              {
                q: 'Does it work offline?',
                a: 'Yes! KRUSHI SCAN works offline and syncs your data when you reconnect to the internet.',
              },
              {
                q: 'What languages are supported?',
                a: 'We support multiple regional languages including Hindi, Marathi, Tamil, Telugu, Kannada, and English.',
              },
              {
                q: 'How often should I upload images?',
                a: 'We recommend scanning your crops weekly or whenever you notice any changes in their appearance.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <Card className="h-full p-8 flex flex-col justify-center">
                  <h3 className="font-bold text-xl mb-3 dark:text-white">{faq.q}</h3>
                  <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">{faq.a}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
