import { supabase } from '@/lib/supabase';

export const profileService = {
  /**
   * Get full supplier profile with place name
   */
  async getSupplierProfile(userId: string) {
    const { data, error } = await supabase
      .from('suppliers')
      .select(`
        *,
        place:places(name),
        profile:profiles!inner(email)
      `)
      .eq('id', userId)
      .single();

    if (error) throw error;

    // Flatten place name
    return {
      ...data,
      place_name: data.place?.name || null
    };
  },

  /**
   * Update bank details (finance)
   */
  async updateFinance(userId: string, financeData: {
    bank_name: string;
    account_title: string;
    account_number: string;
    iban: string;
  }) {
    const { error } = await supabase
      .from('suppliers')
      .update({
        bank_details: financeData
      })
      .eq('id', userId);

    if (error) throw error;
  },

  /**
   * Update property details (for Stays only)
   */
  async updatePropertyDetails(userId: string, propertyData: {
    check_in_time: string;
    check_out_time: string;
    pets_allowed: boolean;
    extra_mattress: boolean;
    featured_amenities: string[];
    property_faqs: Array<{ question: string; answer: string }>;
  }) {
    // Get current details first
    const { data: supplier, error: fetchError } = await supabase
      .from('suppliers')
      .select('details')
      .eq('id', userId)
      .single();

    if (fetchError) throw fetchError;

    // Merge with existing details
    const updatedDetails = {
      ...supplier.details,
      check_in_time: propertyData.check_in_time,
      check_out_time: propertyData.check_out_time,
      pets_allowed: propertyData.pets_allowed,
      extra_mattress: propertyData.extra_mattress,
      featured_amenities: propertyData.featured_amenities,
      property_faqs: propertyData.property_faqs
    };

    const { error } = await supabase
      .from('suppliers')
      .update({
        details: updatedDetails
      })
      .eq('id', userId);

    if (error) throw error;
  }
};
