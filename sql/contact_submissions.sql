-- Create contact_submissions table for boat owner exit form submissions
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  syndicate TEXT NOT NULL,
  share_percentage TEXT NOT NULL,
  reason TEXT,
  timeframe TEXT,
  status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'quoted', 'sold', 'declined')),
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on status for faster queries
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);

-- Create an index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at);

-- Create an index on email for tracking
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON contact_submissions(email);

-- Add RLS (Row Level Security) policies
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert contact submissions (for public form submissions)
CREATE POLICY "Allow public to insert contact submissions" ON contact_submissions
  FOR INSERT WITH CHECK (true);

-- Allow service role to read all contact submissions (for admin dashboard)
CREATE POLICY "Allow service role to read all contact submissions" ON contact_submissions
  FOR SELECT USING (auth.role() = 'service_role');

-- Allow authenticated users to read all contact submissions (for admin dashboard)
CREATE POLICY "Allow authenticated users to read all contact submissions" ON contact_submissions
  FOR SELECT USING (auth.role() = 'authenticated');

-- Allow service role to update contact submissions (for admin dashboard)
CREATE POLICY "Allow service role to update contact submissions" ON contact_submissions
  FOR UPDATE USING (auth.role() = 'service_role');

-- Allow authenticated users to update contact submissions (for admin dashboard)
CREATE POLICY "Allow authenticated users to update contact submissions" ON contact_submissions
  FOR UPDATE USING (auth.role() = 'authenticated');

-- Allow service role to delete contact submissions (for admin dashboard)
CREATE POLICY "Allow service role to delete contact submissions" ON contact_submissions
  FOR DELETE USING (auth.role() = 'service_role');

-- Allow authenticated users to delete contact submissions (for admin dashboard)
CREATE POLICY "Allow authenticated users to delete contact submissions" ON contact_submissions
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
DROP TRIGGER IF EXISTS update_contact_submissions_updated_at ON contact_submissions;
CREATE TRIGGER update_contact_submissions_updated_at
  BEFORE UPDATE ON contact_submissions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
