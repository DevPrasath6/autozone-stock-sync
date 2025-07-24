import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Target, 
  Users, 
  Award, 
  TrendingUp, 
  Globe, 
  Heart,
  Shield,
  Star
} from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Users className="w-8 h-8" />, value: '10,000+', label: 'Happy Customers' },
    { icon: <Award className="w-8 h-8" />, value: '15+', label: 'Years Experience' },
    { icon: <Globe className="w-8 h-8" />, value: '3', label: 'City Locations' },
    { icon: <Star className="w-8 h-8" />, value: '4.8', label: 'Average Rating' }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Quality First',
      description: 'We source only the highest quality car accessories from trusted manufacturers.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Customer-Centric',
      description: 'Your satisfaction is our priority. We go above and beyond to exceed expectations.'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Leading the industry with real-time inventory management and modern solutions.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Trust & Reliability',
      description: 'Building lasting relationships through transparent service and honest pricing.'
    }
  ];

  const team = [
    {
      name: 'Robert Mitchell',
      role: 'CEO & Founder',
      experience: '20 years automotive industry',
      description: 'Visionary leader who revolutionized car accessories retail with technology.'
    },
    {
      name: 'Sarah Johnson',
      role: 'Operations Director',
      experience: '15 years retail management',
      description: 'Expert in inventory systems and multi-location operations management.'
    },
    {
      name: 'David Chen',
      role: 'Technology Head',
      experience: '12 years software development',
      description: 'Architect of our real-time inventory management system.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 text-primary border-primary">
                Our Story
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Revolutionizing Car
                <span className="block text-primary">Accessories Retail</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                For over 15 years, AutoZone Motors has been the trusted choice for premium car accessories. 
                We combine traditional retail excellence with cutting-edge inventory management technology 
                to deliver an unmatched customer experience.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center bg-white/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary mx-auto mb-4">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our Mission & Vision
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-3">Mission</h3>
                    <p className="text-muted-foreground">
                      To provide premium car accessories with exceptional service, leveraging innovative 
                      technology to ensure product availability and customer satisfaction across all locations.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-accent mb-3">Vision</h3>
                    <p className="text-muted-foreground">
                      To be the leading car accessories retailer, setting the standard for real-time 
                      inventory management and customer experience in the automotive retail industry.
                    </p>
                  </div>
                </div>
              </div>
              
              <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    The Technology Advantage
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Our proprietary real-time inventory management system delivers 25% reduction in stockouts 
                    and 100% visibility across all locations, ensuring you find what you need, when you need it.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Real-time stock synchronization</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm">Automated reordering systems</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">15-35% ROI achievement</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The principles that guide everything we do and drive our commitment to excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      {value.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Leadership Team
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Meet the experienced professionals driving AutoZone Motors' success and innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <p className="text-primary font-semibold">{member.role}</p>
                    <Badge variant="outline" className="text-xs">
                      {member.experience}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center text-sm">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-automotive-dark to-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join the AutoZone Motors Family
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Experience the difference that quality products, expert service, and innovative 
              technology can make for your vehicle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" className="px-12 py-6 text-lg">
                Visit Our Stores
              </Button>
              <Button variant="outline" size="lg" className="px-12 py-6 text-lg border-white text-white hover:bg-white hover:text-automotive-dark">
                Contact Us Today
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;