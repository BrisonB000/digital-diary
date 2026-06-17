import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL = "https://kafbjeggmtboagdjjaxo.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImthZmJqZWdnbXRib2FnZGpqYXhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE2NzMxNDYsImV4cCI6MjA5NzI0OTE0Nn0.HLn2jn7b_eFavkmH7pp1KJQ2p0wLV3v6ZB5vAraoU3o";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);