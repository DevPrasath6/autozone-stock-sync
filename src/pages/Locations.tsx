import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LocationsSection from '@/components/LocationsSection';

const Locations = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <LocationsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Locations;