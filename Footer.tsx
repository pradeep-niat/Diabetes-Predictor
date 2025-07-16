'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <i className="ri-heart-pulse-line text-white"></i>
              </div>
              <div>
                <h3 className="text-lg font-bold">DiabetesAI</h3>
                <p className="text-sm text-gray-400">ML Health Predictor</p>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Advanced machine learning algorithms for diabetes risk assessment and health management.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">How it Works</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Resources</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Health Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Diabetes Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Nutrition Tips</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Exercise Plans</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Find Doctors</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2024 DiabetesAI. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-400">Created by</span>
              <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 rounded-full">
                <i className="ri-user-star-line text-white"></i>
                <span className="text-white font-semibold">Pradeep Kumar S</span>
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="ri-twitter-line text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="ri-linkedin-line text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="ri-github-line text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="ri-mail-line text-xl"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <div className="bg-yellow-900/20 border border-yellow-700 rounded-lg p-4">
            <p className="text-xs text-yellow-300">
              <i className="ri-alert-line mr-2"></i>
              <strong>Medical Disclaimer:</strong> This tool is for educational purposes only and should not replace professional medical advice. 
              Always consult with qualified healthcare providers for proper diagnosis and treatment.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}