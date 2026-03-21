'use client';

import { motion } from 'framer-motion';
import { Brain, Leaf, Zap, BarChart3, Bug, Droplets, Check } from 'lucide-react';
import Card from '@/components/Card';
import Button from '@/components/Button';

const modelCategories = [
  {
    title: 'Visual Intelligence Systems',
    models: [
      {
        icon: Brain,
        title: 'Crop Disease Detection: AI Vision Engine',
        description: 'An advanced computer vision system that correlates leaf anomalies with a vast database to identify specific crop ailments from simple smartphone photos.',
        features: [
          'Powered by CNN (MobileNetV2) for rapid, on-device edge inferencing.',
          'Provides instant, pesticide-specific treatment and localized dosage suggestions.',
          'Generates high-confidence diagnoses with an impressive 95% target accuracy.'
        ],
        idealFor: 'Farmers looking to identify leaf spot, blight, and rust diseases instantly without waiting for an external agronomist.'
      },
      {
        icon: Bug,
        title: 'Pest Detection: Real-time Monitoring',
        description: 'An intelligent object detection engine that recognizes harmful pests from field camera inputs or uploaded images before infestations spread.',
        features: [
          'Utilizes YOLO (You Only Look Once) architecture for high-speed object detection.',
          'Classifies multiple pest species and estimates current infestation severity.',
          'Operates reliably with 93% accuracy even in varying field lighting conditions.'
        ],
        idealFor: 'Farms requiring immediate intervention alerts to prevent widespread crop damage and potential yield loss.'
      }
    ]
  },
  {
    title: 'Soil & Nutrient Analytics',
    models: [
      {
        icon: Leaf,
        title: 'Soil Analysis Model: Core Health Profiler',
        description: 'A comprehensive evaluation tool that processes soil moisture, temperature, and pH datasets to determine overall soil vitality and nutrient absorption levels.',
        features: [
          'Leverages Random Forest algorithms to aggregate multiple soil metrics.',
          'Correlates current soil conditions with historical ideal growth profiles.',
          'Maintains 92% analytical accuracy to prevent nutrient lockout scenarios.'
        ],
        idealFor: 'Growers undertaking seasonal crop rotation needing to verify if their soil profile meets specific crop requirements.'
      },
      {
        icon: BarChart3,
        title: 'Fertilizer Recommendation: Smart Dosing',
        description: 'A precision recommendation model that calculates exact Nitrogen, Phosphorus, and Potassium requirements based on current soil deficiencies.',
        features: [
          'Driven by an ML Classification Model tailored for diverse soil schemas.',
          'Prevents fertilizer burn and runoff by avoiding over-application.',
          'Optimized for sustainable farming practices with 90% target precision.'
        ],
        idealFor: 'Commercial and smallholder farmers aiming to improve fertilizer savings and ensure balanced crop nutrition.'
      }
    ]
  },
  {
    title: 'Predictive Environment Controls',
    models: [
      {
        icon: Droplets,
        title: 'Irrigation Recommendation: Hydration Automation',
        description: 'A dedicated water management core that suggests exactly when and how much water is needed based on real-time soil and live weather conditions.',
        features: [
          'Employs Decision Tree and Random Forest logic to map hydration thresholds.',
          'Eliminates manual guessing by adjusting cycles dynamically for rainfall.',
          'Helps conserve vital water resources while achieving 88% model reliability.'
        ],
        idealFor: 'Regions facing water scarcity or farms seeking to completely automate their irrigation schedules for peak efficiency.'
      },
      {
        icon: Zap,
        title: 'Disease Prediction: Preemptive Defense Engine',
        description: 'An early-warning system that analyzes shifting environmental data (humidity, temperature trends) to forecast potential disease outbreaks before they manifest.',
        features: [
          'Integrates Logistic Regression and XGBoost for highly complex pattern matching.',
          'Alerts users to optimal preventative fungicide/pesticide spraying windows.',
          'Reduces crop vulnerability drastically with an 87% predictive success rate.'
        ],
        idealFor: 'Farms located within volatile microclimates where sudden humidity spikes traditionally lead to devastating crop losses.'
      }
    ]
  }
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
            <h2 className="text-3xl font-bold mb-6 dark:text-white text-center">Project Overview</h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed text-center">
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
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold dark:text-white mb-4">Our Core Mission</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              We are driven by a single purpose: to democratize advanced agricultural technology for farmers worldwide.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Empower Farmers',
                description: 'Provide farmers with AI-driven insights to make better decisions and reduce dependency on scarce resources.',
                icon: '🚀',
              },
              {
                title: 'Increase Yield',
                description: 'Maximize crop production through data-driven farming practices and early disease intervention.',
                icon: '📈',
              },
              {
                title: 'Reduce Wastage',
                description: 'Optimize resource usage like water and fertilizer to minimize environmental impact and lower costs.',
                icon: '♻️',
              },
            ].map((mission, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <Card hover className="h-full p-8 flex flex-col items-center justify-center text-center">
                  <div className="text-5xl mb-6">{mission.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 dark:text-white">{mission.title}</h3>
                  <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">{mission.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Our Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 dark:text-white">Our Story</h2>
              <div className="space-y-4 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                <p>
                  KRUSHI SCAN was born out of a stark realization: while technology was rapidly advancing in urban centers, the agricultural sector—the backbone of our civilization—was largely left behind.
                </p>
                <p>
                  We witnessed farmers losing entire seasons of hard work to preventable diseases and mismanaged resources simply because they lacked access to timely, expert advice. Traditional agronomists were too expensive or unavailable when needed most.
                </p>
                <p>
                  Combining our expertise in Artificial Intelligence, Computer Vision, and agronomy, we built a tool that puts an expert agronomist right in the pocket of every farmer. Today, KRUSHI SCAN is bridging the gap between traditional wisdom and modern technological power.
                </p>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden h-full min-h-[400px] flex items-center justify-center group">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ 
                  backgroundImage: "url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')" 
                }}
              >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-500" />
              
              {/* Content */}
              <div className="relative z-10 p-10 text-center max-w-md">
                <Leaf size={64} className="text-green-400 mx-auto mb-6 drop-shadow-lg" />
                <p className="text-2xl md:text-3xl font-semibold text-white italic drop-shadow-md leading-relaxed">
                  "Technology should serve those who feed the world."
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Impact Numbers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Farms Scanned', value: '10,000+' },
              { label: 'Diseases Detected', value: '50,000+' },
              { label: 'Accuracy Rate', value: '95%' },
              { label: 'Water Saved', value: '2M+ Liters' },
            ].map((stat, index) => (
              <Card key={index} className="text-center p-8 bg-white dark:bg-slate-800">
                <div className="text-4xl md:text-5xl font-black text-green-600 dark:text-green-400 mb-2">{stat.value}</div>
                <div className="text-slate-500 dark:text-slate-400 font-medium text-lg">{stat.label}</div>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* AI Models & Capabilities Section */}
        <div className="mb-32 space-y-32">
          {modelCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-black mb-16 text-center text-slate-800 dark:text-slate-100 uppercase tracking-tight">
                {category.title}
              </h2>
              <div className="space-y-16">
                {category.models.map((model, modelIndex) => {
                  const Icon = model.icon;
                  // Alternate layout direction for each card
                  const isEven = modelIndex % 2 === 0;

                  return (
                    <Card
                      key={modelIndex}
                      className="overflow-hidden border-0 shadow-2xl bg-white dark:bg-slate-800/80 p-0 sm:p-0 rounded-3xl"
                    >
                      <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-stretch min-h-[500px]`}>
                        {/* Visual Side */}
                        <div className="w-full lg:w-2/5 bg-green-50/60 dark:bg-green-900/30 p-16 flex flex-col items-center justify-center min-h-[400px] lg:min-h-[500px] border-b lg:border-b-0 lg:border-r border-slate-100 dark:border-slate-700/50 relative overflow-hidden group">
                          <div className="absolute inset-0 bg-green-500/10 dark:bg-green-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full blur-3xl transform scale-150"></div>
                          <Icon size={140} className="text-green-600 dark:text-green-500 drop-shadow-md mb-6 z-10 transform group-hover:scale-110 transition-transform duration-500" />
                        </div>

                        {/* Content Side */}
                        <div className="w-full lg:w-3/5 p-10 lg:p-16 flex flex-col justify-center">
                          <h3 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-6 leading-tight">
                            {model.title}
                          </h3>
                          <p className="text-slate-600 dark:text-slate-300 mb-8 text-xl leading-relaxed">
                            {model.description}
                          </p>

                          <ul className="space-y-5 mb-10 w-full md:w-5/6">
                            {model.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-4">
                                <span className="mt-1 flex-shrink-0 bg-green-100 dark:bg-green-900/60 p-1.5 rounded-full">
                                  <Check size={18} className="text-green-600 dark:text-green-400 font-bold" />
                                </span>
                                <span className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg font-medium">
                                  {feature}
                                </span>
                              </li>
                            ))}
                          </ul>

                          <div className="bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700/80 rounded-2xl p-6 shadow-sm mt-auto">
                            <span className="text-lg font-bold text-slate-800 dark:text-slate-200 block mb-2">
                              Ideal for:
                            </span>
                            <span className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed">
                              {model.idealFor}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold dark:text-white mb-6">Our Technology DNA</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Behind the simple interface lies a robust, scaleable architecture powered by cutting-edge neural networks. We combine edge computing with cloud intelligence to offer rapid responses in rural settings.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-8">
              <Zap className="text-blue-500 mb-6" size={48} />
              <h3 className="text-xl font-bold mb-4 dark:text-white">Edge Computing</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Models are quantized and optimized to run directly on-device using ONNX Runtime. This means farmers can detect diseases even without an active internet connection.
              </p>
            </Card>
            <Card className="p-8">
              <Brain className="text-purple-500 mb-6" size={48} />
              <h3 className="text-xl font-bold mb-4 dark:text-white">Cloud Integration</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                When connectivity allows, the app syncs anonymized data to our secure AWS cloud, continuously retraining our central models to recognize new localized disease variants.
              </p>
            </Card>
            <Card className="p-8">
              <BarChart3 className="text-green-500 mb-6" size={48} />
              <h3 className="text-xl font-bold mb-4 dark:text-white">IoT Sensor Sync</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Seamless API hooks allow external IoT soil moisture and temperature sensors to stream data directly into the analytical engine for highly localized predictive dosing.
              </p>
            </Card>
            <Card className="p-8">
              <Check className="text-emerald-500 mb-6" size={48} />
              <h3 className="text-xl font-bold mb-4 dark:text-white">Data Privacy</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                All uploaded imagery and farm coordinates are deeply encrypted. We believe farmer data belongs to the farmer. Data is strictly utilized for personal insights and broader model accuracy.
              </p>
            </Card>
          </div>
        </motion.div>

        {/* Closing CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white p-12 lg:p-16 rounded-[2rem] shadow-xl">
            <h3 className="text-4xl font-bold mb-6">Ready to Transform Your Farming?</h3>
            <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
              Join thousands of farmers already using KRUSHI SCAN today to optimize crop management, secure yields, and reduce chemical waste.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button href="/scan" variant="secondary" className="px-8 py-4 text-lg bg-white text-green-700 hover:bg-green-50">
                Start Scanning Free
              </Button>
              <Button href="/contact" variant="primary" className="px-8 py-4 text-lg border-2 border-white hover:bg-white/10">
                Contact Our Experts
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </main>
  );
}
