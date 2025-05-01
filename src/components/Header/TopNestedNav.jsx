export default function Adbar(){
    return(<>
        <div className="bg-gray-100 py-2 px-4 text-sm border-b border-gray-200">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        {/* Left side navigation links */}
        <nav>
          <ul className="flex flex-wrap space-x-1 md:space-x-2">
            <li><a href="#" className="hover:text-blue-600 transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors"><span className="mx-1 text-gray-400">|</span> My Account</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors"><span className="mx-1 text-gray-400">|</span> Wishlist</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors"><span className="mx-1 text-gray-400">|</span> Order Tracking</a></li>
          </ul>
        </nav>
        
        {/* Right side info */}
        <div className="flex items-center space-x-4 mt-2 md:mt-0">
          <div className="flex items-center">
            <span className="text-gray-600">Need help? Call Us: </span>
            <a href="tel:+880 1624592483" className="ml-1 font-medium text-blue-600 hover:underline">+880 1624592483</a>
          </div>
          
          <div className="relative group">
            <button className="flex items-center text-gray-600 hover:text-blue-600">
              <span>English</span>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div className="absolute hidden group-hover:block mt-1 bg-white shadow-md rounded py-1 w-24 z-10">
              <a href="#" className="block px-4 py-1 hover:bg-gray-100">English</a>
              <a href="#" className="block px-4 py-1 hover:bg-gray-100">Spanish</a>
              <a href="#" className="block px-4 py-1 hover:bg-gray-100">French</a>
            </div>
          </div>
          
          <div className="relative group">
            <button className="flex items-center text-gray-600 hover:text-blue-600">
              <span>USD</span>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div className="absolute hidden group-hover:block mt-1 bg-white shadow-md rounded py-1 w-24 z-10">
              <a href="#" className="block px-4 py-1 hover:bg-gray-100">USD</a>
              <a href="#" className="block px-4 py-1 hover:bg-gray-100">EUR</a>
              <a href="#" className="block px-4 py-1 hover:bg-gray-100">GBP</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>)
}