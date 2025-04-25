
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Property } from '@/types';
import { Heart, MapPin, ArrowRight } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <Card className="property-card overflow-hidden h-full">
      {/* Image with overlay status badge */}
      <div className="relative h-48">
        <img
          src={property.images[0] || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"}
          alt={property.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 right-0 p-2">
          <Badge className={`
            ${property.status === 'available' ? 'bg-real-estate-success text-white' : ''}
            ${property.status === 'sold' ? 'bg-real-estate-error text-white' : ''}
            ${property.status === 'rented' ? 'bg-real-estate-secondary text-white' : ''}
            ${property.status === 'archived' ? 'bg-gray-500 text-white' : ''}
          `}>
            {property.status.charAt(0).toUpperCase() + property.status.slice(1)}
          </Badge>
        </div>
        <button className="absolute top-0 left-0 p-2 text-white hover:text-red-500 transition-colors">
          <Heart className="h-6 w-6" />
        </button>
      </div>
      
      {/* Content */}
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-lg line-clamp-1">{property.title}</h3>
            <div className="flex items-center text-muted-foreground mt-1">
              <MapPin className="h-4 w-4 mr-1" />
              <span className="text-sm">{property.location.city}, {property.location.state}</span>
            </div>
          </div>
          <p className="font-bold text-lg text-real-estate-primary">
            ${property.price.toLocaleString()}
          </p>
        </div>
        
        {/* Features */}
        <div className="flex justify-between mt-4 text-sm text-muted-foreground">
          <div>
            <span className="font-medium">{property.features.bedrooms}</span> beds
          </div>
          <div>
            <span className="font-medium">{property.features.bathrooms}</span> baths
          </div>
          <div>
            <span className="font-medium">{property.features.area}</span> sqft
          </div>
          {property.features.garage !== undefined && (
            <div>
              <span className="font-medium">{property.features.garage}</span> garage
            </div>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex justify-between">
        <div className="text-sm text-muted-foreground">
          Listed by <span className="font-medium">{property.owner.name}</span>
        </div>
        <a href={`/properties/${property.id}`} className="text-real-estate-primary hover:underline flex items-center text-sm font-medium">
          View details <ArrowRight className="h-4 w-4 ml-1" />
        </a>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;
