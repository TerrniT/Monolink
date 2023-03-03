import { supabase } from '@/utils/supabaseClient'

const getLinks = async (userId: any) => {
  try {
    const { data, error } = await supabase
      .from('links')
      .select('id, title, description, url')
      .eq('user_id', userId)
    if (error) throw error
    return { data, error }
    console.log('data from db: ', data)
  } catch (error) {
    console.log('error', error)
  }
}

const linksApi = { getLinks }

export default linksApi
