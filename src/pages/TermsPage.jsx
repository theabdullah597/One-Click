import { COMPANY } from '../lib/constants';

export default function TermsPage() {
  return (
    <div className="pt-20 min-h-screen bg-surface-offwhite">
      <div className="bg-hero-gradient py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Terms and Conditions</h1>
          <p className="text-white/60 text-sm">Last updated: April 2026</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl p-8 sm:p-10 border border-border shadow-sm prose prose-sm max-w-none
          [&_h2]:text-text-dark [&_h2]:text-xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-4
          [&_h3]:text-text-dark [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-3
          [&_p]:text-text-mid [&_p]:text-sm [&_p]:leading-relaxed [&_p]:mb-4
          [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-4
          [&_li]:text-text-mid [&_li]:text-sm [&_li]:mb-2">

          <h2>1. Introduction</h2>
          <p>These Terms and Conditions ("Terms") govern your use of the One Click Online website at https://1clickonline.co.uk and the One Click Online mobile application (together, the "Service"). By accessing or using the Service, you agree to be bound by these Terms.</p>
          <p>The Service is operated by {COMPANY.legalName}, a company registered in England and Wales under company number {COMPANY.companyNumber}, with its registered office at {COMPANY.address}.</p>

          <h2>2. About the Service</h2>
          <p>One Click Online is a travel comparison and search platform. We allow users to search for and compare prices on flights, hotels, car hire, tours, and other travel-related services from third-party booking providers ("Partners"). We do not provide travel services ourselves.</p>

          <h2>3. Eligibility</h2>
          <p>To use the Service, you must be at least 18 years of age, or the age of legal majority in your jurisdiction.</p>

          <h2>4. User Accounts</h2>
          <p>You may create an account to access additional features. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.</p>

          <h2>5. Bookings and Third-Party Providers</h2>
          <p>When you select a travel option and click through to book, you will be redirected to a third-party Partner's website. Any booking is directly between you and that Partner. Their terms, privacy policy, and cancellation policy apply.</p>
          <p>We are not responsible for pricing accuracy where provided by third parties. Prices may change between display and booking. We are not responsible for disputes between you and a booking Partner.</p>

          <h2>6. Affiliate Disclosure</h2>
          <p>One Click Online participates in affiliate programmes. When you book through a Partner, we may earn a referral commission. This does not affect the price you pay.</p>

          <h2>7. Intellectual Property</h2>
          <p>All content on the Service is the property of {COMPANY.legalName} or its licensors and is protected by copyright, trademark, and other intellectual property laws.</p>

          <h2>8. Acceptable Use</h2>
          <p>You agree not to use automated systems, attempt unauthorized access, transmit spam, or interfere with the Service's operation.</p>

          <h2>9. Disclaimer of Warranties</h2>
          <p>The Service is provided "as is" without warranties of any kind.</p>

          <h2>10. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, we shall not be liable for indirect, incidental, or consequential damages. Nothing excludes liability for death or personal injury from negligence, or fraud.</p>

          <h2>11. Governing Law</h2>
          <p>These Terms are governed by the laws of England and Wales. Disputes are subject to the exclusive jurisdiction of the courts of England and Wales.</p>

          <h2>12. Contact</h2>
          <p>Email: {COMPANY.email}<br />Company: {COMPANY.legalName} ({COMPANY.companyNumber})<br />Address: {COMPANY.address}</p>
        </div>
      </div>
    </div>
  );
}
