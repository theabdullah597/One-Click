import { useState, useEffect } from 'react';
import { HiHeart, HiOutlineHeart } from 'react-icons/hi';
import { getPopularFlights } from '../../lib/api';
import { formatCurrency } from '../../lib/utils';

export default function TrendingDeals() {
  const [deals, setDeals] = useState([]);
  const [liked, setLiked] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPopularFlights().then(d => { setDeals(d); setLoading(false); });
  }, []);

  const toggleLike = (id) => setLiked(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <section className="py-20 bg-surface-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-dark mb-3">
            Trending Deals 🔥
          </h2>
          <p className="text-text-mid text-sm max-w-lg mx-auto">
            The most popular flights from the UK right now. Grab them before they're gone.
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden animate-pulse">
                <div className="h-48 bg-gray-200" />
                <div className="p-4 space-y-3">
                  <div className="h-3 bg-gray-200 rounded w-2/3" />
                  <div className="h-5 bg-gray-200 rounded w-1/2" />
                  <div className="h-3 bg-gray-200 rounded w-1/3" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {deals.map(deal => (
              <div
                key={deal.id}
                className="group bg-white rounded-2xl overflow-hidden border border-border card-hover cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={deal.image}
                    alt={deal.destination}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Tag */}
                  <span className="absolute top-3 left-3 brand-gradient-bg text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
                    {deal.tag}
                  </span>
                  {/* Heart */}
                  <button
                    onClick={e => { e.stopPropagation(); toggleLike(deal.id); }}
                    className="absolute top-3 right-3 w-8 h-8 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white transition-all"
                  >
                    {liked[deal.id]
                      ? <HiHeart className="text-brand-coral" size={16} />
                      : <HiOutlineHeart className="text-text-mid" size={16} />
                    }
                  </button>
                  {/* Gradient overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                {/* Info */}
                <div className="p-4">
                  <p className="text-text-light text-xs mb-1">{deal.route}</p>
                  <h3 className="font-bold text-text-dark text-lg mb-2">{deal.destination}</h3>
                  <div className="flex items-center justify-between">
                    <span className="brand-gradient-text font-extrabold text-lg">
                      {formatCurrency(deal.price)} <span className="text-xs font-normal text-text-light">return</span>
                    </span>
                    <span className="text-text-light text-xs">{deal.airline}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
