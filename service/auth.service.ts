
import { supabase } from "@/supabaseClient"
import { Provider } from "@supabase/supabase-js"


export const AuthService = {


  async signInWithOAuth(provider: Provider) {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: provider,
    })
    return { error }
  },
  async signInPassword(email: string, password: string) {
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    },)
    return { error }
  },
  async signUpWithMagicLink(email: string) {
    const { error } = await supabase.auth.signInWithOtp({
      email: email,
      options: {
        emailRedirectTo: 'http:localhost:3000/dashboard',
      },
    },)
    return { error }
  },

  async signOut() {
    await supabase.auth.signOut()
  },

  async getSession() {
    const { data: { session }, error } = await supabase.auth.getSession()
    return { session, error }
  }
}
