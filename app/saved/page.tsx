"use client";

import { Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import EventCard from "@/components/EventCard";
import { useFavorites } from "@/hooks/useFavorites";

export default function SavedPage() {
  const { favorites } = useFavorites();
  const savedEvents = favorites;
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="font-heading text-4xl font-bold">Saved Events</h1>
            <p className="mt-2 text-muted-foreground">
              Your favorite events saved for later
            </p>
          </div>
          {savedEvents.length === 0 ? (
            <Card>
              <CardContent className="p-12 text-center">
                <Heart className="mx-auto mb-4 h-16 w-16 text-muted-foreground" />
                <p className="text-lg font-semibold">No saved events yet</p>
                <p className="mt-2 text-muted-foreground">
                  Start exploring and save events you're interested in
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {savedEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
      <MobileNav />
    </div>
  );
}
