function CatalogSection() {
  const catalogCategories = [
    {
      name: 'AGBADA',
      items: [
        { name: 'Classic White Agbada', price: 299, image: '/images/agbada3.JPG' },
        { name: 'Royal Blue Agbada', price: 329, image: '/images/agbada4.JPG' },
        { name: 'Black Embroidered Agbada', price: 399, image: '/images/agbada5.JPG' },
      ]
    },
    {
      name: 'KAFTANS',
      items: [
        { name: 'Traditional Kaftan', price: 199, image: '/images/kaftan1.JPG' },
        { name: 'Modern Kaftan', price: 229, image: '/images/nativeorkaftan.JPG' },
        { name: 'Luxury Kaftan', price: 279, image: '/images/specials2.jpeg' },
      ]
    },
    {
      name: 'SPECIALS',
      items: [
        { name: 'Premium Special', price: 189, image: '/images/specials3.jpeg' },
        { name: 'Designer Special', price: 209, image: '/images/specials4.jpeg' },
        { name: 'Luxury Special', price: 249, image: '/images/specials5.jpeg' },
      ]
    },
    {
      name: 'VINTAGE',
      items: [
        { name: 'Vintage Classic', price: 159, image: '/images/vintage1.jpeg' },
        { name: 'Vintage Designer', price: 179, image: '/images/vintage2.jpeg' },
        { name: 'Vintage Premium', price: 199, image: '/images/vintage3.jpeg' },
      ]
    }
  ]

  return (
    <section className="py-16 bg-primary-900 text-white">
      <div className="container-max section-padding">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            EXPLORE OUR FASHION CATALOG
          </h2>
          <p className="text-primary-300 max-w-2xl mx-auto">
            Discover our complete collection of premium menswear, carefully organized by category 
            to help you find the perfect pieces for every occasion.
          </p>
        </div>

        {/* Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {catalogCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              {/* Category Header */}
              <h3 className="text-xl font-semibold text-accent-200 border-b border-primary-700 pb-2">
                {category.name}
              </h3>

              {/* Category Items */}
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="group cursor-pointer">
                    <div className="flex items-center space-x-4">
                      {/* Item Image */}
                      <div className="w-16 h-16 bg-primary-800 rounded-lg overflow-hidden flex-shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover object-center"
                          loading="lazy"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.opacity = '0.3';
                          }}
                        />
                      </div>

                      {/* Item Info */}
                      <div className="flex-grow">
                        <h4 className="text-sm font-medium text-white group-hover:text-accent-200 transition-colors">
                          {item.name}
                        </h4>
                        <p className="text-accent-200 font-semibold">${item.price}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* View All Link */}
              <button className="text-accent-200 hover:text-white transition-colors text-sm font-medium">
                View All {category.name} →
              </button>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-primary-900">
            VIEW COMPLETE CATALOG
          </button>
        </div>
      </div>
    </section>
  )
}

export default CatalogSection