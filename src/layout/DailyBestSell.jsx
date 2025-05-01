// components/DailyBestSells.jsx
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function DailyBestSells() {
  const [activeTab, setActiveTab] = useState('Featured');
  
  const tabs = ['Featured', 'Popular', 'New added'];
  
  const products = [
    {
      id: 1,
      name: 'All Natural Italian-Style Chicken Meatballs',
      price: 238.85,
      oldPrice: 245.8,
      image: 'https://pranfoods.net/sites/default/files/pran-crispy-fried-chicken-m.png',
      category: 'Fresh Foods',
      badge: 'Save 25%',
      badgeColor: 'bg-green-500',
      rating: 5
    },
    {
      id: 2,
      name: "Angie's Boomchickapop Sweet and warmies",
      price: 238.85,
      oldPrice: 245.8,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl2_Vh2MK6EsQsUS6o2YcPzMN-gw8V-wEYew&s',
      category: 'Snack Foods',
      badge: 'Sale',
      badgeColor: 'bg-blue-500',
      rating: 5
    },
    {
      id: 3,
      name: "Foster Farms Takeout Crispy",
      price: 238.85,
      oldPrice: 245.8,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlPspxufCGWH54NlBZeQoLg9t-UodqtM6dPA&s',
      category: 'Fresh Foods',
      badge: 'Hot Sale',
      badgeColor: 'bg-orange-500',
      rating: 5
    },
    {
      id: 4,
      name: "Blue Diamond Almonds Lightly Salted",
      price: 238.85,
      oldPrice: 245.8,
      image: 'https://5.imimg.com/data5/UL/HD/MY-8561643/250gm-crispy-original-chicken-fry-mix-500x500.jpg',
      category: 'Fresh Foods',
      badge: 'Save 15%',
      badgeColor: 'bg-pink-500',
      rating: 5
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col space-y-6">
        {/* Section Header and Tabs */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">Daily Best Sells</h2>
          
          {/* Category Tabs */}
          <div className="flex space-x-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1 text-sm font-medium rounded-full transition-colors ${
                  activeTab === tab
                    ? 'text-green-500 border border-green-500 bg-white'
                    : 'text-gray-500 hover:text-green-500'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        
        {/* Carousel */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination'
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
            }}
            className="daily-best-sells-carousel"
          >
            {/* Featured Banner */}
            <SwiperSlide>
              <div className="h-full rounded-lg overflow-hidden bg-green-50 flex flex-col justify-between">
                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    Bring nature<br />into your<br />home
                  </h3>
                  <div className="mt-auto">
                    <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 flex items-center">
                      Shop Now
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
                <img 
                  src="/images/leaf-banner.jpg" 
                  alt="Bring nature into your home" 
                  className="w-full h-40 object-cover object-bottom"
                />
              </div>
            </SwiperSlide>
            
            {/* Product Cards */}
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition h-full flex flex-col">
                  {/* Product Image & Badge */}
                  <div className="relative p-4">
                    {product.badge && (
                      <span className={`absolute top-6 right-6 ${product.badgeColor} text-white text-xs font-bold py-1 px-2 rounded-md`}>
                        {product.badge}
                      </span>
                    )}
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="mx-auto h-40 object-contain"
                    />
                  </div>
                  
                  {/* Product Info */}
                  <div className="p-4 flex flex-col flex-grow">
                    <div className="text-xs text-gray-500 mb-1">{product.category}</div>
                    <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2 flex-grow">{product.name}</h3>
                    
                    {/* Rating */}
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    
                    {/* Price */}
                    <div className="mb-3">
                      <span className="text-green-500 font-bold">${product.price.toFixed(2)}</span>
                      <span className="text-gray-400 text-xs line-through ml-2">${product.oldPrice.toFixed(2)}</span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                    
                    <div className="text-xs text-gray-600 mb-3">Sold: 90/120</div>
                    
                    {/* Add To Cart Button */}
                    <button className="mt-auto bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md w-full text-center transition">
                      Add To Cart
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Navigation Buttons */}
          <div className="swiper-button-prev absolute top-1/2 left-0 z-10 -translate-y-1/2 -translate-x-1/2 bg-white shadow-md rounded-full w-8 h-8 flex items-center justify-center cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <div className="swiper-button-next absolute top-1/2 right-0 z-10 -translate-y-1/2 translate-x-1/2 bg-white shadow-md rounded-full w-8 h-8 flex items-center justify-center cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
          
          {/* Custom Pagination */}
          <div className="swiper-pagination flex justify-center space-x-2 mt-6"></div>
        </div>
      </div>
    </div>
  );
}