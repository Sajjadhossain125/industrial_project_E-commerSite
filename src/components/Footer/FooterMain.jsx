export default function Footermain() {
    return (
      <footer className="bg-white py-12 px-6 border-t border-gray-200">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Company Info Column */}
            <div className="col-span-1">
              <div className="flex items-center mb-4">
                <div className="mr-2">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12C24 5.373 29.373 0 36 0H48V24C48 37.255 37.255 48 24 48C10.745 48 0 37.255 0 24C0 10.745 10.745 0 24 0V12Z" fill="#BCE3C9"/>
                    <path d="M36 0C42.627 0 48 5.373 48 12V24C48 37.255 37.255 48 24 48V36C24 29.373 29.373 24 36 24V0Z" fill="#8CC63F"/>
                  </svg>
                </div>
                <div>
                  <h2 className="text-green-500 font-bold text-xl">Nest</h2>
                  <p className="text-xs text-gray-500">ONLINE GROCERY</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">Awesome grocery store website template</p>
              
              <div className="flex items-start mb-3">
                <div className="text-green-500 mr-2 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="text-sm text-gray-600">
                  <strong>Address:</strong> 5171 W Campbell Ave<br/>
                  undefined Kent, Utah 53127 United States
                </div>
              </div>
  
              <div className="flex items-center mb-3">
                <div className="text-green-500 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="text-sm text-gray-600">
                  <strong>Call Us:</strong> (+91) - 540-025-124553
                </div>
              </div>
  
              <div className="flex items-center mb-3">
                <div className="text-green-500 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="text-sm text-gray-600">
                  <strong>Email:</strong> sale@Nest.com
                </div>
              </div>
  
              <div className="flex items-center mb-3">
                <div className="text-green-500 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div className="text-sm text-gray-600">
                  <strong>Hours:</strong> 10:00 - 18:00, Mon - Sat
                </div>
              </div>
            </div>
  
            {/* Company Column */}
            <div className="col-span-1">
              <h3 className="text-gray-800 font-semibold mb-6">Company</h3>
              <ul className="space-y-4 text-sm text-gray-600">
                <li>About Us</li>
                <li>Delivery Information</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Contact Us</li>
                <li>Support Center</li>
                <li>Careers</li>
              </ul>
            </div>
  
            {/* Account Column */}
            <div className="col-span-1">
              <h3 className="text-gray-800 font-semibold mb-6">Account</h3>
              <ul className="space-y-4 text-sm text-gray-600">
                <li>Sign In</li>
                <li>View Cart</li>
                <li>My Wishlist</li>
                <li>Track My Order</li>
                <li>Help Ticket</li>
                <li>Shipping Details</li>
                <li>Compare products</li>
              </ul>
            </div>
  
            {/* Corporate Column */}
            <div className="col-span-1">
              <h3 className="text-gray-800 font-semibold mb-6">Corporate</h3>
              <ul className="space-y-4 text-sm text-gray-600">
                <li>Become a Vendor</li>
                <li>Affiliate Program</li>
                <li>Farm Business</li>
                <li>Farm Careers</li>
                <li>Our Suppliers</li>
                <li>Accessibility</li>
                <li>Promotions</li>
              </ul>
            </div>
  
            {/* Popular Column */}
            <div className="col-span-1">
              <h3 className="text-gray-800 font-semibold mb-6">Popular</h3>
              <ul className="space-y-4 text-sm text-gray-600">
                <li>Milk & Flavoured Milk</li>
                <li>Butter and Margarine</li>
                <li>Eggs Substitutes</li>
                <li>Marmalades</li>
                <li>Sour Cream and Dips</li>
                <li>Tea & Kombucha</li>
                <li>Cheese</li>
              </ul>
            </div>
          </div>
  
          {/* Install App Section */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-4">
              {/* This space is intentionally left blank to match layout */}
            </div>
            <div className="col-span-1">
              <h3 className="text-gray-800 font-semibold mb-4">Install App</h3>
              <p className="text-sm text-gray-600 mb-4">From App Store or Google Play</p>
              <div className="flex space-x-2 mb-4">
                <img src="/api/placeholder/120/40" alt="App Store" className="h-10" />
                <img src="/api/placeholder/120/40" alt="Google Play" className="h-10" />
              </div>
              <p className="text-sm text-gray-600 mb-2">Secured Payment Gateways</p>
              <div className="flex space-x-2">
                <img src="/api/placeholder/40/24" alt="Visa" className="h-6" />
                <img src="/api/placeholder/40/24" alt="Mastercard" className="h-6" />
                <img src="/api/placeholder/40/24" alt="PayPal" className="h-6" />
                <img src="/api/placeholder/40/24" alt="Amex" className="h-6" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }