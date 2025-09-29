-- Create referral_submissions table for marina staff and skipper referrals
CREATE TABLE IF NOT EXISTS referral_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  referrer_name TEXT NOT NULL,
  referrer_role TEXT NOT NULL,
  referrer_contact TEXT NOT NULL,
  owner_name TEXT NOT NULL,
  owner_contact TEXT NOT NULL,
  vessel_details TEXT NOT NULL,
  owner_consent BOOLEAN NOT NULL DEFAULT false,
  status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'closed', 'commission_paid')),
  commission_amount DECIMAL(10,2) DEFAULT 1000.00,
  commission_paid_date TIMESTAMP WITH TIME ZONE,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on status for faster queries
CREATE INDEX IF NOT EXISTS idx_referral_submissions_status ON referral_submissions(status);

-- Create an index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_referral_submissions_created_at ON referral_submissions(created_at);

-- Create an index on referrer_name for tracking
CREATE INDEX IF NOT EXISTS idx_referral_submissions_referrer_name ON referral_submissions(referrer_name);

-- Add RLS (Row Level Security) policies
ALTER TABLE referral_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert referrals (for public form submissions)
CREATE POLICY "Allow public to insert referrals" ON referral_submissions
  FOR INSERT WITH CHECK (true);

-- Allow service role to read all referrals (for admin dashboard)
CREATE POLICY "Allow service role to read all referrals" ON referral_submissions
  FOR SELECT USING (auth.role() = 'service_role');

-- Allow authenticated users to read all referrals (for admin dashboard)
CREATE POLICY "Allow authenticated users to read all referrals" ON referral_submissions
  FOR SELECT USING (auth.role() = 'authenticated');

-- Allow service role to update referrals (for admin dashboard)
CREATE POLICY "Allow service role to update referrals" ON referral_submissions
  FOR UPDATE USING (auth.role() = 'service_role');

-- Allow authenticated users to update referrals (for admin dashboard)
CREATE POLICY "Allow authenticated users to update referrals" ON referral_submissions
  FOR UPDATE USING (auth.role() = 'authenticated');

-- Allow service role to delete referrals (for admin dashboard)
CREATE POLICY "Allow service role to delete referrals" ON referral_submissions
  FOR DELETE USING (auth.role() = 'service_role');

-- Allow authenticated users to delete referrals (for admin dashboard)
CREATE POLICY "Allow authenticated users to delete referrals" ON referral_submissions
  FOR DELETE USING (auth.role() = 'authenticated');

-- Create a function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create a trigger to automatically update the updated_at column
DROP TRIGGER IF EXISTS update_referral_submissions_updated_at ON referral_submissions;
CREATE TRIGGER update_referral_submissions_updated_at
  BEFORE UPDATE ON referral_submissions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
