// ==========================================
// FUNCTION 1: COMMUNICATION HUB (Mailgun)
// Deploy as: 'send-emails'
// ==========================================
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const MAILGUN_KEY = Deno.env.get('MAILGUN_API_KEY')!
const MAILGUN_DOMAIN = Deno.env.get('MAILGUN_DOMAIN')!

serve(async (req) => {
  try {
    const { to, trigger, data } = await req.json()
    
    // 1. Determine Subject
    const subjects: Record<string, string> = {
      'supplier_welcome': 'Welcome to TravelNinja',
      'supplier_activate': 'Activate your supplier account',
      'supplier_approved': 'Your supplier account has been approved',
      'supplier_rejected': "We couldn't approve your supplier account",
      // ... add others as needed
    }
    const subject = subjects[trigger] || 'Notification from Wayoya';

    // 2. Load Template
    // Map trigger to filename
    const templateMap: Record<string, string> = {
      'supplier_welcome': 'Account created.html',
      'supplier_activate': 'Activate your account.html',
      'supplier_approved': "You're approved.html",
      'supplier_rejected': 'Account not approved.html'
    }
    
    const fileName = templateMap[trigger];
    if (!fileName) throw new Error(`No template found for trigger: ${trigger}`);

    let htmlContent = await Deno.readTextFile(`./templates/${fileName}`);

    // 3. Build Dynamic Content Blocks (e.g. Commissions)
    let commissionHtml = '';

    // Logic: Only show relevant commissions based on supplier type
    // Note: Adjust the HTML structure here to match your email design exactly
    if (data.supplier_type === 'rental') {
      commissionHtml = `
        <p style="margin: 8px 0; font-size: 15px; color: #38445e">
          <strong style="font-weight: 400; color: #707d99">Commission (Rentals)</strong>
          <span style="float: right; font-weight: 600">${data.commission_rates?.rental || 15}%</span>
        </p>`;
    } else if (data.supplier_type === 'tour_operator') {
      commissionHtml = `
        <p style="margin: 8px 0; font-size: 15px; color: #38445e">
          <strong style="font-weight: 400; color: #707d99">Commission (Tours)</strong>
          <span style="float: right; font-weight: 600">${data.commission_rates?.tour || 18}%</span>
        </p>
        <p style="margin: 8px 0; font-size: 15px; color: #38445e">
          <strong style="font-weight: 400; color: #707d99">Commission (Treks)</strong>
          <span style="float: right; font-weight: 600">${data.commission_rates?.trek || 14}%</span>
        </p>`;
    } else if (data.supplier_type === 'stay') {
        commissionHtml = `
        <p style="margin: 8px 0; font-size: 15px; color: #38445e">
          <strong style="font-weight: 400; color: #707d99">Commission (Stays)</strong>
          <span style="float: right; font-weight: 600">${data.commission_rates?.room || 15}%</span>
        </p>`;
    }
    // Add other types (Activity, Guide) as needed...

    // 4. Define Replacements Map
    const replacements: Record<string, string> = {
      "{{Name}}": data.business_name || '',
      "{{ContactPerson}}": data.contact_person || '',
      "{{Email}}": data.email || '',
      "{{Category}}": data.category || '', // e.g. "Tour Operator"
      "{{Status}}": data.status || '',
      "{{Reason}}": data.remarks || '', // For rejection email
      "{{CommissionBlock}}": commissionHtml // The dynamic block we built above
    };

    // 5. Apply Replacements
    for (const [key, value] of Object.entries(replacements)) {
      // Use regex to replace globally
      htmlContent = htmlContent.replace(new RegExp(key, 'g'), value);
    }

    // 6. Send via Mailgun
    const form = new FormData()
    form.append('from', `Wayoya <noreply@${MAILGUN_DOMAIN}>`)
    form.append('to', to)
    form.append('subject', subject)
    form.append('html', htmlContent)

    const res = await fetch(`https://api.mailgun.net/v3/${MAILGUN_DOMAIN}/messages`, {
      method: 'POST',
      headers: { Authorization: `Basic ${btoa(`api:${MAILGUN_KEY}`)}` },
      body: form
    })

    if (!res.ok) throw new Error(await res.text())

    return new Response(JSON.stringify({ success: true }), { headers: { 'Content-Type': 'application/json' } })

  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 })
  }
})
