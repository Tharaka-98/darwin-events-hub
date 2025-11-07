"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import EventCard from "@/components/EventCard";
import { EventCategory, FilterOptions } from "@/types";
import { getAllEvents } from "@/data/events";

const allEvents = getAllEvents();

const categories: EventCategory[] = [
  "music",
  "markets",
  "outdoor",
  "arts",
  "food",
  "sports",
  "family",
  "culture",
];

export default function ExploreClient() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") as EventCategory | null;
  const initialSearch = searchParams.get("search") || "";

  const [filters, setFilters] = useState<FilterOptions>({
    categories: initialCategory ? [initialCategory] : [],
    priceRange: "all",
    searchQuery: initialSearch,
  });
  const [showFilters, setShowFilters] = useState(false);

  // Update search query when URL params change
  useEffect(() => {
    const searchParam = searchParams.get("search");
    if (searchParam) {
      setFilters((prev) => ({
        ...prev,
        searchQuery: searchParam,
      }));
    }
  }, [searchParams]);

  const filteredEvents = allEvents.filter((event) => {
    if (
      filters.categories.length > 0 &&
      !filters.categories.includes(event.category)
    ) {
      return false;
    }
    if (filters.priceRange === "free" && event.price !== "free") {
      return false;
    }
    if (filters.priceRange === "paid" && event.price === "free") {
      return false;
    }
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      const matchesTitle = event.title.toLowerCase().includes(query);
      const matchesDescription = event.description
        .toLowerCase()
        .includes(query);
      const matchesVenue = event.venue.toLowerCase().includes(query);
      const matchesCategory = event.category.toLowerCase().includes(query);
      if (
        !matchesTitle &&
        !matchesDescription &&
        !matchesVenue &&
        !matchesCategory
      ) {
        return false;
      }
    }
    return true;
  });

  const toggleCategory = (category: EventCategory) => {
    setFilters((prev) => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter((c) => c !== category)
        : [...prev.categories, category],
    }));
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="mb-4 font-heading text-4xl font-bold">
              Explore Events
            </h1>
            <p className="text-muted-foreground">
              Discover amazing events happening in Darwin
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-20">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h2 className="font-heading text-lg font-semibold">
                      Filters
                    </h2>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="lg:hidden"
                      onClick={() => setShowFilters(!showFilters)}
                    >
                      {showFilters ? <X /> : <Filter />}
                    </Button>
                  </div>

                  <div
                    className={`space-y-6 ${
                      showFilters ? "block" : "hidden lg:block"
                    }`}
                  >
                    {/* Search */}
                    <div>
                      <label className="mb-2 block text-sm font-semibold">
                        Search
                      </label>
                      <Input
                        placeholder="Search events..."
                        value={filters.searchQuery ?? ""}
                        onChange={(e) =>
                          setFilters({
                            ...filters,
                            searchQuery: e.target.value,
                          })
                        }
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            // Update URL with search query
                            const params = new URLSearchParams(
                              window.location.search
                            );
                            const trimmedQuery = filters.searchQuery?.trim();
                            if (trimmedQuery) {
                              params.set("search", trimmedQuery);
                            } else {
                              params.delete("search");
                            }
                            window.history.pushState(
                              {},
                              "",
                              `/explore?${params.toString()}`
                            );
                          }
                        }}
                      />
                    </div>

                    {/* Categories */}
                    <div>
                      <label className="mb-2 block text-sm font-semibold">
                        Categories
                      </label>
                      <div className="space-y-2">
                        {categories.map((category) => (
                          <div key={category} className="flex items-center">
                            <input
                              type="checkbox"
                              id={category}
                              checked={filters.categories.includes(category)}
                              onChange={() => toggleCategory(category)}
                              className="mr-2 h-4 w-4 rounded border-gray-300"
                            />
                            <label
                              htmlFor={category}
                              className="cursor-pointer text-sm capitalize"
                            >
                              {category}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Price Range */}
                    <div>
                      <label className="mb-2 block text-sm font-semibold">
                        Price
                      </label>
                      <div className="space-y-2">
                        {["all", "free", "paid"].map((range) => (
                          <div key={range} className="flex items-center">
                            <input
                              type="radio"
                              id={range}
                              name="price"
                              checked={filters.priceRange === range}
                              onChange={() =>
                                setFilters({
                                  ...filters,
                                  priceRange: range as "all" | "free" | "paid",
                                })
                              }
                              className="mr-2"
                            />
                            <label
                              htmlFor={range}
                              className="cursor-pointer text-sm capitalize"
                            >
                              {range}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Clear Filters */}
                    {(filters.categories.length > 0 ||
                      filters.priceRange !== "all" ||
                      (filters.searchQuery ?? "")) && (
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={() =>
                          setFilters({
                            categories: [],
                            priceRange: "all",
                            searchQuery: "",
                          })
                        }
                      >
                        Clear Filters
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Events Grid */}
            <div className="lg:col-span-3">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  {filteredEvents.length} event
                  {filteredEvents.length !== 1 ? "s" : ""} found
                </p>
              </div>

              {filteredEvents.length === 0 ? (
                <Card>
                  <CardContent className="p-12 text-center">
                    <p className="text-lg font-semibold">No events found</p>
                    <p className="mt-2 text-muted-foreground">
                      Try adjusting your filters
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {filteredEvents.map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <MobileNav />
    </div>
  );
}
