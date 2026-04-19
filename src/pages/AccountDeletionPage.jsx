import { Link } from "react-router-dom";
import { COMPANY } from "../lib/constants";

export default function AccountDeletionPage() {
  return (
    <div className="pt-20 min-h-screen bg-surface-offwhite">
      <div className="bg-hero-gradient py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
            Account Deletion
          </h1>
          <p className="text-white/60 text-sm">Last updated: April 2026</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <div
          className="bg-white rounded-2xl p-8 sm:p-10 border border-border shadow-sm prose prose-sm max-w-none
          [&_h2]:text-text-dark [&_h2]:text-xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-4
          [&_h3]:text-text-dark [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-3
          [&_p]:text-text-mid [&_p]:text-sm [&_p]:leading-relaxed [&_p]:mb-4
          [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-4
          [&_li]:text-text-mid [&_li]:text-sm [&_li]:mb-2"
        >
          <h2>1. Requesting Account Deletion</h2>
          <p>
            If you would like your account removed from our system, please email
            us at <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a> with
            the subject line "Account Deletion Request". You can also contact us
            directly through our <Link to="/contact">Contact page</Link>.
          </p>

          <h2>2. Information to Include</h2>
          <p>To help us process your request quickly, please include:</p>
          <ul>
            <li>Your full name</li>
            <li>The email address used for your account</li>
            <li>
              Any relevant booking reference or account details (if applicable)
            </li>
          </ul>

          <h2>3. What Happens Next</h2>
          <p>
            Once we verify your request, we will delete your account and
            associated personal data where legally permitted. Some records may
            be retained where required for compliance, fraud prevention, or
            legal obligations.
          </p>

          <h2>4. Processing Timeline</h2>
          <p>
            We aim to complete account deletion requests within 30 days. If
            additional verification is needed, we will contact you using the
            email address associated with your account.
          </p>

          <h2>5. Important Notes</h2>
          <ul>
            <li>Account deletion is permanent and cannot be undone.</li>
            <li>
              You may lose access to saved preferences, alerts, and account
              history.
            </li>
            <li>
              If you still have active bookings with third-party providers,
              their own policies may continue to apply.
            </li>
          </ul>

          <h2>6. Contact Details</h2>
          <p>
            Email: {COMPANY.email}
            <br />
            Company: {COMPANY.legalName} ({COMPANY.companyNumber})
            <br />
            Address: {COMPANY.address}
          </p>
        </div>
      </div>
    </div>
  );
}
