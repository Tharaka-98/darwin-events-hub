import { Metadata } from "next";
import { notFound } from "next/navigation";
import EventDetailClient from "./EventDetailClient";
import { getEventById } from "@/data/events";
import { generateEventMetadata, generateStructuredData } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const event = getEventById(params.id);

  if (!event) {
    return {
      title: "Event Not Found | Darwin Events",
    };
  }

  return generateEventMetadata(event);
}

export default function EventDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const event = getEventById(params.id);

  if (!event) {
    notFound();
  }

  const structuredData = generateStructuredData(event);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <EventDetailClient event={event} />
    </>
  );
}
