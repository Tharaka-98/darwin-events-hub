import Link from "next/link";
import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Suspense fallback={null}>
        <Navbar />
      </Suspense>
      <main className="flex flex-1 items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 font-heading text-6xl font-bold">404</h1>
          <h2 className="mb-4 font-heading text-2xl font-semibold">
            Event Not Found
          </h2>
          <p className="mb-8 text-muted-foreground">
            The event you're looking for doesn't exist or has been removed.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/">
              <Button>Go Home</Button>
            </Link>
            <Link href="/explore">
              <Button variant="outline">Explore Events</Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

