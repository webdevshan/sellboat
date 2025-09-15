# BoatMarket Australia - Setup Instructions

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Supabase Setup

1. **Create a Supabase Project**

   - Go to [supabase.com](https://supabase.com)
   - Create a new project
   - Get your project URL and anon key from Settings > API

2. **Enable Google OAuth**

   - Go to Authentication > Providers in your Supabase dashboard
   - Enable Google provider
   - Add your Google OAuth credentials

3. **Database Schema**

Run the following SQL in your Supabase SQL editor:

```sql
-- Create boats table
CREATE TABLE boats (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price INTEGER NOT NULL,
  daily_rate INTEGER,
  location VARCHAR(255) NOT NULL,
  state VARCHAR(10) NOT NULL,
  year INTEGER NOT NULL,
  length INTEGER NOT NULL,
  type VARCHAR(50) NOT NULL CHECK (type IN ('leisure', 'cruiser', 'fishing', 'sail', 'pwc', 'ski', 'yacht')),
  condition VARCHAR(50) NOT NULL CHECK (condition IN ('new', 'excellent', 'very-good', 'good', 'fair')),
  engine VARCHAR(255),
  fuel_type VARCHAR(50) CHECK (fuel_type IN ('gasoline', 'diesel', 'electric', 'hybrid')),
  hours INTEGER,
  hull_material VARCHAR(50) CHECK (hull_material IN ('fiberglass', 'aluminum', 'steel', 'wood', 'composite')),
  features TEXT[],
  images TEXT[],
  capacity INTEGER,
  rating DECIMAL(2,1),
  reviews_count INTEGER DEFAULT 0,
  is_for_rent BOOLEAN DEFAULT false,
  status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('active', 'pending', 'inactive')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE
);

-- Create bookings table
CREATE TABLE bookings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  boat_id UUID REFERENCES boats(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  guests INTEGER NOT NULL,
  total_amount INTEGER NOT NULL,
  status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled', 'completed')),
  payment_status VARCHAR(20) DEFAULT 'pending' CHECK (payment_status IN ('pending', 'paid', 'refunded')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create user profiles table
CREATE TABLE user_profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  full_name VARCHAR(255),
  avatar_url TEXT,
  phone VARCHAR(20),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE boats ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Boats are viewable by everyone" ON boats FOR SELECT USING (true);
CREATE POLICY "Users can insert their own boats" ON boats FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own boats" ON boats FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete their own boats" ON boats FOR DELETE USING (auth.uid() = user_id);

CREATE POLICY "Bookings are viewable by owner and customer" ON bookings FOR SELECT USING (
  auth.uid() = user_id OR
  auth.uid() IN (SELECT user_id FROM boats WHERE id = boat_id)
);
CREATE POLICY "Users can insert their own bookings" ON bookings FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own bookings" ON bookings FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Profiles are viewable by owner" ON user_profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can insert their own profile" ON user_profiles FOR INSERT WITH CHECK (auth.uid() = id);
CREATE POLICY "Users can update their own profile" ON user_profiles FOR UPDATE USING (auth.uid() = id);

-- Create indexes
CREATE INDEX boats_type_idx ON boats(type);
CREATE INDEX boats_location_idx ON boats(location);
CREATE INDEX boats_status_idx ON boats(status);
CREATE INDEX bookings_status_idx ON bookings(status);
CREATE INDEX bookings_date_idx ON bookings(start_date, end_date);
```

4. **Install Dependencies**

```bash
npm install
```

5. **Run the Development Server**

```bash
npm run dev
```

## Features Implemented

### ✅ Completed Features

- [x] Modern responsive header with authentication
- [x] Google OAuth integration with Supabase
- [x] Comprehensive admin dashboard
- [x] Boat listings management
- [x] Booking management system
- [x] User authentication and profiles
- [x] Database schema with proper relationships
- [x] Row Level Security policies
- [x] Responsive design across all pages

### 🔧 Admin Dashboard Features

- Dashboard overview with key metrics
- Boat listings management with CRUD operations
- Booking management with status updates
- User management
- Financial reporting
- Analytics and insights
- Settings and configuration

### 🚀 Next Steps

1. Set up your Supabase project
2. Configure environment variables
3. Run the database schema
4. Start the development server
5. Access admin dashboard at `/admin`

The website is now fully functional with authentication, database integration, and a comprehensive admin system!
