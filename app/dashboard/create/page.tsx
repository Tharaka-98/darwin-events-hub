"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Upload, MapPin } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import { toast } from "sonner";

export default function CreateEventPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    date: "",
    time: "",
    venue: "",
    venueAddress: "",
    price: "",
    image: "",
  });

  const categories = [
    "music",
    "markets",
    "outdoor",
    "arts",
    "food",
    "sports",
    "family",
    "culture",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Event created successfully!");
    router.push("/dashboard");
  };

  const updateFormData = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const progress = (step / 4) * 100;

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-8">
        <div className="container mx-auto max-w-4xl px-4">
          <Link href="/dashboard">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Button>
          </Link>

          <div className="mb-8">
            <h1 className="font-heading text-4xl font-bold">Create Event</h1>
            <p className="mt-2 text-muted-foreground">
              Step {step} of 4: {step === 1 && "Basic Information"}
              {step === 2 && "Date & Location"}
              {step === 3 && "Details & Pricing"}
              {step === 4 && "Review & Publish"}
            </p>
            <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-muted">
              <div
                className="h-full bg-primary transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <Card>
              <CardHeader>
                <CardTitle>
                  {step === 1 && "Basic Information"}
                  {step === 2 && "Date & Location"}
                  {step === 3 && "Details & Pricing"}
                  {step === 4 && "Review & Publish"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Step 1: Basic Information */}
                {step === 1 && (
                  <>
                    <div>
                      <Label htmlFor="title">Event Title *</Label>
                      <Input
                        id="title"
                        value={formData.title}
                        onChange={(e) =>
                          updateFormData("title", e.target.value)
                        }
                        placeholder="e.g., Mindil Beach Sunset Markets"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="description">Description *</Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) =>
                          updateFormData("description", e.target.value)
                        }
                        placeholder="Describe your event..."
                        rows={6}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="category">Category *</Label>
                      <select
                        id="category"
                        value={formData.category}
                        onChange={(e) =>
                          updateFormData("category", e.target.value)
                        }
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                        required
                      >
                        <option value="">Select a category</option>
                        {categories.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat.charAt(0).toUpperCase() + cat.slice(1)}
                          </option>
                        ))}
                      </select>
                    </div>
                  </>
                )}

                {/* Step 2: Date & Location */}
                {step === 2 && (
                  <>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="date">Date *</Label>
                        <Input
                          id="date"
                          type="date"
                          value={formData.date}
                          onChange={(e) =>
                            updateFormData("date", e.target.value)
                          }
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="time">Time *</Label>
                        <Input
                          id="time"
                          type="time"
                          value={formData.time}
                          onChange={(e) =>
                            updateFormData("time", e.target.value)
                          }
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="venue">Venue Name *</Label>
                      <Input
                        id="venue"
                        value={formData.venue}
                        onChange={(e) =>
                          updateFormData("venue", e.target.value)
                        }
                        placeholder="e.g., Mindil Beach"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="venueAddress">Venue Address *</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                          id="venueAddress"
                          value={formData.venueAddress}
                          onChange={(e) =>
                            updateFormData("venueAddress", e.target.value)
                          }
                          placeholder="Full address"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                  </>
                )}

                {/* Step 3: Details & Pricing */}
                {step === 3 && (
                  <>
                    <div>
                      <Label htmlFor="price">Price *</Label>
                      <div className="flex gap-2">
                        <Input
                          id="price"
                          type="number"
                          value={formData.price}
                          onChange={(e) =>
                            updateFormData("price", e.target.value)
                          }
                          placeholder="0.00"
                          min="0"
                          step="0.01"
                        />
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => updateFormData("price", "free")}
                        >
                          Free Event
                        </Button>
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Enter 0 or click "Free Event" for free events
                      </p>
                    </div>
                    <div>
                      <Label htmlFor="image">Event Image URL *</Label>
                      <div className="flex gap-2">
                        <Input
                          id="image"
                          type="url"
                          value={formData.image}
                          onChange={(e) =>
                            updateFormData("image", e.target.value)
                          }
                          placeholder="https://example.com/image.jpg"
                          required
                        />
                        <Button type="button" variant="outline">
                          <Upload className="mr-2 h-4 w-4" />
                          Upload
                        </Button>
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Drag and drop image upload coming soon
                      </p>
                    </div>
                  </>
                )}

                {/* Step 4: Review */}
                {step === 4 && (
                  <div className="space-y-4">
                    <div className="rounded-lg border p-4">
                      <h3 className="mb-2 font-semibold">Event Title</h3>
                      <p>{formData.title || "Not set"}</p>
                    </div>
                    <div className="rounded-lg border p-4">
                      <h3 className="mb-2 font-semibold">Description</h3>
                      <p className="text-sm text-muted-foreground">
                        {formData.description || "Not set"}
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-lg border p-4">
                        <h3 className="mb-2 font-semibold">Category</h3>
                        <p className="capitalize">
                          {formData.category || "Not set"}
                        </p>
                      </div>
                      <div className="rounded-lg border p-4">
                        <h3 className="mb-2 font-semibold">Price</h3>
                        <p>
                          {formData.price === "free" || formData.price === "0"
                            ? "FREE"
                            : `$${formData.price}`}
                        </p>
                      </div>
                    </div>
                    <div className="rounded-lg border p-4">
                      <h3 className="mb-2 font-semibold">Date & Time</h3>
                      <p>
                        {formData.date && formData.time
                          ? `${formData.date} at ${formData.time}`
                          : "Not set"}
                      </p>
                    </div>
                    <div className="rounded-lg border p-4">
                      <h3 className="mb-2 font-semibold">Venue</h3>
                      <p>{formData.venue || "Not set"}</p>
                      <p className="text-sm text-muted-foreground">
                        {formData.venueAddress || "Not set"}
                      </p>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(Math.max(1, step - 1))}
                    disabled={step === 1}
                  >
                    Previous
                  </Button>
                  {step < 4 ? (
                    <Button
                      type="button"
                      onClick={() => setStep(Math.min(4, step + 1))}
                    >
                      Next
                    </Button>
                  ) : (
                    <Button type="submit">Publish Event</Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </form>
        </div>
      </main>
      <Footer />
      <MobileNav />
    </div>
  );
}


