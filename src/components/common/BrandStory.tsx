function BrandStory() {
  return (
    <section className="py-16 bg-gold-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 dark:text-gold-300">
              ELEVATE YOUR STYLE WITH OUR NEW COLLECTION
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              At Omoluabi, we believe that fashion is more than just clothing—it's a statement of identity, 
              heritage, and personal expression. Our carefully crafted pieces blend traditional African 
              aesthetics with contemporary design, creating timeless garments for the modern gentleman.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Each piece in our collection tells a story of craftsmanship, cultural pride, and attention 
              to detail. From the flowing elegance of our Agbadas to the refined comfort of our Kaftans, 
              every garment is designed to make you feel confident and distinguished.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary">DISCOVER OUR STORY</button>
              <button className="btn-secondary">VIEW COLLECTION</button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <img 
                src="/images/specials.jpeg" 
                alt="Omoluabi brand story - luxury fashion collection"
                className="w-full h-full object-cover object-center"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.opacity = '0.5';
                }}
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold-300/20 dark:bg-gold-600/20 rounded-full"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gold-200/30 dark:bg-gold-700/30 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandStory