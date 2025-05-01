import React, { useState, useEffect, useRef } from 'react';
import Button from '../../components/Button/Button';

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
  const [isVisible, setIsVisible] = useState(false);
  const [activeImage, setActiveImage] = useState(null);
  const sectionRef = useRef(null);

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
    const currentElement = sectionRef.current;


    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-8 md:py-12 lg:py-16 px-4 sm:px-6 bg-white w-full overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Main Image with Animation */}
          <div 
            className={`transition-all duration-1000 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={mainImage}
                alt="Woman cooking"
                className="w-full h-auto transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block bg-green-600 text-white text-sm px-3 py-1 rounded-full transition-all transform hover:scale-105">Fresh &amp; Organic</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content with Animation */}
          <div 
            className={`transition-all duration-1000 delay-300 transform ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
            }`}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
              Welcome to Nest
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            {/* Sub Images Grid with Hover Effects */}
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              {subImages.map((img, idx) => (
                <div 
                  key={idx} 
                  className="relative overflow-hidden rounded-lg cursor-pointer"
                  onMouseEnter={() => setActiveImage(idx)}
                  onMouseLeave={() => setActiveImage(null)}
                >
                  <img
                    src={img}
                    alt={`About image ${idx + 1}`}
                    className={`w-full aspect-square object-cover transition-all duration-500 ${
                      activeImage === idx ? 'scale-110 brightness-110' : 'scale-100'
                    }`}
                  />
                  <div 
                    className={`absolute inset-0 bg-green-600/20 transition-opacity duration-300 ${
                      activeImage === idx ? 'opacity-100' : 'opacity-0'
                    }`}
                  ></div>
                </div>
              ))}
            </div>
            <Button>Discover More </Button>        
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;