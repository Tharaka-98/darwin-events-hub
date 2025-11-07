"use client";

import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, MapPin, Heart } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { Event } from "@/types";
import { useFavorites } from "@/hooks/useFavorites";

interface EventCardProps {
  event: Event;
  showCountdown?: boolean;
}

export default function EventCard({
  event,
  showCountdown = false,
}: EventCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const saved = isFavorite(event.id);
  const daysUntil = Math.ceil(
    (new Date(event.date).getTime() - new Date().getTime()) /
      (1000 * 60 * 60 * 24)
  );

  const categoryColors: Record<string, string> = {
    music: "bg-purple-100 text-purple-700",
    markets: "bg-green-100 text-green-700",
    outdoor: "bg-blue-100 text-blue-700",
    arts: "bg-pink-100 text-pink-700",
    food: "bg-orange-100 text-orange-700",
    sports: "bg-red-100 text-red-700",
    family: "bg-yellow-100 text-yellow-700",
    culture: "bg-indigo-100 text-indigo-700",
  };

  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg">
      <Link href={`/events/${event.id}`} className="block">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={event.image}
            alt={`${event.title} - ${event.category} event in Darwin`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {event.featured && (
            <Badge className="absolute right-2 top-2 bg-secondary text-secondary-foreground">
              Featured
            </Badge>
          )}
          {event.trending && (
            <Badge className="absolute left-2 top-2 bg-destructive text-destructive-foreground">
              🔥 Trending
            </Badge>
          )}
          {showCountdown && daysUntil > 0 && (
            <Badge className="absolute bottom-2 left-2 bg-primary text-primary-foreground">
              in {daysUntil} {daysUntil === 1 ? "day" : "days"}
            </Badge>
          )}
        </div>
      </Link>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <Link href={`/events/${event.id}`} className="block">
              <h3 className="font-heading text-lg font-semibold line-clamp-1 group-hover:text-primary transition-colors cursor-pointer">
                {event.title}
              </h3>
            </Link>
            <Badge
              variant="secondary"
              className={`mt-2 ${
                categoryColors[event.category] || "bg-gray-100 text-gray-700"
              }`}
            >
              {event.category}
            </Badge>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleFavorite(event);
            }}
          >
            <Heart
              className={`h-4 w-4 transition-colors ${
                saved ? "fill-primary text-primary" : ""
              }`}
            />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar className="mr-2 h-4 w-4" />
          {format(new Date(event.date), "MMM d, yyyy")}
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <Clock className="mr-2 h-4 w-4" />
          {event.time}
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="mr-2 h-4 w-4" />
          <span className="line-clamp-1">{event.venue}</span>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <Badge variant="outline" className="font-semibold">
          {event.price === "free" ? "FREE" : `$${event.price}`}
        </Badge>
        <Link href={`/events/${event.id}`}>
          <Button size="sm" className="cursor-pointer">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
