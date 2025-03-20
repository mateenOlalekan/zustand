import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="font-bold text-2xl mb-4">
            <span className="text-indigo-600">Shop</span>
            <span className="text-indigo-900">Wave</span>
          </div>
          <p className="text-gray-400">Discover the latest trends and styles carefully crafted for this season.</p>
        </div>
        <div>
          <h3 className="font-medium text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors duration-200">Home</a></li>
            <li><a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors duration-200">Shop</a></li>
            <li><a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors duration-200">About Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors duration-200">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium text-lg mb-4">Customer Service</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors duration-200">FAQ</a></li>
            <li><a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors duration-200">Shipping & Returns</a></li>
            <li><a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors duration-200">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors duration-200">Terms & Conditions</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium text-lg mb-4">Newsletter</h3>
          <p className="text-gray-400 mb-4">Subscribe to our newsletter to get the latest updates and offers.</p>
          <form className="flex">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full px-4 py-2 rounded-l-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
            <button 
              type="submit" 
              className="bg-indigo-600 text-white px-4 py-2 rounded-r-md hover:bg-indigo-700 transition-colors duration-200"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        &copy; 2023 ShopWave. All rights reserved.
      </div>
    </div>
  </footer>
  )
}

export default Footer