import { useState } from "react";
const imageMap = import.meta.glob('../../assets/images/about/icons/*.png', {
  eager: true,
  import: 'default',
});

const imagePaths = Object.values(imageMap);

const ProductShowcase = () => {
  const [activeCategory, setActiveCategory] = useState("Top Selling");
  const [email, setEmail] = useState("");
  
  const categories = [
    "Top Selling",
    "Trending Products",
    "Recently added",
    "Top Rated"
  ];
  
  const products = {
    "Top Selling": [
      {
        id: 1,
        name: "Nestle Original Coffee-Mate Coffee Creamer",
        price: 32.85,
        originalPrice: 39.95,
        image: "/api/placeholder/80/80"
      },
      {
        id: 2,
        name: "Nestle Original Coffee-Mate Coffee Creamer",
        price: 32.85,
        originalPrice: 39.95,
        image: "/api/placeholder/80/80"
      },
      {
        id: 3,
        name: "Nestle Original Coffee-Mate Coffee Creamer",
        price: 32.85,
        originalPrice: 39.95,
        image: "/api/placeholder/80/80"
      }
    ],
    "Trending Products": [
      {
        id: 4,
        name: "Organic Cage-Free Grade A Large Brown Eggs",
        price: 32.85,
        originalPrice: 36.95,
        image: "/api/placeholder/80/80"
      },
      {
        id: 5,
        name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
        price: 32.85,
        originalPrice: 35.95,
        image: "/api/placeholder/80/80"
      },
      {
        id: 6,
        name: "Naturally Flavored Cinnamon Vanilla Light Roast Coffee",
        price: 32.85,
        originalPrice: 35.95,
        image: "/api/placeholder/80/80"
      }
    ],
    "Recently added": [
      {
        id: 7,
        name: "Pepperidge Farm Farmhouse Hearty White Bread",
        price: 32.85,
        originalPrice: 36.95,
        image: "/api/placeholder/80/80"
      },
      {
        id: 8,
        name: "Organic Frozen Triple Berry Blend",
        price: 32.85,
        originalPrice: 35.95,
        image: "/api/placeholder/80/80"
      },
      {
        id: 9,
        name: "Oroweat Country Buttermilk Bread",
        price: 32.85,
        originalPrice: 36.95,
        image: "/api/placeholder/80/80"
      }
    ],
    "Top Rated": [
      {
        id: 10,
        name: "Foster Farms Takeout Crispy Classic Buffalo Wings",
        price: 32.85,
        originalPrice: 36.95,
        image: "/api/placeholder/80/80"
      },
      {
        id: 11,
        name: "Angie's Boomchickapop Sweet & Salty Kettle Corn",
        price: 32.85,
        originalPrice: 39.95,
        image: "/api/placeholder/80/80"
      },
      {
        id: 12,
        name: "All Natural Indian-Style Chicken Meatballs",
        price: 32.85,
        originalPrice: 39.95,
        image: "/api/placeholder/80/80"
      }
    ]
  };

  const features = [
    {
      id: 1,
      title: "Best prices & offers",
      description: "Orders $50 or more",
      images: "./src/assets/images/about/icons/icon-1.png"
    },
    {
      id: 2,
      title: "Free delivery",
      description: "24/7 amazing services",
      images: "🚚"
    },
    {
      id: 3,
      title: "Great daily deal",
      description: "When you sign up",
      images: "📝"
    },
    {
      id: 4,
      title: "Wide assortment",
      description: "Mega Discounts",
      images: "🛒"
    },
    {
      id: 5,
      title: "Easy returns",
      description: "Within 30 days",
      images: "♻️" 
    }
  ];
  
  const formatPrice = (price) => {
    return price.toFixed(2);
  };

  const handleSubscribe = () => {
    alert(`Subscribed with email: ${email}`);
    setEmail("");
  };
  
  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* Category Tabs */}
      <div className="flex border-b mb-6 overflow-x-auto">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-8 py-4 text-lg font-medium whitespace-nowrap ${
              activeCategory === category
                ? "text-green-600 border-b-2 border-green-600"
                : "text-gray-500"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Product Grid - All categories displayed side by side */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {categories.map((category) => (
          <div key={category} className="space-y-6">
            {products[category].slice(0, 3).map((product) => (
              <div key={product.id} className="flex gap-4 items-center">
                <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-sm font-medium mb-1 line-clamp-2">{product.name}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-green-600 font-bold">${formatPrice(product.price)}</span>
                    <span className="text-gray-400 text-sm line-through">${formatPrice(product.originalPrice)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      
      {/* Subscription Banner */}
      <div className="bg-green-50 rounded-lg p-6 mb-8 flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold text-green-800 mb-2">
            Stay home & get your daily needs from our shop
          </h2>
          <p className="text-green-700 mb-4">Start Your Daily Shopping with Nest Mart</p>
          
          <div className="flex">
            <div className="bg-white rounded-l-full overflow-hidden flex items-center px-4 border border-r-0">
              <span className="text-gray-400 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </span>
              <input
                type="email"
                placeholder="Your email address"
                className="py-3 outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button 
              onClick={handleSubscribe} 
              className="bg-green-500 text-white px-6 py-3 rounded-r-full font-medium"
            >
              Subscribe
            </button>
          </div>
        </div>
        
        <div className="md:w-1/2 mt-6 md:mt-0 relative">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCuiCrj61jzL8COKwvBs2j02KkmkrZ6GRtyQ&s" 
            alt="Delivery person with groceries" 
            className="ml-auto"
          />
        </div>
      </div>
      
      {/* Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        {features.map((feature,index) => (
          <div key={feature.id} className="flex items-center p-4 border rounded-lg">
            <div className="text-3xl mr-4 text-green-500">
              <img src={imagePaths[index]} alt="" />
              </div>
            <div>
              <h3 className="font-medium">{feature.title}</h3>
              <p className="text-sm text-gray-500">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductShowcase;