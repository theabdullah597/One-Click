import { Link } from 'react-router-dom';
import { FaTiktok, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { FOOTER_TRAVEL_LINKS, FOOTER_COMPANY_LINKS, COMPANY } from '../../lib/constants';

export default function Footer() {
  return (
    <footer className="bg-surface-footer text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Top section: 2-col on mobile, 4-col on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Brand */}
          <div className="col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img
                src="/logo.jpeg"
                alt="One Click Logo"
                className="w-14 h-14 rounded-2xl object-contain"
              />
              <span className="brand-gradient-text font-bold text-lg mt-2 block">
                One Click
              </span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-5">
              Compare and book flights, hotels, car hire & tours from 100+ travel brands. The smartest way to travel from the UK.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <FaTiktok size={16} />, href: '#' },
                { icon: <FaInstagram size={16} />, href: '#' },
                { icon: <FaXTwitter size={16} />, href: '#' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/50 hover:bg-white/20 hover:text-white transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Travel */}
          <div className="col-span-1">
            <h4 className="font-semibold text-xs uppercase tracking-[0.15em] text-white/40 mb-5">Travel</h4>
            <ul className="space-y-3">
              {FOOTER_TRAVEL_LINKS.map(link => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="col-span-1">
            <h4 className="font-semibold text-xs uppercase tracking-[0.15em] text-white/40 mb-5">Company</h4>
            <ul className="space-y-3">
              {FOOTER_COMPANY_LINKS.map(link => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="col-span-1">
            <h4 className="font-semibold text-xs uppercase tracking-[0.15em] text-white/40 mb-5">Get the Latest Deals</h4>
            <p className="text-white/40 text-sm mb-4 leading-relaxed">Weekly travel deals and insider tips straight to your inbox.</p>
            <form onSubmit={e => e.preventDefault()} className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/10 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple"
              />
              <button
                type="submit"
                className="w-full brand-gradient-bg text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-white/30 text-xs text-center sm:text-left leading-relaxed mb-2">
            © 2026 One Click Online. A trading name of {COMPANY.legalName}. Company No. {COMPANY.companyNumber}. Registered in England and Wales.
          </p>
          <p className="text-white/30 text-xs text-center sm:text-left">
            Made with care in the UK 🇬🇧
          </p>
        </div>
      </div>
    </footer>
  );
}
