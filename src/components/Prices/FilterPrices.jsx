// components/FilterSidebar.jsx
import React from 'react';

const FilterSidebar = ({ 
  title = "Filter by price", 
  brands = ['NeatFood', 'Stouffer', 'StarKist', 'Tyson', 'Old El Paso'],
  minPrice = 0,
  maxPrice = 100,
  onFilter = () => {}
}) => {
  return (
    <div className="bg-white rounded-lg p-4 border border-gray-200">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      
      {/* Price Range Slider */}
      <div className="mb-4">
        <div className="w-full h-2 bg-gray-200 rounded-full mb-2">
          <div className="h-2 bg-green-500 rounded-full" style={{ width: '60%' }}></div>
          <div className="relative">
            <div className="absolute left-0 top-0 h-4 w-4 -mt-1 bg-white border border-green-500 rounded-full"></div>
            <div className="absolute left-[60%] top-0 h-4 w-4 -mt-1 bg-white border border-green-500 rounded-full"></div>
          </div>
        </div>
        <div className="flex justify-between text-xs text-gray-500">
          <span>${minPrice}</span>
          <span>${maxPrice}</span>
        </div>
      </div>
      
      {/* Price Filters */}
      <ul className="space-y-2 mb-4">
        <li className="flex items-center justify-between">
          <span className="text-sm text-gray-600">From</span>
          <input 
            type="text" 
            className="w-20 text-right border border-gray-300 rounded p-1 text-sm" 
            placeholder={`$${minPrice}`} 
          />
        </li>
        <li className="flex items-center justify-between">
          <span className="text-sm text-gray-600">To</span>
          <input 
            type="text" 
            className="w-20 text-right border border-gray-300 rounded p-1 text-sm" 
            placeholder={`$${maxPrice}`} 
          />
        </li>
      </ul>
      
      {/* Brand Filters */}
      <h4 className="font-medium text-sm mb-2 mt-4">Brands</h4>
      <ul className="space-y-2">
        {brands.map((brand, index) => (
          <li key={index} className="flex items-center">
            <input
              type="checkbox"
              id={`brand-${index}`}
              className="h-4 w-4 border-gray-300 rounded text-green-500 focus:ring-green-500"
            />
            <label htmlFor={`brand-${index}`} className="ml-2 text-sm text-gray-600">
              {brand}
            </label>
          </li>
        ))}
      </ul>
      
      <button 
        className="w-full bg-green-500 text-white py-2 rounded mt-4 text-sm font-medium"
        onClick={onFilter}
      >
        Filter
      </button>
    </div>
  );
};

export default FilterSidebar;