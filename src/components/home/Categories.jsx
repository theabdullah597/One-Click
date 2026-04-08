import { HiOutlinePaperAirplane } from 'react-icons/hi';
import { FaHotel, FaCar, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const categories = [
  {
    title: 'Flights',
    desc: 'Compare fares from 100+ airlines across all UK airports.',
    icon: <HiOutlinePaperAirplane size={28} />,
    gradient: 'from-brand-purple to-brand-magenta',
    path: '/flights',
  },
  {
    title: 'Hotels',
    desc: 'Find the best hotel deals from Booking.com, Agoda & more.',
    icon: <FaHotel size={24} />,
    gradient: 'from-brand-pink to-brand-coral',
    path: '/hotels',
  },
  {
    title: 'Car Hire',
    desc: 'Compare rental prices from Hertz, Avis, Europcar & others.',
    icon: <FaCar size={24} />,
    gradient: 'from-brand-blue to-brand-sky',
    path: '/cars',
  },
  {
    title: 'Tours & Activities',
    desc: 'Skip-the-line tickets, guided tours & unforgettable experiences.',
    icon: <FaMapMarkerAlt size={24} />,
    gradient: 'from-brand-coral to-brand-orange',
    path: '/tours',
  },
];

export default function Categories() {
  return (
    <section className="py-20 bg-surface-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-dark mb-3">
            Everything you need, all in one place
          </h2>
          <p className="text-text-mid text-sm max-w-lg mx-auto">
            Search, compare, and book across every travel category — all from a single platform.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map(cat => (
            <Link
              key={cat.title}
              to={cat.path}
              className="group bg-white rounded-2xl p-6 border border-border card-hover text-center"
            >
              <div className={`w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {cat.icon}
              </div>
              <h3 className="font-bold text-text-dark text-lg mb-2">{cat.title}</h3>
              <p className="text-text-mid text-sm leading-relaxed">{cat.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
