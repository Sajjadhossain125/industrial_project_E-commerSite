import React from 'react';

const imageMap = import.meta.glob('../../assets/images/about/icons/*.png', {
  eager: true,
  import: 'default',
});

const imagePaths = Object.values(imageMap);

const features = [
  { title: 'Best Prices & Offers' },
  { title: 'Wide Assortment' },
  { title: 'Free Delivery' },
  { title: 'Easy Returns' },
  { title: '100% Satisfaction' },
  { title: 'Great Daily Deal' },
];

const ServiceFeatures = () => {
  return (
    <section
      className="bg-gray-50 px-6 py-10 text-center mx-auto overflow-auto"
      style={{ width: '1341px', height: '1000px' }}
    >
      <h2 className="text-4xl font-bold mb-12">What We Provide?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center justify-start"
            style={{ height: '360px', width: '400px' }} // proportional size for cards
          >
            <img
              src={imagePaths[index]}
              alt={item.title}
              className="mb-4 w-16 h-16 object-contain"
            />
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm mb-3 px-2">
              There are many variations of passages of Lorem Ipsum...
            </p>
            <a href="#" className="text-blue-500 text-sm">Read more</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceFeatures;
