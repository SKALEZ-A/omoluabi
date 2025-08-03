import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getProductsByCategory, categories } from '../data/products'
import ProductCard from '../components/product/ProductCard'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
}

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5
}

function CategoryPage() {
  const { slug } = useParams<{ slug: string }>()
  
  if (!slug) {
    return (
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="section-padding py-16"
      >
        <div className="container-max text-center">
          <h1 className="text-3xl font-bold mb-4">Category Not Found</h1>
          <p className="text-gray-600">The category you're looking for doesn't exist.</p>
        </div>
      </motion.div>
    )
  }

  const category = categories.find(cat => cat.slug === slug)
  const products = getProductsByCategory(slug)
  
  if (!category) {
    return (
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="section-padding py-16"
      >
        <div className="container-max text-center">
          <h1 className="text-3xl font-bold mb-4">Category Not Found</h1>
          <p className="text-gray-600">The category you're looking for doesn't exist.</p>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="section-padding py-16"
    >
      <div className="container-max">
        {/* Category Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-4">
            {category.name}
          </h1>
          {category.description && (
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              {category.description}
            </p>
          )}
          <p className="text-primary-700">
            {products.length} {products.length === 1 ? 'item' : 'items'} available
          </p>
        </div>

        {/* Category Hero Image */}
        <div className="mb-12">
          <div className="aspect-[21/9] bg-gray-100 rounded-lg overflow-hidden">
            <img 
              src={category.image} 
              alt={category.name}
              className="w-full h-full object-cover object-center"
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.opacity = '0.5';
              }}
            />
          </div>
        </div>

        {/* Products Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              No products available
            </h2>
            <p className="text-gray-600 mb-8">
              We're currently updating our {category.name.toLowerCase()} collection. 
              Please check back soon for new arrivals.
            </p>
            <button 
              onClick={() => window.history.back()}
              className="btn-primary"
            >
              Go Back
            </button>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default CategoryPage