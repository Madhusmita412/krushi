'use client';

import { motion } from 'framer-motion';
import { Sprout, Calculator } from 'lucide-react';
import Button from './Button';

interface HeroSectionProps {
  onOpenROI?: () => void;
}

export default function HeroSection({ onOpenROI }: HeroSectionProps) {
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
            {onOpenROI && (
              <button
                onClick={onOpenROI}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl sm:whitespace-nowrap"
              >
                <Calculator size={20} />
                Calculate ROI
              </button>
            )}
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
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: 0.2
          }}
          className="relative"
        >
          {/* Playful Floating Elements Background */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-75"></div>
          
          <div className="relative w-full h-[32rem] rounded-[2.5rem] border-4 border-white/50 soft-shadow overflow-hidden group">
            {/* The Image */}
            <img 
              src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=2070&auto=format&fit=crop" 
              alt="Lush green agriculture field with farmer hands" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-green-900/20 to-transparent"></div>
            
            {/* Badge overlay on top of image */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-6 left-6 right-6"
            >
              <div className="glassmorphism p-6 flex items-center gap-4 text-slate-800 dark:text-white">
                <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg text-green-900">
                  <Sprout size={32} />
                </div>
                <div>
                  <p className="text-xl font-bold">Crop Health Monitored</p>
                  <p className="text-sm opacity-80 font-medium">Real-time stats updating...</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
