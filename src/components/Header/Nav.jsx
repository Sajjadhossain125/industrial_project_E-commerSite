import { useState } from 'react'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <div className="w-full">
      {/* Main Navbar */}
      <div className="border-b border-gray-200 py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo Section - Visible on all screens */}
            <div className="flex items-center z-20">
              <div className="mr-2">
                <div className="relative w-8 h-8 md:w-10 md:h-10 bg-green-100 rounded">
                  <div className="absolute top-1 left-1 w-6 h-6 md:w-8 md:h-8 bg-yellow-400 rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="flex items-center">
                  <span className="text-xl md:text-2xl font-bold text-green-500">Nest</span>
                  <span className="text-xs text-gray-500 ml-1 mt-1 md:mt-2 hidden sm:inline">MART & GROCERY</span>
                </div>
              </div>
            </div>

            {/* Mobile Menu Burger */}
            <button 
              className="p-2 rounded-md text-gray-600 hover:text-green-500 z-20 md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>

            {/* Categories Dropdown - Hidden on mobile */}
            <div className="hidden md:flex items-center border rounded-md px-3 py-2 bg-gray-50">
              <span className="text-sm font-medium mr-2">All Categories</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>

            {/* Search Bar - Hidden on very small screens, separate full-width bar when focused on mobile */}
            <div className={`${searchFocused ? 'absolute left-0 right-0 top-0 bg-white p-4 z-10' : 'hidden'} sm:relative sm:flex-1 sm:mx-4 sm:block`}>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for items..."
                  className="w-full rounded-md border border-gray-300 pl-4 pr-10 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </button>
                {searchFocused && (
                  <button 
                    className="absolute right-10 top-1/2 transform -translate-y-1/2 text-gray-400 sm:hidden"
                    onClick={() => setSearchFocused(false)}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                )}
              </div>
            </div>

            {/* Search Toggle for Small Screens */}
            <button 
              className="p-2 rounded-md text-gray-600 hover:text-green-500 sm:hidden"
              onClick={() => setSearchFocused(true)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>

            {/* Location Dropdown - Hidden on mobile */}
            <div className="hidden md:flex items-center mr-4">
              <button className="flex items-center text-sm text-gray-600">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span>Your Location</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
            </div>

            {/* Right Icons - Show Cart only on mobile, rest on larger screens */}
            <div className="flex items-center space-x-2 md:space-x-4">
              {/* Compare - Hidden on mobile */}
              <div className="hidden md:block relative">
                <a href="#" className="text-gray-600 hover:text-green-500">
                  <div className="relative">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
                    </svg>
                    <span className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 text-white text-xs flex items-center justify-center rounded-full">2</span>
                  </div>
                  <span className="text-xs block mt-1 text-center">Compare</span>
                </a>
              </div>

              {/* Wishlist - Hidden on mobile */}
              <div className="hidden md:block relative">
                <a href="#" className="text-gray-600 hover:text-green-500">
                  <div className="relative">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                    <span className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 text-white text-xs flex items-center justify-center rounded-full">3</span>
                  </div>
                  <span className="text-xs block mt-1 text-center">Wishlist</span>
                </a>
              </div>

              {/* Cart - Always visible */}
              <div className="relative">
                <a href="#" className="text-gray-600 hover:text-green-500">
                  <div className="relative">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                    </svg>
                    <span className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 text-white text-xs flex items-center justify-center rounded-full">5</span>
                  </div>
                  <span className="text-xs block mt-1 text-center">Cart</span>
                </a>
              </div>

              {/* Account - Hidden on mobile */}
              <div className="hidden md:block relative">
                <a href="#" className="text-gray-600 hover:text-green-500">
                  <div className="relative">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                  </div>
                  <span className="text-xs block mt-1 text-center">Account</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-10 bg-white">
          <div className="container mx-auto px-4 py-8 h-full overflow-y-auto">
            <div className="space-y-6">
              {/* Categories */}
              <div className="border-b pb-4">
                <h3 className="text-lg font-medium mb-3">All Categories</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-gray-600">Vegetables & Fruits</a></li>
                  <li><a href="#" className="text-gray-600">Dairy & Bakery</a></li>
                  <li><a href="#" className="text-gray-600">Meat & Seafood</a></li>
                  <li><a href="#" className="text-gray-600">Snacks & Beverages</a></li>
                  <li><a href="#" className="text-gray-600">Frozen Foods</a></li>
                </ul>
              </div>
              
              {/* Location */}
              <div className="border-b pb-4">
                <h3 className="text-lg font-medium mb-3">Your Location</h3>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <select className="form-select border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-green-500">
                    <option>New York, USA</option>
                    <option>Los Angeles, USA</option>
                    <option>Chicago, USA</option>
                    <option>Houston, USA</option>
                  </select>
                </div>
              </div>
              
              {/* Hidden icons on desktop */}
              <div className="grid grid-cols-3 gap-4 border-b pb-4">
                <a href="#" className="flex flex-col items-center p-2 text-gray-600">
                  <div className="relative">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
                    </svg>
                    <span className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 text-white text-xs flex items-center justify-center rounded-full">2</span>
                  </div>
                  <span className="text-xs mt-1">Compare</span>
                </a>
                <a href="#" className="flex flex-col items-center p-2 text-gray-600">
                  <div className="relative">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                    <span className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 text-white text-xs flex items-center justify-center rounded-full">3</span>
                  </div>
                  <span className="text-xs mt-1">Wishlist</span>
                </a>
                <a href="#" className="flex flex-col items-center p-2 text-gray-600">
                  <div className="relative">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                  </div>
                  <span className="text-xs mt-1">Account</span>
                </a>
              </div>
              
              {/* Additional mobile menu items */}
              <div>
                <ul className="space-y-4">
                  <li><a href="#" className="text-gray-800 font-medium">Home</a></li>
                  <li><a href="#" className="text-gray-800 font-medium">Shop</a></li>
                  <li><a href="#" className="text-gray-800 font-medium">Deals</a></li>
                  <li><a href="#" className="text-gray-800 font-medium">About</a></li>
                  <li><a href="#" className="text-gray-800 font-medium">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}