import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://hhdmxfqpsyxpbnszllpd.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhoZG14ZnFwc3l4cGJuc3psbHBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYyNDk4MjcsImV4cCI6MjA5MTgyNTgyN30.lDsz6iYYYl0xV3TtiMfPeFKCDXSNtiApUTqbzzSvm34",
);
