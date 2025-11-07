import { Metadata } from "next";
import { Event } from "@/types";

const baseUrl = "https://darwin-events.com"; // Update with your actual domain

export function generateEventMetadata(event: Event): Metadata {
  const eventDate = new Date(event.date);
  const formattedDate = eventDate.toLocaleDateString("en-AU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const title = `${event.title} | Darwin Events`;
  const description = `${event.description.substring(0, 155)}...`;

  return {
    title,
    description,
    keywords: [
      event.title,
      event.category,
      "Darwin events",
      event.venue,
      formattedDate,
      ...(event.tags || []),
    ],
    openGraph: {
      title,
      description,
      type: "website",
      locale: "en_AU",
      url: `${baseUrl}/events/${event.id}`,
      siteName: "Darwin Events & Lifestyle Hub",
      images: [
        {
          url: event.image,
          width: 1200,
          height: 630,
          alt: event.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [event.image],
    },
    alternates: {
      canonical: `${baseUrl}/events/${event.id}`,
    },
  };
}

export function generateStructuredData(event: Event) {
  const eventDate = new Date(event.date);
  const startDate = eventDate.toISOString();

  // Parse time if available
  let startTime = "";
  if (event.time) {
    const timeMatch = event.time.match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i);
    if (timeMatch) {
      let hours = parseInt(timeMatch[1]);
      const minutes = timeMatch[2];
      const ampm = timeMatch[3].toUpperCase();

      if (ampm === "PM" && hours !== 12) hours += 12;
      if (ampm === "AM" && hours === 12) hours = 0;

      startTime = `${hours.toString().padStart(2, "0")}:${minutes}:00`;
    }
  }

  const startDateTime = startTime
    ? `${startDate.split("T")[0]}T${startTime}`
    : startDate;

  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    description: event.description,
    startDate: startDateTime,
    endDate: startDateTime, // You can add end date if available
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: event.venue,
      address: {
        "@type": "PostalAddress",
        streetAddress: event.venueAddress,
        addressLocality: "Darwin",
        addressRegion: "NT",
        postalCode: "0800",
        addressCountry: "AU",
      },
      ...(event.latitude && event.longitude
        ? {
            geo: {
              "@type": "GeoCoordinates",
              latitude: event.latitude,
              longitude: event.longitude,
            },
          }
        : {}),
    },
    image: event.image,
    organizer: {
      "@type": "Organization",
      name: event.organizer,
      url: `${baseUrl}/organizers/${event.organizerId}`,
    },
    offers: {
      "@type": "Offer",
      price: event.price === "free" ? "0" : event.price.toString(),
      priceCurrency: "AUD",
      availability: "https://schema.org/InStock",
      url: `${baseUrl}/events/${event.id}`,
    },
    ...(event.category
      ? {
          category: event.category,
        }
      : {}),
  };
}

export function generateOrganizationStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Darwin Events & Lifestyle Hub",
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description:
      "Your guide to the best events, markets, and lifestyle experiences in Darwin, Northern Territory.",
    sameAs: [
      // Add your social media links
      // "https://www.facebook.com/darwinevents",
      // "https://www.instagram.com/darwinevents",
      // "https://twitter.com/darwinevents",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      areaServed: "AU",
      availableLanguage: "en",
    },
  };
}

export function generateWebsiteStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Darwin Events & Lifestyle Hub",
    url: baseUrl,
    description:
      "Find the best events, markets, and lifestyle experiences in Darwin, Northern Territory.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/explore?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

