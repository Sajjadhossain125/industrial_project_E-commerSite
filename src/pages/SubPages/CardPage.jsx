import React from 'react';
import CartItem from '../../components/Add_To_Card/CardItem';
import SummaryBox from '../../components/Add_To_Card/Summarybox';
import CartTools from '../../components/Add_To_Card/CardTools';

export default function YourCart() {
  const cartItems = [
    { product: 'Field Roast Chao Cheese Creamy Original', price: 2.51, quantity: 1, image: 'https://via.placeholder.com/64' },
    { product: 'Blue Diamond Almonds Lightly Salted', price: 3.20, quantity: 1, image: 'https://via.placeholder.com/64' },
    { product: 'Fresh Organic Mustard Leaves Bell Pepper', price: 2.43, quantity: 1, image: 'https://via.placeholder.com/64' },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      <p className="text-sm text-gray-500 mb-4">There are {cartItems.length} products in your cart</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div className="border rounded overflow-hidden">
            {cartItems.map((item, idx) => (
              <CartItem key={idx} {...item} />
            ))}
          </div>
          <div className="flex gap-4 mt-4">
            <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">Continue Shopping</button>
            <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded">Update Cart</button>
          </div>
          <CartTools />
        </div>
        <SummaryBox subtotal={subtotal} shipping={0} total={subtotal} />
      </div>
    </div>
  );
}