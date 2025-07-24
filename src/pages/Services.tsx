import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Wrench, 
  Search, 
  Truck, 
  CheckCircle, 
  Clock, 
  Users, 
  Settings,
  Award
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Professional Installation',
      description: 'Expert installation of all car accessories by certified technicians',
      features: ['Certified Technicians', 'Quality Guarantee', 'All Brands Supported'],
      price: 'From $25',
      popular: true
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: 'Real-time Inventory Check',
      description: 'Instantly check product availability across all three locations',
      features: ['Live Stock Levels', 'Multi-location Search', 'Reserve & Hold'],
      price: 'Free Service',
      popular: false
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Inter-store Transfer',
      description: 'Transfer products between locations for convenient pickup',
      features: ['Same-day Transfer', 'Free Service', 'SMS Notifications'],
      price: 'Free',
      popular: false
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Expert Consultation',
      description: 'Get personalized advice from our automotive accessories experts',
      features: ['Product Matching', 'Custom Solutions', 'Vehicle Compatibility'],
      price: 'Free',
      popular: false
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Custom Fitting',
      description: 'Custom measurements and fitting for perfect accessory installation',
      features: ['Precision Measurements', 'Custom Orders', '100% Fit Guarantee'],
      price: 'From $50',
      popular: false
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Warranty & Support',
      description: 'Comprehensive warranty and ongoing support for all installations',
      features: ['Extended Warranty', '24/7 Support', 'Maintenance Reminders'],
      price: 'Included',
      popular: false
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Browse & Select',
      description: 'Choose from our extensive catalog of premium car accessories'
    },
    {
      step: 2,
      title: 'Check Availability',
      description: 'Use our real-time inventory system to confirm stock levels'
    },
    {
      step: 3,
      title: 'Professional Installation',
      description: 'Our certified technicians ensure perfect installation'
    },
    {
      step: 4,
      title: 'Quality Assurance',
      description: 'Final inspection and testing to guarantee satisfaction'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="outline" className="mb-4 text-primary border-primary">
              Professional Services
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Expert Services for
              <span className="block text-primary">Your Vehicle</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              From professional installation to real-time inventory management, 
              we provide comprehensive services to ensure your complete satisfaction.
            </p>
            <Button variant="hero" size="lg" className="px-12 py-6 text-lg">
              Schedule Service Today
            </Button>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Complete Service Suite
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive automotive services backed by cutting-edge technology 
                and expert craftsmanship.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card 
                  key={index} 
                  className={`group hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] ${
                    service.popular ? 'ring-2 ring-primary/20 bg-gradient-to-br from-primary/5 to-accent/5' : ''
                  }`}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                        {service.icon}
                      </div>
                      {service.popular && (
                        <Badge className="bg-accent">Most Popular</Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl mt-4">{service.title}</CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{service.description}</p>
                    
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4 border-t">
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-primary">{service.price}</span>
                        <Button variant="outline" size="sm">
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Service Process
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Simple, transparent process that ensures quality and satisfaction every time.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute left-full top-8 w-8 h-0.5 bg-primary/30 transform -translate-y-1/2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-automotive-dark to-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Upgrade Your Vehicle?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Contact us today to schedule a consultation and discover how our services 
              can transform your driving experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" className="px-12 py-6 text-lg">
                <Clock className="w-5 h-5 mr-2" />
                Book Appointment
              </Button>
              <Button variant="outline" size="lg" className="px-12 py-6 text-lg border-white text-white hover:bg-white hover:text-automotive-dark">
                <Search className="w-5 h-5 mr-2" />
                Check Inventory
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;