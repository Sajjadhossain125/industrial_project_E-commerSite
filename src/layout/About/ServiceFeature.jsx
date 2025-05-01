import React, { useState, useEffect, useRef } from 'react';

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
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
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
    <section ref={sectionRef} className="bg-gray-50 px-4 sm:px-6 py-8 sm:py-10 md:py-16 text-center w-full overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 
          className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 md:mb-12 transition-all duration-700 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          What We Provide?
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className={`bg-white shadow-md hover:shadow-xl rounded-xl p-4 sm:p-6 flex flex-col items-center justify-start h-auto transition-all duration-500 transform ${
                isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-16 opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${150 * index}ms` }}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div 
                className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-3 md:mb-4 flex items-center justify-center rounded-full transition-all duration-300 ${
                  activeCard === index ? 'bg-green-50 scale-110' : ''
                }`}
              >
                <img
                  src={imagePaths[index]}
                  alt={item.title}
                  className={`w-3/4 h-3/4 object-contain transition-all duration-300 ${
                    activeCard === index ? 'scale-110' : 'scale-100'
                  }`}
                />
              </div>
              <h3 
                className={`text-lg sm:text-xl font-semibold mb-2 transition-colors duration-300 ${
                  activeCard === index ? 'text-green-600' : ''
                }`}
              >
                {item.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm mb-3 px-2">
                There are many variations of passages of Lorem Ipsum...
              </p>
              <a 
                href="#" 
                className={`flex items-center gap-1 text-xs sm:text-sm transition-all duration-300 mt-auto ${
                  activeCard === index 
                    ? 'text-green-600 transform translate-x-1' 
                    : 'text-green-500 hover:text-green-700'
                }`}
              >
                Read more
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-4 w-4 transition-transform duration-300 ${
                    activeCard === index ? 'translate-x-1' : ''
                  }`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;