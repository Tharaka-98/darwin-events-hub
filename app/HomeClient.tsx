"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, ChevronRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import EventCard from "@/components/EventCard";
import CategoryChips from "@/components/CategoryChips";
import { Venue } from "@/types";
import { getFeaturedEvents } from "@/data/events";

const featuredEvents = getFeaturedEvents();

const featuredVenues: Venue[] = [
  {
    id: "v1",
    name: "Deckchair Cinema",
    address: "Jervois Rd, Darwin",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400",
    eventCount: 12,
    latitude: -12.4634,
    longitude: 130.8456,
  },
  {
    id: "v2",
    name: "Mindil Markets",
    address: "Mindil Beach, Darwin",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
    eventCount: 8,
    latitude: -12.4208,
    longitude: 130.8256,
  },
  {
    id: "v3",
    name: "Darwin Festival Park",
    address: "Darwin CBD",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400",
    eventCount: 15,
    latitude: -12.4634,
    longitude: 130.8456,
  },
];

export default function HomeClient() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] overflow-hidden bg-gradient-to-br from-primary/20 via-background to-secondary/20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920')] bg-cover bg-center opacity-20 blur-sm" />
          <div className="container relative z-10 mx-auto px-4 py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl text-center"
            >
              <h1 className="mb-6 font-heading text-5xl font-bold leading-tight md:text-6xl">
                Discover Events in{" "}
                <span className="text-gradient-tropical">Darwin</span>
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mb-8 text-lg text-muted-foreground md:text-xl"
              >
                Find the best events, markets, and lifestyle experiences in the
                Northern Territory
              </motion.p>
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                onSubmit={(e) => {
                  e.preventDefault();
                  if (searchQuery.trim()) {
                    router.push(
                      `/explore?search=${encodeURIComponent(
                        searchQuery.trim()
                      )}`
                    );
                  } else {
                    router.push("/explore");
                  }
                }}
                className="mb-6 flex flex-col gap-4 sm:flex-row"
              >
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Find events in Darwin..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="h-12 pl-12 text-base"
                  />
                </div>
                <Button type="submit" size="lg" className="h-12 px-8">
                  Search
                </Button>
              </motion.form>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <CategoryChips />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* This Weekend Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8 flex items-center justify-between"
            >
              <div>
                <h2 className="font-heading text-3xl font-bold">
                  This Weekend in Darwin
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Don't miss out on these upcoming events
                </p>
              </div>
              <Link href="/explore">
                <Button variant="ghost">
                  View All <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <EventCard event={event} showCountdown />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Map Section */}
        <section className="bg-muted/50 py-16">
          <div className="container mx-auto px-4">
            <div className="mb-8 text-center">
              <h2 className="font-heading text-3xl font-bold">
                Explore Events on the Map
              </h2>
              <p className="mt-2 text-muted-foreground">
                Find events near you with our interactive map
              </p>
            </div>
            <Card className="h-[400px] overflow-hidden">
              <CardContent className="relative h-full p-0">
                <div className="flex h-full items-center justify-center bg-muted">
                  <div className="text-center">
                    <p className="mb-4 text-lg font-semibold">
                      Interactive Map
                    </p>
                    <p className="mb-4 text-muted-foreground">
                      Map integration coming soon
                    </p>
                    <Link href="/map">
                      <Button>View Full Map</Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Featured Venues */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h2 className="font-heading text-3xl font-bold">
                Featured Venues
              </h2>
              <p className="mt-2 text-muted-foreground">
                Popular venues hosting amazing events
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {featuredVenues.map((venue) => (
                <Link key={venue.id} href={`/venues/${venue.id}`}>
                  <Card className="group overflow-hidden transition-all hover:shadow-lg">
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={venue.image}
                        alt={venue.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="mb-2 font-heading text-xl font-semibold group-hover:text-primary">
                        {venue.name}
                      </h3>
                      <p className="mb-2 text-sm text-muted-foreground">
                        {venue.address}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-semibold">
                            {venue.rating}
                          </span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {venue.eventCount} events
                        </span>
                      </div>
                      <Button className="mt-4 w-full" variant="outline">
                        View Events
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-gradient-tropical py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 font-heading text-3xl font-bold">
                Get a weekly digest of events near you 🌴
              </h2>
              <p className="mb-8 text-white/90">
                Stay updated with the latest events, markets, and lifestyle
                experiences in Darwin
              </p>
              <form className="flex flex-col gap-4 sm:flex-row">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 bg-white text-foreground"
                />
                <Button type="submit" variant="secondary" size="lg">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileNav />
    </div>
  );
}

