import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ivxxrqhusyxvzmwnstae.supabase.co'

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml2eHhycWh1c3l4dnptd25zdGFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAzMjcxMjksImV4cCI6MjA2NTkwMzEyOX0.ppcycnhx7ynKoXDpsHemCUNVnkWuPAwJF4e-OqRxS6E' // Find this in Supabase settings

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false
  }
});