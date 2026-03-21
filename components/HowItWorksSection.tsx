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
      <div className="max-w-7xl mx-auto px-4 md:px-8">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 relative">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-full flex relative group"
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-[60px] -right-4 w-8 h-1 bg-gradient-to-r from-green-500 to-transparent opacity-50 z-0"></div>
                )}

                <Card hover className="w-full h-full flex flex-col items-center pt-8 pb-10 px-6 text-center relative z-10 transition-transform duration-300">
                  <div className="inline-block relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg border-4 border-slate-50 dark:border-slate-800">
                      {step.number}
                    </div>
                  </div>

                  <div className="w-14 h-14 bg-green-100 dark:bg-green-900/50 rounded-2xl flex items-center justify-center mb-6 text-green-600 dark:text-green-400">
                    <IconComponent size={28} />
                  </div>

                  <h3 className="text-xl font-bold mb-3 dark:text-white">{step.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm lg:text-base">
                    {step.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full max-w-3xl mx-auto mt-12 md:mt-20"
        >
          <Card className="text-center p-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 dark:text-white">Works Offline Too!</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
              Our mobile-first design works even in areas with low or no internet connectivity. Sync your data
              when you're back online.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
