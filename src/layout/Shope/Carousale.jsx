import React from "react";
import { Link } from "react-router-dom";
const SnackBanner = () => {
  const categories = [
    { name: "Cabbage", active: true },
    { name: "Broccoli", active: false },
    { name: "Artichoke", active: false },
    { name: "Celery", active: false },
    { name: "Spinach", active: false },
  ];

  return (
    <div className="w-full bg-green-50 relative overflow-hidden mx-auto my-6 px-4 md:px-6 lg:px-8">
      {/* SVG Background Pattern */}
      <div className="absolute inset-0 z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="vegetablePattern" patternUnits="userSpaceOnUse" width="300" height="300" patternTransform="rotate(10)">
            {/* Leaf */}
            <path d="M60,50 Q90,20 120,50 Q150,80 120,110 Q90,140 60,110 Q30,80 60,50 Z" fill="none" stroke="#d1fae5" strokeWidth="2" opacity="0.6" />
            
            {/* Broccoli-like Shape */}
            <circle cx="200" cy="100" r="30" fill="none" stroke="#d1fae5" strokeWidth="2" opacity="0.5" />
            <circle cx="190" cy="85" r="15" fill="none" stroke="#d1fae5" strokeWidth="2" opacity="0.5" />
            <circle cx="210" cy="85" r="15" fill="none" stroke="#d1fae5" strokeWidth="2" opacity="0.5" />
            <circle cx="200" cy="70" r="15" fill="none" stroke="#d1fae5" strokeWidth="2" opacity="0.5" />
            
            {/* Cabbage-like Shape */}
            <circle cx="100" cy="200" r="40" fill="none" stroke="#d1fae5" strokeWidth="2" opacity="0.5" />
            <path d="M70,200 Q100,170 130,200 Q100,230 70,200 Z" fill="none" stroke="#d1fae5" strokeWidth="2" opacity="0.5" />
            <path d="M100,170 Q100,200 100,230" fill="none" stroke="#d1fae5" strokeWidth="2" opacity="0.5" />
            <path d="M80,180 Q100,200 120,180" fill="none" stroke="#d1fae5" strokeWidth="2" opacity="0.5" />
            <path d="M80,220 Q100,200 120,220" fill="none" stroke="#d1fae5" strokeWidth="2" opacity="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#vegetablePattern)" />
        </svg>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto py-12 md:py-16 flex flex-col justify-center">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-green-600 mb-3 px-4">
            <Link to="/" className="flex items-center hover:text-green-700">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="mr-1"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            Home</Link>
         
          
          {/* Chevron Right (inline SVG instead of Lucide) */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="mx-2"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
          

          <Link to="/shop" className="text-green-600 hover:text-green-700">Shop</Link>
          
          {/* Chevron Right (inline SVG instead of Lucide) */}
          <svg 
            xmlns="http://www.w3.org/2000/svg"
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="mx-2"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
          
          <span className="text-green-700 font-medium">Snack</span>
        </div>

        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 px-4">Snack</h1>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 md:gap-3 px-4">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`
                px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200
                ${category.active 
                  ? 'bg-white text-green-600 shadow-sm' 
                  : 'bg-transparent text-gray-600 hover:bg-white/50'}
              `}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SnackBanner;