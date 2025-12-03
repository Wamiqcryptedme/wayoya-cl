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
          <table width="600" cellpadding="0" cellspacing="0" border="0" style="padding: 20px; margin: 20px auto; border-radius: 11px; max-width: 100%;">
            <tr>
              <td>
               <!-- Header -->
                <div
                  style="
                    margin-bottom: 0px;
                    background-color: #fff;
                    border-bottom: 1px solid #e2e2e2;
                    padding: 16px 20px;
                    padding-top: 22px;
                  "
                >
                  <img
                    src="/src/images/logo.png"
                    alt="wayoya logo"
                    style="height: 22px"
                  />
                </div>

                <!-- Account Created -->
                <div style="background-color: #fffeff; padding-bottom: 10px; padding-top: 10px;">
                  <div style="padding: 20px; border-radius: 8px; padding-bottom: 0px">
                    <h2 style="margin: 0; color: #38445e; font-size: 21px;">
                      Supplier account created
                    </h2>
                    <p style="margin-top: 14px; padding-bottom: 10px; font-weight: 400; font-size: 15px; color: #38445e; line-height: 25px;">
                      Hey ${supplier.business_name}, your supplier account has been successfully created.
                    </p>
                  </div>

                  <!-- Account Details -->
                  <div style="border-radius: 6px; padding: 16px; background: #f2f2f2; margin: 20px;">
                    <div style="padding-top: 0px">
                      <p style="margin: 16px 0; font-size: 15px; border-bottom: 1px solid #e2e2e2; padding-bottom: 7px; color: #38445e">
                        <strong style="font-weight: 400; color: #707d99">Category</strong>
                        <span style="float: right; font-weight: 600">${category}</span>
                      </p>
                      <p style="margin: 16px 0; font-size: 15px; border-bottom: 1px solid #e2e2e2; padding-bottom: 7px; color: #38445e">
                        <strong style="font-weight: 400; color: #707d99">Name</strong>
                        <span style="float: right; font-weight: 600">${supplier.business_name}</span>
                      </p>
                      <p style="margin: 16px 0; font-size: 15px; border-bottom: 1px solid #e2e2e2; padding-bottom: 7px; color: #38445e">
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
                  <div style="padding: 20px; padding-top: 1px; font-size: 15px; line-height: 25px; font-weight: 400; color: #38445e;">
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