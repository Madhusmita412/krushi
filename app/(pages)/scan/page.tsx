'use client';

import { useState } from 'react';
import { Upload, Zap, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import Button from '@/components/Button';
import Card from '@/components/Card';
import { handleFileUpload, mockDiseaseDetection } from '@/lib/apollo.client';

export default function ScanPage() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>('');
  const [status, setStatus] = useState<'idle' | 'uploading' | 'processing' | 'result'>('idle');
  const [result, setResult] = useState<typeof mockDiseaseDetection | null>(null);
  const [dragActive, setDragActive] = useState(false);

  const handleFileChange = async (selectedFile: File) => {
    if (selectedFile.type.startsWith('image/')) {
      setStatus('uploading');
      // Simulate upload delay
      await new Promise((resolve) => setTimeout(resolve, 800));
      setFile(selectedFile);
      const previewUrl = await handleFileUpload(selectedFile);
      setPreview(previewUrl);
      setStatus('idle');
      toast.success('Image loaded successfully!');
    } else {
      toast.error('Please upload an image file');
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  const handleAnalyze = async () => {
    if (!file) {
      toast.error('Please upload an image first');
      return;
    }

    setStatus('processing');
    // Simulate complex AI processing API call
    setInterval(() => {
      // we might want something more advanced but lets just use setTimeout
    }, 500)
    await new Promise((resolve) => setTimeout(resolve, 2500));
    setResult(mockDiseaseDetection);
    setStatus('result');
    toast.success('Analysis complete!');
  };

  const severityColor = {
    High: 'text-red-600',
    Medium: 'text-yellow-600',
    Low: 'text-green-600',
  };

  return (
    <main className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4 dark:text-white">
            Scan Your <span className="gradient-text">Crop</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Upload a clear image of a crop leaf to detect potential diseases and get treatment recommendations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <div
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
                  dragActive
                    ? 'border-green-600 bg-green-50 dark:bg-slate-800'
                    : 'border-slate-300 dark:border-slate-600'
                }`}
              >
                <div className="flex flex-col items-center gap-4">
                  {preview ? (
                    <>
                      <img src={preview} alt="Preview" className="max-w-full h-auto rounded-lg max-h-64" />
                      <button
                        onClick={() => {
                          setFile(null);
                          setPreview('');
                          setResult(null);
                        }}
                        className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        Change Image
                      </button>
                    </>
                  ) : (
                    <>
                      <Upload size={48} className="text-green-600" />
                      <div>
                        <p className="text-lg font-semibold dark:text-white mb-2">Drag and drop your image</p>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">or</p>
                        <label className="cursor-pointer">
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => {
                              if (e.target.files?.[0]) {
                                handleFileChange(e.target.files[0]);
                              }
                            }}
                          />
                          <span className="inline-block px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                            Select Image
                          </span>
                        </label>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Analyze Button */}
              <div className="mt-6">
                <Button
                  onClick={handleAnalyze}
                  disabled={!file || status === 'processing' || status === 'uploading'}
                  className="w-full h-14"
                  size="lg"
                  variant="primary"
                >
                  {status === 'processing' ? (
                    <>
                      <Zap size={20} className="animate-pulse" />
                      Analyzing Image...
                    </>
                  ) : status === 'uploading' ? (
                    <>
                      <Upload size={20} className="animate-bounce" />
                      Uploading...
                    </>
                  ) : (
                    <>
                      <Zap size={20} />
                      Analyze Image
                    </>
                  )}
                </Button>
              </div>

              {/* Info */}
              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
                <p className="text-sm text-blue-900 dark:text-blue-100">
                  💡 <strong>Tip:</strong> For best results, ensure the image is clear, well-lit, and shows the affected area clearly.
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Results Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {result ? (
              <Card>
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold mb-2 dark:text-white">{result.diseaseName}</h2>
                    <div className={`text-sm font-semibold ${severityColor[result.severity as keyof typeof severityColor]}`}>
                      Severity: {result.severity}
                    </div>
                  </div>

                  {/* Confidence Score */}
                  <div>
                    <p className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">Confidence Score</p>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-4 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${result.confidence * 100}%` }}
                        transition={{ duration: 1 }}
                        className="h-full bg-gradient-to-r from-green-500 to-green-600"
                      ></motion.div>
                    </div>
                    <p className="text-right text-sm font-semibold mt-2 dark:text-white">
                      {(result.confidence * 100).toFixed(1)}%
                    </p>
                  </div>

                  {/* Affected Area */}
                  <div>
                    <p className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">Affected Area</p>
                    <p className="dark:text-white">{result.affectedArea}</p>
                  </div>

                  {/* Treatment */}
                  <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg border border-green-200 dark:border-green-700">
                    <div className="flex gap-2 mb-2">
                      <AlertCircle size={18} className="text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                      <h3 className="font-bold text-green-900 dark:text-green-100">Recommended Treatment</h3>
                    </div>
                    <p className="text-green-800 dark:text-green-100">{result.treatment}</p>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button href="/dashboard" variant="secondary" className="flex-1">
                      View Dashboard
                    </Button>
                    <Button href="/contact" variant="outline" className="flex-1">
                      Contact Expert
                    </Button>
                  </div>
                </div>
              </Card>
            ) : (
              <Card className="h-full flex items-center justify-center text-center">
                <div>
                  <Zap size={48} className="mx-auto text-slate-300 dark:text-slate-600 mb-4" />
                  <p className="text-slate-500 dark:text-slate-400">Upload an image to see results</p>
                </div>
              </Card>
            )}
          </motion.div>
        </div>
      </div>
    </main>
  );
}
