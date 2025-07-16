'use client';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <i className="ri-heart-pulse-line text-white text-xl"></i>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">DiabetesAI</h1>
              <p className="text-sm text-gray-500">ML Health Predictor</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
              About
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
              Resources
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
              Contact
            </a>
          </nav>
          
          <button className="md:hidden w-8 h-8 flex items-center justify-center">
            <i className="ri-menu-line text-gray-600 text-xl"></i>
          </button>
        </div>
      </div>
    </header>
  );
}