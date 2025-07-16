'use client';

import { useState } from 'react';
import { PredictionData } from './DiabetesPredictor';

interface PredictionFormProps {
  onPredict: (data: PredictionData) => void;
  isLoading: boolean;
}

export default function PredictionForm({ onPredict, isLoading }: PredictionFormProps) {
  const [formData, setFormData] = useState<PredictionData>({
    pregnancies: 0,
    glucose: 100,
    bloodPressure: 80,
    skinThickness: 20,
    insulin: 80,
    bmi: 25,
    diabetesPedigree: 0.3,
    age: 30
  });

  const [errors, setErrors] = useState<Partial<PredictionData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<PredictionData> = {};
    
    if (formData.glucose < 50 || formData.glucose > 300) {
      newErrors.glucose = 50;
    }
    if (formData.bloodPressure < 40 || formData.bloodPressure > 200) {
      newErrors.bloodPressure = 40;
    }
    if (formData.bmi < 10 || formData.bmi > 50) {
      newErrors.bmi = 10;
    }
    if (formData.age < 1 || formData.age > 120) {
      newErrors.age = 1;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onPredict(formData);
    }
  };

  const handleInputChange = (field: keyof PredictionData, value: number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const formFields = [
    {
      key: 'pregnancies' as keyof PredictionData,
      label: 'Number of Pregnancies',
      icon: 'ri-parent-line',
      min: 0,
      max: 15,
      step: 1,
      unit: 'times',
      description: 'Total number of pregnancies (0 if male or never pregnant)'
    },
    {
      key: 'glucose' as keyof PredictionData,
      label: 'Glucose Level',
      icon: 'ri-drop-line',
      min: 50,
      max: 300,
      step: 1,
      unit: 'mg/dL',
      description: 'Plasma glucose concentration (fasting blood sugar level)'
    },
    {
      key: 'bloodPressure' as keyof PredictionData,
      label: 'Blood Pressure',
      icon: 'ri-heart-pulse-line',
      min: 40,
      max: 200,
      step: 1,
      unit: 'mmHg',
      description: 'Diastolic blood pressure (bottom number)'
    },
    {
      key: 'skinThickness' as keyof PredictionData,
      label: 'Skin Thickness',
      icon: 'ri-ruler-line',
      min: 5,
      max: 50,
      step: 1,
      unit: 'mm',
      description: 'Triceps skin fold thickness'
    },
    {
      key: 'insulin' as keyof PredictionData,
      label: 'Insulin Level',
      icon: 'ri-syringe-line',
      min: 0,
      max: 400,
      step: 1,
      unit: 'μU/mL',
      description: '2-Hour serum insulin level'
    },
    {
      key: 'bmi' as keyof PredictionData,
      label: 'Body Mass Index (BMI)',
      icon: 'ri-scales-3-line',
      min: 10,
      max: 50,
      step: 0.1,
      unit: 'kg/m²',
      description: 'Weight in kg divided by height in meters squared'
    },
    {
      key: 'diabetesPedigree' as keyof PredictionData,
      label: 'Diabetes Pedigree Function',
      icon: 'ri-dna-line',
      min: 0,
      max: 2,
      step: 0.01,
      unit: '',
      description: 'Genetic predisposition based on family history (0.0 - 2.0)'
    },
    {
      key: 'age' as keyof PredictionData,
      label: 'Age',
      icon: 'ri-calendar-line',
      min: 1,
      max: 120,
      step: 1,
      unit: 'years',
      description: 'Age in years'
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Health Assessment Form</h2>
        <p className="text-gray-600">
          Please provide accurate information for the most reliable prediction. All fields are required.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          {formFields.map((field) => (
            <div key={field.key} className="space-y-2">
              <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                <i className={`${field.icon} text-blue-600`}></i>
                <span>{field.label}</span>
              </label>
              
              <div className="relative">
                <input
                  type="number"
                  min={field.min}
                  max={field.max}
                  step={field.step}
                  value={formData[field.key]}
                  onChange={(e) => handleInputChange(field.key, parseFloat(e.target.value) || 0)}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm ${
                    errors[field.key] ? 'border-red-300' : 'border-gray-200'
                  }`}
                  placeholder={`Enter ${field.label.toLowerCase()}`}
                />
                {field.unit && (
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
                    {field.unit}
                  </span>
                )}
              </div>
              
              <p className="text-xs text-gray-500">{field.description}</p>
              
              {errors[field.key] && (
                <p className="text-xs text-red-600">
                  Please enter a valid value between {field.min} and {field.max}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <i className="ri-information-line text-blue-600 mt-0.5"></i>
            <div>
              <h3 className="text-sm font-medium text-blue-800 mb-1">Important Note</h3>
              <p className="text-xs text-blue-700">
                This tool provides risk assessment based on statistical models and should not replace professional medical advice. 
                Always consult with healthcare providers for proper diagnosis and treatment.
              </p>
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 whitespace-nowrap"
        >
          {isLoading ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Analyzing Your Health Data...</span>
            </>
          ) : (
            <>
              <i className="ri-brain-line text-lg"></i>
              <span>Get AI Prediction</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}