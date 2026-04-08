import { useState } from 'react';
import { HiLocationMarker, HiCalendar, HiSearch, HiStar, HiViewGrid, HiViewList } from 'react-icons/hi';
import { searchHotels } from '../lib/api';
import { formatCurrency, getTomorrowDate, getNextWeekDate } from '../lib/utils';

export default function HotelsPage() {
  const [destination, setDestination] = useState('');
  const [checkIn, setCheckIn] = useState(getTomorrowDate());
  const [checkOut, setCheckOut] = useState(getNextWeekDate());
  const [guests, setGuests] = useState(2);
  const [rooms, setRooms] = useState(1);
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  const [starFilter, setStarFilter] = useState(0);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = await searchHotels({ destination, checkIn, checkOut, guests, rooms });
    setResults(data.results);
    setLoading(false);
  };

  const filteredResults = results
    ? results.filter(h => starFilter === 0 || h.stars >= starFilter)
    : null;

  return (
    <div className="pt-20 min-h-screen bg-surface-offwhite">
      <div className="bg-hero-gradient py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Cheap Hotels & Accommodation</h1>
          <p className="text-white/60 text-sm max-w-xl mx-auto">Compare prices across Booking.com, Agoda and more. Find your perfect stay.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 -mt-8">
        <form onSubmit={handleSearch} className="bg-white rounded-2xl p-6 shadow-xl border border-border">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            <div className="relative sm:col-span-2">
              <HiLocationMarker className="absolute left-3 top-1/2 -translate-y-1/2 text-text-light" size={18} />
              <input type="text" placeholder="Where are you going?" value={destination} onChange={e => setDestination(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-surface-light border border-border text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple/30 focus:border-brand-purple" />
            </div>
            <div className="relative">
              <HiCalendar className="absolute left-3 top-1/2 -translate-y-1/2 text-text-light" size={18} />
              <input type="date" value={checkIn} onChange={e => setCheckIn(e.target.value)} className="w-full pl-10 pr-4 py-3 rounded-xl bg-surface-light border border-border text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple/30 focus:border-brand-purple" />
            </div>
            <div className="relative">
              <HiCalendar className="absolute left-3 top-1/2 -translate-y-1/2 text-text-light" size={18} />
              <input type="date" value={checkOut} onChange={e => setCheckOut(e.target.value)} className="w-full pl-10 pr-4 py-3 rounded-xl bg-surface-light border border-border text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple/30 focus:border-brand-purple" />
            </div>
            <button type="submit" className="brand-gradient-bg text-white font-semibold py-3 rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2">
              <HiSearch size={18} /> Search
            </button>
          </div>
          <div className="flex items-center gap-4 mt-3 text-sm text-text-mid">
            <span>{guests} Guest{guests > 1 ? 's' : ''}, {rooms} Room{rooms > 1 ? 's' : ''}</span>
          </div>
        </form>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden animate-pulse border border-border">
                <div className="h-48 bg-gray-200" />
                <div className="p-5 space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-3/4" />
                  <div className="h-3 bg-gray-200 rounded w-1/2" />
                  <div className="h-5 bg-gray-200 rounded w-1/3" />
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredResults && !loading && (
          <>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <span className="text-sm text-text-mid">Filter by stars:</span>
                {[0, 3, 4, 5].map(s => (
                  <button key={s} onClick={() => setStarFilter(s)}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${starFilter === s ? 'brand-gradient-bg text-white' : 'bg-surface-light text-text-mid hover:bg-gray-200'}`}>
                    {s === 0 ? 'All' : `${s}★+`}
                  </button>
                ))}
              </div>
              <div className="flex gap-1">
                <button onClick={() => setViewMode('grid')} className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-brand-purple text-white' : 'text-text-light hover:bg-surface-light'}`}><HiViewGrid size={16} /></button>
                <button onClick={() => setViewMode('list')} className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-brand-purple text-white' : 'text-text-light hover:bg-surface-light'}`}><HiViewList size={16} /></button>
              </div>
            </div>

            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 gap-6' : 'space-y-4'}>
              {filteredResults.map(hotel => (
                <div key={hotel.id} className={`bg-white rounded-2xl overflow-hidden border border-border card-hover ${viewMode === 'list' ? 'flex' : ''}`}>
                  <div className={`overflow-hidden ${viewMode === 'list' ? 'w-48 shrink-0' : 'h-48'}`}>
                    <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5 flex-1">
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(hotel.stars)].map((_, i) => <HiStar key={i} className="text-brand-amber" size={14} />)}
                    </div>
                    <h3 className="font-bold text-text-dark text-lg mb-1">{hotel.name}</h3>
                    <p className="text-text-light text-xs mb-2">{hotel.location}</p>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-brand-purple text-white text-xs font-bold px-2 py-1 rounded-lg">{hotel.rating}</span>
                      <span className="text-text-mid text-xs font-medium">{hotel.ratingText}</span>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap mb-3">
                      {hotel.amenities.slice(0, 3).map(a => (
                        <span key={a} className="text-[10px] text-text-light bg-surface-light px-2 py-1 rounded-full">{a}</span>
                      ))}
                    </div>
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="brand-gradient-text font-extrabold text-xl">{formatCurrency(hotel.pricePerNight)}</p>
                        <p className="text-text-light text-xs">per night</p>
                      </div>
                      <button className="brand-gradient-bg text-white text-sm font-semibold px-5 py-2 rounded-full hover:opacity-90 transition-all">
                        View Deal
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {!results && !loading && (
          <div className="text-center py-16">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-surface-light flex items-center justify-center">
              <HiSearch size={32} className="text-text-light" />
            </div>
            <p className="text-text-mid text-lg mb-2">Search for hotels above</p>
            <p className="text-text-light text-sm">Enter your destination and dates to find the best deals.</p>
          </div>
        )}
      </div>
    </div>
  );
}
