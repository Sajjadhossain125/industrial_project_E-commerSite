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
    <section
      className="py-16 px-6 bg-gray-50 mx-auto"
      style={{ width: '1341px', height: '500px' }}
    >
      <div className="grid md:grid-cols-3 gap-10 text-center h-full items-start">
        {info.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 h-[400px] flex flex-col justify-center"
          >
            <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
            <p className="text-gray-600 text-base leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BottomInfoSection;
