import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import VehicleCompatibilityChecker from '@/components/VehicleCompatibilityChecker';
import AdvancedSearch from '@/components/AdvancedSearch';
import ProductsGrid from '@/components/ProductsGrid';
import CustomerReviews from '@/components/CustomerReviews';
import Breadcrumb from '@/components/Breadcrumb';
import FAQSection from '@/components/FAQSection';

const productFAQs = [
  {
    question: "How do I know if a product is compatible with my vehicle?",
    answer: "Use our Vehicle Compatibility Checker at the top of the page. Simply enter your vehicle's year, make, and model, and we'll show you all compatible products. You can also contact our experts for personalized recommendations."
  },
  {
    question: "Can I see the product before purchasing?",
    answer: "Yes! Visit any of our three locations to see and touch products in person. Our showrooms display most popular items, and our staff can show you installation examples."
  },
  {
    question: "Do you offer bulk discounts?",
    answer: "We offer volume discounts for fleet purchases, dealerships, and large orders. Contact our sales team for custom pricing on orders of 10+ units of the same product."
  },
  {
    question: "What if I need help choosing the right product?",
    answer: "Our expert staff is here to help! Call any location or use our live chat. We can recommend products based on your vehicle, budget, and specific needs."
  }
];

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section with Vehicle Compatibility */}
        <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb />
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
        <FAQSection 
          title="Product Questions" 
          subtitle="Common questions about our car accessories and parts selection."
          faqs={productFAQs}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Products;