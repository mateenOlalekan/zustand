import React from 'react'

function Brand() {
      // Popular brands
  const brands = [
    { id: 1, name: "Apple", image: "/api/placeholder/120/80" },
    { id: 2, name: "Samsung", image: "/api/placeholder/120/80" },
    { id: 3, name: "Nike", image: "/api/placeholder/120/80" },
    { id: 4, name: "Adidas", image: "/api/placeholder/120/80" },
    { id: 5, name: "Sony", image: "/api/placeholder/120/80" },
    { id: 6, name: "LG", image: "/api/placeholder/120/80" }
  ];
  return (
        <>
      {/* Popular Brands Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Popular Brands</h2>
              <p className="text-gray-600">Shop from your favorite brands</p>
            </div>
            <div className="mt-4 md:mt-0">
              <a href="#" className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors duration-200 flex items-center">
                View All Brands <ChevronRight size={16} className="ml-1" />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
            {brands.map((brand) => (
              <div key={brand.id} className="group relative bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-24 overflow-hidden flex items-center justify-center">
                  <img 
                    src={brand.image} 
                    alt={brand.name}
                    className="w-3/4 h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900 text-center">{brand.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
        </>
  )
}

export default Brand