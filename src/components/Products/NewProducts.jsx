// components/NewProductsSidebar.jsx
import React from 'react';

const NewProductsSidebar = ({ 
  title = "New products",
  products = []
}) => {
  // Default products if none provided
  const defaultProducts = [
    {
      id: 1,
      name: "Seeds of Change Organic Quinoa",
      image: "https://static.libertyprim.com/files/familles/pomme-large.jpg?1569271834",
      price: 28.85,
      oldPrice: 32.8
    },
    {
      id: 2,
      name: "All Natural Italian-Style Chicken Meatballs",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZbB_doR9LVg_xVbDXOOZc3TNbgNCEIzLLKw&s",
      price: 52.85,
      oldPrice: 55.8
    },
    {
      id: 3,
      name: "Angie's Boomchickapop Sweet & Salty",
      image: "https://static.libertyprim.com/files/familles/pomme-large.jpg?1569271834",
      price: 48.85,
      oldPrice: 52.8
    }
  ];

  const displayProducts = products.length > 0 ? products : defaultProducts;

  return (
    <div className="bg-white rounded-lg p-4 border border-gray-200">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="space-y-4">
        {displayProducts.map((product) => (
          <div key={product.id} className="flex space-x-2">
            <div className="flex-shrink-0 w-16 h-16">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover rounded"
              />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-medium text-gray-800 line-clamp-2">{product.name}</h4>
              <div className="flex items-center text-xs mt-1">
                <span className="text-green-500 font-bold">${product.price}</span>
                {product.oldPrice && (
                  <span className="text-gray-400 line-through ml-1">${product.oldPrice}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewProductsSidebar;