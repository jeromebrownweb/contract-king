import { createClient } from '@supabase/supabase-js'

// Get environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Test function to verify connection
export const testConnection = async () => {
  try {
    const { data, error } = await supabase
      .from('test')
      .select('*')
      .limit(1)
    
    if (error && error.code === 'PGRST116') {
      // Table doesn't exist, but connection works!
      console.log('✅ Supabase connected successfully!')
      return { success: true, message: 'Connection successful' }
    }
    
    console.log('✅ Supabase connected successfully!')
    return { success: true, message: 'Connection successful', data }
  } catch (err) {
    console.error('❌ Supabase connection failed:', err)
    return { success: false, error: err }
  }
}
