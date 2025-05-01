// components/ProductCarousel.jsx 
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function ProductCarousel() {
  return (
    <div className="container mx-auto px-4">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="product-carousel"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="w-full h-full bg-[#f3f3e7] rounded-lg flex items-center justify-between p-6">
            <div>
              <h2 className="text-lg font-semibold mb-4 text-gray-800">
                Everyday Fresh &<br />Clean with Our Products
              </h2>
              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                Shop Now
              </button>
            </div>
            <img
              src="/images/onions.png"
              alt="Onions"
              className="h-28 w-auto object-contain"
            />
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="w-full h-full bg-[#f8eeee] rounded-lg flex items-center justify-between p-6">
            <div>
              <h2 className="text-lg font-semibold mb-4 text-gray-800">
                Make your Breakfast<br />Healthy and Easy
              </h2>
              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                Shop Now
              </button>
            </div>
            <img
              src="/images/strawberry-drink.png"
              alt="Strawberry Drink"
              className="h-28 w-auto object-contain"
            />
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="w-full h-full bg-[#eaf0f9] rounded-lg flex items-center justify-between p-6">
            <div>
              <h2 className="text-lg font-semibold mb-4 text-gray-800">
                The best Organic<br />Products Online
              </h2>
              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                Shop Now
              </button>
            </div>
            <img
              src="/images/vegetables.png"
              alt="Vegetables"
              className="h-28 w-auto object-contain"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}