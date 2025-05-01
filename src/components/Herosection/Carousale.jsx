import React from 'react';

export default function SimpleHeroCarousel() {
  // A simpler approach without useState
  return (
    <div className="relative w-full max-w-[1586px] h-[538px] mx-auto overflow-hidden rounded-2xl">
      {/* Main slide - static version */}
      <div className="absolute inset-0 bg-green-100 pattern-overlay">
        {/* Background elements */}
        <div className="absolute inset-0 vegetable-patterns"></div>
        
        {/* Content container */}
        <div className="container mx-auto px-8 h-full flex items-center">
          <div className="w-full md:w-1/2 hero-content">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 hero-title">Fresh Vegetables</h1>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mt-2 hero-subtitle">Big discount</h2>
            <p className="text-gray-600 mt-4 md:text-lg">Save up to 50% off on your first order</p>
            
            {/* Newsletter Subscription */}
            <div className="mt-8 flex flex-col sm:flex-row gap-2 max-w-md">
              <div className="relative flex-grow">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="pl-10 pr-4 py-3 rounded-full w-full border-none shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none subscribe-input"
                />
              </div>
              <button className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-full transition-colors shadow-sm whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
          
          {/* Right side with decorative elements */}
          <div className="hidden md:block md:w-1/2 relative">
            {/* Visual elements representing vegetables */}
            <div className="absolute right-0 bottom-0 w-full h-full">
              {/* These elements create decorative shapes that suggest vegetables */}
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-green-200 rounded-full opacity-30 product-image"></div>
              <div className="absolute bottom-20 right-20 w-32 h-32 bg-green-300 rounded-full opacity-40 product-image"></div>
              <div className="absolute bottom-40 right-10 w-48 h-48 bg-yellow-200 rounded-full opacity-30 product-image"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation Arrows */}
      <button className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center z-10 hover:bg-gray-100 transition-colors carousel-arrow">
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>
      
      <button className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center z-10 hover:bg-gray-100 transition-colors carousel-arrow">
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
      
      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        <button className="w-6 h-2 rounded-full bg-green-500 carousel-dot"></button>
        <button className="w-2 h-2 rounded-full bg-gray-400 carousel-dot"></button>
        <button className="w-2 h-2 rounded-full bg-gray-400 carousel-dot"></button>
      </div>
    </div>
  );
}