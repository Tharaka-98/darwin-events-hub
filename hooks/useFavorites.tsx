"use client";

import {
  useState,
  useEffect,
  createContext,
  useContext,
  ReactNode,
} from "react";
import { Event } from "@/types";
import { toast } from "sonner";

interface FavoritesContextType {
  favorites: Event[];
  addFavorite: (event: Event) => void;
  removeFavorite: (eventId: string) => void;
  isFavorite: (eventId: string) => boolean;
  toggleFavorite: (event: Event) => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<Event[]>([]);
  const [mounted, setMounted] = useState(false);

  // Load favorites from localStorage on mount
  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("darwin-events-favorites");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        // Convert date strings back to Date objects
        const eventsWithDates = parsed.map((event: any) => ({
          ...event,
          date: new Date(event.date),
        }));
        setFavorites(eventsWithDates);
      } catch (error) {
        console.error("Error loading favorites:", error);
      }
    }
  }, []);

  // Save to localStorage whenever favorites change
  useEffect(() => {
    if (mounted) {
      localStorage.setItem(
        "darwin-events-favorites",
        JSON.stringify(favorites)
      );
    }
  }, [favorites, mounted]);

  const addFavorite = (event: Event) => {
    setFavorites((prev) => {
      if (prev.find((e) => e.id === event.id)) {
        return prev;
      }
      return [...prev, event];
    });
    toast.success("Event saved to favorites!");
  };

  const removeFavorite = (eventId: string) => {
    setFavorites((prev) => prev.filter((e) => e.id !== eventId));
    toast.success("Removed from favorites");
  };

  const isFavorite = (eventId: string) => {
    return favorites.some((e) => e.id === eventId);
  };

  const toggleFavorite = (event: Event) => {
    if (isFavorite(event.id)) {
      removeFavorite(event.id);
    } else {
      addFavorite(event);
    }
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
        toggleFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
}

