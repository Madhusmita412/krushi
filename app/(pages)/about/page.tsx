'use client';

import { motion } from 'framer-motion';
import { Brain, Leaf, Zap, BarChart3, Bug, Droplets } from 'lucide-react';
import Card from '@/components/Card';
import Button from '@/components/Button';

const models = [
  {
    icon: Brain,
    title: 'Crop Disease Detection',
    type: 'CNN (MobileNetV2)',
    description: 'Detects crop diseases from leaf images using computer vision and provides treatment suggestions.',
    accuracy: '95%',
  },
  {
    icon: Leaf,
    title: 'Soil Analysis Model',
    type: 'Random Forest',
    description: 'Analyzes soil moisture, temperature, and pH to determine soil health and nutrient levels.',
    accuracy: '92%',
  },
  {
    icon: Droplets,
    title: 'Irrigation Recommendation',
    type: 'Decision Tree / Random Forest',
    description: 'Suggests when and how much water is needed based on soil and weather conditions.',
    accuracy: '88%',
  },
  {
    icon: Zap,
    title: 'Disease Prediction',
    type: 'Machine Learning (Logistic Regression / XGBoost)',
    description: 'Predicts possible diseases before they occur using environmental data.',
    accuracy: '87%',
  },
  {
    icon: BarChart3,
    title: 'Fertilizer Recommendation',
    type: 'ML Classification Model',
    description: 'Suggests required nutrients like Nitrogen, Phosphorus, and Potassium.',
    accuracy: '90%',
  },
  {
    icon: Bug,
    title: 'Pest Detection',
    type: 'YOLO (Object Detection)',
    description: 'Detects harmful pests using camera input for timely intervention.',
    accuracy: '93%',
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 dark:text-white">
            About <span className="gradient-text">KRUSHI SCAN</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            An AI-powered smart agriculture platform designed to empower farmers with cutting-edge technology,
            helping them make data-driven decisions for better crop yields and sustainable farming.
          </p>
        </motion.div>

        {/* Project Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card>
            <h2 className="text-3xl font-bold mb-6 dark:text-white">Project Overview</h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed">
              <p>
                KRUSHI SCAN is an AI + IoT based platform designed to solve real-world farming problems including crop diseases,
                water mismanagement, and lack of expert guidance. Our mission is to empower farmers with actionable insights
                through advanced machine learning and internet of things technologies.
              </p>
              <p>
                The platform is specifically designed to work efficiently in rural areas of India with low-connectivity
                infrastructure, providing offline capabilities and local language support.
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Empower Farmers',
                description: 'Provide farmers with AI-driven insights to make better decisions',
                icon: '🚀',
              },
              {
                title: 'Increase Yield',
                description: 'Maximize crop production through data-driven farming practices',
                icon: '📈',
              },
              {
                title: 'Reduce Wastage',
                description: 'Optimize resource usage and minimize environmental impact',
                icon: '♻️',
              },
            ].map((mission, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card hover className="text-center h-full">
                  <div className="text-5xl mb-4">{mission.icon}</div>
                  <h3 className="text-xl font-bold mb-2 dark:text-white">{mission.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{mission.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* AI Models Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-12 dark:text-white">
            AI Models & <span className="gradient-text">Technology</span>
          </h2>
          <Card className="overflow-hidden p-0 sm:p-0 border-0 shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                    <th className="p-4 font-bold text-slate-700 dark:text-slate-300">Model Purpose</th>
                    <th className="p-4 font-bold text-slate-700 dark:text-slate-300">Architecture / Type</th>
                    <th className="p-4 font-bold text-slate-700 dark:text-slate-300">Description</th>
                    <th className="p-4 font-bold text-slate-700 dark:text-slate-300 text-right">Target Accuracy</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {models.map((model, index) => {
                    const IconComponent = model.icon;
                    return (
                      <tr key={index} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-green-50 dark:bg-green-900/30 rounded-lg group-hover:bg-green-100 dark:group-hover:bg-green-900/50 transition-colors">
                              <IconComponent size={20} className="text-green-600 dark:text-green-400" />
                            </div>
                            <span className="font-semibold text-slate-800 dark:text-slate-200">{model.title}</span>
                          </div>
                        </td>
                        <td className="p-4 text-sm text-slate-600 dark:text-slate-400 font-mono bg-slate-50/50 dark:bg-slate-800/20">
                          {model.type}
                        </td>
                        <td className="p-4 text-sm text-slate-600 dark:text-slate-400 max-w-xs">
                          {model.description}
                        </td>
                        <td className="p-4 text-right">
                          <span className="inline-flex items-center justify-center px-2.5 py-1 text-xs font-bold rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300 border border-green-200 dark:border-green-800">
                            {model.accuracy}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </Card>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card>
            <h2 className="text-3xl font-bold mb-6 dark:text-white">Technology Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold mb-4 text-green-600 dark:text-green-400">Frontend</h3>
                <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                  <li>✓ Next.js 14 (App Router)</li>
                  <li>✓ React 18</li>
                  <li>✓ TypeScript</li>
                  <li>✓ Tailwind CSS</li>
                  <li>✓ Framer Motion</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4 text-green-600 dark:text-green-400">Libraries & Tools</h3>
                <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                  <li>✓ Recharts (Analytics)</li>
                  <li>✓ Axios (API Calls)</li>
                  <li>✓ React Hot Toast</li>
                  <li>✓ Lucide Icons</li>
                  <li>✓ Responsive Design</li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Farming?</h3>
            <p className="text-lg mb-6 opacity-90">
              Start using KRUSHI SCAN today to optimize your crop management and increase yields.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/scan" variant="secondary">
                Start Scanning
              </Button>
              <Button href="/contact" variant="secondary">
                Get In Touch
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </main>
  );
}
