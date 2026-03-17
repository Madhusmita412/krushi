'use client';

import { motion } from 'framer-motion';
import { Sprout } from 'lucide-react';
import Button from './Button';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 inline-block">
            <span className="glassmorphism px-4 py-2 rounded-full text-sm font-semibold text-green-600 dark:text-green-400">
              🌱 AI-Powered Agriculture
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight dark:text-white">
            Smart Farming with <span className="gradient-text">AI</span>
          </h1>

          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
            Detect crop diseases, monitor soil health, and optimize irrigation with cutting-edge AI
            technology. Designed for farmers, built for India.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/scan" size="lg" variant="primary">
              <Sprout size={20} />
              Scan Your Crop
            </Button>
            <Button href="/dashboard" size="lg" variant="outline">
              View Dashboard
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12">
            <motion.div whileHover={{ y: -5 }}>
              <p className="text-3xl font-bold gradient-text">95%</p>
              <p className="text-slate-600 dark:text-slate-400">Accuracy</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }}>
              <p className="text-3xl font-bold gradient-text">50K+</p>
              <p className="text-slate-600 dark:text-slate-400">Farmers</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }}>
              <p className="text-3xl font-bold gradient-text">24/7</p>
              <p className="text-slate-600 dark:text-slate-400">Support</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative w-full h-96 bg-gradient-to-br from-green-400 to-green-600 rounded-3xl soft-shadow overflow-hidden">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 opacity-20"
            >
              <div className="w-full h-full bg-[url('data:image/svg+xml,...')]"></div>
            </motion.div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-center">
                <Sprout size={80} className="mx-auto mb-4" />
                <p className="text-2xl font-bold">Crop Health Monitored</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
