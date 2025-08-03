import { Link } from 'react-router-dom'
import { categories } from '../../data/products'

function CategoryGrid() {

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-max section-padding">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-4">
            TOP FASHION CATEGORY
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our carefully curated collections of premium African-inspired menswear, 
            each category representing the finest in traditional and contemporary style.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.slug}`}
              className="group relative overflow-hidden bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Category Image */}
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.opacity = '0.3';
                  }}
                />
              </div>

              {/* Category Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary-900 mb-2 group-hover:text-primary-700 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-600">
                  {category.productCount} items
                </p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/10 transition-all duration-300"></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoryGrid