import { LinkDef } from "@/types"
import { supabase } from "@/utils/supabaseClient"

export const getLinks = async (userId: string) => {
  try {
    const { data, error } = await supabase
      .from('links')
      .select('id, title, description, url, tags')
      .eq('user_id', userId)
    if (error) throw error
    return data
  } catch (error) {
    console.log('error', error)
  }
}

export const createLink = async ({ data, userId }: { data: LinkDef, userId: string }) => {
  if (userId) {
    const { error } = await supabase
      .from('links')
      .insert({ title: data.title, description: data.description, url: data.url, user_id: userId, tags: data.tags })
  }
}

export const deleteLink = async (id: string) => {
  const { error } = await supabase
    .from('links')
    .delete()
    .eq('id', id)
}
