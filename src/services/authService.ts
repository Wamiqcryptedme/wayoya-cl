import { supabase } from '@/lib/supabase';

export const authService = {
  /**
   * Sign up a new supplier with email/password
   * Triggers Supabase email verification
   */
  async signUp(email: string, password: string, metadata: any) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/email-verified`,
        data: {
          role: 'supplier',
          full_name: metadata.contactPerson || metadata.businessName,
        },
      },
    });

    if (error) throw error;
    return data;
  },

  /**
   * Handle email verification callback
   * Supabase automatically logs user in after clicking email link
   */
  async handleEmailVerification() {
    const { data: { session }, error } = await supabase.auth.getSession();
    
    if (error) throw error;
    if (!session) throw new Error('No active session after verification');

    return session;
  },

  /**
   * Get current user
   */
  async getCurrentUser() {
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error) throw error;
    return user;
  },
};