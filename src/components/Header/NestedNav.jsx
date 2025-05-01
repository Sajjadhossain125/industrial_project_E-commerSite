import React, { useState, useRef, useEffect } from 'react'
import { Outlet, Link } from 'react-router-dom'
// CategoryItem component for individual category
const CategoryItem = ({ category }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div 
      className="px-4 py-2 hover:bg-gray-50 transition-colors duration-200"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div 
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="font-medium text-gray-800 hover:text-green-500 transition-colors duration-200">{category.name}</span>
        <svg 
          className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isExpanded ? 'transform rotate-90' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </div>
      
      <div 
        className={`pl-4 mt-1 border-l-2 border-green-200 overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        {category.subcategories.map((subcat, subIndex) => (
          <div 
            key={subIndex} 
            className="py-2 text-sm text-gray-600 hover:text-green-500 cursor-pointer transition-colors duration-200 hover:pl-1"
          >
            {subcat}
          </div>
        ))}
      </div>
    </div>
  );
};

// CategoryList component
const CategoryList = ({ categories }) => {
  return (
    <>
      {categories.map((category, index) => (
        <CategoryItem key={index} category={category} />
      ))}
    </>
  );
};

export default function NestedNavbar() {
  const [showCategories, setShowCategories] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const categoriesRef = useRef(null);
  
  // Sample categories data
  const categories = [
    { name: "Fruits & Vegetables", subcategories: ["Fresh Fruits", "Vegetables", "Herbs & Seasonings"] },
    { name: "Meat & Seafood", subcategories: ["Beef", "Poultry", "Fish", "Shellfish"] },
    { name: "Bakery", subcategories: ["Bread", "Cakes", "Pastries", "Cookies"] },
    { name: "Beverages", subcategories: ["Coffee", "Tea", "Juices", "Soft Drinks"] },
    { name: "Dairy & Eggs", subcategories: ["Milk", "Cheese", "Yogurt", "Eggs"] },
    { name: "Frozen Foods", subcategories: ["Ice Cream", "Frozen Meals", "Frozen Vegetables"] }
  ];

  // Close categories dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (categoriesRef.current && !categoriesRef.current.contains(event.target)) {
        setShowCategories(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [categoriesRef]);
  
  return (
    <div className="w-full relative" ref={categoriesRef}>
      {/* Main Navbar */}
      <div className="border-b border-gray-200 h-auto md:h-[73px] max-w-full sticky top-0 bg-white z-40 shadow-sm">
        <div className="container mx-auto px-4 h-full flex flex-col md:flex-row items-center justify-between">
          
          {/* Mobile Menu Button - Only visible on mobile */}
          <div className="flex w-full md:hidden justify-between items-center py-4">
            <button 
              className="text-gray-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
            
            {/* Logo placeholder for mobile */}
            <div className="text-green-500 font-bold text-xl">LOGO</div>
            
            {/* Mobile phone */}
            <div className="md:hidden">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
            </div>
          </div>
          
          {/* Left Section - Browse Categories Button */}
          <div className={`${mobileMenuOpen ? 'flex' : 'hidden'} md:flex items-center h-full py-4 md:py-0`}>
            <button 
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md flex items-center h-10 w-full md:w-auto transition-colors duration-200 shadow-sm"
              onClick={() => setShowCategories(!showCategories)}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
              <span className="font-medium">Browse All Categories</span>
              <svg 
                className={`w-4 h-4 ml-2 transform transition-transform duration-300 ease-in-out ${showCategories ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
          </div>

          {/* Center Navigation Items */}
          <div className={`${mobileMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 flex-grow justify-center py-4 md:py-0 w-full md:w-auto transition-all duration-300 ease-in-out`}>
            {/* Deals with dot icon */}
            <a href="#" className="flex items-center text-gray-600 hover:text-green-500 w-full md:w-auto group transition-all duration-200">
              <span className="relative">
                <svg className="w-5 h-5 text-red-500 mr-1 group-hover:animate-pulse" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="8" />
                </svg>
              </span>
              <span className="font-medium">Deals</span>
            </a>
            
            {/* Regular nav items */}
            <Link to="/" className="font-medium text-gray-600 hover:text-green-500 w-full md:w-auto relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </Link>
            <Link to="/about" className="font-medium text-gray-600 hover:text-green-500 w-full md:w-auto relative group">About</Link>
            <Link to="/shop" className="font-medium text-gray-600 hover:text-green-500 w-full md:w-auto relative group">Shop</Link>
           
            
            <Link to="/contract" className="font-medium text-gray-600 hover:text-green-500 w-full md:w-auto relative group">Contract</Link>
            <Link to="/blog" className="font-medium text-gray-600 hover:text-green-500 w-full md:w-auto relative group">Blog</Link>
            
            
           
            
           
          </div>

          {/* Right Section - Support Phone */}
          <div className={`${mobileMenuOpen ? 'flex' : 'hidden'} md:flex items-center py-4 md:py-0`}>
            <div className="flex items-center">
              <div className="mr-3 hidden md:block">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <div>
                <div className="text-green-500 font-bold text-lg">1900 - 888</div>
                <div className="text-gray-500 text-xs">24/7 Support Center</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Categories Dropdown - Better positioned and more interactive */}
      {showCategories && (
        <div className="fixed left-0 right-0 top-auto md:absolute md:left-4 md:right-auto w-full md:w-72 bg-white shadow-xl z-50 border border-gray-200 rounded-lg mt-0 md:mt-1 transition-all duration-300 ease-in-out">
          <div className="max-h-96 overflow-y-auto py-2">
            <CategoryList categories={categories} />
          </div>
        </div>
      )}
    </div>
  )
}