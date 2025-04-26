
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

/**
 * @returns {React.JSX.Element}
 */
const Hero = () => {
  return (
    <section className="relative">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
      </div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Find Your Perfect Home Today
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            Explore thousands of properties for sale and rent, or list your own with our comprehensive real estate platform.
          </p>
          
          {/* Search Form */}
          <div className="bg-white p-4 rounded-lg shadow-lg max-w-2xl mx-auto">
            <div className="flex gap-2">
              <div className="relative flex-grow">
                <Input 
                  type="text" 
                  placeholder="Search by location, property type, or keyword" 
                  className="pl-10 h-12"
                />
                <Search className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground" />
              </div>
              <Button size="lg" className="px-8 h-12">
                Search
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-3">
              <Button variant="outline" size="sm" className="text-real-estate-dark">
                Buy
              </Button>
              <Button variant="outline" size="sm" className="text-real-estate-dark">
                Rent
              </Button>
              <Button variant="outline" size="sm" className="text-real-estate-dark">
                Sell
              </Button>
              <Button variant="outline" size="sm" className="text-real-estate-dark text-real-estate-accent">
                Donate
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
