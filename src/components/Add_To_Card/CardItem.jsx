// 1. CartItem.jsx
import React from 'react';

export default function CartItem({ product, price, quantity, image }) {
  return (
    <div className="grid grid-cols-5 items-center py-4 border-b">
      <div className="flex items-center gap-2 col-span-2">
        <input type="checkbox" className="mr-2" />
        <img src={image} alt={product} className="w-16 h-16 object-contain" />
        <span>{product}</span>
      </div>
      <div>${price.toFixed(2)}</div>
      <div>
        <select className="border rounded px-2 py-1">
          {[1,2,3,4,5].map(n => <option key={n}>{n}</option>)}
        </select>
      </div>
      <div>${(price * quantity).toFixed(2)}</div>
    </div>
  );
}