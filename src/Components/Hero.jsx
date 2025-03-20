
      
      const categoryCards = [
        {
          id: 1,
          name: "Electronics",
          image: "/api/placeholder/400/240",
          itemCount: 1245
        },
        {
          id: 2,
          name: "Fashion",
          image: "/api/placeholder/400/240",
          itemCount: 2341
        },
        {
          id: 3,
          name: "Home & Living",
          image: "/api/placeholder/400/240",
          itemCount: 1823
        },
        {
          id: 4,
          name: "Beauty",
          image: "/api/placeholder/400/240",
          itemCount: 1436
        }
      ];
function Hero() {

  return (
    <>
      <section className="relative bg-gradient-to-br from-gray-100 to-blue-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="h-full w-auto text-blue-300">
            <path fill="currentColor" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
        
        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left max-w-lg mx-auto md:mx-0">
              <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-800 font-medium rounded-full text-sm mb-6">
                Spring Collection 2025
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4 md:mb-6">
                Redefine Your <span className="text-blue-600">Style</span> This Season
              </h1>
              <p className="text-lg text-gray-600 mb-8 md:mb-10">
                Discover the latest trends and styles carefully crafted for this season. Premium quality products at unbeatable prices with worldwide shipping.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a href="#" className="bg-blue-600 text-white py-3.5 px-8 rounded-md font-medium hover:bg-blue-700 text-center shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5">
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
                <div className="absolute top-4 right-4 bg-white py-1.5 px-4 rounded-full text-sm font-medium text-blue-600 shadow-md">
                  New Arrival
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-3 rounded-xl shadow-lg w-32">
                  <div className="text-xs text-gray-500">Limited Edition</div>
                  <div className="font-bold text-lg text-blue-600">-30% OFF</div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-300 rounded-full blur-3xl opacity-20"></div>
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
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                </div>
                <div className="font-medium text-gray-800 text-lg mb-1">Free Shipping</div>
                <div className="text-gray-500">On orders over $50</div>
              </div>
              <div className="p-6 text-center hover:bg-gray-50 transition-colors duration-200">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z" />
                  </svg>
                </div>
                <div className="font-medium text-gray-800 text-lg mb-1">Easy Returns</div>
                <div className="text-gray-500">30-day return policy</div>
              </div>
              <div className="p-6 text-center hover:bg-gray-50 transition-colors duration-200">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="font-medium text-gray-800 text-lg mb-1">Secure Payment</div>
                <div className="text-gray-500">100% secure checkout</div>
              </div>
              <div className="p-6 text-center hover:bg-gray-50 transition-colors duration-200">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-4">
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
    </>
  )
}

export default Hero