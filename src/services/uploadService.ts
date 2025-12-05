import { supabase } from '@/lib/supabase';

export const uploadService = {
  /**
   * Upload document to Supabase Storage (private-docs bucket)
   * Files are stored in user-specific folders: userId/filename
   */
  async uploadDocument(file: File, userId: string, docType: string): Promise<string> {
    const fileExt = file.name.split('.').pop();
    const fileName = `${userId}/${docType}_${Date.now()}.${fileExt}`;

    const { data, error } = await supabase.storage
      .from('private-docs')
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: false,
      });

    if (error) throw error;

    // Get public URL (still requires auth to access due to RLS)
    const { data: { publicUrl } } = supabase.storage
      .from('private-docs')
      .getPublicUrl(fileName);

    return publicUrl;
  },

  /**
   * Upload property photo to Cloudflare Images via Edge Function
   */
  async uploadPropertyPhoto(file: File): Promise<string> {
    const formData = new FormData();
    formData.append('file', file);

    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const response = await fetch(`${supabaseUrl}/functions/v1/upload-to-cloudflare`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Upload failed');
    }

    const result = await response.json();
    return result.url;
  },

  /**
   * Upload multiple property photos
   */
  async uploadPropertyPhotos(files: File[]): Promise<string[]> {
    const uploadPromises = files.map((file) => this.uploadPropertyPhoto(file));
    return Promise.all(uploadPromises);
  },
};