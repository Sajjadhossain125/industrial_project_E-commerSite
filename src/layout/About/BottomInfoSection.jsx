import React from 'react';

const info = [
  {
    title: 'Who we are',
    text: 'Volutpat diam ut venenatis tellus in metus. Urna cursus eget nunc scelerisque viverra mauris in.',
  },
  {
    title: 'Our history',
    text: 'Nec dui nunc mattis enim ut tellus eros donec ac odio tempor orci dapibus ultrices.',
  },
  {
    title: 'Our mission',
    text: 'In tellus eros donec ac odio orci ultricies in. Sit amet purus gravida quis blandit turpis cursus.',
  },
];

const BottomInfoSection = () => {
  return (
    <section className="py-8 md:py-12 lg:py-16 px-4 md:px-6 bg-gray-50 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {info.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-4 md:p-6 h-auto min-h-64 flex flex-col justify-center"
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">{item.title}</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BottomInfoSection;