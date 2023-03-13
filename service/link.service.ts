import { supabase } from "@/utils/supabaseClient"

export const LinkService = {
  async getLinks(userId: string) {
    try {
      const { data, error } = await supabase
        .from('links')
        .select('id, title, description, url')
        .eq('user_id', userId)
      if (error) throw error
      return data
    } catch (error) {
      console.log('error', error)
    }
  },
  async create(title: string, desc: string, url: string, userId: string) {
    const { error } = await supabase
      .from('links')
      .insert({ title: title, description: desc, url: url, user_id: userId })
  },
  async delete(url: string) {
    const { error } = await supabase
      .from('links')
      .delete()
      .eq('url', url)
  }
} 
