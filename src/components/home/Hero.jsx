import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiLocationMarker, HiCalendar, HiSearch } from 'react-icons/hi';
import { AIRPORTS } from '../../lib/constants';
import { getTomorrowDate, getNextWeekDate } from '../../lib/utils';

const TABS = [
  { id: 'flights', label: '✈️ Flights', path: '/flights' },
  { id: 'hotels', label: '🏨 Hotels', path: '/hotels' },
  { id: 'cars', label: '🚗 Car Hire', path: '/cars' },
  { id: 'tours', label: '🎯 Tours', path: '/tours' },
];

function AirportInput({ placeholder, value, onChange, id }) {
  const [query, setQuery] = useState(value);
  const [showDropdown, setShowDropdown] = useState(false);
  const wrapperRef = useRef(null);

  // Filter airports based on query
  const filtered = query.length >= 1
    ? AIRPORTS.filter(
        a =>
          a.name.toLowerCase().includes(query.toLowerCase()) ||
          a.city.toLowerCase().includes(query.toLowerCase()) ||
          a.code.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 6)
    : [];

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  // Sync if parent resets value
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
        className="w-full pl-10 pr-4 py-3 rounded-xl bg-surface-light border border-border text-sm text-text-dark placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-brand-purple/30 focus:border-brand-purple transition-all"
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

export default function Hero() {
  const [activeTab, setActiveTab] = useState('flights');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departDate, setDepartDate] = useState(getTomorrowDate());
  const [returnDate, setReturnDate] = useState(getNextWeekDate());
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const tab = TABS.find(t => t.id === activeTab);
    navigate(tab.path);
  };

  return (
    <section className="relative min-h-[80vh] sm:min-h-[92vh] flex items-center justify-center overflow-hidden bg-hero-gradient">
      {/* Floating orbs */}
      <div className="glow-orb w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-brand-purple top-[-100px] left-[-100px]" />
      <div className="glow-orb w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-brand-magenta bottom-[-50px] right-[-50px]" />
      <div className="glow-orb w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-brand-pink top-[40%] right-[20%] opacity-20" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 text-center pt-24 sm:pt-20 pb-8 sm:pb-12">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 sm:gap-2.5 bg-white/10 backdrop-blur-md border border-white/15 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 mb-6 sm:mb-8 animate-fade-in">
          <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-400 rounded-full animate-pulse" />
          <span className="text-white/80 text-xs sm:text-sm font-medium">Compare 100+ travel brands instantly</span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4rem] font-extrabold text-white leading-tight mb-4 sm:mb-6 animate-slide-up px-2">
          Your next adventure,{' '}
          <span className="brand-gradient-text">one click away</span>
        </h1>

        {/* Subheadline */}
        <p className="text-sm sm:text-lg text-white/60 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed animate-fade-in px-2" style={{ animationDelay: '0.3s' }}>
          Search flights, hotels, car hire & tours from the UK. Compare top brands, find hidden deals, and book in seconds.
        </p>

        {/* Search Box */}
        <div className="bg-white rounded-2xl p-3 sm:p-6 shadow-2xl shadow-black/20 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.5s' }}>
          {/* Tabs */}
          <div className="flex gap-1.5 sm:gap-2 mb-4 sm:mb-5 overflow-x-auto pb-1 -mx-1 px-1">
            {TABS.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`search-tab whitespace-nowrap text-xs sm:text-sm px-3 sm:px-5 py-2 sm:py-2.5 ${tab.id === activeTab ? 'active' : ''}`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Form */}
          <form onSubmit={handleSearch}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {activeTab === 'flights' && (
                <>
                  <AirportInput
                    id="flight-from"
                    placeholder="From (e.g. London)"
                    value={from}
                    onChange={setFrom}
                  />
                  <AirportInput
                    id="flight-to"
                    placeholder="To (e.g. Barcelona)"
                    value={to}
                    onChange={setTo}
                  />
                  <div className="relative">
                    <HiCalendar className="absolute left-3 top-1/2 -translate-y-1/2 text-text-light" size={18} />
                    <input
                      type="date"
                      value={departDate}
                      onChange={e => setDepartDate(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-surface-light border border-border text-sm text-text-dark focus:outline-none focus:ring-2 focus:ring-brand-purple/30 focus:border-brand-purple transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="brand-gradient-bg text-white font-semibold py-3 px-6 rounded-xl hover:opacity-90 transition-all hover:shadow-lg hover:shadow-brand-purple/25 flex items-center justify-center gap-2"
                  >
                    <HiSearch size={18} />
                    Search
                  </button>
                </>
              )}

              {activeTab === 'hotels' && (
                <>
                  <div className="relative sm:col-span-2">
                    <HiLocationMarker className="absolute left-3 top-1/2 -translate-y-1/2 text-text-light" size={18} />
                    <input
                      type="text"
                      placeholder="Where are you going?"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-surface-light border border-border text-sm text-text-dark placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-brand-purple/30 focus:border-brand-purple transition-all"
                    />
                  </div>
                  <div className="relative">
                    <HiCalendar className="absolute left-3 top-1/2 -translate-y-1/2 text-text-light" size={18} />
                    <input
                      type="date"
                      value={departDate}
                      onChange={e => setDepartDate(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-surface-light border border-border text-sm text-text-dark focus:outline-none focus:ring-2 focus:ring-brand-purple/30 focus:border-brand-purple transition-all"
                    />
                  </div>
                  <button type="submit" className="brand-gradient-bg text-white font-semibold py-3 px-6 rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2">
                    <HiSearch size={18} />
                    Search
                  </button>
                </>
              )}

              {activeTab === 'cars' && (
                <>
                  <div className="relative sm:col-span-2">
                    <HiLocationMarker className="absolute left-3 top-1/2 -translate-y-1/2 text-text-light" size={18} />
                    <input
                      type="text"
                      placeholder="Pickup location"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-surface-light border border-border text-sm text-text-dark placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-brand-purple/30 focus:border-brand-purple transition-all"
                    />
                  </div>
                  <div className="relative">
                    <HiCalendar className="absolute left-3 top-1/2 -translate-y-1/2 text-text-light" size={18} />
                    <input type="date" value={departDate} onChange={e => setDepartDate(e.target.value)} className="w-full pl-10 pr-4 py-3 rounded-xl bg-surface-light border border-border text-sm text-text-dark focus:outline-none focus:ring-2 focus:ring-brand-purple/30 focus:border-brand-purple transition-all" />
                  </div>
                  <button type="submit" className="brand-gradient-bg text-white font-semibold py-3 px-6 rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2">
                    <HiSearch size={18} />
                    Search
                  </button>
                </>
              )}

              {activeTab === 'tours' && (
                <>
                  <div className="relative sm:col-span-3">
                    <HiLocationMarker className="absolute left-3 top-1/2 -translate-y-1/2 text-text-light" size={18} />
                    <input
                      type="text"
                      placeholder="Where do you want to explore?"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-surface-light border border-border text-sm text-text-dark placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-brand-purple/30 focus:border-brand-purple transition-all"
                    />
                  </div>
                  <button type="submit" className="brand-gradient-bg text-white font-semibold py-3 px-6 rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2">
                    <HiSearch size={18} />
                    Search
                  </button>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
