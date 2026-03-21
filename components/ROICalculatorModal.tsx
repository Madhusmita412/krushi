'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface ROICalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: string;
}

export default function ROICalculatorModal({ isOpen, onClose, language }: ROICalculatorModalProps) {
  const [cultivationMethod, setCultivationMethod] = useState('greenhouse');
  const [cropType, setCropType] = useState('flowers');
  const [landSize, setLandSize] = useState('1');
  const [result, setResult] = useState<any>(null);

  const translations: any = {
    en: {
      title: 'Krushi Scan ROI Calculator',
      cultivationLabel: 'Cultivation Method',
      cropLabel: 'Select Your Crop',
      landLabel: 'Land Size (Acres)',
      calculateBtn: 'Calculate Automation Benefit',
      recommended: 'Recommended: Krushi Scan AI Disease Detection',
      yieldRevenue: 'Extra Yield Revenue',
      diseasePrevention: 'Disease Prevention Savings (15%)',
      laborSavings: 'Labor Savings (25%)',
      totalBenefit: 'Total Annual Benefit',
    },
    hi: {
      title: 'कृषि स्कैन ROI कैलकुलेटर',
      cultivationLabel: 'खेती की विधि',
      cropLabel: 'अपनी फसल चुनें',
      landLabel: 'भूमि का आकार (एकड़)',
      calculateBtn: 'स्वचालन लाभ की गणना करें',
      recommended: 'अनुशंसित: कृषि स्कैन AI रोग पहचान',
      yieldRevenue: 'अतिरिक्त उपज राजस्व',
      diseasePrevention: 'रोग निवारण बचत (15%)',
      laborSavings: 'श्रम बचत (25%)',
      totalBenefit: 'कुल वार्षिक लाभ',
    },
    kn: {
      title: 'ಕೃಷಿ ಸ್ಕ್ಯಾನ್ ROI ಕ್ಯಾಲ್ಕುಲೇಟರ್',
      cultivationLabel: 'ಕೃಷಿ ವಿಧಾನ',
      cropLabel: 'ನಿಮ್ಮ ಬೆಳೆ ಆಯ್ಕೆ ಮಾಡಿ',
      landLabel: 'ಭೂಮಿಯ ಗಾತ್ರ (ಎಕರೆ)',
      calculateBtn: 'ಸ್ವಯಂಚಾಲಿತ ಲಾಭ ಲೆಕ್ಕಾಚಾರ ಮಾಡಿ',
      recommended: 'ಶಿಫಾರಸುಮಾಡಿದ: ಕೃಷಿ ಸ್ಕ್ಯಾನ್ AI ರೋಗ ಶನಾಕ್ತಿ',
      yieldRevenue: 'ಹೆಚ್ಚುವರಿ ಇಳುವರಿ ರಾಜಸ್ವ',
      diseasePrevention: 'ರೋಗ ತಡೆಗಟ್ಟುವ ಬಚತ (15%)',
      laborSavings: 'ಕಾರ್ಮಿಕ ಸಞ್ಚಯ (25%)',
      totalBenefit: 'ಒಟ್ಟು ವಾರ್ಷಿಕ ಲಾಭ',
    },
    mr: {
      title: 'कृषी स्कॅन ROI कॅल्क्युलेटर',
      cultivationLabel: 'लागवडीची पद्धत',
      cropLabel: 'आपली पीक निवडा',
      landLabel: 'जमीनीचा आकार (एकर)',
      calculateBtn: 'ऑटोमेशन लाभ मोजा',
      recommended: 'शिफारस: कृषी स्कॅन AI रोग शोध',
      yieldRevenue: 'अतिरिक्त उत्पादन महसूल',
      diseasePrevention: 'रोग प्रतिबंध बचत (15%)',
      laborSavings: 'श्रम बचत (25%)',
      totalBenefit: 'एकूण वार्षिक लाभ',
    },
  };

  const t = translations[language] || translations.en;

  const calculateBenefit = () => {
    const size = parseFloat(landSize) || 1;
    
    // Base calculations based on crop and cultivation method
    const baseRevenue = size * 50000; // ₹50,000 per acre base revenue
    const diseasePreventionSavings = baseRevenue * 0.15;
    const laborSavings = baseRevenue * 0.25;
    const totalBenefit = baseRevenue + diseasePreventionSavings + laborSavings;

    setResult({
      yieldRevenue: Math.round(baseRevenue),
      diseasePrevention: Math.round(diseasePreventionSavings),
      laborSavings: Math.round(laborSavings),
      totalBenefit: Math.round(totalBenefit),
    });
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 flex justify-between items-center p-6 border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
          <h2 className="text-2xl font-bold dark:text-white">{t.title}</h2>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Form Section */}
          <div className="space-y-6 mb-8">
            {/* Cultivation Method */}
            <div>
              <label htmlFor="cultivationMethod" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                {t.cultivationLabel}
              </label>
              <select
                id="cultivationMethod"
                value={cultivationMethod}
                onChange={(e) => setCultivationMethod(e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 dark:text-white focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 dark:focus:ring-green-900"
              >
                <option value="greenhouse">Greenhouse / Polyhouse</option>
                <option value="openfield">Open Field</option>
                <option value="hydroponic">Hydroponic System</option>
              </select>
            </div>

            {/* Crop Type */}
            <div>
              <label htmlFor="cropType" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                {t.cropLabel}
              </label>
              <select
                id="cropType"
                value={cropType}
                onChange={(e) => setCropType(e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 dark:text-white focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 dark:focus:ring-green-900"
              >
                <option value="flowers">Flowers (Roses/Gerbera)</option>
                <option value="vegetables">Vegetables (Tomato/Pepper)</option>
                <option value="fruits">Fruits (Strawberry/Capsicum)</option>
                <option value="grains">Grains (Rice/Wheat)</option>
              </select>
            </div>

            {/* Land Size */}
            <div>
              <label htmlFor="landSize" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                {t.landLabel}
              </label>
              <input
                id="landSize"
                type="number"
                value={landSize}
                onChange={(e) => setLandSize(e.target.value)}
                min="0.5"
                step="0.5"
                className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 dark:text-white focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 dark:focus:ring-green-900"
              />
            </div>

            {/* Calculate Button */}
            <button
              onClick={calculateBenefit}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {t.calculateBtn}
            </button>
          </div>

          {/* Results Section */}
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-slate-50 dark:bg-slate-700 rounded-xl p-8"
            >
              <h3 className="text-center text-xl font-bold mb-2 dark:text-white">{t.recommended}</h3>
              <p className="text-center text-sm text-slate-600 dark:text-slate-400 mb-8">
                Based on {landSize} acre(s) of {cropType}
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center pb-4 border-b border-slate-200 dark:border-slate-600">
                  <span className="text-slate-700 dark:text-slate-300">{t.yieldRevenue}</span>
                  <span className="text-lg font-bold text-slate-900 dark:text-white">
                    ₹{result.yieldRevenue.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-slate-200 dark:border-slate-600">
                  <span className="text-slate-700 dark:text-slate-300">{t.diseasePrevention}</span>
                  <span className="text-lg font-bold text-slate-900 dark:text-white">
                    ₹{result.diseasePrevention.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-slate-200 dark:border-slate-600">
                  <span className="text-slate-700 dark:text-slate-300">{t.laborSavings}</span>
                  <span className="text-lg font-bold text-slate-900 dark:text-white">
                    ₹{result.laborSavings.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-6 text-center border-2 border-green-200 dark:border-green-700">
                <p className="text-slate-600 dark:text-slate-300 mb-2 font-semibold">{t.totalBenefit}:</p>
                <p className="text-4xl font-bold gradient-text">₹{result.totalBenefit.toLocaleString('en-IN')}</p>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
