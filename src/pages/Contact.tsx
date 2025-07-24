import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare,
  Send,
  Facebook,
  Twitter,
  Instagram
} from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      details: ['+1 (555) 123-4567', '+1 (555) 234-5678', '+1 (555) 345-6789'],
      description: 'Call any of our three locations'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: ['info@autozone-motors.com', 'support@autozone-motors.com'],
      description: 'We respond within 24 hours'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Business Hours',
      details: ['Mon-Sat: 9AM-8PM', 'Sunday: 10AM-6PM'],
      description: 'Extended hours at mall location'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Locations',
      details: ['Downtown • North Branch • South Mall'],
      description: 'Three convenient locations'
    }
  ];

  const locations = [
    {
      name: 'Downtown Store',
      address: '123 Main Street, Downtown',
      phone: '+1 (555) 123-4567',
      hours: 'Mon-Sat: 9AM-8PM, Sun: 10AM-6PM'
    },
    {
      name: 'North Branch',
      address: '456 Oak Avenue, North District',
      phone: '+1 (555) 234-5678',
      hours: 'Mon-Sat: 9AM-7PM, Sun: 11AM-5PM'
    },
    {
      name: 'South Mall Location',
      address: '789 Shopping Center, South Mall',
      phone: '+1 (555) 345-6789',
      hours: 'Mon-Sat: 10AM-9PM, Sun: 11AM-7PM'
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
              Get In Touch
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Contact AutoZone
              <span className="block text-primary">Motors</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to upgrade your vehicle? Have questions about our products or services? 
              We're here to help you find the perfect car accessories solution.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary mx-auto mb-4">
                      {info.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{info.title}</h3>
                    <div className="space-y-1 mb-3">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-foreground font-medium">{detail}</p>
                      ))}
                    </div>
                    <p className="text-muted-foreground text-sm">{info.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center space-x-2">
                    <MessageSquare className="w-6 h-6 text-primary" />
                    <span>Send Us a Message</span>
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Product inquiry, installation question, etc." />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your vehicle and what accessories you're interested in..."
                      className="min-h-[120px]"
                    />
                  </div>
                  
                  <Button variant="hero" size="lg" className="w-full">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </CardContent>
              </Card>

              {/* Store Locations */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Visit Our Stores
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Stop by any of our three locations to see our products in person 
                    and get expert advice from our team.
                  </p>
                </div>

                {locations.map((location, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold text-foreground mb-3">
                        {location.name}
                      </h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm">{location.address}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm">{location.phone}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm">{location.hours}</span>
                        </div>
                      </div>
                      <div className="flex space-x-2 mt-4">
                        <Button variant="outline" size="sm" className="flex-1">
                          Get Directions
                        </Button>
                        <Button variant="default" size="sm" className="flex-1">
                          Call Store
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* Social Media */}
                <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
                  <CardContent className="p-6 text-center">
                    <h4 className="text-lg font-semibold text-foreground mb-4">
                      Follow Us
                    </h4>
                    <p className="text-muted-foreground mb-4 text-sm">
                      Stay updated with the latest products and promotions
                    </p>
                    <div className="flex justify-center space-x-4">
                      <Button variant="outline" size="sm" className="p-2">
                        <Facebook className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="p-2">
                        <Twitter className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="p-2">
                        <Instagram className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="py-20 bg-gradient-to-r from-automotive-dark to-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need Immediate Assistance?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              For urgent installation issues or inventory questions, 
              call our priority support line available during business hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" className="px-12 py-6 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                Call Priority Support
              </Button>
              <Button variant="outline" size="lg" className="px-12 py-6 text-lg border-white text-white hover:bg-white hover:text-automotive-dark">
                <MessageSquare className="w-5 h-5 mr-2" />
                Live Chat Support
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;