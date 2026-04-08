import { useState } from 'react';
import { HiLocationMarker, HiSearch, HiStar, HiClock } from 'react-icons/hi';
import { searchTours } from '../lib/api';
import { formatCurrency } from '../lib/utils';

const CATEGORIES = ['All', 'City Tours', 'Day Trips', 'Food & Drink', 'Museums', 'Adventure', 'Family'];

export default function ToursPage() {
  const [destination, setDestination] = useState('');
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = await searchTours({ destination });
    setResults(data.results);
    setLoading(false);
  };

  const filteredResults = results
    ? results.filter(t => activeCategory === 'All' || t.category === activeCategory)
    : null;

  return (
    <div className="pt-20 min-h-screen bg-surface-offwhite">
      <div className="bg-hero-gradient py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Tours & Activities</h1>
          <p className="text-white/60 text-sm max-w-xl mx-auto">Discover skip-the-line tickets, guided tours, day trips and unforgettable experiences worldwide.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 -mt-8">
        <form onSubmit={handleSearch} className="bg-white rounded-2xl p-6 shadow-xl border border-border">
          <div className="flex gap-3">
            <div className="relative flex-1">
              <HiLocationMarker className="absolute left-3 top-1/2 -translate-y-1/2 text-text-light" size={18} />
              <input type="text" placeholder="Where do you want to explore? (e.g. Barcelona)" value={destination} onChange={e => setDestination(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-surface-light border border-border text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple/30 focus:border-brand-purple" />
            </div>
            <button type="submit" className="brand-gradient-bg text-white font-semibold px-8 py-3 rounded-xl hover:opacity-90 transition-all flex items-center gap-2 shrink-0">
              <HiSearch size={18} /> Search
            </button>
          </div>
        </form>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        {/* Category Filters */}
        {results && (
          <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
            {CATEGORIES.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${activeCategory === cat ? 'brand-gradient-bg text-white' : 'bg-white text-text-mid border border-border hover:bg-surface-light'}`}>
                {cat}
              </button>
            ))}
          </div>
        )}

        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden animate-pulse border border-border">
                <div className="h-48 bg-gray-200" />
                <div className="p-5 space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-3/4" />
                  <div className="h-3 bg-gray-200 rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredResults && !loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredResults.map(tour => (
              <div key={tour.id} className="bg-white rounded-2xl overflow-hidden border border-border card-hover group">
                <div className="relative h-48 overflow-hidden">
                  <img src={tour.image} alt={tour.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-xs font-semibold text-text-dark px-3 py-1 rounded-full">{tour.category}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-text-dark text-base mb-2 group-hover:text-brand-purple transition-colors">{tour.title}</h3>
                  <div className="flex items-center gap-4 text-xs text-text-mid mb-4">
                    <span className="flex items-center gap-1"><HiClock size={14} /> {tour.duration}</span>
                    <span className="flex items-center gap-1"><HiStar className="text-brand-amber" size={14} /> {tour.rating} ({tour.reviews.toLocaleString()})</span>
                  </div>
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-text-light text-xs">From</p>
                      <p className="brand-gradient-text font-extrabold text-xl">{formatCurrency(tour.price)}</p>
                    </div>
                    <button className="brand-gradient-bg text-white text-sm font-semibold px-5 py-2 rounded-full hover:opacity-90 transition-all">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {!results && !loading && (
          <div className="text-center py-16">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-surface-light flex items-center justify-center">
              <HiSearch size={32} className="text-text-light" />
            </div>
            <p className="text-text-mid text-lg mb-2">Search for tours above</p>
            <p className="text-text-light text-sm">Enter a destination to discover amazing activities.</p>
          </div>
        )}
      </div>
    </div>
  );
}
