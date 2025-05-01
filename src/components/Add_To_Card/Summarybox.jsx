// 2. SummaryBox.jsx
import React from 'react';

export default function SummaryBox({ subtotal, shipping, total }) {
  return (
    <div className="border p-4 rounded shadow w-full max-w-sm">
      <div className="flex justify-between mb-2">
        <span>Subtotal</span>
        <span className="text-green-600 font-semibold">${subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span className="text-green-600">${shipping}</span>
        <span>Free</span>
      </div>
      <div className="flex justify-between mb-4">
        <span>Estimate for</span>
        <span>United Kingdom</span>
      </div>
      <div className="flex justify-between text-lg font-bold border-t pt-2">
        <span>Total</span>
        <span className="text-green-600">${total.toFixed(2)}</span>
      </div>
      <button className="w-full mt-4 bg-green-600 text-white py-2 rounded hover:bg-green-700">
        Proceed To Checkout
      </button>
    </div>
  );
}