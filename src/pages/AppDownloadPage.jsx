import { FaApple, FaGooglePlay } from 'react-icons/fa';
import { HiBell, HiSearch, HiLightningBolt, HiShieldCheck, HiGlobeAlt, HiDeviceMobile } from 'react-icons/hi';
import heroImg from '../assets/hero.png';

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.oneclick.booking';
const APP_STORE_URL = 'https://apps.apple.com/app/one-click-online/id6504813577';
const QR_SRC = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(PLAY_STORE_URL)}&bgcolor=ffffff&color=7B2FF7`;

const features = [
  { icon: <HiSearch size={24} />, title: 'Smart Search', desc: 'Search flights, hotels, car hire & tours in seconds.' },
  { icon: <HiBell size={24} />, title: 'Fare Alerts', desc: 'Get notified instantly when prices drop on your routes.' },
  { icon: <HiLightningBolt size={24} />, title: 'Daily Deals', desc: 'Exclusive app-only deals updated every day.' },
  { icon: <HiShieldCheck size={24} />, title: 'Trusted Partners', desc: 'Book with 100+ established travel brands.' },
  { icon: <HiGlobeAlt size={24} />, title: '5,000+ Destinations', desc: 'Worldwide coverage from all UK airports.' },
  { icon: <HiDeviceMobile size={24} />, title: 'Offline Access', desc: 'Save searches and view deals without internet.' },
];

export default function AppDownloadPage() {
  return (
    <div className="pt-20 min-h-screen bg-surface-offwhite">
      {/* Hero */}
      <div className="bg-hero-gradient py-16 sm:py-20 px-4 relative overflow-hidden">
        <div className="glow-orb w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-brand-purple top-[-100px] right-[-50px] opacity-20" />
        <div className="glow-orb w-[250px] sm:w-[300px] h-[250px] sm:h-[300px] bg-brand-magenta bottom-[-80px] left-[-80px] opacity-15" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-white mb-4 sm:mb-5 leading-tight">
                Your travel companion,{' '}
                <span className="brand-gradient-text">always in your pocket</span>
              </h1>
              <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0">
                Download the One Click app and unlock exclusive deals, fare alerts, and the fastest way to compare travel from the UK.
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-text-dark px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl font-semibold hover:bg-gray-100 transition-colors group"
                >
                  <FaApple size={24} className="group-hover:scale-110 transition-transform" />
                  <div className="text-left">
                    <span className="text-[10px] font-normal text-text-mid block leading-tight">Download on the</span>
                    <span className="text-sm font-bold leading-tight">App Store</span>
                  </div>
                </a>
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-text-dark px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl font-semibold hover:bg-gray-100 transition-colors group"
                >
                  <FaGooglePlay size={20} className="group-hover:scale-110 transition-transform" />
                  <div className="text-left">
                    <span className="text-[10px] font-normal text-text-mid block leading-tight">Get it on</span>
                    <span className="text-sm font-bold leading-tight">Google Play</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Phone Mockup – real image */}
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative w-56 sm:w-64 max-w-[280px]">
                <img
                  src={heroImg}
                  alt="One Click app preview"
                  className="w-full h-auto rounded-[2rem] shadow-2xl border-2 border-white/10"
                />
                <div className="absolute -inset-8 bg-brand-purple/20 blur-3xl rounded-full -z-10" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-dark mb-3">Why Download the App?</h2>
          <p className="text-text-mid text-sm">Everything you love about One Click, optimized for your phone.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(f => (
            <div key={f.title} className="bg-white rounded-2xl p-6 border border-border card-hover text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl brand-gradient-bg flex items-center justify-center text-white">
                {f.icon}
              </div>
              <h3 className="font-bold text-text-dark text-lg mb-2">{f.title}</h3>
              <p className="text-text-mid text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* QR Code Section */}
      <div className="bg-surface-light py-16 px-4">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-2xl font-bold text-text-dark mb-3">Scan to Download</h2>
          <p className="text-text-mid text-sm mb-6">Point your phone camera at the QR code to download the app.</p>
          <div className="bg-white p-4 rounded-2xl border-2 border-border inline-block shadow-lg">
            <img
              src={QR_SRC}
              alt="Scan to download on Google Play"
              width={180}
              height={180}
              className="rounded-lg"
            />
          </div>
          <p className="text-text-light text-xs mt-4">Scan with your phone camera</p>
        </div>
      </div>
    </div>
  );
}
