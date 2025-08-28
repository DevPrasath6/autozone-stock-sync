import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ProductsGrid from '@/components/ProductsGrid';
import InventoryShowcase from '@/components/InventoryShowcase';
import LiveInventoryDashboard from '@/components/LiveInventoryDashboard';
import LocationsSection from '@/components/LocationsSection';
import FAQSection from '@/components/FAQSection';
import QuickStatsBar from '@/components/QuickStatsBar';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <QuickStatsBar />
        <InventoryShowcase />
        <LiveInventoryDashboard />
        <ProductsGrid />
        <LocationsSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
