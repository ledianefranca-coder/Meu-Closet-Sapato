import { createClient } from '@supabase/supabase-js'
// A chave publicável é própria para uso no navegador. A segurança dos dados
// permanece garantida pelas políticas RLS configuradas no Supabase.
const url = import.meta.env.VITE_SUPABASE_URL || 'https://bnxfvzosgmvirliakkmu.supabase.co'
const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || 'sb_publishable_XxH-ZIaeuGPQ1d0iaOmVew_TubwSWTT'
export const supabase = createClient(url,key,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true}})
