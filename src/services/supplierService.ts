import { supabase } from '@/lib/supabase';

export const supplierService = {
  /**
   * Fetch attributes by category for dropdowns
   */
  async getAttributesByCategory(category: string) {
    const { data, error } = await supabase
      .from('attributes')
      .select('*')
      .eq('category', category)
      .order('name');

    if (error) throw error;
    return data;
  },

  /**
   * Fetch all places (cities) for location dropdown
   */
  async getPlaces() {
    const { data, error } = await supabase
      .from('places')
      .select('*')
      .eq('is_active', true)
      .order('name');

    if (error) throw error;
    return data;
  },

  /**
   * Complete supplier onboarding after email verification
   * Calls the RPC function we created
   */
  async completeOnboarding(onboardingData: any) {
    const { data, error } = await supabase.rpc('complete_supplier_onboarding', {
      onboarding_data: onboardingData,
    });

    if (error) throw error;
    return data;
  },

  /**
   * Check if supplier profile exists
   */
  async getSupplierProfile(userId: string) {
    const { data, error } = await supabase
      .from('suppliers')
      .select('*')
      .eq('id', userId)
      .single();

    // If no rows, return null (not an error)
    if (error && error.code === 'PGRST116') return null;
    if (error) throw error;

    return data;
  },
};