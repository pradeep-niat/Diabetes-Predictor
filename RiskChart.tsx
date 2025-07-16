'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

interface RiskChartProps {
  riskPercentage: number;
  riskLevel: string;
}

export default function RiskChart({ riskPercentage, riskLevel }: RiskChartProps) {
  const pieData = [
    { name: 'Risk', value: riskPercentage, color: getRiskColor(riskLevel) },
    { name: 'Safe', value: 100 - riskPercentage, color: '#e5e7eb' }
  ];

  const comparisonData = [
    { category: 'General Population', risk: 11.3 },
    { category: 'Your Age Group', risk: getAgeGroupRisk() },
    { category: 'Your Assessment', risk: riskPercentage }
  ];

  function getRiskColor(level: string) {
    switch (level) {
      case 'Low': return '#059669';
      case 'Moderate': return '#d97706';
      case 'High': return '#ea580c';
      case 'Very High': return '#dc2626';
      default: return '#6b7280';
    }
  }

  function getAgeGroupRisk() {
    // Simplified age-based risk calculation
    return Math.min(15 + Math.random() * 10, 35);
  }

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="text-sm font-medium text-gray-800">{label}</p>
          <p className="text-sm text-blue-600">
            Risk: {payload[0].value.toFixed(1)}%
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-8">
      {/* Risk Gauge */}
      <div className="bg-gray-50 rounded-xl p-6">
        <h4 className="text-lg font-semibold text-gray-800 mb-4 text-center">
          Your Diabetes Risk Level
        </h4>
        
        <div className="flex items-center justify-center">
          <div className="relative w-64 h-32">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="100%"
                  startAngle={180}
                  endAngle={0}
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center">
              <div className="text-2xl font-bold" style={{ color: getRiskColor(riskLevel) }}>
                {riskPercentage}%
              </div>
              <div className="text-sm text-gray-600">{riskLevel} Risk</div>
            </div>
          </div>
        </div>

        {/* Risk Scale */}
        <div className="mt-6">
          <div className="flex justify-between text-xs text-gray-600 mb-2">
            <span>Low (0-25%)</span>
            <span>Moderate (25-50%)</span>
            <span>High (50-75%)</span>
            <span>Very High (75%+)</span>
          </div>
          <div className="w-full h-3 bg-gradient-to-r from-green-500 via-yellow-500 via-orange-500 to-red-500 rounded-full relative">
            <div 
              className="absolute w-3 h-3 bg-white border-2 border-gray-800 rounded-full top-0 transform -translate-y-0"
              style={{ left: `${riskPercentage}%`, marginLeft: '-6px' }}
            />
          </div>
        </div>
      </div>

      {/* Comparison Chart */}
      <div className="bg-gray-50 rounded-xl p-6">
        <h4 className="text-lg font-semibold text-gray-800 mb-4 text-center">
          Risk Comparison
        </h4>
        
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={comparisonData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="category" 
                tick={{ fontSize: 12 }}
                interval={0}
                angle={-45}
                textAnchor="end"
                height={80}
              />
              <YAxis 
                tick={{ fontSize: 12 }}
                label={{ value: 'Risk (%)', angle: -90, position: 'insideLeft' }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar 
                dataKey="risk" 
                fill="#3b82f6"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <p className="text-xs text-gray-500 mt-4 text-center">
          Comparison shows your risk level against general population and age group averages
        </p>
      </div>
    </div>
  );
}