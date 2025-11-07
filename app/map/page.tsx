"use client";

import { MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

export default function MapPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="font-heading text-4xl font-bold">Event Map</h1>
            <p className="mt-2 text-muted-foreground">
              Explore events on an interactive map
            </p>
          </div>
          <Card className="h-[600px] overflow-hidden">
            <CardContent className="relative h-full p-0">
              <div className="flex h-full items-center justify-center bg-muted">
                <div className="text-center">
                  <MapPin className="mx-auto mb-4 h-16 w-16 text-muted-foreground" />
                  <p className="mb-2 text-lg font-semibold">Interactive Map</p>
                  <p className="text-muted-foreground">
                    Map integration with Google Maps or Mapbox coming soon
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
      <MobileNav />
    </div>
  );
}


