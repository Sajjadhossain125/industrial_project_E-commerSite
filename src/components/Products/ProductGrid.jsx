// components/ProductGrid.jsx
import React, { useState } from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ 
  title = "Products",
  products = [],
  onAddToCart = () => {}
}) => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = [
    'All', 
    'Milks & Dairies', 
    'Coffee & Teas', 
    'Pet Foods', 
    'Meats', 
    'Vegetables', 
    'Fruits'
  ];
  
  const filterProducts = () => {
    if (activeCategory === 'All') {
      return products;
    }
    return products.filter(product => 
      product.category === activeCategory || 
      product.category.includes(activeCategory)
    );
  };

  return (
    <div className="flex flex-col space-y-6">
      {/* Section Title */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        
        {/* Category Tabs */}
        <div className="hidden md:flex space-x-6 overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`pb-2 px-1 text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'text-green-500 border-b-2 border-green-500'
                  : 'text-gray-500 hover:text-green-500'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Mobile Category Dropdown */}
        <div className="md:hidden">
          <select 
            className="form-select rounded border-gray-300"
            value={activeCategory}
            onChange={(e) => setActiveCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>
      
      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filterProducts().map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={onAddToCart} 
          />
        ))}
      </div>
      
      {/* Pagination */}
      <div className="flex justify-center items-center space-x-2 mt-8">
        <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-green-500 text-white font-medium">1</button>
        <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-500">2</button>
        <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-500">3</button>
        <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductGrid;