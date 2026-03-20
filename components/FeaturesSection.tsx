'use client';

import { motion } from 'framer-motion';
import { Leaf, Droplets, Zap, Sparkles } from 'lucide-react';
import Card from './Card';

const features = [
  {
    icon: Leaf,
    title: 'AI Disease Detection',
    description: 'Detect crop diseases from leaf images with 95% accuracy using advanced CNN models.',
  },
  {
    icon: Droplets,
    title: 'Smart Irrigation',
    description: 'Receive intelligent irrigation recommendations based on soil conditions and weather.',
  },
  {
    icon: Zap,
    title: 'Soil Monitoring',
    description: 'Real-time soil moisture, temperature, pH, and nutrient analysis.',
  },
  {
    icon: Sparkles,
    title: 'Voice Assistant',
    description: 'Multilingual voice interface for easy access in rural areas with low connectivity.',
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900">
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
            Powerful Features for Modern <span className="gradient-text">Farming</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Everything you need to manage your crops efficiently and maximize yield with AI
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 items-stretch">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <Card hover className="h-full p-6 flex flex-col items-center justify-center text-center">
                  <div className="flex items-center justify-center mb-5">
                    <div className="p-4 bg-green-100 dark:bg-green-900/50 rounded-xl">
                      <IconComponent size={32} className="text-green-600 dark:text-green-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 dark:text-white">{feature.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{feature.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
