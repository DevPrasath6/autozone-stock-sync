import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ProductsGrid from '@/components/ProductsGrid';
import InventoryShowcase from '@/components/InventoryShowcase';
import LiveInventoryDashboard from '@/components/LiveInventoryDashboard';
import LocationsSection from '@/components/LocationsSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <InventoryShowcase />
        <LiveInventoryDashboard />
        <ProductsGrid />
        <LocationsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
