import React from 'react';

export default function FeaturedCategories() {
  // Categories data
  const categories = [
    { id: 1, name: 'Cake & Milk', itemCount: 26, image: '/api/placeholder/80/80', color: 'bg-yellow-50' },
    { id: 2, name: 'Organic Kiwi', itemCount: 28, image: '/api/placeholder/80/80', color: 'bg-green-50' },
    { id: 3, name: 'Peach', itemCount: 14, image: '/api/placeholder/80/80', color: 'bg-orange-50' },
    { id: 4, name: 'Red Apple', itemCount: 54, image: '/api/placeholder/80/80', color: 'bg-red-50' },
    { id: 5, name: 'Snack', itemCount: 56, image: '/api/placeholder/80/80', color: 'bg-yellow-50' },
    { id: 6, name: 'Vegetables', itemCount: 72, image: '/api/placeholder/80/80', color: 'bg-green-50' },
    { id: 7, name: 'Strawberry', itemCount: 36, image: '/api/placeholder/80/80', color: 'bg-red-50' },
    { id: 8, name: 'Black plum', itemCount: 123, image: '/api/placeholder/80/80', color: 'bg-purple-50' },
    { id: 9, name: 'Custard apple', itemCount: 34, image: '/api/placeholder/80/80', color: 'bg-green-50' },
    { id: 10, name: 'Coffee & Tea', itemCount: 89, image: '/api/placeholder/80/80', color: 'bg-amber-50' },
  ];

  return (
    <div className="w-full max-w-[1610px] h-[284px] mx-auto">
      {/* Header with navigation */}
      <div className="flex justify-between items-center mb-4 px-2">
        <h2 className="text-xl font-bold text-gray-800">Featured Categories</h2>
        
        {/* Category filter tabs */}
        <div className="hidden md:flex space-x-6">
          <button className="text-sm font-medium text-gray-800 border-b-2 border-gray-800 pb-1">Cake & Milk</button>
          <button className="text-sm font-medium text-gray-500 hover:text-gray-800">Coffees & Teas</button>
          <button className="text-sm font-medium text-gray-500 hover:text-gray-800">Pet Foods</button>
          <button className="text-sm font-medium text-gray-500 hover:text-gray-800">Vegetables</button>
        </div>
        
        {/* Navigation arrows */}
        <div className="flex space-x-2">
          <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-400 hover:bg-gray-100">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-400 hover:bg-gray-100">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
      
      {/* Categories grid */}
      <div className="w-full overflow-hidden">
        <div className="flex space-x-4 px-2">
          {categories.map((category) => (
            <div key={category.id} className="w-[140px] flex-shrink-0">
              <div className={`${category.color} rounded-xl p-4 flex flex-col items-center justify-center h-[180px] transition-transform hover:translate-y-[-5px]`}>
                {/* Category image */}
                <div className="w-20 h-20 mb-3 flex items-center justify-center">
                  <img src={category.image} alt={category.name} className="max-w-full max-h-full object-contain" />
                </div>
                
                {/* Category name */}
                <h3 className="text-sm font-medium text-center text-gray-800">{category.name}</h3>
                
                {/* Item count */}
                <p className="text-xs text-gray-500 mt-1">{category.itemCount} items</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Connecting dotted lines effect */}
      <div className="relative">
        <div className="absolute top-[90px] left-0 right-0 z-0 hidden md:block">
          <svg className="w-full h-4" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="8" x2="100%" y2="8" stroke="#d1d5db" strokeWidth="1.5" strokeDasharray="6 6" />
          </svg>
        </div>
      </div>
      
      {/* Custom CSS for additional styling */}
      <style jsx>{`
        /* Custom scrollbar for horizontal scrolling */
        .categories-scroll::-webkit-scrollbar {
          height: 0;
          display: none;
        }
        
        /* Hover animation for category cards */
        .category-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .category-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
}