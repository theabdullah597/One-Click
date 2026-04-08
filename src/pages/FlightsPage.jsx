import { useState, useRef, useEffect } from 'react';
import { HiLocationMarker, HiCalendar, HiSearch, HiSwitchHorizontal, HiFilter, HiSortDescending } from 'react-icons/hi';
import { searchFlights } from '../lib/api';
import { formatCurrency, getTomorrowDate, getNextWeekDate } from '../lib/utils';
import { AIRPORTS } from '../lib/constants';

function AirportAutocomplete({ placeholder, value, onChange, id }) {
  const [query, setQuery] = useState(value);
  const [showDropdown, setShowDropdown] = useState(false);
  const wrapperRef = useRef(null);

  const filtered = query.length >= 1
    ? AIRPORTS.filter(
        a =>
          a.name.toLowerCase().includes(query.toLowerCase()) ||
          a.city.toLowerCase().includes(query.toLowerCase()) ||
          a.code.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 6)
    : [];

  useEffect(() => {
    function handleClick(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  useEffect(() => {
    if (!value) setQuery('');
  }, [value]);

  return (
    <div className="relative" ref={wrapperRef}>
      <HiLocationMarker className="absolute left-3 top-1/2 -translate-y-1/2 text-text-light z-10" size={18} />
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={e => {
          setQuery(e.target.value);
          setShowDropdown(true);
          onChange('');
        }}
        onFocus={() => { if (query.length >= 1) setShowDropdown(true); }}
        className="w-full pl-10 pr-4 py-3 rounded-xl bg-surface-light border border-border text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple/30 focus:border-brand-purple"
        autoComplete="off"
      />
      {showDropdown && filtered.length > 0 && (
        <ul className="absolute z-50 left-0 right-0 mt-1 bg-white border border-border rounded-xl shadow-xl max-h-60 overflow-y-auto">
          {filtered.map(airport => (
            <li
              key={airport.code}
              className="px-4 py-3 hover:bg-surface-light cursor-pointer flex items-center gap-3 text-sm transition-colors"
              onMouseDown={() => {
                const display = `${airport.city} (${airport.code})`;
                setQuery(display);
                onChange(display);
                setShowDropdown(false);
              }}
            >
              <HiLocationMarker className="text-brand-purple shrink-0" size={16} />
              <div>
                <span className="font-semibold text-text-dark">{airport.city}</span>
                <span className="text-text-light ml-1">({airport.code})</span>
                <p className="text-text-light text-xs">{airport.name}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function FlightsPage() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departDate, setDepartDate] = useState(getTomorrowDate());
  const [returnDate, setReturnDate] = useState(getNextWeekDate());
  const [oneWay, setOneWay] = useState(false);
  const [adults, setAdults] = useState(1);
  const [cabin, setCabin] = useState('Economy');
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [sortBy, setSortBy] = useState('price');
  const [directOnly, setDirectOnly] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = await searchFlights({ from, to, departDate, returnDate, adults, cabin });
    setResults(data.results);
    setLoading(false);
  };

  const filteredResults = results
    ? results
        .filter(f => !directOnly || f.stops === 0)
        .sort((a, b) => {
          if (sortBy === 'price') return a.price - b.price;
          if (sortBy === 'duration') return a.duration.localeCompare(b.duration);
          if (sortBy === 'stops') return a.stops - b.stops;
          return 0;
        })
    : null;

  return (
    <div className="pt-20 min-h-screen bg-surface-offwhite">
      {/* Hero */}
      <div className="bg-hero-gradient py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
            Search Cheap Flights from the UK
          </h1>
          <p className="text-white/60 text-sm max-w-xl mx-auto">
            Compare fares from all major UK airports. Find the best deals to Europe, Asia, USA and more.
          </p>
        </div>
      </div>

      {/* Search Form */}
      <div className="max-w-4xl mx-auto px-4 -mt-8">
        <form onSubmit={handleSearch} className="bg-white rounded-2xl p-6 shadow-xl border border-border">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <label className="flex items-center gap-2 text-sm text-text-mid cursor-pointer">
              <input type="checkbox" checked={oneWay} onChange={e => setOneWay(e.target.checked)} className="accent-brand-purple" />
              One way
            </label>
            <select value={cabin} onChange={e => setCabin(e.target.value)} className="text-sm text-text-mid bg-surface-light border border-border rounded-lg px-3 py-1.5">
              <option>Economy</option>
              <option>Premium Economy</option>
              <option>Business</option>
              <option>First</option>
            </select>
            <div className="flex items-center gap-2 text-sm text-text-mid">
              <button type="button" onClick={() => setAdults(Math.max(1, adults - 1))} className="w-7 h-7 rounded-lg bg-surface-light border border-border flex items-center justify-center hover:bg-gray-200">-</button>
              <span>{adults} Adult{adults > 1 ? 's' : ''}</span>
              <button type="button" onClick={() => setAdults(adults + 1)} className="w-7 h-7 rounded-lg bg-surface-light border border-border flex items-center justify-center hover:bg-gray-200">+</button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            <AirportAutocomplete
              id="flights-from"
              placeholder="From (e.g. Manchester)"
              value={from}
              onChange={setFrom}
            />

            <AirportAutocomplete
              id="flights-to"
              placeholder="To (e.g. Barcelona)"
              value={to}
              onChange={setTo}
            />

            <div className="relative">
              <HiCalendar className="absolute left-3 top-1/2 -translate-y-1/2 text-text-light" size={18} />
              <input type="date" value={departDate} onChange={e => setDepartDate(e.target.value)} className="w-full pl-10 pr-4 py-3 rounded-xl bg-surface-light border border-border text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple/30 focus:border-brand-purple" />
            </div>

            {!oneWay && (
              <div className="relative">
                <HiCalendar className="absolute left-3 top-1/2 -translate-y-1/2 text-text-light" size={18} />
                <input type="date" value={returnDate} onChange={e => setReturnDate(e.target.value)} className="w-full pl-10 pr-4 py-3 rounded-xl bg-surface-light border border-border text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple/30 focus:border-brand-purple" />
              </div>
            )}

            <button type="submit" className="brand-gradient-bg text-white font-semibold py-3 rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2">
              <HiSearch size={18} /> Search
            </button>
          </div>
        </form>
      </div>

      {/* Results */}
      <div className="max-w-4xl mx-auto px-4 py-10">
        {loading && (
          <div className="space-y-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-border animate-pulse">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-24" />
                    <div className="h-6 bg-gray-200 rounded w-40" />
                    <div className="h-3 bg-gray-200 rounded w-32" />
                  </div>
                  <div className="space-y-2 text-right">
                    <div className="h-6 bg-gray-200 rounded w-20 ml-auto" />
                    <div className="h-10 bg-gray-200 rounded w-28 ml-auto" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredResults && !loading && (
          <>
            {/* Sort & Filter */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center gap-2 text-sm text-text-mid">
                <HiSortDescending size={16} />
                <span>Sort by:</span>
                {['price', 'duration', 'stops'].map(s => (
                  <button
                    key={s}
                    onClick={() => setSortBy(s)}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                      sortBy === s ? 'brand-gradient-bg text-white' : 'bg-surface-light text-text-mid hover:bg-gray-200'
                    }`}
                  >
                    {s.charAt(0).toUpperCase() + s.slice(1)}
                  </button>
                ))}
              </div>
              <label className="flex items-center gap-2 text-sm text-text-mid cursor-pointer ml-auto">
                <input type="checkbox" checked={directOnly} onChange={e => setDirectOnly(e.target.checked)} className="accent-brand-purple" />
                Direct only
              </label>
            </div>

            {filteredResults.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-text-mid text-lg mb-2">No flights found</p>
                <p className="text-text-light text-sm">Try different dates or destinations.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredResults.map(flight => (
                  <div key={flight.id} className="bg-white rounded-2xl p-6 border border-border card-hover">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-surface-light flex items-center justify-center">
                          <span className="text-xs font-bold text-text-mid">{flight.airline.slice(0, 2).toUpperCase()}</span>
                        </div>
                        <div>
                          <p className="text-text-light text-xs mb-0.5">{flight.airline}</p>
                          <p className="font-bold text-text-dark text-lg">
                            {flight.departure} → {flight.arrival}
                          </p>
                          <div className="flex items-center gap-3 mt-1">
                            <span className="text-text-mid text-xs">{flight.duration}</span>
                            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                              flight.stops === 0 ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                            }`}>
                              {flight.stops === 0 ? 'Direct' : `${flight.stops} Stop${flight.stops > 1 ? 's' : ''}`}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="brand-gradient-text font-extrabold text-2xl">{formatCurrency(flight.price)}</p>
                        <p className="text-text-light text-xs mb-2">per person</p>
                        <button
                          onClick={() => window.open('#', '_blank')}
                          className="brand-gradient-bg text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:opacity-90 transition-all"
                        >
                          View Deal
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {!results && !loading && (
          <div className="text-center py-16">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-surface-light flex items-center justify-center">
              <HiSearch size={32} className="text-text-light" />
            </div>
            <p className="text-text-mid text-lg mb-2">Search for flights above</p>
            <p className="text-text-light text-sm">Enter your details and click Search to find the best deals.</p>
          </div>
        )}
      </div>
    </div>
  );
}
