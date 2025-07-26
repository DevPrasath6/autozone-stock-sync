import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import VehicleCompatibilityChecker from '@/components/VehicleCompatibilityChecker';
import AdvancedSearch from '@/components/AdvancedSearch';
import ProductsGrid from '@/components/ProductsGrid';
import CustomerReviews from '@/components/CustomerReviews';

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section with Vehicle Compatibility */}
        <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Car Accessories & Parts
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Find the perfect parts for your vehicle with our advanced compatibility checker and real-time inventory.
              </p>
            </div>
            <AdvancedSearch />
          </div>
        </section>
        
        <VehicleCompatibilityChecker />
        <ProductsGrid />
        <CustomerReviews />
      </main>
      <Footer />
    </div>
  );
};

export default Products;