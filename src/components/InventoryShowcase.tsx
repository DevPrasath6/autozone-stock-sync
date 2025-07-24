import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, MapPin, CheckCircle, AlertCircle, Package } from 'lucide-react';
import inventoryImage from '@/assets/inventory-dashboard.jpg';

const InventoryShowcase = () => {
  const stockData = [
    { location: 'Downtown Store', item: 'Premium Seat Covers', stock: 15, status: 'In Stock' },
    { location: 'North Branch', item: 'LED Fog Lights', stock: 8, status: 'Low Stock' },
    { location: 'South Mall', item: 'Dashboard Covers', stock: 22, status: 'In Stock' },
    { location: 'Downtown Store', item: 'Floor Mat Sets', stock: 12, status: 'In Stock' },
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: '25% Reduction in Stockouts',
      description: 'Real-time tracking prevents inventory shortages'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: '100% Multi-location Visibility',
      description: 'See stock levels across all three stores instantly'
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: 'Automated Reordering',
      description: 'Smart algorithms prevent overstocking and understocking'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Inventory Management System
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Real-time Inventory Revolution
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our advanced inventory management system delivers 15-35% ROI in the first year 
            while ensuring you never miss a sale due to stockouts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Dashboard Preview */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img 
                src={inventoryImage} 
                alt="Inventory Management Dashboard" 
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-automotive-dark/20 to-transparent"></div>
            </div>
            
            {/* Floating Stock Cards */}
            <div className="absolute -right-4 top-4 space-y-2">
              {stockData.slice(0, 2).map((item, index) => (
                <Card key={index} className="w-64 shadow-lg bg-background/95 backdrop-blur-sm">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-sm">{item.item}</p>
                        <p className="text-xs text-muted-foreground">{item.location}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-lg">{item.stock}</p>
                        <Badge 
                          variant={item.status === 'In Stock' ? 'default' : 'destructive'}
                          className="text-xs"
                        >
                          {item.status === 'In Stock' ? (
                            <CheckCircle className="w-3 h-3 mr-1" />
                          ) : (
                            <AlertCircle className="w-3 h-3 mr-1" />
                          )}
                          {item.status}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Revolutionary Results
              </h3>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{benefit.title}</h4>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ROI Stats */}
            <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary">Expected ROI</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary">15-25%</p>
                    <p className="text-sm text-muted-foreground">Conservative ROI Year 1</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-accent">25-35%</p>
                    <p className="text-sm text-muted-foreground">Optimistic ROI Year 1</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button variant="hero" size="lg" className="w-full">
              Learn More About Our System
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InventoryShowcase;