import { motion } from 'framer-motion'
import Hero from '../components/common/Hero'
import ProductGrid from '../components/product/ProductGrid'
import CategoryGrid from '../components/common/CategoryGrid'
import BrandStory from '../components/common/BrandStory'
import CatalogSection from '../components/common/CatalogSection'

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

function HomePage() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Hero />
      <ProductGrid />
      <BrandStory />
      <CategoryGrid />
      <CatalogSection />
    </motion.div>
  )
}

export default HomePage