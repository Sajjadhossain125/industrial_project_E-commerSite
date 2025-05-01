// components/ProductCard.jsx
import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition">
      {/* Product Image & Badge */}
      <div className="relative p-4">
        {product.badge && (
          <span className={`absolute top-6 left-6 ${product.badgeColor || 'bg-green-500'} text-white text-xs font-bold py-1 px-2 rounded-full`}>
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
            {product.oldPrice && (
              <span className="text-gray-400 text-xs line-through ml-1">${product.oldPrice}</span>
            )}
          </div>
          <button 
            className="text-xs bg-green-100 text-green-500 px-3 py-1 rounded flex items-center"
            onClick={() => onAddToCart && onAddToCart(product)}
          >
            <span className="mr-1">Add</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;