const supabaseUrl = "https://dsyadntdvdjjciquhpab.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRzeWFkbnRkdmRqamNpcXVocGFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ4NjgzODEsImV4cCI6MjA1MDQ0NDM4MX0.zKzjxg5KYFnFfW-gT0Oyso09FzwDcosxEF5Jts4hE5o";
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

export { supabase };
