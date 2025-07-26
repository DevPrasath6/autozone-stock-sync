import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Search, Filter, X, SlidersHorizontal } from 'lucide-react';

interface SearchFilters {
  query: string;
  category: string;
  priceRange: [number, number];
  inStock: boolean;
  rating: number;
  locations: string[];
  brands: string[];
}

const AdvancedSearch = () => {
  const [filters, setFilters] = useState<SearchFilters>({
    query: '',
    category: '',
    priceRange: [0, 500],
    inStock: false,
    rating: 0,
    locations: [],
    brands: []
  });
  
  const [showAdvanced, setShowAdvanced] = useState(false);

  const categories = [
    'All Categories',
    'Seat Covers',
    'Floor Mats',
    'LED Lighting',
    'Dashboard Covers',
    'Steering Wheel Covers',
    'Car Care Products',
    'Exterior Accessories',
    'Performance Parts'
  ];

  const locations = ['Downtown Store', 'North Branch', 'South Mall'];
  const brands = ['AutoZone Pro', 'Premium Plus', 'Eco-Friendly', 'Performance'];

  const handleLocationChange = (location: string, checked: boolean) => {
    setFilters(prev => ({
      ...prev,
      locations: checked 
        ? [...prev.locations, location]
        : prev.locations.filter(l => l !== location)
    }));
  };

  const handleBrandChange = (brand: string, checked: boolean) => {
    setFilters(prev => ({
      ...prev,
      brands: checked 
        ? [...prev.brands, brand]
        : prev.brands.filter(b => b !== brand)
    }));
  };

  const clearFilters = () => {
    setFilters({
      query: '',
      category: '',
      priceRange: [0, 500],
      inStock: false,
      rating: 0,
      locations: [],
      brands: []
    });
  };

  const activeFiltersCount = 
    (filters.category ? 1 : 0) +
    (filters.inStock ? 1 : 0) +
    (filters.rating > 0 ? 1 : 0) +
    filters.locations.length +
    filters.brands.length +
    (filters.priceRange[0] > 0 || filters.priceRange[1] < 500 ? 1 : 0);

  return (
    <div className="w-full space-y-4">
      {/* Main Search Bar */}
      <Card>
        <CardContent className="p-4">
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search for car accessories..."
                value={filters.query}
                onChange={(e) => setFilters(prev => ({ ...prev, query: e.target.value }))}
                className="pl-10"
              />
            </div>
            <Button 
              variant="outline" 
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="flex items-center space-x-2"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Filters</span>
              {activeFiltersCount > 0 && (
                <Badge variant="secondary" className="ml-1">
                  {activeFiltersCount}
                </Badge>
              )}
            </Button>
            <Button variant="hero">
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Advanced Filters */}
      {showAdvanced && (
        <Card className="animate-fade-in">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-foreground flex items-center">
                <Filter className="w-5 h-5 mr-2" />
                Advanced Filters
              </h3>
              <Button variant="ghost" size="sm" onClick={clearFilters}>
                <X className="w-4 h-4 mr-2" />
                Clear All
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Category Filter */}
              <div className="space-y-2">
                <Label>Category</Label>
                <Select 
                  value={filters.category} 
                  onValueChange={(value) => setFilters(prev => ({ 
                    ...prev, 
                    category: value === 'All Categories' ? '' : value 
                  }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Price Range */}
              <div className="space-y-2">
                <Label>Price Range: ${filters.priceRange[0]} - ${filters.priceRange[1]}</Label>
                <Slider
                  value={filters.priceRange}
                  onValueChange={(value) => setFilters(prev => ({ ...prev, priceRange: value as [number, number] }))}
                  max={500}
                  min={0}
                  step={10}
                  className="w-full"
                />
              </div>

              {/* Rating Filter */}
              <div className="space-y-2">
                <Label>Minimum Rating</Label>
                <Select 
                  value={filters.rating.toString()} 
                  onValueChange={(value) => setFilters(prev => ({ ...prev, rating: parseFloat(value) }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Any rating" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0">Any rating</SelectItem>
                    <SelectItem value="4">4+ stars</SelectItem>
                    <SelectItem value="4.5">4.5+ stars</SelectItem>
                    <SelectItem value="4.8">4.8+ stars</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Stock Status */}
              <div className="space-y-3">
                <Label>Availability</Label>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="inStock"
                    checked={filters.inStock}
                    onCheckedChange={(checked) => 
                      setFilters(prev => ({ ...prev, inStock: !!checked }))
                    }
                  />
                  <Label htmlFor="inStock" className="text-sm">In stock only</Label>
                </div>
              </div>

              {/* Location Filter */}
              <div className="space-y-3">
                <Label>Store Locations</Label>
                <div className="space-y-2">
                  {locations.map((location) => (
                    <div key={location} className="flex items-center space-x-2">
                      <Checkbox
                        id={location}
                        checked={filters.locations.includes(location)}
                        onCheckedChange={(checked) => handleLocationChange(location, !!checked)}
                      />
                      <Label htmlFor={location} className="text-sm">{location}</Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Brand Filter */}
              <div className="space-y-3">
                <Label>Brands</Label>
                <div className="space-y-2">
                  {brands.map((brand) => (
                    <div key={brand} className="flex items-center space-x-2">
                      <Checkbox
                        id={brand}
                        checked={filters.brands.includes(brand)}
                        onCheckedChange={(checked) => handleBrandChange(brand, !!checked)}
                      />
                      <Label htmlFor={brand} className="text-sm">{brand}</Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Active Filters */}
            {activeFiltersCount > 0 && (
              <div className="mt-6 pt-6 border-t">
                <Label className="text-sm font-medium mb-3 block">Active Filters:</Label>
                <div className="flex flex-wrap gap-2">
                  {filters.category && (
                    <Badge variant="secondary" className="flex items-center space-x-1">
                      <span>{filters.category}</span>
                      <X 
                        className="w-3 h-3 cursor-pointer" 
                        onClick={() => setFilters(prev => ({ ...prev, category: '' }))}
                      />
                    </Badge>
                  )}
                  {filters.inStock && (
                    <Badge variant="secondary" className="flex items-center space-x-1">
                      <span>In Stock</span>
                      <X 
                        className="w-3 h-3 cursor-pointer" 
                        onClick={() => setFilters(prev => ({ ...prev, inStock: false }))}
                      />
                    </Badge>
                  )}
                  {filters.rating > 0 && (
                    <Badge variant="secondary" className="flex items-center space-x-1">
                      <span>{filters.rating}+ stars</span>
                      <X 
                        className="w-3 h-3 cursor-pointer" 
                        onClick={() => setFilters(prev => ({ ...prev, rating: 0 }))}
                      />
                    </Badge>
                  )}
                  {(filters.priceRange[0] > 0 || filters.priceRange[1] < 500) && (
                    <Badge variant="secondary" className="flex items-center space-x-1">
                      <span>${filters.priceRange[0]} - ${filters.priceRange[1]}</span>
                      <X 
                        className="w-3 h-3 cursor-pointer" 
                        onClick={() => setFilters(prev => ({ ...prev, priceRange: [0, 500] }))}
                      />
                    </Badge>
                  )}
                  {filters.locations.map(location => (
                    <Badge key={location} variant="secondary" className="flex items-center space-x-1">
                      <span>{location}</span>
                      <X 
                        className="w-3 h-3 cursor-pointer" 
                        onClick={() => handleLocationChange(location, false)}
                      />
                    </Badge>
                  ))}
                  {filters.brands.map(brand => (
                    <Badge key={brand} variant="secondary" className="flex items-center space-x-1">
                      <span>{brand}</span>
                      <X 
                        className="w-3 h-3 cursor-pointer" 
                        onClick={() => handleBrandChange(brand, false)}
                      />
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AdvancedSearch;