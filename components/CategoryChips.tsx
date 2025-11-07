"use client";

import { Badge } from "@/components/ui/badge";
import { EventCategory } from "@/types";
import { Music, ShoppingBag, Mountain, Palette, Utensils } from "lucide-react";
import Link from "next/link";

const categories: { id: EventCategory; label: string; icon: any }[] = [
  { id: "music", label: "Music", icon: Music },
  { id: "markets", label: "Markets", icon: ShoppingBag },
  { id: "outdoor", label: "Outdoor", icon: Mountain },
  { id: "arts", label: "Arts", icon: Palette },
  { id: "food", label: "Food", icon: Utensils },
];

export default function CategoryChips() {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => {
        const Icon = category.icon;
        return (
          <Link key={category.id} href={`/explore?category=${category.id}`}>
            <Badge
              variant="secondary"
              className="cursor-pointer px-4 py-2 text-sm transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <Icon className="mr-2 h-4 w-4" />
              {category.label}
            </Badge>
          </Link>
        );
      })}
    </div>
  );
}


