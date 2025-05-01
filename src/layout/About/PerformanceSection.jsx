import React, { useState, useEffect } from 'react';
import Button from '../../components/Button/Button';

// Dynamically import the image
const images = import.meta.glob('../../assets/images/about/*.{png,jpg}', {
  eager: true,
  import: 'default',
});

const performanceImage = images['../../assets/images/about/about-5.png.png'];

const PerformanceSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('performance-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section
      id="performance-section"
      className="py-8 md:py-12 lg:py-16 px-4 sm:px-6 bg-white w-full overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
            <div className="relative group">
              <img
                src={performanceImage}
                alt="Shopping woman"
                className="rounded-lg w-full h-auto shadow-md transition-all duration-500 group-hover:shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-500"></div>
            </div>
          </div>
          
          <div className={`transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
              Your Partner for e-commerce grocery solution
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
              Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <Button>Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;