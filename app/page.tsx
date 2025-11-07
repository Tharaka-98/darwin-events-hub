import { Metadata } from "next";
import HomeClient from "./HomeClient";
import {
  generateWebsiteStructuredData,
  generateOrganizationStructuredData,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Discover the best events, markets, and lifestyle experiences in Darwin, Northern Territory. Find music festivals, food markets, outdoor activities, arts exhibitions, and more happening this weekend.",
  openGraph: {
    title: "Darwin Events & Lifestyle Hub | Discover Events in Darwin",
    description:
      "Find the best events, markets, and lifestyle experiences in Darwin, Northern Territory.",
    url: "https://darwin-events.com",
  },
  alternates: {
    canonical: "https://darwin-events.com",
  },
};

export default function Home() {
  const websiteStructuredData = generateWebsiteStructuredData();
  const organizationStructuredData = generateOrganizationStructuredData();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationStructuredData),
        }}
      />
      <HomeClient />
    </>
  );
}
