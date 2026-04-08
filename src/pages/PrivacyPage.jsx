import { COMPANY } from '../lib/constants';

export default function PrivacyPage() {
  return (
    <div className="pt-20 min-h-screen bg-surface-offwhite">
      <div className="bg-hero-gradient py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Privacy Policy</h1>
          <p className="text-white/60 text-sm">Last updated: April 2026 · GDPR Compliant</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl p-8 sm:p-10 border border-border shadow-sm prose prose-sm max-w-none
          [&_h2]:text-text-dark [&_h2]:text-xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-4
          [&_h3]:text-text-dark [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-3
          [&_p]:text-text-mid [&_p]:text-sm [&_p]:leading-relaxed [&_p]:mb-4
          [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-4
          [&_li]:text-text-mid [&_li]:text-sm [&_li]:mb-2">

          <h2>1. Who We Are</h2>
          <p>{COMPANY.legalName} (trading as "One Click Online") is the data controller for personal data collected through the One Click Online website and mobile application. Company Number: {COMPANY.companyNumber}. Registered Office: {COMPANY.address}.</p>

          <h2>2. What Data We Collect</h2>
          <p>We may collect and process the following personal data:</p>
          <ul>
            <li><strong>Identity Data</strong>: name, email address when you create an account or contact us.</li>
            <li><strong>Usage Data</strong>: IP address, browser type, pages visited, time spent, referring URLs.</li>
            <li><strong>Technical Data</strong>: device type, operating system, screen resolution.</li>
            <li><strong>Search Data</strong>: destinations, dates, and preferences you enter when searching.</li>
            <li><strong>Cookie Data</strong>: information collected through cookies and similar technologies.</li>
          </ul>

          <h2>3. How We Use Your Data</h2>
          <p>We use your personal data to provide and improve our travel comparison service, send you fare alerts and newsletters (with your consent), display relevant search results, and comply with legal obligations.</p>

          <h2>4. Legal Basis for Processing (GDPR)</h2>
          <p>We process your data based on: your consent (for marketing communications and cookies), contractual necessity (to provide the service), and legitimate interests (to improve and secure our platform).</p>

          <h2>5. Cookies</h2>
          <p>We use essential cookies for site functionality, analytics cookies to understand usage patterns, and marketing cookies to deliver relevant advertising. You can manage your cookie preferences through our cookie consent banner.</p>

          <h2>6. Third-Party Sharing</h2>
          <p>We may share your data with our travel booking Partners when you click through to their websites, analytics providers (e.g., Google Analytics), and hosting providers (Vercel, Cloudflare). We do not sell your personal data.</p>

          <h2>7. Your Rights (GDPR)</h2>
          <p>Under GDPR, you have the right to access, rectify, erase, restrict processing, data portability, and object to processing of your personal data. To exercise these rights, contact us at {COMPANY.email}.</p>

          <h2>8. Data Retention</h2>
          <p>We retain personal data only for as long as necessary for the purposes set out in this policy. Account data is retained until you delete your account. Analytics data is retained for up to 26 months.</p>

          <h2>9. Data Security</h2>
          <p>We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, loss, or destruction.</p>

          <h2>10. Children's Privacy</h2>
          <p>Our Service is not directed at children under 18. We do not knowingly collect personal data from children.</p>

          <h2>11. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the updated policy on our website.</p>

          <h2>12. Contact Us</h2>
          <p>For privacy-related enquiries: {COMPANY.email}<br />{COMPANY.legalName}<br />{COMPANY.address}</p>
        </div>
      </div>
    </div>
  );
}
