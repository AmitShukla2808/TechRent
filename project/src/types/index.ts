export type Product = {
  id: string;
  name: string;
  category: 'Laptop' | 'Camera' | 'Gaming' | 'Audio' | 'TV';
  brand: string;
  dailyRate: number;
  weeklyRate: number;
  monthlyRate: number;
  imageUrl: string;
  images: string[];
  specs: Record<string, string>;
  condition: 'Like New' | 'Good' | 'Fair';
  available: boolean;
  ownerId: string;
  reviews: Review[];
};

export type Review = {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  userImage: string;
};

export type RentalPeriod = 'daily' | 'weekly' | 'monthly';

export type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  rating: number;
  reviews: number;
};

export type Filter = {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  condition?: string;
  available?: boolean;
  search?: string;
};