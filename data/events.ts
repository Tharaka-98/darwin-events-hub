import { Event } from "@/types";

export const mockEvents: Event[] = [
  {
    id: "1",
    title: "Mindil Beach Sunset Markets",
    description:
      "Experience the iconic Mindil Beach Sunset Markets, a Darwin institution since 1987. Every Thursday and Sunday evening from May to October, the markets come alive with over 200 stalls offering local arts, crafts, and international cuisine. Watch the spectacular sunset over the Arafura Sea while enjoying live music and entertainment.",
    category: "markets",
    date: new Date("2024-12-15"),
    time: "5:00 PM - 10:00 PM",
    venue: "Mindil Beach",
    venueAddress: "Mindil Beach, Darwin NT 0800",
    price: "free",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200",
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800",
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800",
    ],
    organizer: "Darwin Markets",
    organizerId: "org1",
    featured: true,
    trending: true,
    views: 1250,
    favorites: 89,
    latitude: -12.4208,
    longitude: 130.8256,
    tags: ["family-friendly", "outdoor", "food", "arts"],
  },
  {
    id: "2",
    title: "Darwin Festival - Live Music Night",
    description:
      "Join us for an unforgettable evening of live music featuring local and international artists. The Darwin Festival brings together the best of Northern Territory's music scene with performances under the stars. Enjoy a variety of genres from rock to jazz, with food trucks and bars available throughout the night.",
    category: "music",
    date: new Date("2024-12-20"),
    time: "7:00 PM - 11:00 PM",
    venue: "Darwin Festival Park",
    venueAddress: "Darwin Festival Park, Darwin NT 0800",
    price: 25,
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1200",
    images: [
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800",
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800",
    ],
    organizer: "Darwin Festival",
    organizerId: "org2",
    featured: true,
    views: 890,
    favorites: 32,
    latitude: -12.4634,
    longitude: 130.8456,
    tags: ["music", "nightlife", "entertainment"],
  },
  {
    id: "3",
    title: "Waterfront Food & Wine Festival",
    description:
      "Taste the best of Darwin's culinary scene at the Waterfront Food & Wine Festival. Sample dishes from top local restaurants, enjoy wine tastings, and watch live cooking demonstrations. This family-friendly event features activities for all ages including face painting, live music, and kids' cooking classes.",
    category: "food",
    date: new Date("2024-12-18"),
    time: "12:00 PM - 8:00 PM",
    venue: "Darwin Waterfront",
    venueAddress: "Darwin Waterfront Precinct, Darwin NT 0800",
    price: 15,
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200",
    images: [
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
    ],
    organizer: "Waterfront Events",
    organizerId: "org3",
    trending: true,
    views: 650,
    favorites: 28,
    latitude: -12.4634,
    longitude: 130.8456,
    tags: ["food", "family-friendly", "wine"],
  },
  {
    id: "4",
    title: "Outdoor Yoga at East Point",
    description:
      "Start your day with a rejuvenating yoga session at East Point Reserve. This outdoor yoga class is suitable for all levels and offers stunning views of the ocean. Bring your own mat and enjoy the peaceful morning atmosphere. After the session, stay for a healthy breakfast and socialize with fellow yogis.",
    category: "outdoor",
    date: new Date("2024-12-16"),
    time: "7:00 AM - 8:30 AM",
    venue: "East Point Reserve",
    venueAddress: "East Point, Darwin NT 0820",
    price: "free",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200",
    images: [
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800",
    ],
    organizer: "Darwin Yoga",
    organizerId: "org4",
    views: 320,
    favorites: 15,
    latitude: -12.4208,
    longitude: 130.8256,
    tags: ["wellness", "outdoor", "fitness"],
  },
  {
    id: "5",
    title: "Art Gallery Opening Night",
    description:
      "Join us for the opening night of our new exhibition featuring works from local Northern Territory artists. The exhibition showcases contemporary art inspired by the Top End's unique landscape and culture. Enjoy wine and canapés while viewing the artwork and meeting the artists.",
    category: "arts",
    date: new Date("2024-12-22"),
    time: "6:00 PM - 9:00 PM",
    venue: "Darwin Art Gallery",
    venueAddress: "Darwin CBD, Darwin NT 0800",
    price: 10,
    image:
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1200",
    images: [
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800",
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800",
    ],
    organizer: "Darwin Arts Council",
    organizerId: "org5",
    views: 450,
    favorites: 22,
    latitude: -12.4634,
    longitude: 130.8456,
    tags: ["arts", "culture", "networking"],
  },
];

export function getEventById(id: string): Event | null {
  return mockEvents.find((event) => event.id === id) || null;
}

export function getFeaturedEvents(): Event[] {
  return mockEvents.filter((event) => event.featured);
}

export function getAllEvents(): Event[] {
  return mockEvents;
}

