'use client';

import { motion } from 'framer-motion';
import { Zap, Bot, Smartphone } from 'lucide-react';

export default function StagesSection() {
  const stages = [
    {
      number: 1,
      title: 'Your Existing System',
      description: 'Start with your traditional irrigation and crop management setup',
      icon: Zap,
      color: 'from-blue-500 to-blue-600',
    },
    {
      number: 2,
      title: 'Our Intelligent Retrofit',
      description: 'AI-powered disease detection and smart irrigation integration',
      icon: Bot,
      color: 'from-green-500 to-green-600',
    },
    {
      number: 3,
      title: '24/7 Remote Control',
      description: 'Monitor and control your farm anytime, anywhere with our app',
      icon: Smartphone,
      color: 'from-purple-500 to-purple-600',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">
            How <span className="gradient-text">We Transform</span> Your Farm
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Three simple stages to modernize your agricultural operations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {stages.map((stage, index) => {
            const IconComponent = stage.icon;
            return (
              <div key={index} className="relative">
                {/* Connecting Line */}
                {index < stages.length - 1 && (
                  <div className="hidden md:block absolute top-32 -right-4 w-8 h-1 bg-gradient-to-r from-green-500 to-transparent opacity-50"></div>
                )}

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>

                  <div className="relative bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 hover:border-green-500 dark:hover:border-green-400 transition-all duration-300">
                    {/* Stage Number */}
                    <div className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-4">
                      Stage {stage.number}
                    </div>

                    {/* Icon Background */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${stage.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                      <IconComponent size={32} className="text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-3 dark:text-white">{stage.title}</h3>

                    {/* Description */}
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {stage.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
