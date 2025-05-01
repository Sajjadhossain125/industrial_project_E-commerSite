// 3. CartTools.jsx
import React from 'react';

export default function CartTools() {
  return (
    <div className="grid grid-cols-2 gap-4 mt-6">
      <div>
        <h3 className="font-semibold mb-2">Calculate Shipping</h3>
        <input type="text" placeholder="State / Country" className="border p-2 w-full mb-2 rounded" />
        <input type="text" placeholder="PostCode / ZIP" className="border p-2 w-full rounded" />
      </div>
      <div>
        <h3 className="font-semibold mb-2">Apply Coupon</h3>
        <input type="text" placeholder="Enter Your Coupon" className="border p-2 w-full mb-2 rounded" />
        <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">Apply</button>
      </div>
    </div>
  );
}