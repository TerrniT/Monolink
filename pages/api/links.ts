import { supabase } from '@/utils/supabaseClient'

const getLinks = async (userId: any) => {
  try {
    const { data, error } = await supabase
      .from('links')
      .select('id, title, description, url')
      .eq('user_id', userId)
    console.log('data from db: ', data)
    if (error) throw error
    return { data, error }
  } catch (error) {
    console.log('error', error)
  }
}

const linksApi = { getLinks }

export default linksApi
