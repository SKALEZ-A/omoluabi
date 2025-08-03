import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Product } from '../../types'

interface ProductCardProps {
  product: Product
}

function ProductCard({ product }: ProductCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const handleImageSwitch = () => {
    if (product.images.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % product.images.length)
    }
  }

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <Link 
        to={`/product/${product.id}`} 
        className="group cursor-pointer block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label={`View details for ${product.name}`}
      >
      {/* Product Image */}
      <div className="relative overflow-hidden bg-gray-100 aspect-[3/4] mb-4">
        <img 
          src={product.images[currentImageIndex]} 
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/images/placeholder.jpg'; // Fallback image
          }}
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-gradient-to-t group-hover:from-gold-900/20 group-hover:to-transparent transition-all duration-300"></div>
        
        {/* Image Switch Button - Only show if multiple images */}
        {product.images.length > 1 && (
          <button
            onClick={(e) => {
              e.preventDefault()
              handleImageSwitch()
            }}
            className={`absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 hover:bg-gold-100 dark:hover:bg-gold-900 text-primary-900 dark:text-gray-100 hover:text-gold-700 dark:hover:text-gold-300 p-2 rounded-full transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
            aria-label="Switch product image"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </button>
        )}

        {/* Image Indicators */}
        {product.images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1">
            {product.images.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        )}

        {/* Stock Status */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="bg-white text-primary-900 px-4 py-2 font-semibold text-sm">
              OUT OF STOCK
            </span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <h3 className="font-semibold text-primary-900 dark:text-gray-100 group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
          {product.name}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center" aria-label={`Rating: ${product.rating} out of 5 stars`}>
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating) ? 'text-gold-400' : 'text-gray-300 dark:text-gray-600'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-sm text-gray-600 dark:text-gray-400 ml-1">({product.reviewCount})</span>
          </div>
        </div>
        
        {/* Price */}
        <p className="text-lg font-semibold text-gold-600 dark:text-gold-400">${product.price}</p>
        
        {/* Available Colors */}
        {product.colors.length > 0 && (
          <div className="flex items-center space-x-2">
            <span className="text-xs text-gray-600 dark:text-gray-400">Colors:</span>
            <div className="flex space-x-1">
              {product.colors.slice(0, 3).map((color, index) => (
                <div
                  key={index}
                  className="w-4 h-4 rounded-full border border-gray-300 dark:border-gray-600"
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                  aria-label={color.name}
                />
              ))}
              {product.colors.length > 3 && (
                <span className="text-xs text-gray-500 dark:text-gray-400">+{product.colors.length - 3}</span>
              )}
            </div>
          </div>
        )}
      </div>
      </Link>
    </motion.div>
  )
}

export default ProductCard