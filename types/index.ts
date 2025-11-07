export type EventCategory =
  | "music"
  | "markets"
  | "outdoor"
  | "arts"
  | "food"
  | "sports"
  | "family"
  | "culture";

export interface Event {
  id: string;
  title: string;
  description: string;
  category: EventCategory;
  date: Date;
  time: string;
  venue: string;
  venueAddress: string;
  price: number | "free";
  image: string;
  images?: string[];
  organizer: string;
  organizerId: string;
  featured?: boolean;
  trending?: boolean;
  saved?: boolean;
  views?: number;
  favorites?: number;
  latitude?: number;
  longitude?: number;
  tags?: string[];
}

export interface Venue {
  id: string;
  name: string;
  address: string;
  rating: number;
  image: string;
  eventCount: number;
  latitude: number;
  longitude: number;
}

export interface FilterOptions {
  dateRange?: {
    start: Date;
    end: Date;
  };
  categories: EventCategory[];
  priceRange: "all" | "free" | "paid";
  suburb?: string;
  searchQuery?: string;
}


