import { FaApple, FaGooglePlay } from 'react-icons/fa';
import heroImg from '../../assets/hero.png';

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.oneclick.booking';
const APP_STORE_URL = 'https://apps.apple.com/app/one-click-online/id6504813577';
const QR_SRC = `https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(PLAY_STORE_URL)}&bgcolor=ffffff&color=7B2FF7`;

export default function AppCTA() {
  return (
    <section className="relative overflow-hidden bg-dark-gradient py-16 sm:py-20">
      {/* Decorative orbs */}
      <div className="glow-orb w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-brand-purple top-[-150px] right-[-100px] opacity-20" />
      <div className="glow-orb w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-brand-magenta bottom-[-100px] left-[-100px] opacity-15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Text */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 sm:mb-5 leading-tight">
              Travel smarter,{' '}
              <span className="brand-gradient-text">from your pocket</span>
            </h2>
            <p className="text-white/50 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0">
              Download the One Click app for exclusive deals, fare alerts, and the fastest way to search and compare flights, hotels, and more — all from your phone.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start mb-8">
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

            {/* QR Code */}
            <div className="flex flex-col items-center lg:items-start gap-2">
              <div className="bg-white p-3 rounded-2xl shadow-lg inline-block">
                <img
                  src={QR_SRC}
                  alt="Scan to download on Google Play"
                  width={140}
                  height={140}
                  className="rounded-lg"
                />
              </div>
              <span className="text-white/40 text-xs font-medium">Scan to download the app</span>
            </div>
          </div>

          {/* Phone Mockup – uses the provided prototype image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-60 sm:w-72 max-w-[300px]">
              <img
                src={heroImg}
                alt="One Click app preview"
                className="w-full h-auto rounded-[2rem] shadow-2xl border-2 border-white/10"
              />
              {/* Glow behind phone */}
              <div className="absolute -inset-8 bg-brand-purple/20 blur-3xl rounded-full -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
