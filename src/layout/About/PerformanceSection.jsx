import React from 'react';

// Dynamically import the image
const images = import.meta.glob('../../assets/images/about/*.{png,jpg}', {
  eager: true,
  import: 'default',
});

const performanceImage = images['../../assets/images/about/about-5.png.png'];

const PerformanceSection = () => {
  return (
    <section
      className="py-12 px-6 bg-white mx-auto"
      style={{ width: '1341px', height: '500px' }}
    >
      <div className="grid md:grid-cols-2 gap-10 items-center h-full">
        <div>
          <img
            src={performanceImage}
            alt="Shopping woman"
            className="rounded-lg w-full h-auto"
          />
        </div>
        <div>
          <h2 className="text-4xl font-bold mb-6">
            Your Partner for e-commerce grocery solution
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;
