/*
  # Contact Submissions Table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text) - Name of the person submitting the form
      - `email` (text) - Email address for contact
      - `business_type` (text) - Type of business (café, studio, service, startup, other)
      - `message` (text) - Message from the contact
      - `created_at` (timestamptz) - Timestamp when the submission was created
      - `status` (text) - Status of the submission (new, contacted, completed)
  
  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for authenticated admin users to read submissions
    - Allow public inserts for contact form (but not reads)
  
  3. Important Notes
    - Public users can submit forms but cannot read submissions
    - Only authenticated users (admins) can view submissions
    - All submissions are timestamped for tracking
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  business_type text NOT NULL DEFAULT 'other',
  message text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update submissions"
  ON contact_submissions
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);