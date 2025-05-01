// components/ProductGrid.jsx
import React, { useState } from 'react';

export default function ProductGrid() {
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
  
  const products = [
    {
      id: 1,
      name: 'Seeds of Change Organic Quinoa, Brown, & Red Rice',
      price: 28.85,
      oldPrice: 32.8,
      image: 'https://static.libertyprim.com/files/familles/pomme-large.jpg?1569271834',
      category: 'Snacks',
      brand: 'NeatFood',
      badge: 'Hot',
      badgeColor: 'bg-pink-500'
    },
    {
      id: 2,
      name: 'All Natural Italian-Style Chicken Meatballs',
      price: 52.85,
      oldPrice: 55.8,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZbB_doR9LVg_xVbDXOOZc3TNbgNCEIzLLKw&s',
      category: 'Fresh Meat',
      brand: 'Stouffer',
      badge: 'Sale',
      badgeColor: 'bg-blue-500'
    },
    {
      id: 3,
      name: "Angie's Boomchickapop Sweet & Salty Kettle Corn",
      price: 48.85,
      oldPrice: 52.8,
      image: 'https://static.libertyprim.com/files/familles/pomme-large.jpg?1569271834',
      category: 'Snack',
      brand: 'StarKist',
      badge: 'New',
      badgeColor: 'bg-green-500'
    },
    {
      id: 4,
      name: 'Foster Farms Takeout Crispy Classic Buffalo Wings',
      price: 17.85,
      oldPrice: 19.8,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaFt6Iz3D590bKd1YDJROFYTQz_H57VLft_Q&s',
      category: 'Vegetables',
      brand: 'NeatFood',
      badge: '',
      badgeColor: ''
    },
    {
      id: 5,
      name: 'Blue Diamond Almonds Lightly Salted Vegetables',
      price: 23.85,
      oldPrice: 25.8,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZbB_doR9LVg_xVbDXOOZc3TNbgNCEIzLLKw&s',
      category: 'Fruits',
      brand: 'NeatFood',
      badge: 'Hot',
      badgeColor: 'bg-orange-500'
    },
    {
      id: 6,
      name: 'Chobani Complete Vanilla Greek Yogurt',
      price: 54.85,
      oldPrice: 59.8,
      image: 'https://static.libertyprim.com/files/familles/pomme-large.jpg?1569271834',
      category: 'Dairy',
      brand: 'NeatFood',
      badge: '',
      badgeColor: ''
    },
    {
      id: 7,
      name: 'Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g',
      price: 32.85,
      oldPrice: 33.8,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaFt6Iz3D590bKd1YDJROFYTQz_H57VLft_Q&s',
      category: 'Coffee & Teas',
      brand: 'NeatFood',
      badge: 'Sale',
      badgeColor: 'bg-blue-500'
    },
    {
      id: 8,
      name: 'Encore Seafoods Stuffed Alaskan Salmon',
      price: 35.85,
      oldPrice: 37.8,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaFt6Iz3D590bKd1YDJROFYTQz_H57VLft_Q&s',
      category: 'Meats',
      brand: 'NeatFood',
      badge: 'Hot',
      badgeColor: 'bg-pink-500'
    },
    {
      id: 9,
      name: "Gorton's Beer Battered Fish Fillets with soft paper",
      price: 23.85,
      oldPrice: 25.8,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZbB_doR9LVg_xVbDXOOZc3TNbgNCEIzLLKw&s',
      category: 'Meats',
      brand: 'Old El Paso',
      badge: '',
      badgeColor: ''
    },
    {
      id: 10,
      name: 'Haagen-Dazs Caramel Cone Ice Cream Ketchup',
      price: 22.85,
      oldPrice: 24.8,
      image: 'https://static.libertyprim.com/files/familles/pomme-large.jpg?1569271834',
      category: 'Milks & Dairies',
      brand: 'Tyson',
      badge: '',
      badgeColor: ''
    },
  ];
  
  const filterProducts = () => {
    if (activeCategory === 'All') {
      return products;
    }
    return products.filter(product => 
      product.category === activeCategory || 
      categories.includes(product.category)
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col space-y-6">
        {/* Section Title */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">Popular Products</h2>
          
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {filterProducts().map((product) => (
            <div key={product.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition">
              {/* Product Image & Badge */}
              <div className="relative p-4">
                {product.badge && (
                  <span className={`absolute top-6 left-6 ${product.badgeColor} text-white text-xs font-bold py-1 px-2 rounded-full`}>
                    {product.badge}
                  </span>
                )}
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="mx-auto h-36 object-contain"
                />
              </div>
              
              {/* Product Info */}
              <div className="p-4">
                <div className="text-xs text-gray-500 mb-1">{product.category}</div>
                <h3 className="text-sm font-medium text-gray-800 mb-2 h-10 line-clamp-2">{product.name}</h3>
                <div className="flex items-center text-xs text-gray-400 mb-2">
                  <span className="text-yellow-400">★★★★★</span>
                  <span className="ml-1">(4.0)</span>
                </div>
                <div className="text-xs text-gray-500 mb-3">By <span className="text-green-500">{product.brand}</span></div>
                
                {/* Price & Add Button */}
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-green-500 font-bold">${product.price}</span>
                    <span className="text-gray-400 text-xs line-through ml-1">${product.oldPrice}</span>
                  </div>
                  <button className="text-xs bg-green-100 text-green-500 px-3 py-1 rounded flex items-center">
                    <span className="mr-1">Add</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}