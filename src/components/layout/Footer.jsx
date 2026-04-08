import { Link } from 'react-router-dom';
import { FaTiktok, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { FOOTER_TRAVEL_LINKS, FOOTER_COMPANY_LINKS, COMPANY } from '../../lib/constants';

export default function Footer() {
  return (
    <footer className="bg-surface-footer text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl brand-gradient-bg flex items-center justify-center">
                <span className="text-white font-extrabold text-base">1C</span>
              </div>
              <span className="text-white font-bold text-xl">One Click</span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Search, compare, and book flights, hotels, car hire & tours from the UK. Your next adventure is just one click away.
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
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-white/20 hover:text-white transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Travel */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/40 mb-5">Travel</h4>
            <ul className="space-y-3">
              {FOOTER_TRAVEL_LINKS.map(link => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/40 mb-5">Company</h4>
            <ul className="space-y-3">
              {FOOTER_COMPANY_LINKS.map(link => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/40 mb-5">Newsletter</h4>
            <p className="text-white/50 text-sm mb-4">Get the latest deals and travel tips delivered to your inbox.</p>
            <form onSubmit={e => e.preventDefault()} className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2.5 rounded-full bg-white/10 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple"
              />
              <button
                type="submit"
                className="brand-gradient-bg text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity shrink-0"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <p className="text-white/30 text-xs text-center leading-relaxed">
            © 2026 One Click Online. A trading name of {COMPANY.legalName}. Company No. {COMPANY.companyNumber}. Registered in England and Wales.
          </p>
        </div>
      </div>
    </footer>
  );
}
