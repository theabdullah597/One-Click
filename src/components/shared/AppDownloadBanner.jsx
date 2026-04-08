import { FaApple, FaGooglePlay } from 'react-icons/fa';

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.oneclick.booking';
const APP_STORE_URL = 'https://apps.apple.com/app/one-click-online/id6504813577';

export default function AppDownloadBanner() {
  return (
    <div className="bg-dark-gradient rounded-2xl p-8 relative overflow-hidden">
      <div className="glow-orb w-[200px] h-[200px] bg-brand-purple top-[-50px] right-[-50px] opacity-20" />
      <div className="relative z-10 text-center">
        <h3 className="text-white font-bold text-xl mb-2">Download the One Click App</h3>
        <p className="text-white/50 text-sm mb-5 max-w-md mx-auto">Get exclusive deals, fare alerts, and the fastest way to search & compare travel options.</p>
        <div className="flex gap-3 justify-center flex-wrap">
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-text-dark px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-gray-100 transition-colors"
          >
            <FaApple size={18} /> App Store
          </a>
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-text-dark px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-gray-100 transition-colors"
          >
            <FaGooglePlay size={16} /> Google Play
          </a>
        </div>
      </div>
    </div>
  );
}
