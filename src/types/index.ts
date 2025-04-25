
export type UserRole = 'property_owner' | 'customer' | 'needy_person' | 'association' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: {
    address: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  features: {
    bedrooms: number;
    bathrooms: number;
    area: number;
    garage?: number;
  };
  images: string[];
  propertyType: 'house' | 'apartment' | 'commercial' | 'land';
  status: 'available' | 'sold' | 'rented' | 'archived';
  owner: {
    id: string;
    name: string;
  };
  createdAt: string;
  updatedAt: string;
}
