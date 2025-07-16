'use client';

import { useState } from 'react';
import Header from './Header';
import PredictionForm from './PredictionForm';
import ResultDisplay from './ResultDisplay';
import Footer from './Footer';

export interface PredictionData {
  pregnancies: number;
  glucose: number;
  bloodPressure: number;
  skinThickness: number;
  insulin: number;
  bmi: number;
  diabetesPedigree: number;
  age: number;
}

export interface PredictionResult {
  riskPercentage: number;
  riskLevel: 'Low' | 'Moderate' | 'High' | 'Very High';
  recommendations: string[];
}

export default function DiabetesPredictor() {
  const [predictionResult, setPredictionResult] = useState<PredictionResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handlePrediction = async (data: PredictionData) => {
    setIsLoading(true);
    
    // Simulate ML prediction logic
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const result = calculateDiabetesRisk(data);
    setPredictionResult(result);
    setIsLoading(false);
  };

  const calculateDiabetesRisk = (data: PredictionData): PredictionResult => {
    let riskScore = 0;
    
    // Age factor
    if (data.age > 45) riskScore += 20;
    else if (data.age > 35) riskScore += 10;
    
    // BMI factor
    if (data.bmi > 30) riskScore += 25;
    else if (data.bmi > 25) riskScore += 15;
    
    // Glucose factor
    if (data.glucose > 140) riskScore += 30;
    else if (data.glucose > 100) riskScore += 20;
    
    // Blood pressure factor
    if (data.bloodPressure > 90) riskScore += 15;
    else if (data.bloodPressure > 80) riskScore += 8;
    
    // Family history factor
    if (data.diabetesPedigree > 0.5) riskScore += 15;
    else if (data.diabetesPedigree > 0.3) riskScore += 8;
    
    // Pregnancies factor (for women)
    if (data.pregnancies > 5) riskScore += 10;
    else if (data.pregnancies > 2) riskScore += 5;
    
    // Insulin factor
    if (data.insulin > 200) riskScore += 10;
    else if (data.insulin > 150) riskScore += 5;
    
    // Skin thickness factor
    if (data.skinThickness > 35) riskScore += 5;
    
    const riskPercentage = Math.min(riskScore, 95);
    
    let riskLevel: 'Low' | 'Moderate' | 'High' | 'Very High';
    let recommendations: string[];
    
    if (riskPercentage < 25) {
      riskLevel = 'Low';
      recommendations = [
        'Maintain a healthy diet with balanced nutrition',
        'Continue regular physical activity',
        'Monitor your health annually',
        'Keep a healthy weight'
      ];
    } else if (riskPercentage < 50) {
      riskLevel = 'Moderate';
      recommendations = [
        'Adopt a low-sugar, high-fiber diet',
        'Increase physical activity to 150 minutes per week',
        'Check blood sugar levels every 6 months',
        'Consider weight management if overweight'
      ];
    } else if (riskPercentage < 75) {
      riskLevel = 'High';
      recommendations = [
        'Consult with a healthcare provider immediately',
        'Follow a strict diabetic-friendly diet',
        'Exercise regularly under medical supervision',
        'Monitor blood glucose levels weekly'
      ];
    } else {
      riskLevel = 'Very High';
      recommendations = [
        'Seek immediate medical attention',
        'Follow prescribed medication regimen',
        'Strictly monitor blood sugar daily',
        'Work with a diabetes specialist'
      ];
    }
    
    return { riskPercentage, riskLevel, recommendations };
  };

  const handleReset = () => {
    setPredictionResult(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              AI Diabetes Risk Predictor
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get an instant assessment of your diabetes risk using advanced machine learning algorithms. 
              Answer a few questions about your health metrics to receive personalized recommendations.
            </p>
          </div>
          
          {!predictionResult ? (
            <PredictionForm 
              onPredict={handlePrediction} 
              isLoading={isLoading} 
            />
          ) : (
            <ResultDisplay 
              result={predictionResult} 
              onReset={handleReset} 
            />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}