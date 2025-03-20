import React from 'react'

function FeatureProduct() {
      // Featured products data
  const featuredProducts = [
    {
      id: 1,
      name: "Wireless Noise-Cancelling Headphones",
      category: "Electronics",
      price: 249.99,
      originalPrice: 299.99,
      rating: 4.8,
      reviews: 324,
      image: "/api/placeholder/300/300",
      badge: "New"
    },
    {
      id: 2,
      name: "Premium Leather Crossbody Bag",
      category: "Fashion",
      price: 89.99,
      originalPrice: 119.99,
      rating: 4.7,
      reviews: 156,
      image: "/api/placeholder/300/300",
      badge: "Sale"
    },
    {
      id: 3,
      name: "Smart Watch Series 5",
      category: "Electronics",
      price: 199.99,
      originalPrice: 249.99,
      rating: 4.9,
      reviews: 427,
      image: "/api/placeholder/300/300",
      badge: "Bestseller"
    },
    {
      id: 4,
      name: "Organic Cotton Bedding Set",
      category: "Home & Living",
      price: 129.99,
      originalPrice: 159.99,
      rating: 4.6,
      reviews: 198,
      image: "/api/placeholder/300/300"
    }
  ];
  return (
    <>
      {/* Featured Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Products</h2>
              <p className="text-gray-600">Handpicked products for you</p>
            </div>
            <div className="mt-4 md:mt-0">
              <a href="#" className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors duration-200 flex items-center">
                View All Products <ChevronRight size={16} className="ml-1" />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group relative bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.badge && (
                    <div className={`absolute top-3 left-3 py-1 px-3 rounded-full text-xs font-medium ${
                      product.badge === 'New' ? 'bg-green-100 text-green-700' : 
                      product.badge === 'Sale' ? 'bg-red-100 text-red-700' : 
                      'bg-indigo-100 text-indigo-700'
                    }`}>
                      {product.badge}
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                    <div className="flex items-center space-x-1">
                      <Star size={16} className="text-yellow-400" />
                      <span className="text-sm text-gray-600">{product.rating}</span>
                      <span className="text-sm text-gray-400">({product.reviews})</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-indigo-600">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>
                    )}
                  </div>
                  <div className="mt-3">
                    <a 
                      href="#" 
                      className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md font-medium hover:bg-indigo-700 text-center block transition-colors duration-200"
                    >
                      Add to Cart
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default FeatureProduct