'use client';

import { motion } from 'framer-motion';
import { Upload, Zap, CheckCircle, BarChart3 } from 'lucide-react';
import Card from './Card';

const steps = [
  {
    number: 1,
    icon: Upload,
    title: 'Upload Image',
    description: 'Take a photo of your crop leaf or upload from gallery',
  },
  {
    number: 2,
    icon: Zap,
    title: 'AI Analysis',
    description: 'Advanced ML models analyze the image in seconds',
  },
  {
    number: 3,
    icon: CheckCircle,
    title: 'Get Results',
    description: 'Receive disease diagnosis and confidence score',
  },
  {
    number: 4,
    icon: BarChart3,
    title: 'Track Progress',
    description: 'Monitor your crops with our intelligent dashboard',
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Simple 4-step process to diagnose and manage your crops
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 -right-3 w-6 h-1 bg-gradient-to-r from-green-600 to-transparent"></div>
                )}

                <Card className="text-center h-full">
                  <div className="inline-block relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white mb-4 mx-auto text-2xl font-bold">
                      {step.number}
                    </div>
                  </div>

                  <div className="flex justify-center mb-4">
                    <IconComponent size={32} className="text-green-600 dark:text-green-400" />
                  </div>

                  <h3 className="text-xl font-bold mb-3 dark:text-white">{step.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">{step.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 dark:text-white">Works Offline Too!</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Our mobile-first design works even in areas with low or no internet connectivity. Sync your data
              when you're back online.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
