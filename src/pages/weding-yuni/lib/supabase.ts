import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL || "https://ehgflqzbgfefvfvsgtza.supabase.co",
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || "sb_publishable_Ym89HcFHDcZoFbGSdUUlxQ_rjW_c2iU",
);
