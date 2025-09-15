import HeroSection from '@/components/HeroSection'
import SearchForm from '@/components/SearchForm'
import FeaturedBoats from '@/components/FeaturedBoats'
import SpecialOffers from '@/components/SpecialOffers'
import BoatNews from '@/components/BoatNews'
import NewsletterSignup from '@/components/NewsletterSignup'
import BoatListings from '@/components/BoatListings'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Search */}
      <HeroSection />

      {/* Special Offers */}
      <SpecialOffers />

      {/* Featured Boats */}
      <FeaturedBoats />

      {/* Boat Listings */}
      <BoatListings />

      {/* Boat News */}
      <BoatNews />

      {/* Newsletter Signup */}
      <NewsletterSignup />
    </div>
  )
}
