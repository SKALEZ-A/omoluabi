import { getFeaturedProducts } from '../../data/products'
import ProductCard from './ProductCard'

function ProductGrid() {
  const featuredProducts = getFeaturedProducts()

  return (
    <section id="featured-products" className="py-16 bg-white">
      <div className="container-max section-padding">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-900">
            FEATURED PRODUCTS
          </h2>
          <button className="btn-secondary">VIEW ALL</button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductGrid