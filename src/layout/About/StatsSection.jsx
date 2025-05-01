import React from 'react';

const stats = [
  { value: '0+', label: 'Glorious years' },
  { value: '0+', label: 'Happy clients' },
  { value: '0+', label: 'Projects complete' },
  { value: '0+', label: 'Team advisor' },
  { value: '0+', label: 'Products Sale' },
];

const StatsSection = () => {
  return (
    <section className="w-full flex justify-center items-center py-10">
      <div
        className="relative flex justify-around items-center text-center rounded-xl overflow-hidden"
        style={{
          width: '1610px',
          height: '315px',
          backgroundImage: 'url("https://img.freepik.com/free-photo/medium-shot-colleagues-celebrating_23-2149008991.jpg?t=st=1746086018~exp=1746089618~hmac=58b8626a628ed4844626bffa6c98f4f062c7a6057adc40f76e1ffc1662b6aa40&w=996")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-green-900 opacity-70"></div>

        {/* Content */}
        <div className="relative flex justify-around items-center w-full h-full">
          {stats.map((item, index) => (
            <div key={index} className="flex flex-col text-white">
              <h3 className="text-4xl font-bold">{item.value}</h3>
              <p className="text-lg">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
