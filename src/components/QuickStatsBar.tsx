import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingUp, 
  Package, 
  MapPin, 
  Users, 
  Clock,
  Star
} from 'lucide-react';

const QuickStatsBar = () => {
  const [stats, setStats] = useState({
    totalProducts: 0,
    locationsServed: 0,
    happyCustomers: 0,
    avgRating: 0,
    uptime: 0
  });

  useEffect(() => {
    // Animate counters on mount
    const animateValue = (key: keyof typeof stats, endValue: number, duration: number = 2000) => {
      const startValue = 0;
      const startTime = Date.now();

      const updateValue = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.floor(startValue + (endValue - startValue) * easeOut);

        setStats(prev => ({ ...prev, [key]: currentValue }));

        if (progress < 1) {
          requestAnimationFrame(updateValue);
        }
      };

      requestAnimationFrame(updateValue);
    };

    // Start animations with slight delays
    setTimeout(() => animateValue('totalProducts', 500), 200);
    setTimeout(() => animateValue('locationsServed', 3), 400);
    setTimeout(() => animateValue('happyCustomers', 1250), 600);
    setTimeout(() => animateValue('avgRating', 48), 800); // 4.8 * 10
    setTimeout(() => animateValue('uptime', 9991), 1000); // 99.91%
  }, []);

  const statsData = [
    {
      icon: <Package className="w-5 h-5" />,
      label: 'Products Available',
      value: `${stats.totalProducts}+`,
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Store Locations',
      value: stats.locationsServed.toString(),
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    },
    {
      icon: <Users className="w-5 h-5" />,
      label: 'Happy Customers',
      value: `${stats.happyCustomers}+`,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: <Star className="w-5 h-5" />,
      label: 'Average Rating',
      value: `${(stats.avgRating / 10).toFixed(1)}★`,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100'
    },
    {
      icon: <Clock className="w-5 h-5" />,
      label: 'System Uptime',
      value: `${(stats.uptime / 100).toFixed(2)}%`,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    }
  ];

  return (
    <section className="py-12 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <Badge variant="outline" className="mb-2 text-primary border-primary">
            Live Statistics
          </Badge>
          <h3 className="text-xl font-semibold text-foreground">
            Real-time Performance Metrics
          </h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {statsData.map((stat, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-4 text-center">
                <div className={`w-10 h-10 ${stat.bgColor} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                  <div className={stat.color}>
                    {stat.icon}
                  </div>
                </div>
                <div className="space-y-1">
                  <p className={`text-2xl font-bold ${stat.color}`}>
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground font-medium">
                    {stat.label}
                  </p>
                </div>
                
                {/* Pulse animation for live data */}
                {(index === 0 || index === 4) && (
                  <div className="absolute top-2 right-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickStatsBar;