PALMREACH SUPPORT SERVICES - WEBSITE PACKAGE
===========================================

This is a static HTML/CSS/JavaScript website designed for the cheapest practical hosting method.

FILES
-----
index.html           Homepage
about.html           About Palmreach
services.html        Services
referrals.html       Referral enquiry
contact.html         General support enquiry
privacy.html         Privacy page
complaints.html      Complaints & feedback
assets/              Branding, CSS, JavaScript and images

IMPORTANT BEFORE PUBLIC LAUNCH
------------------------------
1. Replace assets/i-heart-ndis-placeholder.svg with the official "I heart NDIS - Registered Provider"
   artwork from the current NDIS registered-provider logo pack.
   Palmreach is a registered provider, so this is the appropriate provider logo version.
2. If you have a clean standalone Palmreach logo PNG/SVG, replace assets/palmreach-brand.jpg.
   The current brand image was extracted from Palmreach's capability flyer.
3. Confirm the phone number and email:
      0476 473 703
      palmreach@outlook.com.au
4. Test the forms on phone and computer. The cheapest version does NOT store form submissions.
   It opens the visitor's email program with the form information pre-filled.
5. Do not add participant NDIS numbers, diagnoses or detailed medical information to the public form.

CHEAPEST HOSTING ROUTE
----------------------
Recommended: keep the domain at VentraIP and host the website on Cloudflare Pages for $0 hosting.

Typical process:
1. Create a free Cloudflare account.
2. Create a Pages project and upload this website folder / ZIP.
3. Cloudflare gives you a temporary pages.dev website address.
4. In Cloudflare Pages, add your VentraIP domain as a custom domain.
5. Cloudflare tells you which DNS records to add/change.
6. Log into VentraIP DNS management and enter those records.
7. Wait for DNS to update.
8. Cloudflare provides HTTPS/SSL automatically.
9. Test both yourdomain.com.au and www.yourdomain.com.au.

ALTERNATIVE
-----------
You can also buy standard web hosting from VentraIP and upload the files to public_html,
but that creates an extra recurring hosting cost. A static site does not need PHP or WordPress.

FORMS
-----
The included version uses email-based forms, which keeps hosting free and avoids storing
participant information on a third-party database. If Palmreach later wants web submissions,
add a secure form solution after reviewing privacy/security requirements.

SEO
---
Once the final domain is known:
- add the domain to Google Search Console;
- create/verify a Google Business Profile;
- submit sitemap.xml (can be generated once the exact domain is confirmed);
- add the final domain to page canonical tags and structured data.

NDIS BRANDING
-------------
Do not use the ordinary NDIS government logo. Registered providers may use the official
"I heart NDIS" / "We heart NDIS" registered-provider artwork under current NDIS branding rules.
