
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedProperties from '@/components/FeaturedProperties';
import { Button } from '@/components/ui/button';
import { Home, Users, Heart, MapPin, MessageSquare, ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <FeaturedProperties />
        
        {/* How It Works Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3">How It Works</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our platform connects property owners, customers, and donation associations to make property transactions and housing assistance simple and effective.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-lg border">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="h-8 w-8 text-real-estate-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Find Properties</h3>
                <p className="text-muted-foreground">
                  Browse thousands of listings or use our smart recommendations to find your perfect match.
                </p>
              </div>
              
              <div className="text-center p-6 rounded-lg border">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-8 w-8 text-real-estate-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Connect Directly</h3>
                <p className="text-muted-foreground">
                  Chat with property owners, schedule visits, and negotiate deals all through our platform.
                </p>
              </div>
              
              <div className="text-center p-6 rounded-lg border">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-real-estate-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Support Housing</h3>
                <p className="text-muted-foreground">
                  Donate to associations helping those in need, or apply for housing assistance if you qualify.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Donation Section */}
        <section className="py-16 bg-real-estate-primary text-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Make a Difference Through Housing</h2>
                <p className="text-lg mb-6 opacity-90">
                  Our integrated donation system connects generous donors with housing associations that help those in need. Every contribution helps someone find a safe place to call home.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" variant="secondary">Donate Now</Button>
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-real-estate-primary">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Supporting communities" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Popular Locations */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3">Popular Locations</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore properties in these sought-after areas
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['New York', 'Los Angeles', 'Chicago', 'Miami'].map((city) => (
                <a href="#" key={city} className="group relative overflow-hidden rounded-lg h-48">
                  <img 
                    src={`https://source.unsplash.com/400x300?${city.toLowerCase().replace(' ', ',')}`} 
                    alt={city} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
                    <span className="text-white font-bold text-lg">{city}</span>
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-real-estate-light">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3">What People Say</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Hear from our satisfied users across all platform roles
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-real-estate-primary/20 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-real-estate-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Michael Brown</h4>
                    <p className="text-muted-foreground text-sm">Property Owner</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "I've been able to manage my multiple properties easily through this platform. The integrated messaging system makes communication with potential buyers a breeze."
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-real-estate-primary/20 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-real-estate-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Sarah Johnson</h4>
                    <p className="text-muted-foreground text-sm">Home Buyer</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "The property recommendation system helped me find exactly what I was looking for. I was able to schedule viewings and communicate with the seller all in one platform."
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-real-estate-primary/20 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-real-estate-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Housing First Org</h4>
                    <p className="text-muted-foreground text-sm">Donation Association</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "This platform has streamlined our process of connecting those in need with available housing options. The donation system has been a game changer for our organization."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-real-estate-dark text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Whether you're looking to buy, sell, rent, or donate, our platform has everything you need to make it happen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default" className="bg-real-estate-accent hover:bg-real-estate-accent/90">
                Find Properties
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-real-estate-dark">
                List Your Property
              </Button>
              <Button size="lg" variant="secondary">
                Support Housing <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-real-estate-dark text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Home className="h-6 w-6" />
                <span className="font-bold text-xl">ISRES</span>
              </div>
              <p className="text-gray-300 text-sm">
                Integrated Smart Real Estate System, connecting property owners, customers, and housing associations.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Explore</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white text-sm">Properties</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm">Donations</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm">Support Requests</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm">Associations</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white text-sm">Help Center</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm">Blog</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm">FAQs</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm">Contact Us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white text-sm">Terms of Service</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm">Cookies</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm">Licenses</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Integrated Smart Real Estate System. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
