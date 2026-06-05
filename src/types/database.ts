// Run `npx supabase gen types typescript --project-id <id> > src/types/database.ts`
// after Phase 3 tables are created to get full type safety.

export type Json = string | number | boolean | null | { [key: string]: Json } | Json[]

export type Database = {
  public: {
    Tables: {
      habits: {
        Row: {
          id: string
          user_id: string
          name: string
          description: string | null
          icon: string | null
          color: string | null
          frequency: 'daily' | 'weekly' | 'custom'
          frequency_days: number[] | null
          category_id: string | null
          order: number
          archived: boolean
          deleted_at: string | null
          created_at: string
        }
        Insert: Omit<Database['public']['Tables']['habits']['Row'], 'id' | 'created_at'>
        Update: Partial<Database['public']['Tables']['habits']['Insert']>
      }
      habit_categories: {
        Row: {
          id: string
          user_id: string
          name: string
          color: string | null
          icon: string | null
          order: number
          deleted_at: string | null
        }
        Insert: Omit<Database['public']['Tables']['habit_categories']['Row'], 'id'>
        Update: Partial<Database['public']['Tables']['habit_categories']['Insert']>
      }
      habit_logs: {
        Row: {
          id: string
          habit_id: string
          user_id: string
          completed_at: string
          note: string | null
        }
        Insert: Omit<Database['public']['Tables']['habit_logs']['Row'], 'id'>
        Update: Partial<Database['public']['Tables']['habit_logs']['Insert']>
      }
      streaks: {
        Row: {
          id: string
          habit_id: string
          user_id: string
          current_streak: number
          longest_streak: number
          last_completed_at: string | null
          freeze_uses_this_month: number
        }
        Insert: Omit<Database['public']['Tables']['streaks']['Row'], 'id'>
        Update: Partial<Database['public']['Tables']['streaks']['Insert']>
      }
    }
  }
}
