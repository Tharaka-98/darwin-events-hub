import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-tropical">
                <span className="text-xl font-bold text-white">🌴</span>
              </div>
              <span className="font-heading text-xl font-bold text-primary">
                Darwin Events
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Discover the best events and lifestyle experiences in Darwin,
              Northern Territory.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-heading font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/explore"
                  className="text-muted-foreground hover:text-primary"
                >
                  Explore Events
                </Link>
              </li>
              <li>
                <Link
                  href="/map"
                  className="text-muted-foreground hover:text-primary"
                >
                  Event Map
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="text-muted-foreground hover:text-primary"
                >
                  Create Event
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-4 font-heading font-semibold">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/explore?category=music"
                  className="text-muted-foreground hover:text-primary"
                >
                  Music
                </Link>
              </li>
              <li>
                <Link
                  href="/explore?category=markets"
                  className="text-muted-foreground hover:text-primary"
                >
                  Markets
                </Link>
              </li>
              <li>
                <Link
                  href="/explore?category=outdoor"
                  className="text-muted-foreground hover:text-primary"
                >
                  Outdoor
                </Link>
              </li>
              <li>
                <Link
                  href="/explore?category=food"
                  className="text-muted-foreground hover:text-primary"
                >
                  Food & Drink
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 font-heading font-semibold">Newsletter</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Get a weekly digest of events near you 🌴
            </p>
            <form className="space-y-2">
              <Input type="email" placeholder="Your email" className="w-full" />
              <Button type="submit" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Darwin Events & Lifestyle Hub. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
