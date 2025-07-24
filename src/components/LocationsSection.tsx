import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Clock, Navigation, Star } from 'lucide-react';

const LocationsSection = () => {
  const locations = [
    {
      id: 1,
      name: 'Downtown Store',
      address: '123 Main Street, Downtown',
      phone: '+1 (555) 123-4567',
      hours: 'Mon-Sat: 9AM-8PM, Sun: 10AM-6PM',
      rating: 4.8,
      reviews: 142,
      features: ['Real-time Inventory', 'Expert Installation', 'Customer Parking'],
      stockStatus: 'Fully Stocked',
      manager: 'Sarah Johnson'
    },
    {
      id: 2,
      name: 'North Branch',
      address: '456 Oak Avenue, North District',
      phone: '+1 (555) 234-5678',
      hours: 'Mon-Sat: 9AM-7PM, Sun: 11AM-5PM',
      rating: 4.9,
      reviews: 98,
      features: ['Drive-through Service', 'Mobile Installation', 'Express Checkout'],
      stockStatus: 'Fully Stocked',
      manager: 'Mike Rodriguez'
    },
    {
      id: 3,
      name: 'South Mall Location',
      address: '789 Shopping Center, South Mall',
      phone: '+1 (555) 345-6789',
      hours: 'Mon-Sat: 10AM-9PM, Sun: 11AM-7PM',
      rating: 4.7,
      reviews: 203,
      features: ['Mall Parking', 'Extended Hours', 'Family Shopping Area'],
      stockStatus: 'Fully Stocked',
      manager: 'Jessica Chen'
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            3 Convenient Locations
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Find Us Near You
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Visit any of our three strategically located stores with real-time inventory 
            synchronization and expert staff ready to help.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {locations.map((location, index) => (
            <Card key={location.id} className="group hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>{location.name}</span>
                  </CardTitle>
                  <Badge 
                    variant="outline" 
                    className="text-green-600 border-green-200"
                  >
                    {location.stockStatus}
                  </Badge>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="font-semibold">{location.rating}</span>
                  <span className="text-muted-foreground">({location.reviews} reviews)</span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-4 h-4 text-muted-foreground mt-1" />
                    <span className="text-sm">{location.address}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">{location.phone}</span>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <Clock className="w-4 h-4 text-muted-foreground mt-1" />
                    <span className="text-sm">{location.hours}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Store Features:</h4>
                  <ul className="space-y-1">
                    {location.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t">
                  <p className="text-xs text-muted-foreground mb-3">
                    Store Manager: <span className="font-medium">{location.manager}</span>
                  </p>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Navigation className="w-4 h-4 mr-2" />
                      Directions
                    </Button>
                    <Button variant="default" size="sm" className="flex-1">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Store
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Inventory Sync Feature */}
        <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Real-time Inventory Across All Locations
            </h3>
            <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
              Our advanced inventory management system ensures that stock levels are synchronized 
              in real-time across all three locations. Check availability instantly and reserve 
              items for pickup at your preferred store.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Check Real-time Inventory
              </Button>
              <Button variant="outline" size="lg">
                Schedule Store Visit
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LocationsSection;