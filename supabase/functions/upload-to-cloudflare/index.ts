// ==========================================
// EDGE FUNCTION: UPLOAD TO CLOUDFLARE IMAGES
// Deploy as: 'upload-to-cloudflare'
// ==========================================

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const CLOUDFLARE_ACCOUNT_ID = Deno.env.get('CLOUDFLARE_ACCOUNT_ID')!;
const CLOUDFLARE_API_TOKEN = Deno.env.get('CLOUDFLARE_API_TOKEN')!;

serve(async (req) => {
  // CORS headers
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
  }

  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return new Response(
        JSON.stringify({ error: 'No file provided' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Upload to Cloudflare Images
    const cloudflareFormData = new FormData();
    cloudflareFormData.append('file', file);

    const uploadResponse = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/images/v1`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${CLOUDFLARE_API_TOKEN}`,
        },
        body: cloudflareFormData,
      }
    );

    const result = await uploadResponse.json();

    if (!result.success) {
      throw new Error(result.errors?.[0]?.message || 'Upload failed');
    }

    // Return the Cloudflare CDN URL
    return new Response(
      JSON.stringify({
        success: true,
        url: result.result.variants[0], // Use first variant (original)
        id: result.result.id,
      }),
      {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );

  } catch (error: any) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  }
});