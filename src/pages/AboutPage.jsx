import { COMPANY } from '../lib/constants';

export default function AboutPage() {
  return (
    <div className="pt-20 min-h-screen bg-surface-offwhite">
      <div className="bg-hero-gradient py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">About One Click Online</h1>
          <p className="text-white/60 text-sm">The UK's smartest travel companion.</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl p-8 sm:p-10 border border-border shadow-sm space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-text-dark mb-4">Who We Are</h2>
            <p className="text-text-mid text-sm leading-relaxed mb-4">One Click Online is the UK's smartest travel companion. We help you search, compare, and book flights, hotels, car hire, and tours from over 100 trusted travel brands — all in one place.</p>
            <p className="text-text-mid text-sm leading-relaxed">Founded in 2026, One Click Online was built with a simple mission: to make travel booking faster, easier, and more affordable for everyone in the UK. Whether you're planning a weekend city break to Barcelona, a family holiday to Dubai, or a last-minute escape to Amsterdam, we bring together the best options so you can make the right choice in seconds.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-dark mb-4">How One Click Works</h2>
            <p className="text-text-mid text-sm leading-relaxed mb-4">We don't sell flights or hotel rooms ourselves. Instead, we partner with the world's leading travel brands — including Booking.com, Kiwi.com, Viator, GetYourGuide, and more — to show you real-time prices and availability across thousands of providers.</p>
            <p className="text-text-mid text-sm leading-relaxed">When you search on One Click Online, we scan multiple booking platforms simultaneously and present you with a comprehensive comparison of prices, routes, and options. When you find the perfect deal, we connect you directly with the provider to complete your booking.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-dark mb-4">What We Offer</h2>
            <div className="space-y-4">
              {[
                { title: 'Flights', desc: 'Compare fares from all major UK airports to over 5,000 destinations worldwide.' },
                { title: 'Hotels & Accommodation', desc: 'From budget hostels to luxury five-star resorts, we compare millions of properties worldwide.' },
                { title: 'Car Hire', desc: 'Compare car rental prices from top providers including Hertz, Avis, Europcar, Enterprise, and more.' },
                { title: 'Tours & Activities', desc: 'Discover and book skip-the-line tickets, guided tours, day trips, and unforgettable experiences worldwide.' },
              ].map(item => (
                <div key={item.title} className="flex gap-3">
                  <div className="w-2 h-2 rounded-full brand-gradient-bg mt-2 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-text-dark text-sm">{item.title}</h3>
                    <p className="text-text-mid text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-dark mb-4">Our Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'Transparency', desc: 'No hidden fees, no tricks. The price you see is the price you pay.' },
                { title: 'Simplicity', desc: 'One search, every option. We do the hard work for you.' },
                { title: 'Trust', desc: 'We only partner with established, reputable travel brands.' },
                { title: 'Value', desc: 'We\'re here to save you money and time on every trip.' },
              ].map(v => (
                <div key={v.title} className="bg-surface-light rounded-xl p-5 border border-border">
                  <h3 className="font-bold text-text-dark mb-1">{v.title}</h3>
                  <p className="text-text-mid text-xs">{v.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-surface-light rounded-xl p-6 border border-border">
            <h2 className="text-lg font-bold text-text-dark mb-3">Company Information</h2>
            <div className="text-text-mid text-sm space-y-1">
              <p>One Click Online is a trading name of {COMPANY.legalName}</p>
              <p>Company Number: {COMPANY.companyNumber}</p>
              <p>Registered Office: {COMPANY.address}</p>
              <p>Email: {COMPANY.email}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
