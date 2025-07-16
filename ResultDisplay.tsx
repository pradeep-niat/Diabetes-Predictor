'use client';

import { PredictionResult } from './DiabetesPredictor';
import RiskChart from './RiskChart';

interface ResultDisplayProps {
  result: PredictionResult;
  onReset: () => void;
}

export default function ResultDisplay({ result, onReset }: ResultDisplayProps) {
  const getRiskColor = (level: string) => {
    switch (level) {
      case 'Low': return 'text-green-600';
      case 'Moderate': return 'text-yellow-600';
      case 'High': return 'text-orange-600';
      case 'Very High': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getRiskBgColor = (level: string) => {
    switch (level) {
      case 'Low': return 'bg-green-50 border-green-200';
      case 'Moderate': return 'bg-yellow-50 border-yellow-200';
      case 'High': return 'bg-orange-50 border-orange-200';
      case 'Very High': return 'bg-red-50 border-red-200';
      default: return 'bg-gray-50 border-gray-200';
    }
  };

  const getRiskIcon = (level: string) => {
    switch (level) {
      case 'Low': return 'ri-shield-check-line';
      case 'Moderate': return 'ri-alert-line';
      case 'High': return 'ri-error-warning-line';
      case 'Very High': return 'ri-alarm-warning-line';
      default: return 'ri-information-line';
    }
  };

  return (
    <div className="space-y-8">
      {/* Main Result Card */}
      <div className={`bg-white rounded-2xl shadow-xl p-8 border-2 ${getRiskBgColor(result.riskLevel)}`}>
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
              result.riskLevel === 'Low' ? 'bg-green-100' :
              result.riskLevel === 'Moderate' ? 'bg-yellow-100' :
              result.riskLevel === 'High' ? 'bg-orange-100' : 'bg-red-100'
            }`}>
              <i className={`${getRiskIcon(result.riskLevel)} text-2xl ${getRiskColor(result.riskLevel)}`}></i>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Diabetes Risk Assessment Complete
          </h2>
          
          <div className="mb-4">
            <div className="text-5xl font-bold mb-2 ${getRiskColor(result.riskLevel)}">
              {result.riskPercentage}%
            </div>
            <div className={`text-xl font-semibold ${getRiskColor(result.riskLevel)}`}>
              {result.riskLevel} Risk
            </div>
          </div>
        </div>

        {/* Risk Visualization */}
        <div className="mb-8">
          <RiskChart riskPercentage={result.riskPercentage} riskLevel={result.riskLevel} />
        </div>

        {/* Risk Level Explanation */}
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
            <i className="ri-information-line text-blue-600 mr-2"></i>
            What This Means
          </h3>
          
          <div className="space-y-3 text-sm text-gray-600">
            {result.riskLevel === 'Low' && (
              <p>
                Your current health metrics suggest a low risk of developing diabetes. 
                Continue maintaining your healthy lifestyle habits.
              </p>
            )}
            {result.riskLevel === 'Moderate' && (
              <p>
                Your health metrics indicate a moderate risk. This is a good time to focus on 
                preventive measures and lifestyle improvements to reduce your risk.
              </p>
            )}
            {result.riskLevel === 'High' && (
              <p>
                Your health metrics suggest an elevated risk of diabetes. It's important to 
                take proactive steps and consult with healthcare professionals.
              </p>
            )}
            {result.riskLevel === 'Very High' && (
              <p>
                Your health metrics indicate a very high risk. Immediate medical consultation 
                and intervention are strongly recommended.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <i className="ri-lightbulb-line text-yellow-500 mr-3"></i>
          Personalized Recommendations
        </h3>
        
        <div className="grid md:grid-cols-2 gap-4">
          {result.recommendations.map((recommendation, index) => (
            <div key={index} className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mt-0.5">
                {index + 1}
              </div>
              <p className="text-sm text-gray-700 flex-1">{recommendation}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Resources */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <i className="ri-book-open-line text-green-500 mr-3"></i>
          Additional Resources
        </h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <i className="ri-restaurant-line text-green-600 text-xl"></i>
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">Nutrition Guide</h4>
            <p className="text-sm text-gray-600">Learn about diabetes-friendly foods and meal planning</p>
          </div>
          
          <div className="text-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <i className="ri-run-line text-blue-600 text-xl"></i>
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">Exercise Plans</h4>
            <p className="text-sm text-gray-600">Discover effective workout routines for diabetes prevention</p>
          </div>
          
          <div className="text-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <i className="ri-stethoscope-line text-purple-600 text-xl"></i>
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">Find Doctors</h4>
            <p className="text-sm text-gray-600">Connect with diabetes specialists in your area</p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={onReset}
          className="flex-1 bg-white border-2 border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2 whitespace-nowrap"
        >
          <i className="ri-refresh-line"></i>
          <span>Take New Assessment</span>
        </button>
        
        <button className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-200 flex items-center justify-center space-x-2 whitespace-nowrap">
          <i className="ri-download-line"></i>
          <span>Download Report</span>
        </button>
        
        <button className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 flex items-center justify-center space-x-2 whitespace-nowrap">
          <i className="ri-share-line"></i>
          <span>Share Results</span>
        </button>
      </div>
    </div>
  );
}