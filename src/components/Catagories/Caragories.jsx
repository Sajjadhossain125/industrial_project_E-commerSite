// components/CategorySidebar.jsx
import React from 'react';

const CategorySidebar = ({ title = "Category" }) => {
  const categories = [
    { name: 'Milks & Dairies', count: 5 },
    { name: 'Coffees & Teas', count: 15 },
    { name: 'Pet Foods', count: 8 },
    { name: 'Meats', count: 12 },
    { name: 'Vegetables', count: 7 },
    { name: 'Fruits', count: 9 }
  ];

  return (
    <div className="bg-white rounded-lg p-4 border border-gray-200">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <ul className="space-y-3">
        {categories.map((category, index) => (
          <li key={index} className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id={`category-${index}`}
                className="h-4 w-4 border-gray-300 rounded text-green-500 focus:ring-green-500"
              />
              <label htmlFor={`category-${index}`} className="ml-2 text-sm text-gray-600">
                {category.name}
              </label>
            </div>
            <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
              {category.count}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategorySidebar;