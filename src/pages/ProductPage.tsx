import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getProductById, products } from '../data/products'
import ProductDetail from '../components/product/ProductDetail'

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

function ProductPage() {
  const { id } = useParams<{ id: string }>()
  
  if (!id) {
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
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <p className="text-gray-600">The product you're looking for doesn't exist.</p>
        </div>
      </motion.div>
    )
  }

  const product = getProductById(id)
  
  if (!product) {
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
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <p className="text-gray-600">The product you're looking for doesn't exist.</p>
        </div>
      </motion.div>
    )
  }

  // Get related products from the same category
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <ProductDetail product={product} relatedProducts={relatedProducts} />
    </motion.div>
  )
}

export default ProductPage