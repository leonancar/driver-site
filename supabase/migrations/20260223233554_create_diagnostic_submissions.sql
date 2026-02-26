/*
  # Create Diagnostic Submissions Table

  1. New Tables
    - `diagnostic_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text) - Client name
      - `company_name` (text) - Company name
      - `whatsapp` (text) - WhatsApp contact number
      - `email` (text) - Email address
      - `main_challenge` (text) - Main business challenge selected
      - `track_indicators` (text) - Whether they track performance indicators
      - `has_strategic_plan` (text) - Whether they have clear goals and strategic plan
      - `monthly_revenue` (text) - Monthly revenue range
      - `created_at` (timestamptz) - Timestamp of submission

  2. Security
    - Enable RLS on `diagnostic_submissions` table
    - Add policy for service role to insert data (for form submissions)
    - Add policy for authenticated users to read their own submissions
*/

CREATE TABLE IF NOT EXISTS diagnostic_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  company_name text NOT NULL,
  whatsapp text NOT NULL,
  email text NOT NULL,
  main_challenge text NOT NULL,
  track_indicators text NOT NULL,
  has_strategic_plan text NOT NULL,
  monthly_revenue text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE diagnostic_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts for form submissions"
  ON diagnostic_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow service role full access"
  ON diagnostic_submissions
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);