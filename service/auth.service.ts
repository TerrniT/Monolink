
import { supabase } from "@/utils/supabaseClient"
import { Provider } from "@supabase/supabase-js"


export const AuthService = {
  async signInWithOAuth(provider: Provider) {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: provider,
    })
  },
  async signInPassword(email: string, password: string) {
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    },)
    return { error }
  },

  async signOut() {
    await supabase.auth.signOut()
  }


}
