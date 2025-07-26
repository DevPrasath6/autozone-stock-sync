import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Search, Car, CheckCircle, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface CompatibleProduct {
  id: string;
  name: string;
  category: string;
  price: string;
  availability: 'in-stock' | 'low-stock' | 'out-of-stock';
  locations: string[];
  fitmentNotes?: string;
}

const VehicleCompatibilityChecker = () => {
  const [year, setYear] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [searching, setSearching] = useState(false);
  const [results, setResults] = useState<CompatibleProduct[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const { toast } = useToast();

  // Mock data for demonstration
  const years = Array.from({ length: 30 }, (_, i) => (2024 - i).toString());
  const makes = ['Toyota', 'Honda', 'Ford', 'Chevrolet', 'BMW', 'Mercedes-Benz', 'Audi', 'Nissan'];
  const models = {
    Toyota: ['Camry', 'Corolla', 'Prius', 'RAV4', 'Highlander'],
    Honda: ['Civic', 'Accord', 'CR-V', 'Pilot', 'Odyssey'],
    Ford: ['F-150', 'Mustang', 'Explorer', 'Focus', 'Escape'],
    Chevrolet: ['Silverado', 'Camaro', 'Equinox', 'Malibu', 'Tahoe'],
    BMW: ['3 Series', '5 Series', 'X3', 'X5', 'X1'],
    'Mercedes-Benz': ['C-Class', 'E-Class', 'GLC', 'GLE', 'A-Class'],
    Audi: ['A4', 'A6', 'Q5', 'Q7', 'A3'],
    Nissan: ['Altima', 'Sentra', 'Rogue', 'Pathfinder', 'Maxima']
  };

  const mockResults: CompatibleProduct[] = [
    {
      id: '1',
      name: 'Premium Leather Seat Covers',
      category: 'Interior',
      price: '$129.99',
      availability: 'in-stock',
      locations: ['Downtown Store', 'North Branch'],
      fitmentNotes: 'Custom fit for front and rear seats'
    },
    {
      id: '2',
      name: 'All-Weather Floor Mats',
      category: 'Interior',
      price: '$79.99',
      availability: 'in-stock',
      locations: ['All Locations']
    },
    {
      id: '3',
      name: 'LED Fog Light Kit',
      category: 'Lighting',
      price: '$89.99',
      availability: 'low-stock',
      locations: ['South Mall'],
      fitmentNotes: 'Requires professional installation'
    },
    {
      id: '4',
      name: 'Dashboard Cover',
      category: 'Interior',
      price: '$65.99',
      availability: 'in-stock',
      locations: ['Downtown Store', 'South Mall']
    },
    {
      id: '5',
      name: 'Chrome Door Handles',
      category: 'Exterior',
      price: '$45.99',
      availability: 'out-of-stock',
      locations: [],
      fitmentNotes: 'Back-ordered, arriving next week'
    }
  ];

  const handleSearch = async () => {
    if (!year || !make || !model) {
      toast({
        title: "Missing Information",
        description: "Please select year, make, and model to search for compatible parts.",
        variant: "destructive"
      });
      return;
    }

    setSearching(true);
    setHasSearched(false);

    // Simulate API call
    setTimeout(() => {
      setResults(mockResults);
      setHasSearched(true);
      setSearching(false);
      toast({
        title: "Search Complete",
        description: `Found ${mockResults.length} compatible products for your ${year} ${make} ${model}.`
      });
    }, 1500);
  };

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'in-stock': return 'text-green-600 border-green-200';
      case 'low-stock': return 'text-yellow-600 border-yellow-200';
      case 'out-of-stock': return 'text-red-600 border-red-200';
      default: return 'text-gray-600 border-gray-200';
    }
  };

  const getAvailabilityIcon = (availability: string) => {
    switch (availability) {
      case 'in-stock': return <CheckCircle className="w-3 h-3 mr-1" />;
      case 'low-stock': return <AlertCircle className="w-3 h-3 mr-1" />;
      case 'out-of-stock': return <AlertCircle className="w-3 h-3 mr-1" />;
      default: return null;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Vehicle Compatibility
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Find Parts for Your Vehicle
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Enter your vehicle information to find compatible parts and accessories with real-time availability.
          </p>
        </div>

        {/* Search Form */}
        <Card className="mb-12 max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Car className="w-6 h-6 text-primary" />
              <span>Vehicle Information</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label htmlFor="year">Year</Label>
                <Select value={year} onValueChange={setYear}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select year" />
                  </SelectTrigger>
                  <SelectContent>
                    {years.map((yearOption) => (
                      <SelectItem key={yearOption} value={yearOption}>
                        {yearOption}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="make">Make</Label>
                <Select value={make} onValueChange={(value) => {
                  setMake(value);
                  setModel(''); // Reset model when make changes
                }}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select make" />
                  </SelectTrigger>
                  <SelectContent>
                    {makes.map((makeOption) => (
                      <SelectItem key={makeOption} value={makeOption}>
                        {makeOption}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="model">Model</Label>
                <Select value={model} onValueChange={setModel} disabled={!make}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select model" />
                  </SelectTrigger>
                  <SelectContent>
                    {make && models[make as keyof typeof models]?.map((modelOption) => (
                      <SelectItem key={modelOption} value={modelOption}>
                        {modelOption}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>&nbsp;</Label>
                <Button 
                  onClick={handleSearch} 
                  disabled={searching || !year || !make || !model}
                  className="w-full"
                  variant="hero"
                >
                  <Search className="w-4 h-4 mr-2" />
                  {searching ? 'Searching...' : 'Search Parts'}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        {hasSearched && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-foreground">
                Compatible Parts for {year} {make} {model}
              </h3>
              <Badge variant="outline" className="text-primary">
                {results.length} products found
              </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map((product) => (
                <Card key={product.id} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{product.name}</CardTitle>
                        <Badge variant="outline" className="mt-1 text-xs">
                          {product.category}
                        </Badge>
                      </div>
                      <Badge 
                        variant="outline" 
                        className={getAvailabilityColor(product.availability)}
                      >
                        {getAvailabilityIcon(product.availability)}
                        {product.availability === 'in-stock' ? 'In Stock' : 
                         product.availability === 'low-stock' ? 'Low Stock' : 'Out of Stock'}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="text-2xl font-bold text-primary">
                        {product.price}
                      </div>
                      
                      {product.locations.length > 0 && (
                        <div>
                          <p className="text-sm font-medium text-foreground mb-1">Available at:</p>
                          <div className="flex flex-wrap gap-1">
                            {product.locations.map((location) => (
                              <Badge key={location} variant="secondary" className="text-xs">
                                {location}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      {product.fitmentNotes && (
                        <div className="bg-muted/50 p-3 rounded-md">
                          <p className="text-sm text-muted-foreground">
                            <strong>Fitment Note:</strong> {product.fitmentNotes}
                          </p>
                        </div>
                      )}

                      <Button 
                        variant="outline" 
                        className="w-full"
                        disabled={product.availability === 'out-of-stock'}
                      >
                        {product.availability === 'out-of-stock' ? 'Notify When Available' : 'Add to Cart'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VehicleCompatibilityChecker;