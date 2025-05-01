import { useState } from 'react';

export default function GroceryBanner() {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email) {
      alert(`Subscribed with email: ${email}`);
      setEmail('');
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-green-100 rounded-lg overflow-hidden relative">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            {/* Background vegetable patterns */}
            <div className="w-16 h-16 rounded-full border-2 border-green-300 absolute top-8 left-16"></div>
            <div className="w-20 h-20 rounded-full border-2 border-green-300 absolute bottom-12 left-1/4"></div>
            <div className="w-12 h-12 rounded-full border-2 border-green-300 absolute top-1/3 right-1/3"></div>
            <div className="w-24 h-24 rounded-full border-2 border-green-300 absolute bottom-1/4 right-1/4"></div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-8 relative">
          {/* Left side content */}
          <div className="z-10 md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-2">
              Stay home & get your daily needs from our shop
            </h2>
            <p className="text-green-700 mb-6">
              Start Your Daily Shopping with Next Mart
            </p>
            
            {/* Email subscription input */}
            <div className="flex w-full max-w-md">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-grow py-2 px-4 rounded-l-full border-2 border-r-0 border-gray-200 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
              />
              <button 
                onClick={handleSubscribe}
                className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded-r-full transition-colors"
              >
                Subscribe
              </button>
            </div>
          </div>
          
          {/* Right side with delivery man image and vegetables */}
          <div className="z-10 md:w-1/2 flex justify-center md:justify-end relative">
            {/* Using placeholder image for delivery person */}
            <div className="relative w-64 h-64">
              <img 
                src="https://images2.imgbox.com/29/dd/dbpJs93C_o.png" 
                alt="Delivery person with fresh vegetables" 
                className="object-contain"
              />
              
              {/* Floating vegetables */}
              <div className="absolute -top-4 -right-4 w-16 h-16">
                <img 
                  src="https://images.squarespace-cdn.com/content/v1/60d5fe5c9e25003cd4b3b2ed/1634316438635-27FNWQSMMPRHWXB0MLGJ/green-cabbage-envato.jpg" 
                  alt="Fresh vegetables" 
                  className="rounded-full object-cover"
                />
              </div>
              <div className="absolute top-1/2 -left-6 w-16 h-16">
                <img 
                  src="https://m.media-amazon.com/images/I/513HffSwDfL._AC_UF1000,1000_QL80_.jpg" 
                  alt="Fresh vegetables" 
                  className="rounded-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 right-1/3 w-14 h-14">
                <img 
                  src="https://healthwire.pk/wp-content/uploads/2022/08/green-leafy-vegetables.jpg" 
                  alt="Fresh vegetables" 
                  className="rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}