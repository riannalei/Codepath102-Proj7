// src/services/supabaseClient.js

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ijxatlchrmehsptyyclq.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlqeGF0bGNocm1laHNwdHl5Y2xxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkwNTcwMDcsImV4cCI6MjAxNDYzMzAwN30.8r7RtDlVHU1mxqx2-su-X1NTfvZqcbrsoFdsRP4targ";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);  