"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Clock,
  MapPin,
  Heart,
  Share2,
  Navigation,
  Facebook,
  Twitter,
  MessageCircle,
} from "lucide-react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import { Event } from "@/types";
import { useFavorites } from "@/hooks/useFavorites";

interface EventDetailClientProps {
  event: Event;
}

export default function EventDetailClient({ event }: EventDetailClientProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const saved = isFavorite(event.id);
  const [activeTab, setActiveTab] = useState("overview");

  const daysUntil = Math.ceil(
    (new Date(event.date).getTime() - new Date().getTime()) /
      (1000 * 60 * 60 * 24)
  );

  const handleSave = () => {
    toggleFavorite(event);
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = `Check out ${event.title} in Darwin!`;
    const shareUrls: Record<string, string> = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        url
      )}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        text
      )}&url=${encodeURIComponent(url)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(text + " " + url)}`,
    };
    if (shareUrls[platform]) {
      window.open(shareUrls[platform], "_blank");
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Banner */}
        <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          <div className="container relative z-10 mx-auto flex h-full items-end px-4 pb-8">
            <div className="w-full">
              <Badge className="mb-4 bg-secondary text-secondary-foreground">
                {event.category}
              </Badge>
              <h1 className="mb-4 font-heading text-4xl font-bold text-foreground md:text-5xl">
                {event.title}
              </h1>
              {daysUntil > 0 && (
                <Badge className="bg-primary text-primary-foreground">
                  Starts in {daysUntil} {daysUntil === 1 ? "day" : "days"}
                </Badge>
              )}
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Top Info */}
              <Card className="mb-6">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div className="flex items-center">
                      <Calendar className="mr-3 h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Date</p>
                        <p className="font-semibold">
                          {format(new Date(event.date), "EEEE, MMMM d, yyyy")}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-3 h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Time</p>
                        <p className="font-semibold">{event.time}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="mr-3 h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Venue</p>
                        <p className="font-semibold">{event.venue}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between border-t pt-4">
                    <Badge variant="outline" className="text-lg font-semibold">
                      {event.price === "free" ? "FREE" : `$${event.price}`}
                    </Badge>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span>{event.views} views</span>
                      <span>{event.favorites} favorites</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Tabs */}
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="map">Map</TabsTrigger>
                  <TabsTrigger value="photos">Photos</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-6">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="mb-4 font-heading text-2xl font-semibold">
                        About this event
                      </h2>
                      <p className="mb-4 leading-relaxed text-muted-foreground">
                        {event.description}
                      </p>
                      {event.tags && (
                        <div className="mt-6">
                          <h3 className="mb-2 font-semibold">Tags</h3>
                          <div className="flex flex-wrap gap-2">
                            {event.tags.map((tag) => (
                              <Badge key={tag} variant="secondary">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="map" className="mt-6">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="mb-4 font-heading text-2xl font-semibold">
                        Location
                      </h2>
                      <div className="h-[400px] rounded-lg bg-muted">
                        <div className="flex h-full items-center justify-center">
                          <div className="text-center">
                            <MapPin className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
                            <p className="font-semibold">{event.venue}</p>
                            <p className="text-sm text-muted-foreground">
                              {event.venueAddress}
                            </p>
                            <Button className="mt-4" variant="outline">
                              <Navigation className="mr-2 h-4 w-4" />
                              Get Directions
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="photos" className="mt-6">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="mb-4 font-heading text-2xl font-semibold">
                        Photos
                      </h2>
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        {event.images?.map((img, idx) => (
                          <div
                            key={idx}
                            className="relative h-64 overflow-hidden rounded-lg"
                          >
                            <Image
                              src={img}
                              alt={`${event.title} ${idx + 1}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="reviews" className="mt-6">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="mb-4 font-heading text-2xl font-semibold">
                        Reviews
                      </h2>
                      <p className="text-muted-foreground">
                        Reviews feature coming soon...
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-20 space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <Button
                        className="w-full"
                        variant={saved ? "secondary" : "default"}
                        onClick={handleSave}
                      >
                        <Heart
                          className={`mr-2 h-4 w-4 ${
                            saved ? "fill-current" : ""
                          }`}
                        />
                        {saved ? "Saved" : "Save Event"}
                      </Button>
                      <div>
                        <p className="mb-2 text-sm font-semibold">Share</p>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => handleShare("facebook")}
                          >
                            <Facebook className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => handleShare("twitter")}
                          >
                            <Twitter className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => handleShare("whatsapp")}
                          >
                            <MessageCircle className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="icon">
                            <Share2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <Button className="w-full" variant="outline" asChild>
                        <Link
                          href={`https://maps.google.com/?q=${event.venueAddress}`}
                          target="_blank"
                        >
                          <Navigation className="mr-2 h-4 w-4" />
                          Get Directions
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="mb-4 font-heading text-lg font-semibold">
                      Organizer
                    </h3>
                    <p className="font-semibold">{event.organizer}</p>
                    <Button className="mt-4 w-full" variant="outline">
                      View Profile
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <MobileNav />
    </div>
  );
}

