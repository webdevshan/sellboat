# BoatMarket Australia

A modern, responsive Next.js boat marketplace website for buying, selling, and renting boats across Australia.

## Features

### 🛥️ Core Functionality

- **Buy Boats**: Browse and search boats for sale with advanced filtering
- **Sell Boats**: Multi-step listing form with photo uploads and detailed specifications
- **Rent Boats**: Book boat rentals with calendar selection and instant confirmation
- **Search & Filter**: Advanced search with location, price, type, and feature filters

### 🎨 Design & UX

- **Modern UI**: Clean, professional design with Tailwind CSS
- **Responsive**: Fully responsive across all device sizes
- **Interactive**: Smooth animations and hover effects
- **Accessible**: Proper semantic HTML and keyboard navigation

### 🚀 Technical Features

- **Next.js 14**: Latest version with App Router
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Lucide Icons**: Beautiful, consistent iconography
- **Image Optimization**: Next.js Image component for optimal performance

## Pages & Components

### Pages

- **Homepage** (`/`): Hero section, search form, featured boats, special offers
- **Buy** (`/buy`): Boat listings with filters and search functionality
- **Rent** (`/rent`): Boat rental listings with booking system
- **Rent Details** (`/rent/[id]`): Individual boat rental page with booking form
- **Sell** (`/sell`): Multi-step boat listing form

### Components

- **Header**: Navigation with search and user actions
- **Footer**: Links, contact info, and newsletter signup
- **HeroSection**: Landing page hero with search overlay
- **SearchForm**: Advanced search with buy/rent toggle
- **BoatCard**: Reusable boat listing card component
- **BookingForm**: Rental booking with date/time selection
- **SellForm**: Multi-step boat listing form
- **FeaturedBoats**: Carousel of premium boat listings
- **SpecialOffers**: Promotional cards section
- **PartsAccessories**: Marine equipment marketplace
- **ExpertReviews**: Boat review carousel
- **BoatNews**: Latest marine industry news
- **NewsletterSignup**: Email subscription form

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd sellmyboat
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
sellmyboat/
├── app/                    # Next.js App Router pages
│   ├── buy/               # Buy boats page
│   ├── rent/              # Rent boats pages
│   ├── sell/              # Sell boats page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable React components
│   ├── Header.tsx         # Site navigation
│   ├── Footer.tsx         # Site footer
│   ├── HeroSection.tsx    # Landing hero
│   ├── SearchForm.tsx     # Search functionality
│   ├── BoatCard.tsx       # Boat listing card
│   ├── BookingForm.tsx    # Rental booking
│   └── SellForm.tsx       # Boat listing form
├── public/                # Static assets
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── next.config.js         # Next.js configuration
```

## Styling

The project uses Tailwind CSS for styling with custom configuration:

- **Colors**: Primary (blue), Secondary (teal), Accent (orange)
- **Typography**: Inter for body text, Poppins for headings
- **Components**: Custom button, card, and form styles
- **Responsive**: Mobile-first design approach

## Features Implemented

### ✅ Completed

- [x] Next.js 14 setup with TypeScript
- [x] Tailwind CSS configuration
- [x] Responsive header and footer
- [x] Homepage with hero section and search
- [x] Buy boats page with filters
- [x] Rent boats page with booking system
- [x] Sell boats page with multi-step form
- [x] Individual boat rental details page
- [x] Advanced search functionality
- [x] Responsive design across all pages
- [x] Modern UI components and animations

### 🚧 Future Enhancements

- [ ] User authentication and profiles
- [ ] Payment integration
- [ ] Real-time chat with sellers
- [ ] Boat comparison tool
- [ ] Mobile app
- [ ] Advanced analytics
- [ ] Multi-language support

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, please reach out through the contact form on the website.

---

Built with ❤️ for the Australian boating community.
