// ============================================================
// CONFIGURAÇÃO — edite só estas duas linhas
// Encontre esses valores em: Supabase → Project Settings → API
// ============================================================
const SUPABASE_URL = "https://zytqcopceogtlskxkjqr.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_Io1NGOkLDufjshFVcmBdaA_Bz_LsTBI";

// Cliente Supabase compartilhado por todas as páginas (login, admin, dashboard)
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
