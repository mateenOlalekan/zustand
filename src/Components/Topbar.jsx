import React, { useState, useEffect, useRef } from 'react';
import { Search, ShoppingCart, Heart, User, ChevronDown, Menu, X, Bell, ArrowRight, ChevronRight, Star, TrendingUp, Filter, Zap, Clock, Award } from 'lucide-react';


const ECommerceHomepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [cartItems, setCartItems] = useState(3);
  const [openMobileCategory, setOpenMobileCategory] = useState(null);
  
  // Refs for dropdown menus
  const dropdownRefs = useRef({});
  
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
  
  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeCategory && dropdownRefs.current[activeCategory] && 
          !dropdownRefs.current[activeCategory].contains(event.target)) {
        setActiveCategory(null);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeCategory]);
  
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

  // Toggle mobile category dropdown
  const toggleMobileCategory = (categoryName) => {
    if (openMobileCategory === categoryName) {
      setOpenMobileCategory(null);
    } else {
      setOpenMobileCategory(categoryName);
    }
  };

  // Handle category hover for desktop dropdown
  const handleCategoryHover = (categoryName) => {
    setActiveCategory(categoryName);
  };
  

  

  

  
  return (
    <div className={`fixed z-50 w-full`}>
      {/* Top announcement bar */}
      <div className="bg-yellow-400 text-white py-1 px-4">
        <div className="max-w-screen-2xl mx-auto text-center text-sm">
          <p>Free shipping on all orders over $50! Limited time offer. <span className="underline font-medium">Learn more</span></p>
        </div>
      </div>
      

      <header className={`bg-white ${scrolled ? 'shadow-lg' : 'shadow-md'} sticky top-0 z-50 transition-all duration-400`}>
        <div className="max-w-screen-2xl mx-auto px-4">
          <div className="flex items-center justify-between py-2">
            {/* Logo */}
            <div className="flex-shrink-0 font-bold text-2xl">
              <span className="text-yellow-600">Shop</span>
              <span className="text-yellow-900">Wave</span>
            </div>
            <nav className="hidden md:block border-t border-gray-200">
            <ul className="flex justify-center py-3 space-x-12">
              {categories.map((category) => (
                <li 
                  key={category.name} 
                  className="relative group"
                  ref={el => dropdownRefs.current[category.name] = el}
                  onMouseEnter={() => handleCategoryHover(category.name)}
                >
                  <a href="#" className="flex items-center text-gray-600 hover:text-yellow-600 font-medium transition-colors duration-200">
                    {category.name}
                    <ChevronDown size={16} className={`ml-1 transition-transform duration-200 ${activeCategory === category.name ? 'rotate-180' : ''}`} />
                  </a>
                  
                  {/* Dropdown Menu with enhanced UI */}
                  {activeCategory === category.name && (
                    <div className="absolute left-0 mt-3 w-60 bg-white shadow-xl rounded-lg py-3 z-10 border border-gray-100 transition-all duration-200 opacity-100">
                      <div className="absolute top-0 left-6 -mt-2 w-4 h-4 bg-white transform rotate-45 border-t border-l border-gray-100"></div>
                      {category.subcategories.map((subcat) => (
                        <a 
                          key={subcat} 
                          href="#" 
                          className="flex justify-between items-center px-5 py-2 text-gray-600 hover:bg-yellow-50 hover:text-yellow-600 transition-colors duration-200"
                        >
                          <span>{subcat}</span>
                          <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        </a>
                      ))}
                      <div className="mt-2 pt-2 border-t border-gray-100 px-5">
                        <a href="#" className="text-yellow-600 text-sm font-medium hover:text-yellow-800 transition-colors duration-200">
                          View All {category.name} →
                        </a>
                      </div>
                    </div>
                  )}
                </li>
              ))}
              <li>
                <a href="#" className="text-gray-600 hover:text-yellow-600 font-medium transition-colors duration-200">Sale</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-yellow-600 font-medium transition-colors duration-200">New Arrivals</a>
              </li>
            </ul>
          </nav>            
            {/* Search Bar - Hidden on Mobile */}

            
            {/* Right Navigation - Hidden on Mobile */}
            <div className="hidden md:flex items-center space-x-2">
            <div className="hidden md:flex flex-grow max-w-sm mx-2">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full pl-4 pr-12 py-1 border-2 border-yellow-400  rounded-full focus:outline-none focus:ring-2 ring-yellow-400 focus:border-transparent transition-all duration-200"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="absolute right-0 top-0 mt-1 mr-4 text-gray-600 hover:text-yellow-600 transition-colors duration-200">
                  <Search size={20} />
                </button>
              </div>
            </div>
              <a href="#" className="flex items-center text-gray-600 hover:text-yellow-600 transition-colors duration-200">
                <Bell size={20} className="mr-1" />
              </a>
              <a href="#" className="flex items-center text-gray-600 hover:text-yellow-600 transition-colors duration-200">
                <Heart size={20} className="mr-1" />
              </a>
              <a href="#" className="flex items-center text-gray-600 hover:text-yellow-600 group relative transition-colors duration-200">
                <div className="relative">
                  <ShoppingCart size={20} className="mr-1" />
                  <span className="absolute -top-2 -right-2 bg-yellow-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center group-hover:bg-yellow-400 transition-colors duration-200">
                    {cartItems}
                  </span>
                </div>

              </a>
              <a href="#" className="flex items-center text-gray-600 hover:text-yellow-600 transition-colors duration-200">
                <User size={20} className="mr-1" />
              </a>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="flex md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="text-gray-600 hover:text-yellow-600 transition-colors duration-200 focus:outline-none"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
          
          {/* Category Navigation - Hidden on Mobile */}

        </div>
        
        {/* Mobile Menu - Slide from Left with normal duration */}
        <div 
          className={`fixed inset-y-0 left-0 z-50 w-72 bg-white shadow-xl transform transition-transform duration-400 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } md:hidden`}
        >
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <div className="font-bold text-xl">
              <span className="text-yellow-600">Shop</span>
              <span className="text-yellow-900">Wave</span>
            </div>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-600 hover:text-yellow-600 transition-colors duration-200 focus:outline-none"
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
                className="w-full pl-4 pr-10 py-2.5 border border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-200"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="absolute right-0 top-0 mt-2.5 mr-3 text-gray-600 hover:text-yellow-600 transition-colors duration-200">
                <Search size={20} />
              </button>
            </div>
          </div>
          
          <nav className="h-full overflow-y-auto pb-20">
            <ul className="divide-y divide-gray-100">
              {categories.map((category) => (
                <li key={category.name} className="py-1">
                  <div 
                    className="px-4 py-2.5 flex justify-between items-center cursor-pointer"
                    onClick={() => toggleMobileCategory(category.name)}
                  >
                    <span className="font-medium text-gray-800">{category.name}</span>
                    <ChevronDown 
                      size={16} 
                      className={`text-gray-600 transition-transform duration-200 ${openMobileCategory === category.name ? 'rotate-180' : ''}`} 
                    />
                  </div>
                  <ul className={`bg-gray-50 pl-8 py-2 transition-all duration-200 ease-in-out ${openMobileCategory === category.name ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    {category.subcategories.map((subcat) => (
                      <li key={subcat}>
                        <a href="#" className="block py-2 text-sm text-gray-600 hover:text-yellow-600 transition-colors duration-200">
                          {subcat}
                        </a>
                      </li>
                    ))}
                    <li>
                      <a href="#" className="block py-2 text-sm text-yellow-600 font-medium hover:text-yellow-800 transition-colors duration-200">
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
              <a href="#" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50 transition-colors duration-200">
                <Heart size={20} className="mr-3 text-gray-600" />
                <span>Wishlist</span>
              </a>
              <a href="#" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50 transition-colors duration-200">
                <div className="relative">
                  <ShoppingCart size={20} className="mr-3 text-gray-600" />
                  <span className="absolute -top-2 -right-1 bg-yellow-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItems}
                  </span>
                </div>
                <span>Cart</span>
              </a>
              <a href="#" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50 transition-colors duration-200">
                <User size={20} className="mr-3 text-gray-600" />
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
      


      


    </div>
  );
};

export default ECommerceHomepage;