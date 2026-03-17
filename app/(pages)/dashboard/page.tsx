'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Droplets, Thermometer, Wind, Leaf, Sun, Activity } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { mockSoilData, mockCropHealth } from '@/lib/apollo.client';

// Mock data for charts
const soilTrendData = [
  { time: '6 AM', moisture: 40, temp: 22, humidity: 55 },
  { time: '9 AM', moisture: 42, temp: 25, humidity: 60 },
  { time: '12 PM', moisture: 45, temp: 28, humidity: 65 },
  { time: '3 PM', moisture: 43, temp: 30, humidity: 62 },
  { time: '6 PM', moisture: 44, temp: 26, humidity: 58 },
  { time: '9 PM', moisture: 46, temp: 23, humidity: 60 },
];

const irrigationData = [
  { day: 'Mon', recommended: 20, actual: 18 },
  { day: 'Tue', recommended: 22, actual: 22 },
  { day: 'Wed', recommended: 19, actual: 18 },
  { day: 'Thu', recommended: 25, actual: 24 },
  { day: 'Fri', recommended: 23, actual: 21 },
  { day: 'Sat', recommended: 20, actual: 20 },
  { day: 'Sun', recommended: 18, actual: 17 },
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'trends' | 'irrigation'>('overview');

  const SensorCard = ({
    icon: Icon,
    label,
    value,
    unit,
    status,
  }: {
    icon: React.ComponentType<{ size: number }>;
    label: string;
    value: number;
    unit: string;
    status: 'good' | 'warning' | 'critical';
  }) => {
    const statusColors = {
      good: 'text-green-600 dark:text-green-400',
      warning: 'text-yellow-600 dark:text-yellow-400',
      critical: 'text-red-600 dark:text-red-400',
    };

    return (
      <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
        <Card hover>
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">{label}</p>
            <div className={statusColors[status]}>
              <Icon size={24} />
            </div>
          </div>
          <p className="text-3xl font-bold dark:text-white">
            {value}
            <span className="text-lg text-slate-500 dark:text-slate-400 ml-1">{unit}</span>
          </p>
          <div className="mt-2 pt-2 border-t border-slate-200 dark:border-slate-700">
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                status === 'good'
                  ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-100'
                  : status === 'warning'
                    ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-100'
                    : 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-100'
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </span>
          </div>
        </Card>
      </motion.div>
    );
  };

  return (
    <main className="min-h-screen py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-5xl font-bold mb-2 dark:text-white">
            Farm <span className="gradient-text">Dashboard</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400">Real-time monitoring of your crop and soil conditions</p>
          <p className="text-sm text-slate-500 dark:text-slate-500 mt-2">
            Last updated: {new Date().toLocaleString()}
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          {(['overview', 'trends', 'irrigation'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-lg font-semibold whitespace-nowrap transition-all ${
                activeTab === tab
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            {/* Current Readings */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <SensorCard
                icon={Droplets}
                label="Soil Moisture"
                value={mockSoilData.moisture}
                unit="%"
                status="good"
              />
              <SensorCard
                icon={Thermometer}
                label="Temperature"
                value={mockSoilData.temperature}
                unit="°C"
                status="good"
              />
              <SensorCard
                icon={Wind}
                label="Humidity"
                value={mockSoilData.humidity}
                unit="%"
                status="warning"
              />
              <SensorCard icon={Sun} label="Sunlight" value={parseFloat(mockSoilData.sunlight.toString())} unit="%" status="good" />
            </div>

            {/* Crop Health & Recommendations */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="lg:col-span-3"
              >
                <div className="bg-gradient-to-br from-green-500 to-green-700 text-white rounded-2xl p-8 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 opacity-10 blur-xl">
                    <Droplets size={240} className="-mr-12 -mt-12" />
                  </div>
                  <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm">
                      <Activity size={16} /> ACTION REQUIRED
                    </div>
                    <h3 className="text-3xl font-bold mb-4">Irrigation Recommendation</h3>
                    <p className="text-green-50 text-lg mb-8 max-w-2xl leading-relaxed">
                      Current soil moisture levels are optimal, but rising temperatures indicate potential heat stress. Consider scheduling a light 15-minute irrigation cycle this evening to maintain optimal hydration for your target crop.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <button className="bg-white text-green-700 px-8 py-3 rounded-full font-bold hover:bg-green-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center gap-2">
                        <Droplets size={20} /> Schedule Irrigation Now
                      </button>
                      <button className="bg-green-600/50 hover:bg-green-600 border border-green-400 text-white px-8 py-3 rounded-full font-bold transition-all flex items-center gap-2 backdrop-blur-sm">
                        View Detailed Forecast
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }} className="lg:col-span-2">
                <Card>
                  <h2 className="text-2xl font-bold mb-6 dark:text-white">Crop Health Status</h2>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-600 dark:text-slate-400 font-semibold">Overall Health</span>
                        <span className="text-2xl font-bold dark:text-white">{mockCropHealth.score}%</span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-4 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${mockCropHealth.score}%` }}
                          transition={{ duration: 1 }}
                          className="h-full bg-gradient-to-r from-green-500 to-green-600"
                        ></motion.div>
                      </div>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Last Updated: {mockCropHealth.lastUpdated}</p>
                  </div>
                </Card>
              </motion.div>

              <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                <Card className="bg-green-50 dark:bg-green-900 h-full">
                  <h3 className="font-bold text-lg mb-4 dark:text-white">Irrigation Recommendation</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-slate-600 dark:text-slate-300 mb-1">Recommended Watering</p>
                      <p className="text-2xl font-bold text-green-600 dark:text-green-400">20 minutes</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 dark:text-slate-300 mb-1">Best Time</p>
                      <p className="text-lg font-semibold dark:text-white">6:00 AM - 7:00 AM</p>
                    </div>
                    <Button href="/scan" variant="secondary" className="w-full mt-4">
                      Scan Crop
                    </Button>
                  </div>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Trends Tab */}
        {activeTab === 'trends' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <Card>
              <h2 className="text-2xl font-bold mb-6 dark:text-white">Soil Data Trends</h2>
              <div className="overflow-x-auto">
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={soilTrendData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.2)" />
                    <XAxis stroke="rgba(148, 163, 184, 0.5)" />
                    <YAxis stroke="rgba(148, 163, 184, 0.5)" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1e293b',
                        border: 'none',
                        borderRadius: '8px',
                        color: '#f1f5f9',
                      }}
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="moisture"
                      stroke="#10b981"
                      strokeWidth={2}
                      name="Moisture (%)"
                      dot={{ fill: '#10b981', r: 4 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="temp"
                      stroke="#f59e0b"
                      strokeWidth={2}
                      name="Temperature (°C)"
                      dot={{ fill: '#f59e0b', r: 4 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="humidity"
                      stroke="#3b82f6"
                      strokeWidth={2}
                      name="Humidity (%)"
                      dot={{ fill: '#3b82f6', r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Irrigation Tab */}
        {activeTab === 'irrigation' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <Card>
              <h2 className="text-2xl font-bold mb-6 dark:text-white">Weekly Irrigation Analysis</h2>
              <div className="overflow-x-auto">
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={irrigationData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.2)" />
                    <XAxis stroke="rgba(148, 163, 184, 0.5)" />
                    <YAxis stroke="rgba(148, 163, 184, 0.5)" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1e293b',
                        border: 'none',
                        borderRadius: '8px',
                        color: '#f1f5f9',
                      }}
                    />
                    <Legend />
                    <Bar dataKey="recommended" fill="#10b981" name="Recommended (mins)" />
                    <Bar dataKey="actual" fill="#3b82f6" name="Actual (mins)" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </motion.div>
        )}
      </div>
    </main>
  );
}
