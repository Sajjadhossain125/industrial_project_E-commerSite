// components/DealsOfTheDay.jsx
import React, { useEffect, useState } from 'react';

function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const total = Math.max(0, targetDate - new Date().getTime());
      const seconds = Math.floor((total / 1000) % 60);
      const minutes = Math.floor((total / 1000 / 60) % 60);
      const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
      const days = Math.floor(total / (1000 * 60 * 60 * 24));
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Mins', value: timeLeft.minutes },
    { label: 'Sec', value: timeLeft.seconds },
  ];

  return (
    <div className="absolute top-2 left-2 flex gap-1 z-10">
      {timeUnits.map((unit, idx) => (
        <div key={idx} className="bg-white text-center px-2 py-1 rounded shadow-sm w-12">
          <div className="text-green-600 font-bold text-sm">{String(unit.value).padStart(2, '0')}</div>
          <div className="text-xs text-gray-500">{unit.label}</div>
        </div>
      ))}
    </div>
  );
}

export default function DealsOfTheDay() {
  const now = new Date().getTime();
  const oneMonth = 30 * 24 * 60 * 60 * 1000; // Sample future time

  const deals = [
    {
      id: 1,
      name: 'Seeds of Change Organic Quinoa, Brown, & Red Rice',
      price: 32.85,
      oldPrice: 33.8,
      image: 'https://5.imimg.com/data5/SELLER/Default/2024/4/411340684/DA/VK/KH/57218054/organic-fried-chicken-masala-500x500.jpeg',
      rating: 5,
      reviews: 4,
      brand: 'NeatFood',
      countdownEnd: now + oneMonth,
    },
    {
      id: 2,
      name: 'Perdue Simply Smart Organics Gluten Free',
      price: 24.85,
      oldPrice: 26.8,
      image: 'https://i0.wp.com/bangladeshiwarehouse.com.au/wp-content/uploads/2024/01/Fried-Chicken-Masala.jpg?fit=830%2C1372&quality=89&ssl=1',
      rating: 5,
      reviews: 4,
      brand: 'Old El Paso',
      countdownEnd: now + oneMonth * 2,
    },
    {
      id: 3,
      name: 'Signature Wood-Fired Mushroom and Caramelized',
      price: 12.85,
      oldPrice: 13.8,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdGYx0rq7Or7ghUEKmI3cyzpyEwiJd_wQ24yEH3b5PfvDldixKu8AwC-ZyI6gr1qkGcjI&usqp=CAU',
      rating: 5,
      reviews: 4,
      brand: 'Progresso',
      countdownEnd: now + oneMonth * 3,
    },
    {
      id: 4,
      name: 'Simply Lemonade with Raspberry Juice',
      price: 15.85,
      oldPrice: 16.8,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo0oKmdU0ebp1Iv_vUxd0ISd8hHh4H9rujmg&s',
      rating: 5,
      reviews: 4,
      brand: 'Yoplait',
      countdownEnd: now + oneMonth * 4,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8" style={{ maxWidth: '1610px', height: 'auto' }}>
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Deals Of The Day</h2>
          <a href="#" className="text-sm text-gray-500 hover:text-green-500 flex items-center">
            All Deals
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 flex-grow">
          {deals.map((deal) => (
            <div key={deal.id} className="relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition h-full">
              {/* Product Image + Countdown Timer */}
              <div className="h-48 overflow-hidden relative">
                <img src={deal.image} alt={deal.name} className="w-full h-full object-cover" />
                <CountdownTimer targetDate={deal.countdownEnd} />
              </div>

              {/* Product Info */}
              <div className="p-4 bg-white border border-gray-100 mx-4 -mt-8 rounded-lg flex flex-col relative z-10">
                <h3 className="text-base font-medium text-gray-800 mb-2 line-clamp-2">{deal.name}</h3>

                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 ml-1">({deal.reviews})</span>
                </div>

                <div className="text-xs text-gray-500 mb-3">
                  By <span className="text-green-500">{deal.brand}</span>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-green-500 font-bold">${deal.price.toFixed(2)}</span>
                    <span className="text-gray-400 text-xs line-through ml-2">${deal.oldPrice.toFixed(2)}</span>
                  </div>

                  <button className="bg-green-100 text-green-500 hover:bg-green-500 hover:text-white px-3 py-1 rounded-md text-sm transition-colors flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Add
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
