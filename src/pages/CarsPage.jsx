import { useState } from 'react';
import { HiLocationMarker, HiCalendar, HiSearch } from 'react-icons/hi';
import { FaCar, FaUsers, FaCog } from 'react-icons/fa';
import { searchCars } from '../lib/api';
import { formatCurrency, getTomorrowDate, getNextWeekDate } from '../lib/utils';

export default function CarsPage() {
  const [location, setLocation] = useState('');
  const [pickupDate, setPickupDate] = useState(getTomorrowDate());
  const [dropoffDate, setDropoffDate] = useState(getNextWeekDate());
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = await searchCars({ location, pickupDate, dropoffDate });
    setResults(data.results);
    setLoading(false);
  };

  return (
    <div className="pt-20 min-h-screen bg-surface-offwhite">
      <div className="bg-hero-gradient py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Compare Car Hire</h1>
          <p className="text-white/60 text-sm max-w-xl mx-auto">Find the best car rental deals from Hertz, Avis, Europcar, Enterprise and more.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 -mt-8">
        <form onSubmit={handleSearch} className="bg-white rounded-2xl p-6 shadow-xl border border-border">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="relative sm:col-span-2">
              <HiLocationMarker className="absolute left-3 top-1/2 -translate-y-1/2 text-text-light" size={18} />
              <input type="text" placeholder="Pickup location (e.g. Barcelona Airport)" value={location} onChange={e => setLocation(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-surface-light border border-border text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple/30 focus:border-brand-purple" />
            </div>
            <div className="relative">
              <HiCalendar className="absolute left-3 top-1/2 -translate-y-1/2 text-text-light" size={18} />
              <input type="date" value={pickupDate} onChange={e => setPickupDate(e.target.value)} className="w-full pl-10 pr-4 py-3 rounded-xl bg-surface-light border border-border text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple/30 focus:border-brand-purple" />
            </div>
            <div className="relative">
              <HiCalendar className="absolute left-3 top-1/2 -translate-y-1/2 text-text-light" size={18} />
              <input type="date" value={dropoffDate} onChange={e => setDropoffDate(e.target.value)} className="w-full pl-10 pr-4 py-3 rounded-xl bg-surface-light border border-border text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple/30 focus:border-brand-purple" />
            </div>
          </div>
          <button type="submit" className="mt-4 w-full brand-gradient-bg text-white font-semibold py-3 rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2">
            <HiSearch size={18} /> Search Cars
          </button>
        </form>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 animate-pulse border border-border">
                <div className="h-32 bg-gray-200 rounded-xl mb-4" />
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
                <div className="h-3 bg-gray-200 rounded w-1/2" />
              </div>
            ))}
          </div>
        )}

        {results && !loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {results.map(car => (
              <div key={car.id} className="bg-white rounded-2xl overflow-hidden border border-border card-hover">
                <div className="h-44 bg-surface-light flex items-center justify-center p-4">
                  <img src={car.image} alt={car.name} className="max-h-full object-contain" />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-brand-purple bg-brand-purple/10 px-3 py-1 rounded-full">{car.category}</span>
                    <span className="text-xs text-text-light">{car.provider}</span>
                  </div>
                  <h3 className="font-bold text-text-dark text-lg mb-3">{car.name}</h3>
                  <div className="flex items-center gap-4 text-text-mid text-xs mb-4">
                    <span className="flex items-center gap-1"><FaUsers size={12} /> {car.seats} seats</span>
                    <span className="flex items-center gap-1"><FaCog size={12} /> {car.transmission}</span>
                  </div>
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="brand-gradient-text font-extrabold text-xl">{formatCurrency(car.pricePerDay)}</p>
                      <p className="text-text-light text-xs">per day · {formatCurrency(car.totalPrice)} total</p>
                    </div>
                    <button className="brand-gradient-bg text-white text-sm font-semibold px-5 py-2 rounded-full hover:opacity-90 transition-all">
                      View Deal
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {!results && !loading && (
          <div className="text-center py-16">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-surface-light flex items-center justify-center"><FaCar size={32} className="text-text-light" /></div>
            <p className="text-text-mid text-lg mb-2">Search for car hire above</p>
            <p className="text-text-light text-sm">Enter your pickup location and dates to compare prices.</p>
          </div>
        )}
      </div>
    </div>
  );
}
