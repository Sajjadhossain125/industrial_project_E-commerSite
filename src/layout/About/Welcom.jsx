import React from 'react';

// Dynamically load images using import.meta.glob (Vite)
const images = import.meta.glob('../../assets/images/about/*.{jpg,png}', {
  eager: true,
  import: 'default',
});

const mainImage = images['../../assets/images/about/SectionAbout.jpg'];
const subImages = [
  images['../../assets/images/about/about-2.png.png'],
  images['../../assets/images/about/about-3.png.png'],
  images['../../assets/images/about/about-4.png.png'],
];

const WelcomeSection = () => {
  return (
    <section
      className="py-12 px-6 bg-white mx-auto"
      style={{ width: '1341px', height: '1000px' }}
    >
      <div className="grid md:grid-cols-2 gap-10 items-center h-full">
        <div>
          <img
            src={mainImage}
            alt="Woman cooking"
            className="rounded-lg w-full h-auto"
          />
        </div>
        <div>
          <h2 className="text-4xl font-bold mb-6">Welcome to Nest</h2>
          <p className="text-gray-700 text-base leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className="grid grid-cols-3 gap-4">
            {subImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`About image ${idx + 1}`}
                className="rounded-lg w-full object-cover"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
