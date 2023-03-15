import { LinkDef } from "@/types"
import { supabase } from "@/utils/supabaseClient"

export const LinkService = {
  async getLinks(userId: string) {
    try {
      const { data, error } = await supabase
        .from('links')
        .select('id, title, description, url, group_tag, color')
        .eq('user_id', userId)
      if (error) throw error
      return data
    } catch (error) {
      console.log('error', error)
    }
  },
  async create(title: string, desc: string, url: string, userId: string | undefined, color: string) {
    if (userId) {
      const { error } = await supabase
        .from('links')
        .insert({ title: title, description: desc, url: url, user_id: userId, color: color })
    }
  },
  async delete(id: LinkDef) {
    const { error } = await supabase
      .from('links')
      .delete()
      .eq('id', id)
  }
} 
