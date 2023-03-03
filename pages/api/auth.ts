import { supabase } from '@/utils/supabaseClient'

async function signOut() {
  await supabase.auth.signOut()
}

const authApi = { signOut }

export default authApi
