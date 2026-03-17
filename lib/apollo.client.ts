// Utility functions for API calls and data handling

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

// Mock API responses for demo purposes
export const mockDiseaseDetection = {
  diseaseName: 'Powdery Mildew',
  confidence: 0.92,
  treatment: 'Apply sulfur-based fungicide or use baking soda spray',
  severity: 'High',
  affectedArea: '35% of leaf surface',
};

export const mockSoilData = {
  moisture: 45,
  temperature: 28,
  humidity: 65,
  sunlight: 82, // percentage / lux approximation
};

export const mockCropHealth = {
  healthStatus: 'Good',
  score: 78,
  lastUpdated: new Date().toLocaleDateString(),
};

// File upload handler
export const handleFileUpload = (file: File): Promise<string> => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      resolve(reader.result as string);
    };
    reader.readAsDataURL(file);
  });
};

// Format sensor data
export const formatSensorData = (value: number, unit: string): string => {
  return `${value.toFixed(1)}${unit}`;
};
