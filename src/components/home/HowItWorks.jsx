import { HiSearch, HiSwitchHorizontal, HiCursorClick } from 'react-icons/hi';

const steps = [
  {
    num: 1,
    icon: <HiSearch size={28} />,
    title: 'Search',
    desc: 'Enter your destination, travel dates, and preferences. We search flights, hotels, car hire, and tours across 100+ providers.',
  },
  {
    num: 2,
    icon: <HiSwitchHorizontal size={28} />,
    title: 'Compare',
    desc: 'See all your options side by side. Filter by price, duration, stops, ratings, and more to find exactly what you need.',
  },
  {
    num: 3,
    icon: <HiCursorClick size={28} />,
    title: 'Book',
    desc: 'Found the perfect deal? Click through to our trusted partner to complete your booking at the best available price.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-dark-gradient relative overflow-hidden">
      {/* Decorative orbs */}
      <div className="glow-orb w-[400px] h-[400px] bg-brand-purple top-[-100px] right-[-100px] opacity-20" />
      <div className="glow-orb w-[300px] h-[300px] bg-brand-magenta bottom-[-80px] left-[-80px] opacity-15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            How It Works
          </h2>
          <p className="text-white/50 text-sm max-w-lg mx-auto">
            Booking your next trip has never been simpler. Three steps, one destination.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map(step => (
            <div key={step.num} className="text-center">
              <div className="w-16 h-16 mx-auto mb-5 rounded-2xl brand-gradient-bg flex items-center justify-center text-white shadow-lg shadow-brand-purple/30">
                <span className="font-extrabold text-2xl">{step.num}</span>
              </div>
              <h3 className="text-white font-bold text-xl mb-3">{step.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed max-w-xs mx-auto">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
