import React, { useState, useEffect, useRef } from 'react';

const stats = [
  { value: 10, label: 'Glorious years', suffix: '+' },
  { value: 1500, label: 'Happy clients', suffix: '+' },
  { value: 2500, label: 'Projects complete', suffix: '+' },
  { value: 80, label: 'Team advisor', suffix: '+' },
  { value: 15000, label: 'Products Sale', suffix: '+' },
];

const CountUp = ({ end, duration = 2000, suffix = '' }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);
  
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
  
      const currentElement = elementRef.current; // ✅ cache the ref
  
      if (currentElement) {
        observer.observe(currentElement);
      }
  
      return () => {
        if (currentElement) {
          observer.unobserve(currentElement);
        }
      };
    }, []);
  
    useEffect(() => {
      if (!isVisible) return;
  
      let startTime;
      const animateCount = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
  
        const currentCount = Math.floor(progress * end);
        setCount(currentCount);
  
        if (progress < 1) {
          countRef.current = requestAnimationFrame(animateCount);
        } else {
          setCount(end);
        }
      };
  
      countRef.current = requestAnimationFrame(animateCount);
  
      return () => {
        cancelAnimationFrame(countRef.current);
      };
    }, [end, duration, isVisible]);
  
    return <span ref={elementRef}>{count}{suffix}</span>;
  };
  

const StatsSection = () => {
  return (
    <section className="w-full flex justify-center items-center py-8 md:py-10 px-4">
      <div
        className="relative flex flex-col justify-center items-center text-center rounded-xl overflow-hidden w-full max-w-7xl"
        style={{
          backgroundImage: 'url("https://img.freepik.com/free-photo/medium-shot-colleagues-celebrating_23-2149008991.jpg?t=st=1746086018~exp=1746089618~hmac=58b8626a628ed4844626bffa6c98f4f062c7a6057adc40f76e1ffc1662b6aa40&w=996")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '200px',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-green-900 opacity-70"></div>

        {/* Content */}
        <div className="relative w-full py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-8 gap-x-4 w-full">
            {stats.map((item, index) => (
              <div key={index} className="flex flex-col text-white mx-auto">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 md:mb-2">
                  <CountUp end={item.value} suffix={item.suffix} />
                </h3>
                <p className="text-sm sm:text-base md:text-lg">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;