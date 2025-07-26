import { Button } from '@/components/ui/button';
import { ShoppingCart, Search, MapPin, Zap } from 'lucide-react';
import heroImage from '@/assets/hero-autozone.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="AutoZone Motors Showroom" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-automotive-dark/90 via-automotive-dark/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-2 mb-4">
            <Zap className="w-6 h-6 text-accent" />
            <span className="text-accent font-semibold text-sm uppercase tracking-wide">
              Real-time Inventory • 3 Locations
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Premium Car Accessories
            <span className="block text-primary"> Always in Stock</span>
          </h1>
          
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Experience the future of car accessories shopping with our real-time inventory system. 
            Find exactly what you need, when you need it, across all our locations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              <ShoppingCart className="w-5 h-5 mr-2" />
              Shop Now
            </Button>
            
            <Button variant="outline-white" size="lg" className="text-lg px-8 py-6">
              <Search className="w-5 h-5 mr-2" />
              Check Inventory
            </Button>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Real-time Stock</h3>
                <p className="text-sm text-gray-200">Live inventory updates</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white">3 Locations</h3>
                <p className="text-sm text-gray-200">Find products nearby</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <ShoppingCart className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Premium Quality</h3>
                <p className="text-sm text-gray-200">Trusted accessories</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;