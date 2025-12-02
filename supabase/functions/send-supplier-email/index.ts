import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

serve(async (req) => {
  // CORS headers
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  }

  try {
    const { supplierId } = await req.json();

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Fetch supplier details
    const { data: supplier, error: supplierError } = await supabase
      .from('suppliers')
      .select('business_name, supplier_type')
      .eq('id', supplierId)
      .single();

    if (supplierError) throw supplierError;

    // Fetch supplier profile (email)
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('email')
      .eq('id', supplierId)
      .single();

    if (profileError) throw profileError;

    // Map supplier type to readable category
    const categoryMap: Record<string, string> = {
      'stay': 'Stay',
      'tour_operator': 'Tour Operator',
      'rental': 'Rental',
      'activity_provider': 'Activity Provider',
      'tour_guide': 'Tour Guide',
    };

    const category = categoryMap[supplier.supplier_type] || supplier.supplier_type;

    // Build HTML email using your template
    const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Account Created</title>
    <style>
      @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&display=swap");
    </style>
  </head>
  <body style="margin: 0; padding: 0; font-family: Roboto, sans-serif">
    <table width="100%" cellpadding="0" cellspacing="0" border="0" align="center" bgcolor="#f7f7f7">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0" border="0" style="padding: 20px; margin: 20px auto; border-radius: 20px; max-width: 100%;">
            <tr>
              <td>
                <!-- Header -->
                <div style="margin-bottom: 0px; background-color: #fff; border-bottom: 1px solid #e2e2e2; padding: 16px 20px; padding-top: 22px;">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 523.33 107.67" style="height: 30px;">
                    <g><path fill="#009986" d="M0,37.94V12.18A10.07,10.07,0,0,1,10.07,2.11h.14A10.07,10.07,0,0,1,20.28,12.18V39.06c0,9.72,5.83,14.86,13.75,14.86,9.17,0,14.45-6.11,14.45-14.86V12.18A10.07,10.07,0,0,1,58.55,2.11h0A10.07,10.07,0,0,1,68.62,12.18V39.06c0,8.75,5.28,14.86,14.58,14.86C91.12,53.92,97,48.78,97,39.06V12.18A10.07,10.07,0,0,1,107,2.11h0a10.07,10.07,0,0,1,10.07,10.07V37.94c0,21.81-9.72,35-31.25,35C68.9,73,59.17,62.67,59.31,49.75H57.92c0,12.92-9.58,23.2-26.53,23.2C9.72,73,0,59.75,0,37.94Z"/><path fill="#009986" d="M162.65.72c21.95,0,36.53,14.44,36.53,36.11l.1,24.57a10.12,10.12,0,0,1-10.12,10.16h0A10.12,10.12,0,0,1,179,61.44V57h-1.25v1.39c0,7.23-7.64,14.59-21.11,14.59-18.34,0-30.56-13.62-30.56-34.73C126.12,14.19,140.7.72,162.65.72Zm-.14,53.34c11,0,16.53-7.09,16.53-17.23,0-10.41-6.39-17.22-16.39-17.22-9.72,0-16.39,6.94-16.39,17.22S152.65,54.06,162.51,54.06Z"/><path fill="#009986" d="M258.91,57.11h-1.25v1.67c0,9.44-9,14.17-19.87,14.17-22.08,0-29.44-12.78-29.44-34.31V12.14a10,10,0,0,1,10-10h.22a10,10,0,0,1,10,10V39.75c0,9.17,5.14,14.17,14.58,14.17,9.86,0,15.7-6.39,15.7-15.56V12.14a10,10,0,0,1,10-10h.22a10,10,0,0,1,10,10v64c0,19.73-13.48,31.53-36.12,31.53-14.09,0-24.78-4.42-29.93-13.73A10,10,0,0,1,222,79.2h0A10.18,10.18,0,0,1,231.07,85c2,4,6.48,5.92,13,5.92,9.73,0,14.87-4.59,14.87-13.2Z"/><path fill="#009986" d="M420.86,57.11h-1.25v1.67c0,9.44-9,14.17-19.86,14.17-22.09,0-29.45-12.78-29.45-34.31V12.14a10,10,0,0,1,10-10h.22a10,10,0,0,1,10,10V39.75c0,9.17,5.14,14.17,14.59,14.17,9.86,0,15.69-6.39,15.69-15.56V12.14a10,10,0,0,1,10-10h.22a10,10,0,0,1,10,10v64c0,19.73-13.47,31.53-36.11,31.53-14.09,0-24.79-4.42-29.94-13.73A10,10,0,0,1,384,79.2h0A10.16,10.16,0,0,1,393,85c2,4,6.49,5.92,13,5.92,9.72,0,14.86-4.59,14.86-13.2Z"/><path fill="#009986" d="M486.7.72c21.95,0,36.53,14.44,36.53,36.11l.1,24.57a10.12,10.12,0,0,1-10.12,10.16h0a10.12,10.12,0,0,1-10.12-10.12V57h-1.25v1.39c0,7.23-7.64,14.59-21.11,14.59-18.34,0-30.56-13.62-30.56-34.73C450.17,14.19,464.75.72,486.7.72Zm-.14,53.34c11,0,16.53-7.09,16.53-17.23,0-10.41-6.39-17.22-16.39-17.22-9.72,0-16.39,6.94-16.39,17.22S476.7,54.06,486.56,54.06Z"/><rect fill="#f76d4d" x="287.75" width="74.88" height="74.88" rx="36"/></g>
                  </svg>
                </div>

                <!-- Account Created -->
                <div style="background-color: #fffeff; padding-bottom: 10px; padding-top: 10px;">
                  <div style="padding: 20px; border-radius: 8px; padding-bottom: 0px">
                    <h2 style="margin: 0; color: #38445e; font-size: 23px;">
                      Supplier account created
                    </h2>
                    <p style="margin-top: 14px; padding-bottom: 10px; font-weight: 400; font-size: 17px; color: #38445e; line-height: 27px;">
                      Hey ${supplier.business_name}, your supplier account has been successfully created.
                    </p>
                  </div>

                  <!-- Account Details -->
                  <div style="border-radius: 6px; padding: 16px; background: #f2f2f2; margin: 20px;">
                    <div style="padding-top: 0px">
                      <p style="margin: 8px 0; font-size: 17px; color: #38445e">
                        <strong style="font-weight: 400; color: #707d99">Category</strong>
                        <span style="float: right; font-weight: 600">${category}</span>
                      </p>
                      <p style="margin: 8px 0; font-size: 17px; color: #38445e">
                        <strong style="font-weight: 400; color: #707d99">Name</strong>
                        <span style="float: right; font-weight: 600">${supplier.business_name}</span>
                      </p>
                      <p style="margin: 8px 0; font-size: 17px; color: #38445e">
                        <strong style="font-weight: 400; color: #707d99">Email</strong>
                        <span style="float: right; font-weight: 600">${profile.email}</span>
                      </p>
                      <p style="margin: 8px 0; font-size: 17px; color: #fe9705; margin-top: 25px;">
                        <strong style="font-weight: 400; color: #707d99">Status</strong>
                        <span style="float: right; font-weight: 600">Reviewing details</span>
                      </p>
                    </div>
                  </div>

                  <!-- Note -->
                  <div style="padding: 20px; padding-top: 1px; font-size: 17px; line-height: 27px; font-weight: 400; color: #38445e;">
                    <p style="margin-bottom: 0px">
                      Before going live, your account will need to be reviewed and approved by our team. You'll be notified once that's done.
                    </p>
                  </div>

                  <!-- Links -->
                  <div style="padding-left: 20px; padding-bottom: 4px; border-top: 1px solid #e2e2e2; font-size: 13px; font-weight: 400; color: #38445e;">
                    <p style="margin-bottom: 0px;">
                      <a href="#" style="color: #999999; text-decoration: underline;">Supplier Terms and Conditions</a> |
                      <a href="#" style="color: #999999; text-decoration: underline;">FAQs</a>
                    </p>
                  </div>
                </div>

                <!-- Footer -->
                <div style="margin-top: 0px; border-top: 1px solid #e2e2e2; padding: 20px; background-color: #fffeff;">
                  <p style="font-size: 13px; margin: 0; color: #707d99; line-height: 20px;">
                    1st Floor, Building C-163, Labor square, Korangi, Karachi, Pakistan.
                    <br><br>
                    © 2026 wayoya
                  </p>
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
    `;

    // Use Supabase Admin to send email via connected Mailgun
    const { error: emailError } = await supabase.auth.admin.sendEmail({
      email: profile.email,
      subject: 'Supplier account created',
      html: html,
    });

    if (emailError) throw emailError;

    return new Response(
      JSON.stringify({ success: true }),
      {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );

  } catch (error: any) {
    console.error('Email sending error:', error);
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