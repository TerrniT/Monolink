import { supabase } from "@/supabaseClient"
import { Provider } from "@supabase/supabase-js"


export const signInWithOAuth = async (provider: Provider) => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: provider,
  })
  return { error }
}

export const signInPassword = async (email: string, password: string) => {

  const { error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  },)
  return { error }
}

export const signUpWithMagicLink = async (email: string) => {
  const { error } = await supabase.auth.signInWithOtp({
    email: email,
    options: {
      emailRedirectTo: 'http:localhost:3000/dashboard',
    },
  },)
  return { error }
}

export const signOut = async () => {
  await supabase.auth.signOut()
}

export const getSession = async () => {
  const { data: { session }, error } = await supabase.auth.getSession()
  return { session, error }
}
