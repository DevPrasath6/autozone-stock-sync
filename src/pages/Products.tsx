import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductsGrid from '@/components/ProductsGrid';

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <ProductsGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Products;