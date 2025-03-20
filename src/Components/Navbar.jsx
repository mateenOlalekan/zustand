import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, Heart, User, ChevronDown, Menu, X, Bell, ArrowRight } from 'lucide-react';

const NavbarAndHero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [cartItems, setCartItems] = useState(3);
  
  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);
  
  const categories = [
    {
      name: "Electronics",
      subcategories: ["Smartphones", "Laptops", "Tablets", "Accessories", "Wearables", "Audio"]
    },
    {
      name: "Fashion",
      subcategories: ["Men's Clothing", "Women's Clothing", "Footwear", "Accessories", "Jewelry", "Watches"]
    },
    {
      name: "Home & Living",
      subcategories: ["Furniture", "Decor", "Kitchen", "Bedding", "Lighting", "Storage"]
    },
    {
      name: "Beauty",
      subcategories: ["Skincare", "Makeup", "Haircare", "Fragrances", "Bath & Body", "Tools"]
    }
  ];

  // Handle category hover for desktop dropdown
  const handleCategoryHover = (categoryName) => {
    setActiveCategory(categoryName);
  };
  
  return (
    <div className="w-full">
      {/* Top announcement bar */}
      <div className="bg-indigo-700 text-white py-2 px-4">
        <div className="container mx-auto text-center text-sm">
          <p>Free shipping on all orders over $50! Limited time offer. <span className="underline font-medium">Learn more</span></p>
        </div>
      </div>
      
      {/* Main Navbar */}
      <header className={`bg-white ${scrolled ? 'shadow-lg' : 'shadow-md'} sticky top-0 z-50 transition-all duration-300`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex-shrink-0 font-bold text-2xl">
              <span className="text-indigo-600">Shop</span>
              <span className="text-indigo-900">Wave</span>
            </div>
            
            {/* Search Bar - Hidden on Mobile */}
            <div className="hidden md:flex flex-grow max-w-md mx-6">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full pl-4 pr-12 py-2.5 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="absolute right-0 top-0 mt-2.5 mr-4 text-gray-500 hover:text-indigo-600 transition-colors duration-200">
                  <Search size={20} />
                </button>
              </div>
            </div>
            
            {/* Right Navigation - Hidden on Mobile */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="#" className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors duration-200">
                <Bell size={20} className="mr-1" />
                <span className="text-sm font-medium">Notifications</span>
              </a>
              <a href="#" className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors duration-200">
                <Heart size={20} className="mr-1" />
                <span className="text-sm font-medium">Wishlist</span>
              </a>
              <a href="#" className="flex items-center text-gray-700 hover:text-indigo-600 group relative transition-colors duration-200">
                <div className="relative">
                  <ShoppingCart size={20} className="mr-1" />
                  <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center group-hover:bg-indigo-700 transition-colors duration-200">
                    {cartItems}
                  </span>
                </div>
                <span className="text-sm font-medium">Cart</span>
              </a>
              <a href="#" className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors duration-200">
                <User size={20} className="mr-1" />
                <span className="text-sm font-medium">Account</span>
              </a>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="flex md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 focus:outline-none"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
          
          {/* Category Navigation - Hidden on Mobile */}
          <nav className="hidden md:block border-t border-gray-200">
            <ul className="flex justify-center py-3 space-x-12">
              {categories.map((category) => (
                <li 
                  key={category.name} 
                  className="relative group"
                  onMouseEnter={() => handleCategoryHover(category.name)}
                  onMouseLeave={() => handleCategoryHover(null)}
                >
                  <a href="#" className="flex items-center text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200">
                    {category.name}
                    <ChevronDown size={16} className="ml-1 group-hover:transform group-hover:rotate-180 transition-transform duration-200" />
                  </a>
                  
                  {/* Dropdown Menu with enhanced UI */}
                  {activeCategory === category.name && (
                    <div className="absolute left-0 mt-3 w-60 bg-white shadow-xl rounded-lg py-3 z-10 border border-gray-100 transition-all duration-200 opacity-100">
                      <div className="absolute top-0 left-6 -mt-2 w-4 h-4 bg-white transform rotate-45 border-t border-l border-gray-100"></div>
                      {category.subcategories.map((subcat) => (
                        <a 
                          key={subcat} 
                          href="#" 
                          className="flex justify-between items-center px-5 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-200"
                        >
                          <span>{subcat}</span>
                          <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        </a>
                      ))}
                      <div className="mt-2 pt-2 border-t border-gray-100 px-5">
                        <a href="#" className="text-indigo-600 text-sm font-medium hover:text-indigo-800 transition-colors duration-200">
                          View All {category.name} →
                        </a>
                      </div>
                    </div>
                  )}
                </li>
              ))}
              <li>
                <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200">Sale</a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200">New Arrivals</a>
              </li>
            </ul>
          </nav>
        </div>
        
        {/* Mobile Menu - Slide from Left with 5s duration */}
        <div 
          className={`fixed inset-y-0 left-0 z-50 w-72 bg-white shadow-xl transform transition-transform duration-[5000ms] ease-in-out ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } md:hidden`}
        >
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <div className="font-bold text-xl">
              <span className="text-indigo-600">Shop</span>
              <span className="text-indigo-900">Wave</span>
            </div>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-500 hover:text-indigo-600 transition-colors duration-200 focus:outline-none"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="px-4 py-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full pl-4 pr-10 py-2.5 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="absolute right-0 top-0 mt-2.5 mr-3 text-gray-500 hover:text-indigo-600 transition-colors duration-200">
                <Search size={20} />
              </button>
            </div>
          </div>
          
          <nav className="h-full overflow-y-auto pb-20">
            <ul className="divide-y divide-gray-100">
              {categories.map((category) => (
                <li key={category.name} className="py-1">
                  <div className="px-4 py-2.5 flex justify-between items-center">
                    <span className="font-medium text-gray-800">{category.name}</span>
                    <ChevronDown size={16} className="text-gray-400" />
                  </div>
                  <ul className="bg-gray-50 pl-8 py-2">
                    {category.subcategories.slice(0, 4).map((subcat) => (
                      <li key={subcat}>
                        <a href="#" className="block py-2 text-sm text-gray-700 hover:text-indigo-600 transition-colors duration-200">
                          {subcat}
                        </a>
                      </li>
                    ))}
                    <li>
                      <a href="#" className="block py-2 text-sm text-indigo-600 font-medium hover:text-indigo-800 transition-colors duration-200">
                        View All →
                      </a>
                    </li>
                  </ul>
                </li>
              ))}
              <li>
                <a href="#" className="block px-4 py-3 text-gray-800 hover:bg-gray-50 transition-colors duration-200">
                  Sale
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-3 text-gray-800 hover:bg-gray-50 transition-colors duration-200">
                  New Arrivals
                </a>
              </li>
            </ul>
            
            <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 divide-y divide-gray-100">
              <a href="#" className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                <Heart size={20} className="mr-3 text-gray-500" />
                <span>Wishlist</span>
              </a>
              <a href="#" className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                <div className="relative">
                  <ShoppingCart size={20} className="mr-3 text-gray-500" />
                  <span className="absolute -top-2 -right-1 bg-indigo-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItems}
                  </span>
                </div>
                <span>Cart</span>
              </a>
              <a href="#" className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                <User size={20} className="mr-3 text-gray-500" />
                <span>Account</span>
              </a>
            </div>
          </nav>
        </div>
        
        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          ></div>
        )}
      </header>
      
      {/* Hero Section with enhanced UI */}
      <section className="relative bg-gradient-to-br from-gray-100 to-indigo-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="h-full w-auto text-indigo-300">
            <path fill="currentColor" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
        
        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left max-w-lg mx-auto md:mx-0">
              <span className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-800 font-medium rounded-full text-sm mb-6">
                Spring Collection 2025
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4 md:mb-6">
                Redefine Your <span className="text-indigo-600">Style</span> This Season
              </h1>
              <p className="text-lg text-gray-600 mb-8 md:mb-10">
                Discover the latest trends and styles carefully crafted for this season. Premium quality products at unbeatable prices with worldwide shipping.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a href="#" className="bg-indigo-600 text-white py-3.5 px-8 rounded-md font-medium hover:bg-indigo-700 text-center shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5">
                  Shop Now
                </a>
                <a href="#" className="border border-gray-300 text-gray-700 py-3.5 px-8 rounded-md font-medium hover:bg-gray-50 text-center hover:border-gray-400 transition-all duration-200">
                  Explore Collection
                </a>
              </div>
              
              <div className="mt-8 flex items-center justify-center md:justify-start">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200"></div>
                  ))}
                </div>
                <div className="ml-4 text-sm text-gray-500">
                  <span className="font-medium text-gray-800">2,500+</span> happy customers
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10 h-80 md:h-auto">
                <img 
                  src="/api/placeholder/600/700" 
                  alt="New collection showcase" 
                  className="rounded-xl shadow-2xl object-cover w-full h-full"
                />
                <div className="absolute top-4 right-4 bg-white py-1.5 px-4 rounded-full text-sm font-medium text-indigo-600 shadow-md">
                  New Arrival
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-3 rounded-xl shadow-lg w-32">
                  <div className="text-xs text-gray-500">Limited Edition</div>
                  <div className="font-bold text-lg text-indigo-600">-30% OFF</div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-300 rounded-full blur-3xl opacity-20"></div>
              <div className="absolute -z-10 -top-10 -right-10 w-40 h-40 bg-pink-300 rounded-full blur-3xl opacity-20"></div>
              <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-yellow-300 rounded-full blur-3xl opacity-20"></div>
            </div>
          </div>
        </div>
        
        {/* Feature Badges with enhanced UI */}
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 divide-x divide-gray-100">
              <div className="p-6 text-center hover:bg-gray-50 transition-colors duration-200">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                </div>
                <div className="font-medium text-gray-800 text-lg mb-1">Free Shipping</div>
                <div className="text-gray-500">On orders over $50</div>
              </div>
              <div className="p-6 text-center hover:bg-gray-50 transition-colors duration-200">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z" />
                  </svg>
                </div>
                <div className="font-medium text-gray-800 text-lg mb-1">Easy Returns</div>
                <div className="text-gray-500">30-day return policy</div>
              </div>
              <div className="p-6 text-center hover:bg-gray-50 transition-colors duration-200">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="font-medium text-gray-800 text-lg mb-1">Secure Payment</div>
                <div className="text-gray-500">100% secure checkout</div>
              </div>
              <div className="p-6 text-center hover:bg-gray-50 transition-colors duration-200">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div className="font-medium text-gray-800 text-lg mb-1">24/7 Support</div>
                <div className="text-gray-500">Customer service</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NavbarAndHero;