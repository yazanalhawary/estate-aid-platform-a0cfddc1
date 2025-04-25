
import React from 'react';
import { Property } from '@/types';
import PropertyCard from './PropertyCard';
import { Button } from '@/components/ui/button';

// Mock data for example properties
const mockProperties: Property[] = [
  {
    id: "1",
    title: "Luxury Villa with Ocean View",
    description: "Beautiful luxury villa with panoramic ocean views, private pool, and modern amenities.",
    price: 1250000,
    location: {
      address: "123 Coastal Drive",
      city: "Malibu",
      state: "CA",
      country: "USA",
      zipCode: "90265",
      coordinates: {
        lat: 34.0259,
        lng: -118.7798
      }
    },
    features: {
      bedrooms: 5,
      bathrooms: 4,
      area: 3500,
      garage: 2
    },
    images: ["https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"],
    propertyType: "house",
    status: "available",
    owner: {
      id: "owner1",
      name: "John Smith"
    },
    createdAt: "2023-04-15T10:30:00Z",
    updatedAt: "2023-04-15T10:30:00Z"
  },
  {
    id: "2",
    title: "Modern Downtown Apartment",
    description: "Stylish apartment in the heart of the city with amazing skyline views.",
    price: 450000,
    location: {
      address: "456 Urban Street",
      city: "Chicago",
      state: "IL",
      country: "USA",
      zipCode: "60601",
      coordinates: {
        lat: 41.8781,
        lng: -87.6298
      }
    },
    features: {
      bedrooms: 2,
      bathrooms: 2,
      area: 1200
    },
    images: ["https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"],
    propertyType: "apartment",
    status: "available",
    owner: {
      id: "owner2",
      name: "Emma Johnson"
    },
    createdAt: "2023-05-10T14:45:00Z",
    updatedAt: "2023-05-10T14:45:00Z"
  },
  {
    id: "3",
    title: "Country House with Large Garden",
    description: "Charming country house surrounded by nature with a spacious garden and fruit trees.",
    price: 320000,
    location: {
      address: "789 Rural Road",
      city: "Portland",
      state: "OR",
      country: "USA",
      zipCode: "97201",
      coordinates: {
        lat: 45.5152,
        lng: -122.6784
      }
    },
    features: {
      bedrooms: 3,
      bathrooms: 2,
      area: 1800,
      garage: 1
    },
    images: ["https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"],
    propertyType: "house",
    status: "available",
    owner: {
      id: "owner3",
      name: "Robert Davis"
    },
    createdAt: "2023-06-05T09:15:00Z",
    updatedAt: "2023-06-05T09:15:00Z"
  }
];

const FeaturedProperties: React.FC = () => {
  return (
    <section className="py-16 bg-real-estate-light">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-real-estate-dark">Featured Properties</h2>
            <p className="text-muted-foreground mt-2">Explore our handpicked selection of properties</p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0">
            View All Properties
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockProperties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
