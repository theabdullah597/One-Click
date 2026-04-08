import { useState, useEffect } from 'react';
import { HiStar, HiLightningBolt, HiClock } from 'react-icons/hi';
import { getDeals } from '../lib/api';
import { formatCurrency } from '../lib/utils';

export default function DealsPage() {
  const [deals, setDeals] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDeals().then(d => { setDeals(d); setLoading(false); });
  }, []);

  return (
    <div className="pt-20 min-h-screen bg-surface-offwhite">
      <div className="bg-hero-gradient py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Today's Best Travel Deals</h1>
          <p className="text-white/60 text-sm max-w-xl mx-auto">Updated hourly. The cheapest flights and hotels from the UK, right now.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        {loading ? (
          <div className="space-y-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="h-6 bg-gray-200 rounded w-48 mb-4" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[...Array(3)].map((_, j) => (
                    <div key={j} className="bg-white rounded-2xl p-5 border border-border">
                      <div className="h-4 bg-gray-200 rounded w-3/4 mb-3" />
                      <div className="h-6 bg-gray-200 rounded w-1/2 mb-2" />
                      <div className="h-3 bg-gray-200 rounded w-1/3" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : deals && (
          <div className="space-y-12">
            {/* Cheapest Flights */}
            <section>
              <div className="flex items-center gap-2 mb-6">
                <HiLightningBolt className="text-brand-orange" size={24} />
                <h2 className="text-2xl font-bold text-text-dark">Cheapest Flights This Week</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {deals.cheapestFlights.map((deal, i) => (
                  <div key={i} className="bg-white rounded-2xl p-5 border border-border card-hover cursor-pointer">
                    <div className="flex items-center justify-between mb-3">
                      <span className="brand-gradient-bg text-white text-[10px] font-bold px-2.5 py-1 rounded-full">{deal.tag}</span>
                      <span className="text-text-light text-xs">{deal.departure}</span>
                    </div>
                    <p className="font-bold text-text-dark text-base mb-1">{deal.route}</p>
                    <p className="text-text-light text-xs mb-3">{deal.airline}</p>
                    <p className="brand-gradient-text font-extrabold text-2xl">{formatCurrency(deal.price)} <span className="text-xs font-normal text-text-light">return</span></p>
                  </div>
                ))}
              </div>
            </section>

            {/* Hotel Deals */}
            <section>
              <div className="flex items-center gap-2 mb-6">
                <HiStar className="text-brand-amber" size={24} />
                <h2 className="text-2xl font-bold text-text-dark">Hotel Deals</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {deals.hotelDeals.map((hotel, i) => (
                  <div key={i} className="bg-white rounded-2xl overflow-hidden border border-border card-hover cursor-pointer group">
                    <div className="h-40 overflow-hidden">
                      <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-1 mb-1">
                        {[...Array(hotel.stars)].map((_, j) => <HiStar key={j} className="text-brand-amber" size={12} />)}
                      </div>
                      <h3 className="font-bold text-text-dark mb-2">{hotel.name}</h3>
                      <div className="flex items-center gap-2">
                        <span className="brand-gradient-text font-extrabold text-xl">{formatCurrency(hotel.price)}</span>
                        <span className="text-text-light text-xs line-through">{formatCurrency(hotel.originalPrice)}</span>
                        <span className="text-green-600 text-xs font-semibold bg-green-100 px-2 py-0.5 rounded-full">{hotel.discount}</span>
                      </div>
                      <p className="text-text-light text-xs mt-1">per night</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Last Minute */}
            <section>
              <div className="flex items-center gap-2 mb-6">
                <HiClock className="text-brand-coral" size={24} />
                <h2 className="text-2xl font-bold text-text-dark">Last Minute Deals</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {deals.lastMinute.map((deal, i) => (
                  <div key={i} className="bg-white rounded-2xl p-5 border-2 border-brand-coral/20 card-hover cursor-pointer relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-brand-coral text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl">{deal.tag}</div>
                    <p className="font-bold text-text-dark text-base mb-1">{deal.route}</p>
                    <p className="text-text-light text-xs mb-1">{deal.airline}</p>
                    <p className="text-text-light text-xs mb-3">Departs: {deal.departure}</p>
                    <p className="brand-gradient-text font-extrabold text-2xl">{formatCurrency(deal.price)} <span className="text-xs font-normal text-text-light">return</span></p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}
