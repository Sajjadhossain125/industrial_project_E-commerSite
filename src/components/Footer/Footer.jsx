export default function Footer() {
    return (
      <footer className="border-t border-gray-200 py-4 px-6">
        <div className="container mx-auto flex flex-wrap justify-between items-center text-sm text-gray-600">
          <div className="text-xs">
            © 2022 Next - HTML Ecommerce Template
            <br />
            All rights reserved.
          </div>
          
          <div className="flex space-x-8">
            <div className="flex items-center">
              {/* Phone icon replacement */}
              <div className="text-green-500 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div>
                <span className="text-green-500 font-semibold">1900 - 6666</span>
                <br />
                <span className="text-xs">Working 8:00 - 22:00</span>
              </div>
            </div>
            
            <div className="flex items-center">
              {/* Phone icon replacement */}
              <div className="text-green-500 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div>
                <span className="text-green-500 font-semibold">1900 - 8888</span>
                <br />
                <span className="text-xs">24/7 Support Center</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-end">
            <div className="flex items-center mb-1">
              <div className="mr-2 text-xs font-medium">Follow Us</div>
              <div className="flex space-x-2">
                {/* Simple circle with letter for Twitter */}
                <div className="bg-green-500 rounded-full p-1 w-6 h-6 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">T</span>
                </div>
                {/* Simple circle with letter for Facebook */}
                <div className="bg-green-500 rounded-full p-1 w-6 h-6 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">F</span>
                </div>
                {/* Simple circle with letter for Instagram */}
                <div className="bg-green-500 rounded-full p-1 w-6 h-6 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">I</span>
                </div>
                {/* Simple circle with letter for LinkedIn */}
                <div className="bg-green-500 rounded-full p-1 w-6 h-6 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">L</span>
                </div>
                {/* Simple circle with letter for YouTube */}
                <div className="bg-green-500 rounded-full p-1 w-6 h-6 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">Y</span>
                </div>
              </div>
            </div>
            <div className="flex items-center text-xs">
              <span>Up to 15% discount on your first subscribe</span>
              {/* Arrow up right icon replacement */}
              <div className="ml-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }