"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BarChart3,
  Calendar,
  Heart,
  Eye,
  Plus,
  Edit,
  Trash2,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

// Mock analytics data
const analytics = {
  totalViews: 5420,
  totalClicks: 1234,
  favorites: 89,
  eventsCreated: 12,
  viewsGrowth: 12.5,
  clicksGrowth: 8.3,
};

const myEvents = [
  {
    id: "1",
    title: "Mindil Beach Sunset Markets",
    date: new Date("2024-12-15"),
    views: 1250,
    favorites: 45,
    status: "active",
  },
  {
    id: "2",
    title: "Darwin Festival - Live Music",
    date: new Date("2024-12-20"),
    views: 890,
    favorites: 32,
    status: "active",
  },
  {
    id: "3",
    title: "Waterfront Food Festival",
    date: new Date("2024-12-18"),
    views: 650,
    favorites: 28,
    status: "draft",
  },
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="font-heading text-4xl font-bold">Dashboard</h1>
              <p className="mt-2 text-muted-foreground">
                Manage your events and track performance
              </p>
            </div>
            <Link href="/dashboard/create">
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Create Event
              </Button>
            </Link>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="events">My Events</TabsTrigger>
              <TabsTrigger value="create">Create</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-6">
              {/* Analytics Cards */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">
                      Total Views
                    </CardTitle>
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {analytics.totalViews.toLocaleString()}
                    </div>
                    <p className="flex items-center text-xs text-muted-foreground">
                      <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
                      <span className="text-green-500">
                        +{analytics.viewsGrowth}%
                      </span>{" "}
                      from last month
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">
                      Ticket Clicks
                    </CardTitle>
                    <BarChart3 className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {analytics.totalClicks.toLocaleString()}
                    </div>
                    <p className="flex items-center text-xs text-muted-foreground">
                      <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
                      <span className="text-green-500">
                        +{analytics.clicksGrowth}%
                      </span>{" "}
                      from last month
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">
                      Favorites
                    </CardTitle>
                    <Heart className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {analytics.favorites}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Total saved events
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">
                      Events Created
                    </CardTitle>
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {analytics.eventsCreated}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Active events
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Events */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Recent Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {myEvents.slice(0, 3).map((event) => (
                      <div
                        key={event.id}
                        className="flex items-center justify-between border-b pb-4 last:border-0"
                      >
                        <div className="flex-1">
                          <h3 className="font-semibold">{event.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {event.date.toLocaleDateString()}
                          </p>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="text-right">
                            <p className="text-sm font-semibold">
                              {event.views}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              views
                            </p>
                          </div>
                          <Badge
                            variant={
                              event.status === "active"
                                ? "default"
                                : "secondary"
                            }
                          >
                            {event.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="events" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>My Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {myEvents.map((event) => (
                      <div
                        key={event.id}
                        className="flex items-center justify-between rounded-lg border p-4"
                      >
                        <div className="flex-1">
                          <div className="flex items-center space-x-3">
                            <h3 className="font-semibold">{event.title}</h3>
                            <Badge
                              variant={
                                event.status === "active"
                                  ? "default"
                                  : "secondary"
                              }
                            >
                              {event.status}
                            </Badge>
                          </div>
                          <p className="mt-1 text-sm text-muted-foreground">
                            {event.date.toLocaleDateString()}
                          </p>
                          <div className="mt-2 flex items-center space-x-4 text-sm text-muted-foreground">
                            <span className="flex items-center">
                              <Eye className="mr-1 h-4 w-4" />
                              {event.views} views
                            </span>
                            <span className="flex items-center">
                              <Heart className="mr-1 h-4 w-4" />
                              {event.favorites} favorites
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Link href={`/events/${event.id}`}>
                            <Button variant="outline" size="sm">
                              View
                            </Button>
                          </Link>
                          <Button variant="outline" size="icon">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="icon">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="create" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Create New Event</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <p className="text-muted-foreground">
                      Use the event creation wizard to add a new event. This
                      will guide you through all the necessary steps.
                    </p>
                    <Link href="/dashboard/create">
                      <Button className="w-full">
                        <Plus className="mr-2 h-4 w-4" />
                        Start Creating Event
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Detailed Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="mb-4 font-semibold">
                        Performance Overview
                      </h3>
                      <div className="h-64 rounded-lg bg-muted flex items-center justify-center">
                        <p className="text-muted-foreground">
                          Chart visualization coming soon
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div className="rounded-lg border p-4">
                        <h4 className="mb-2 font-semibold">
                          Top Performing Events
                        </h4>
                        <ul className="space-y-2 text-sm">
                          {myEvents
                            .sort((a, b) => b.views - a.views)
                            .slice(0, 3)
                            .map((event) => (
                              <li
                                key={event.id}
                                className="flex justify-between"
                              >
                                <span>{event.title}</span>
                                <span className="font-semibold">
                                  {event.views} views
                                </span>
                              </li>
                            ))}
                        </ul>
                      </div>
                      <div className="rounded-lg border p-4">
                        <h4 className="mb-2 font-semibold">Most Favorited</h4>
                        <ul className="space-y-2 text-sm">
                          {myEvents
                            .sort((a, b) => b.favorites - a.favorites)
                            .slice(0, 3)
                            .map((event) => (
                              <li
                                key={event.id}
                                className="flex justify-between"
                              >
                                <span>{event.title}</span>
                                <span className="font-semibold">
                                  {event.favorites} ❤️
                                </span>
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
      <MobileNav />
    </div>
  );
}


