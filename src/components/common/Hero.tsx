function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden -mt-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/images/hero.JPG" 
          alt="Omoluabi luxury fashion hero image"
          className="w-full h-full object-cover object-center sm:object-center md:object-center"
          style={{
            objectPosition: 'center 30%' // Ensures full content visibility on mobile
          }}
          loading="eager"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
          }}
        />
        {/* White-Golden Theme Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"></div>
        {/* Golden accent overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-gold-900/20 via-transparent to-gold-600/10"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white section-padding">
        <div className="container-max">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight drop-shadow-2xl">
            SHAPING A NEW ERA OF<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            <span className="text-gold-300 drop-shadow-lg">STYLE AND SOPHISTICATION</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-100 px-4 sm:px-0 drop-shadow-lg">
            Discover luxury African-inspired menswear that celebrates heritage while embracing modern elegance. 
            Each piece tells a story of craftsmanship and cultural pride.
          </p>
          <button 
            className="btn-primary text-base sm:text-lg px-8 sm:px-12 py-3 sm:py-4 min-h-[44px] transform hover:scale-105 transition-transform duration-300"
            onClick={() => {
              const featuredSection = document.querySelector('#featured-products');
              featuredSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            EXPLORE COLLECTION
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gold-300 animate-bounce">
        <svg className="w-6 h-6 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

export default Hero