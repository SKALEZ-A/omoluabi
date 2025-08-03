import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { useTheme } from '../../context/ThemeContext'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { state } = useCart()
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="container-max section-padding">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-serif font-bold text-primary-900 dark:text-gold-400 transition-colors duration-300">
            OMOLUABI
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-primary-700 dark:text-gray-300 hover:text-gold-600 dark:hover:text-gold-400 transition-colors">
              Home
            </Link>
            <Link to="/category/agbada" className="text-primary-700 dark:text-gray-300 hover:text-gold-600 dark:hover:text-gold-400 transition-colors">
              Agbada
            </Link>
            <Link to="/category/kaftans" className="text-primary-700 dark:text-gray-300 hover:text-gold-600 dark:hover:text-gold-400 transition-colors">
              Kaftans
            </Link>
            <Link to="/category/polo" className="text-primary-700 dark:text-gray-300 hover:text-gold-600 dark:hover:text-gold-400 transition-colors">
              Polo
            </Link>
            <Link to="/category/baggy-pants" className="text-primary-700 dark:text-gray-300 hover:text-gold-600 dark:hover:text-gold-400 transition-colors">
              Baggy Pants
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button 
              className="p-2 text-primary-700 dark:text-gray-300 hover:text-gold-600 dark:hover:text-gold-400 transition-colors focus:outline-none focus:ring-2 focus:ring-gold-600 focus:ring-offset-2 rounded"
              aria-label="Search products"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="p-2 text-primary-700 dark:text-gray-300 hover:text-gold-600 dark:hover:text-gold-400 transition-colors focus:outline-none focus:ring-2 focus:ring-gold-600 focus:ring-offset-2 rounded"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>
            
            <button 
              className="p-2 text-primary-700 dark:text-gray-300 hover:text-gold-600 dark:hover:text-gold-400 transition-colors relative focus:outline-none focus:ring-2 focus:ring-gold-600 focus:ring-offset-2 rounded"
              aria-label={`Shopping cart with ${state.cart.itemCount} items`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
              </svg>
              {state.cart.itemCount > 0 && (
                <span 
                  className="absolute -top-1 -right-1 bg-gold-600 dark:bg-gold-500 text-white dark:text-gray-900 text-xs rounded-full h-5 w-5 flex items-center justify-center"
                  aria-hidden="true"
                >
                  {state.cart.itemCount}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 text-primary-700 dark:text-gray-300 hover:text-gold-600 dark:hover:text-gold-400 transition-colors focus:outline-none focus:ring-2 focus:ring-gold-600 focus:ring-offset-2 rounded"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-primary-700 dark:text-gray-300 hover:text-gold-600 dark:hover:text-gold-400 transition-colors">
                Home
              </Link>
              <Link to="/category/agbada" className="text-primary-700 dark:text-gray-300 hover:text-gold-600 dark:hover:text-gold-400 transition-colors">
                Agbada
              </Link>
              <Link to="/category/kaftans" className="text-primary-700 dark:text-gray-300 hover:text-gold-600 dark:hover:text-gold-400 transition-colors">
                Kaftans
              </Link>
              <Link to="/category/polo" className="text-primary-700 dark:text-gray-300 hover:text-gold-600 dark:hover:text-gold-400 transition-colors">
                Polo
              </Link>
              <Link to="/category/baggy-pants" className="text-primary-700 dark:text-gray-300 hover:text-gold-600 dark:hover:text-gold-400 transition-colors">
                Baggy Pants
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header