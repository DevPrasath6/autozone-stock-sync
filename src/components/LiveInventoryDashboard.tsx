import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  MapPin, 
  Package, 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle, 
  CheckCircle,
  RefreshCw,
  BarChart3,
  Clock
} from 'lucide-react';

interface InventoryItem {
  id: string;
  name: string;
  category: string;
  currentStock: number;
  maxStock: number;
  reorderPoint: number;
  location: string;
  status: 'in-stock' | 'low-stock' | 'critical' | 'out-of-stock';
  lastUpdated: string;
  trend: 'up' | 'down' | 'stable';
  velocity: number; // items sold per day
}

const LiveInventoryDashboard = () => {
  const [lastUpdate, setLastUpdate] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Mock real-time inventory data
  const [inventoryData, setInventoryData] = useState<InventoryItem[]>([
    {
      id: '1',
      name: 'Premium Leather Seat Covers',
      category: 'Interior',
      currentStock: 15,
      maxStock: 25,
      reorderPoint: 5,
      location: 'Downtown Store',
      status: 'in-stock',
      lastUpdated: '2 minutes ago',
      trend: 'down',
      velocity: 3.2
    },
    {
      id: '2',
      name: 'LED Fog Light Kit',
      category: 'Lighting',
      currentStock: 3,
      maxStock: 20,
      reorderPoint: 5,
      location: 'North Branch',
      status: 'critical',
      lastUpdated: '1 minute ago',
      trend: 'down',
      velocity: 2.8
    },
    {
      id: '3',
      name: 'All-Weather Floor Mats',
      category: 'Interior',
      currentStock: 22,
      maxStock: 30,
      reorderPoint: 8,
      location: 'South Mall',
      status: 'in-stock',
      lastUpdated: '3 minutes ago',
      trend: 'stable',
      velocity: 1.5
    },
    {
      id: '4',
      name: 'Dashboard Cover Set',
      category: 'Interior',
      currentStock: 7,
      maxStock: 15,
      reorderPoint: 5,
      location: 'Downtown Store',
      status: 'low-stock',
      lastUpdated: '1 minute ago',
      trend: 'down',
      velocity: 2.1
    },
    {
      id: '5',
      name: 'Chrome Door Handles',
      category: 'Exterior',
      currentStock: 0,
      maxStock: 12,
      reorderPoint: 3,
      location: 'North Branch',
      status: 'out-of-stock',
      lastUpdated: '5 minutes ago',
      trend: 'down',
      velocity: 1.8
    },
    {
      id: '6',
      name: 'Car Care Kit Premium',
      category: 'Maintenance',
      currentStock: 18,
      maxStock: 20,
      reorderPoint: 6,
      location: 'South Mall',
      status: 'in-stock',
      lastUpdated: '2 minutes ago',
      trend: 'up',
      velocity: 0.9
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'in-stock': return 'text-green-600 border-green-200 bg-green-50';
      case 'low-stock': return 'text-yellow-600 border-yellow-200 bg-yellow-50';
      case 'critical': return 'text-orange-600 border-orange-200 bg-orange-50';
      case 'out-of-stock': return 'text-red-600 border-red-200 bg-red-50';
      default: return 'text-gray-600 border-gray-200 bg-gray-50';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'in-stock': return <CheckCircle className="w-4 h-4" />;
      case 'low-stock': return <AlertTriangle className="w-4 h-4" />;
      case 'critical': return <AlertTriangle className="w-4 h-4" />;
      case 'out-of-stock': return <AlertTriangle className="w-4 h-4" />;
      default: return <Package className="w-4 h-4" />;
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="w-4 h-4 text-green-600" />;
      case 'down': return <TrendingDown className="w-4 h-4 text-red-600" />;
      default: return <BarChart3 className="w-4 h-4 text-gray-600" />;
    }
  };

  const getStockPercentage = (current: number, max: number) => {
    return Math.round((current / max) * 100);
  };

  const getProgressColor = (percentage: number) => {
    if (percentage >= 70) return 'bg-green-500';
    if (percentage >= 30) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const refreshData = async () => {
    setIsRefreshing(true);
    
    // Simulate API call with random updates
    setTimeout(() => {
      setInventoryData(prev => 
        prev.map(item => ({
          ...item,
          currentStock: Math.max(0, item.currentStock + Math.floor(Math.random() * 3) - 1),
          lastUpdated: 'just now'
        }))
      );
      setLastUpdate(new Date());
      setIsRefreshing(false);
    }, 1000);
  };

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setInventoryData(prev => 
        prev.map(item => {
          const randomChange = Math.random() > 0.7 ? (Math.random() > 0.5 ? 1 : -1) : 0;
          return {
            ...item,
            currentStock: Math.max(0, Math.min(item.maxStock, item.currentStock + randomChange)),
            lastUpdated: randomChange !== 0 ? 'just now' : item.lastUpdated
          };
        })
      );
      setLastUpdate(new Date());
    }, 10000); // Update every 10 seconds

    return () => clearInterval(interval);
  }, []);

  const locationStats = inventoryData.reduce((acc, item) => {
    if (!acc[item.location]) {
      acc[item.location] = { total: 0, lowStock: 0, critical: 0, outOfStock: 0 };
    }
    acc[item.location].total++;
    if (item.status === 'low-stock') acc[item.location].lowStock++;
    if (item.status === 'critical') acc[item.location].critical++;
    if (item.status === 'out-of-stock') acc[item.location].outOfStock++;
    return acc;
  }, {} as Record<string, { total: number; lowStock: number; critical: number; outOfStock: number }>);

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <Badge variant="outline" className="mb-4 text-primary border-primary">
              Real-Time Monitoring
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Live Inventory Dashboard
            </h2>
            <p className="text-muted-foreground flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              Last updated: {lastUpdate.toLocaleTimeString()}
            </p>
          </div>
          <Button 
            onClick={refreshData} 
            disabled={isRefreshing}
            variant="outline"
            className="flex items-center space-x-2"
          >
            <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
            <span>Refresh</span>
          </Button>
        </div>

        {/* Location Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {Object.entries(locationStats).map(([location, stats]) => (
            <Card key={location} className="border-l-4 border-l-primary">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-primary" />
                  {location}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-foreground">{stats.total}</p>
                    <p className="text-sm text-muted-foreground">Total Items</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-yellow-600">{stats.lowStock + stats.critical}</p>
                    <p className="text-sm text-muted-foreground">Need Attention</p>
                  </div>
                </div>
                {stats.outOfStock > 0 && (
                  <div className="mt-3 p-2 bg-red-50 rounded-md">
                    <p className="text-sm text-red-600 font-medium">
                      {stats.outOfStock} item(s) out of stock
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Inventory Items */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-foreground">Current Inventory Status</h3>
          
          {inventoryData.map((item) => {
            const stockPercentage = getStockPercentage(item.currentStock, item.maxStock);
            const isLowStock = item.currentStock <= item.reorderPoint;
            
            return (
              <Card key={item.id} className={`transition-all duration-300 ${isLowStock ? 'ring-2 ring-yellow-200' : ''}`}>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 items-center">
                    {/* Product Info */}
                    <div className="lg:col-span-2">
                      <h4 className="font-semibold text-foreground">{item.name}</h4>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge variant="outline" className="text-xs">{item.category}</Badge>
                        <span className="text-sm text-muted-foreground flex items-center">
                          <MapPin className="w-3 h-3 mr-1" />
                          {item.location}
                        </span>
                      </div>
                    </div>

                    {/* Stock Level */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Stock Level</span>
                        <span className="text-sm text-muted-foreground">
                          {item.currentStock}/{item.maxStock}
                        </span>
                      </div>
                      <Progress 
                        value={stockPercentage} 
                        className="h-2"
                      />
                    </div>

                    {/* Status */}
                    <div className="flex justify-center">
                      <Badge className={getStatusColor(item.status)}>
                        {getStatusIcon(item.status)}
                        <span className="ml-1 capitalize">
                          {item.status.replace('-', ' ')}
                        </span>
                      </Badge>
                    </div>

                    {/* Trend & Velocity */}
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-1 mb-1">
                        {getTrendIcon(item.trend)}
                        <span className="text-sm font-medium">{item.velocity}/day</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Sales velocity</p>
                    </div>

                    {/* Last Updated */}
                    <div className="text-center">
                      <p className="text-sm font-medium text-foreground">{item.lastUpdated}</p>
                      <p className="text-xs text-muted-foreground">Last update</p>
                    </div>
                  </div>

                  {/* Reorder Alert */}
                  {item.currentStock <= item.reorderPoint && item.currentStock > 0 && (
                    <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
                      <div className="flex items-center space-x-2">
                        <AlertTriangle className="w-4 h-4 text-yellow-600" />
                        <p className="text-sm text-yellow-800">
                          <strong>Reorder Alert:</strong> Stock is at or below reorder point ({item.reorderPoint} units)
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Out of Stock Alert */}
                  {item.currentStock === 0 && (
                    <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md">
                      <div className="flex items-center space-x-2">
                        <AlertTriangle className="w-4 h-4 text-red-600" />
                        <p className="text-sm text-red-800">
                          <strong>Out of Stock:</strong> Immediate restocking required
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LiveInventoryDashboard;