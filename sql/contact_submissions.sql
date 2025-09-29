-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  syndicate TEXT NOT NULL,
  share_percentage TEXT NOT NULL,
  reason TEXT,
  timeframe TEXT,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'quoted', 'sold', 'declined')),
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_contact_submissions_updated_at
    BEFORE UPDATE ON contact_submissions
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy for authenticated users to read all submissions
CREATE POLICY "Allow authenticated users to read all submissions" ON contact_submissions
  FOR SELECT USING (auth.role() = 'authenticated');

-- Create policy for anyone to insert submissions
CREATE POLICY "Allow anyone to insert submissions" ON contact_submissions
  FOR INSERT WITH CHECK (true);

-- Create policy for authenticated users to update submissions
CREATE POLICY "Allow authenticated users to update submissions" ON contact_submissions
  FOR UPDATE USING (auth.role() = 'authenticated');
