import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://gsedapjvdgwxczfcnaiv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdzZWRhcGp2ZGd3eGN6ZmNuYWl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTExOTIyMzIsImV4cCI6MjAyNjc2ODIzMn0.Tv8iZvbsJiQ9IdPaD5GzFuqBMfWqho4_SxokqKnsQmI";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
