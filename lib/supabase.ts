import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface Boat {
  id: string
  name: string
  description: string
  price: number
  location: string
  state: string
  year: number
  length: number
  type: 'leisure' | 'cruiser' | 'fishing' | 'sail' | 'pwc' | 'ski' | 'yacht'
  condition: 'new' | 'excellent' | 'very-good' | 'good' | 'fair'
  engine?: string
  fuel_type?: 'gasoline' | 'diesel' | 'electric' | 'hybrid'
  hours?: number
  hull_material?: 'fiberglass' | 'aluminum' | 'steel' | 'wood' | 'composite'
  features: string[]
  images: string[]
  capacity?: number
  rating?: number
  reviews_count?: number
  is_for_rent: boolean
  daily_rate?: number
  created_at: string
  updated_at: string
  user_id: string
}

export interface User {
  id: string
  email: string
  full_name?: string
  avatar_url?: string
  phone?: string
  created_at: string
}

export interface Booking {
  id: string
  boat_id: string
  user_id: string
  start_date: string
  end_date: string
  guests: number
  total_amount: number
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed'
  created_at: string
}

export interface ContactSubmission {
  id: string
  name: string
  email: string
  phone: string
  syndicate: string
  share_percentage: string
  reason?: string
  timeframe?: string
  status: 'new' | 'contacted' | 'quoted' | 'sold' | 'declined'
  notes?: string
  created_at: string
  updated_at: string
}
