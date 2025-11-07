# Darwin Events & Lifestyle Hub 🌴

A modern, beautiful website for discovering and managing events in Darwin, Northern Territory. Built with Next.js, Tailwind CSS, and shadcn/ui.

## Features

### 🎨 Design

- **Tropical Urban Theme**: Bright, clean design with teal (#028090) and gold (#F7B32B) color palette
- **Responsive Design**: Mobile-first approach with PWA-style bottom navigation
- **Dark Mode Support**: Beautiful dark mode with muted navy theme
- **Smooth Animations**: Framer Motion animations for enhanced UX

### 📱 Pages & Features

#### Home Page

- Hero banner with search functionality
- Category chips (Music, Markets, Outdoor, Arts, Food)
- "This Weekend in Darwin" event carousel with countdowns
- Interactive map section
- Featured venues with ratings
- Newsletter subscription

#### Event Detail Page

- Large banner image with event info
- Tabbed interface (Overview, Map, Photos, Reviews)
- Sticky sidebar with save/share functionality
- Countdown badge for upcoming events
- Social sharing (Facebook, Twitter, WhatsApp)

#### Explore Page

- Advanced filtering (category, price, date range, suburb)
- Responsive event grid
- Search functionality
- Filter sidebar (collapsible on mobile)

#### Dashboard (Organizers)

- Analytics overview with growth metrics
- Event management (create, edit, delete)
- Performance tracking (views, favorites, clicks)
- Step-based event creation wizard
- Detailed analytics tab

#### Additional Pages

- Map page (ready for Google Maps/Mapbox integration)
- Saved events page
- User profile page

### 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Date Handling**: date-fns
- **Notifications**: Sonner (toast notifications)
- **TypeScript**: Full type safety

### 🎯 Design System

#### Colors

- **Primary**: #028090 (Teal Ocean)
- **Secondary**: #F7B32B (Sunset Gold)
- **Background**: #FDFDFD (White Sand)
- **Dark Mode**: #1B262C (Muted Navy)

#### Fonts

- **Headings**: Poppins (Bold, Friendly)
- **Body**: Inter (Clean, Readable)

### 🚀 Getting Started

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Run development server**:

   ```bash
   npm run dev
   ```

3. **Open** [http://localhost:3000](http://localhost:3000)

### 📦 Project Structure

```
darwin-events-hub/
├── app/
│   ├── dashboard/        # Organizer dashboard
│   ├── events/[id]/     # Event detail pages
│   ├── explore/         # Event discovery
│   ├── map/             # Interactive map
│   ├── saved/           # Saved events
│   └── profile/         # User profile
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── Navbar.tsx       # Main navigation
│   ├── Footer.tsx       # Site footer
│   ├── MobileNav.tsx    # Mobile bottom nav
│   ├── EventCard.tsx    # Event card component
│   └── CategoryChips.tsx
├── types/
│   └── index.ts         # TypeScript types
└── lib/
    └── utils.ts         # Utility functions
```

### 🎨 Components Used from shadcn/ui

- Card, Badge, Button, Input
- Dialog, Dropdown Menu
- Tabs, Skeleton
- Command (for search)
- Calendar, Sonner (toasts)
- Label, Textarea

### 🔮 Future Enhancements

- [ ] Google Maps/Mapbox integration
- [ ] Real-time event data from API
- [ ] User authentication
- [ ] Image upload functionality
- [ ] Weather API integration
- [ ] Email notifications
- [ ] Advanced analytics charts
- [ ] Review system
- [ ] Payment integration for paid events

### 📝 Notes

- Currently uses mock data - replace with API calls
- Image URLs use Unsplash placeholders
- Map integration placeholder ready for implementation
- All components are fully responsive

### 🌴 Built with love for Darwin, NT

---

**License**: MIT
