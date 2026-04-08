import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getDestinations } from '../../lib/api';
import { formatCurrency } from '../../lib/utils';

export default function Destinations() {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    getDestinations().then(setDestinations);
  }, []);

  const large = destinations.find(d => d.large);
  const small = destinations.filter(d => !d.large);

  return (
    <section className="py-20 bg-surface-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-dark mb-3">
            Explore Popular Destinations
          </h2>
          <p className="text-text-mid text-sm max-w-lg mx-auto">
            Discover amazing places you can fly to from the UK, starting from unbelievable prices.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Large Card */}
          {large && (
            <Link
              to={`/destinations/${large.city.toLowerCase()}`}
              className="lg:col-span-1 lg:row-span-2 relative rounded-2xl overflow-hidden min-h-[400px] group cursor-pointer"
            >
              <img
                src={large.image}
                alt={large.city}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white font-bold text-2xl mb-1">{large.city}</h3>
                <p className="text-white/70 text-sm mb-3">{large.subtitle}</p>
                <span className="inline-block brand-gradient-bg text-white text-sm font-bold px-4 py-2 rounded-full">
                  From {formatCurrency(large.price)}
                </span>
              </div>
            </Link>
          )}

          {/* Small Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {small.map(dest => (
              <Link
                key={dest.id}
                to={`/destinations/${dest.city.toLowerCase()}`}
                className="relative rounded-2xl overflow-hidden h-52 group cursor-pointer"
              >
                <img
                  src={dest.image}
                  alt={dest.city}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-white font-bold text-lg mb-0.5">{dest.city}</h3>
                  <p className="text-white/60 text-xs mb-2">{dest.subtitle}</p>
                  <span className="inline-block brand-gradient-bg text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    From {formatCurrency(dest.price)}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
