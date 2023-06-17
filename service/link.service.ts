import { LinkDef } from "@/types"
import { supabase } from "@/supabaseClient"
import { PostgrestError } from "@supabase/supabase-js"

export const getLinks = async (userId: string): Promise<LinkDef[] | undefined> => {
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

export const createLink = async ({ data, id }: { data: LinkDef, id: string }): Promise<PostgrestError | null | undefined> => {
  if (id) {
    const { error } = await supabase
      .from('links')
      .insert({ title: data.title, description: data.description, url: data.url, user_id: id, tags: data.tags })
    return error
  }
}

export const deleteLink = async (id: string): Promise<{ id: string, error: PostgrestError | null }> => {
  const { error } = await supabase
    .from('links')
    .delete()
    .eq('id', id)
  return {
    id,
    error
  }
}
