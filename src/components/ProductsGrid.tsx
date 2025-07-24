import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Star, CheckCircle } from 'lucide-react';
import productsImage from '@/assets/products-grid.jpg';

const ProductsGrid = () => {
  const categories = [
    {
      title: 'Seat Covers',
      description: 'Premium leather and fabric seat covers',
      price: 'From $89',
      stock: 'In Stock',
      rating: 4.8,
      featured: true
    },
    {
      title: 'LED Lighting',
      description: 'Fog lights, headlight upgrades, interior LEDs',
      price: 'From $45',
      stock: 'In Stock',
      rating: 4.9,
      featured: false
    },
    {
      title: 'Floor Mats',
      description: 'All-weather and custom-fit floor protection',
      price: 'From $35',
      stock: 'In Stock',
      rating: 4.7,
      featured: false
    },
    {
      title: 'Dashboard Covers',
      description: 'UV protection and custom dashboard covers',
      price: 'From $65',
      stock: 'In Stock',
      rating: 4.6,
      featured: false
    },
    {
      title: 'Steering Wheel Covers',
      description: 'Leather and heated steering wheel covers',
      price: 'From $25',
      stock: 'In Stock',
      rating: 4.5,
      featured: false
    },
    {
      title: 'Car Care Products',
      description: 'Premium cleaning and maintenance supplies',
      price: 'From $15',
      stock: 'In Stock',
      rating: 4.8,
      featured: false
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-accent border-accent">
            Premium Products
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Car Accessories Collection
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our extensive range of premium car accessories, 
            all tracked in real-time across our three locations.
          </p>
        </div>

        {/* Featured Product */}
        <div className="mb-16">
          <Card className="overflow-hidden bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <img 
                  src={productsImage} 
                  alt="Featured Car Accessories" 
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-accent">
                  Featured Collection
                </Badge>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Premium Seat Cover Collection
                </h3>
                <p className="text-muted-foreground mb-6">
                  Transform your vehicle's interior with our premium leather and fabric seat covers. 
                  Custom-fit designs for over 500 vehicle models.
                </p>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="font-semibold">4.8</span>
                    <span className="text-muted-foreground">(245 reviews)</span>
                  </div>
                  <Badge variant="outline" className="text-green-600 border-green-200">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    In Stock - All Locations
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-primary">From $89</span>
                  <Button variant="hero" size="lg">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Shop Collection
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.filter(cat => !cat.featured).map((category, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                  <Badge variant="outline" className="text-green-600 border-green-200">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    {category.stock}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{category.description}</p>
                
                <div className="flex items-center space-x-1 mb-4">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">{category.rating}</span>
                  <span className="text-sm text-muted-foreground">(4.5 avg)</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-primary">{category.price}</span>
                  <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    View Products
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button variant="hero" size="lg" className="px-12 py-6 text-lg">
            View All Products
          </Button>
          <p className="text-muted-foreground mt-4">
            Over 500+ products available across all locations
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductsGrid;