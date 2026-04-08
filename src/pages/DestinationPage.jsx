import { useParams, Link } from 'react-router-dom';
import { HiSearch, HiLocationMarker, HiCalendar } from 'react-icons/hi';
import { useState } from 'react';

const DESTINATION_DATA = {
  barcelona: {
    city: 'Barcelona',
    country: 'Spain',
    heroImage: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=1200&q=80',
    description: 'Barcelona is one of Europe\'s most vibrant cities, famous for Gaudí\'s extraordinary architecture, beautiful Mediterranean beaches, and an incredible food and nightlife scene. From the Gothic Quarter\'s medieval streets to the modernist masterpieces of the Eixample, Barcelona captivates every visitor.',
    bestTimeToVisit: 'May to June or September to October — warm weather, fewer crowds than July-August.',
    avgFlightPrice: 38,
    topAttractions: ['La Sagrada Família', 'Park Güell', 'Las Ramblas & La Boqueria', 'Gothic Quarter', 'Barceloneta Beach', 'Casa Batlló'],
  },
  dubai: {
    city: 'Dubai',
    country: 'United Arab Emirates',
    heroImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80',
    description: 'Dubai is a city of superlatives — the tallest building, the largest mall, and some of the most luxurious hotels in the world. But beyond the glamour, Dubai offers beautiful beaches, vibrant souks, and a fascinating blend of traditional and ultra-modern culture.',
    bestTimeToVisit: 'November to March — cooler temperatures perfect for outdoor activities.',
    avgFlightPrice: 189,
    topAttractions: ['Burj Khalifa', 'Dubai Mall', 'Dubai Marina', 'Gold Souk', 'Jumeirah Beach', 'Dubai Frame'],
  },
  amsterdam: {
    city: 'Amsterdam',
    country: 'Netherlands',
    heroImage: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=1200&q=80',
    description: 'Amsterdam\'s charming canals, world-class museums, and laid-back atmosphere make it one of Europe\'s most popular destinations. Cycle through picturesque neighbourhoods, visit the Rijksmuseum and Anne Frank House, and enjoy the city\'s vibrant cafe culture.',
    bestTimeToVisit: 'April to May — tulip season, mild weather, longer days.',
    avgFlightPrice: 52,
    topAttractions: ['Rijksmuseum', 'Anne Frank House', 'Van Gogh Museum', 'Canal Cruise', 'Vondelpark', 'Jordaan District'],
  },
  paris: {
    city: 'Paris',
    country: 'France',
    heroImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80',
    description: 'The City of Light needs no introduction. Paris is the epitome of culture, cuisine, and romance. From the Eiffel Tower to Montmartre, from the Louvre to a simple crêpe on the Seine, Paris delivers magic at every turn.',
    bestTimeToVisit: 'April to June or September to November — pleasant weather and fewer tourists.',
    avgFlightPrice: 29,
    topAttractions: ['Eiffel Tower', 'Louvre Museum', 'Sacré-Cœur', 'Champs-Élysées', 'Montmartre', 'Notre-Dame'],
  },
  rome: {
    city: 'Rome',
    country: 'Italy',
    heroImage: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1200&q=80',
    description: 'Rome is a living museum where ancient ruins stand alongside baroque churches and bustling piazzas. The Eternal City offers two thousand years of history, world-class art, and the best pizza and pasta you\'ll ever taste.',
    bestTimeToVisit: 'April to June or September to October — warm but not too hot.',
    avgFlightPrice: 45,
    topAttractions: ['Colosseum', 'Vatican Museums & Sistine Chapel', 'Trevi Fountain', 'Roman Forum', 'Pantheon', 'Trastevere'],
  },
  edinburgh: {
    city: 'Edinburgh',
    country: 'Scotland',
    heroImage: 'https://images.unsplash.com/photo-1506377585622-bedcbb027afc?w=1200&q=80',
    description: 'Scotland\'s capital is a city of dramatic contrasts — medieval Old Town and elegant Georgian New Town, rugged volcanic hills and refined cultural venues. Edinburgh is compact, walkable, and endlessly fascinating.',
    bestTimeToVisit: 'May to September — longest days and best weather. August for the famous Fringe Festival.',
    avgFlightPrice: 32,
    topAttractions: ['Edinburgh Castle', 'Arthur\'s Seat', 'Royal Mile', 'Holyrood Palace', 'Calton Hill', 'Scottish National Museum'],
  },
  istanbul: {
    city: 'Istanbul',
    country: 'Turkey',
    heroImage: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1200&q=80',
    description: 'Straddling Europe and Asia, Istanbul is a city where East truly meets West. Ancient mosques, bustling bazaars, Bosphorus views, and a food scene that rivals any on Earth make it one of the world\'s most exciting cities.',
    bestTimeToVisit: 'April to May or September to November — comfortable temperatures.',
    avgFlightPrice: 68,
    topAttractions: ['Hagia Sophia', 'Blue Mosque', 'Grand Bazaar', 'Topkapi Palace', 'Bosphorus Cruise', 'Spice Bazaar'],
  },
  bangkok: {
    city: 'Bangkok',
    country: 'Thailand',
    heroImage: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=1200&q=80',
    description: 'Bangkok is a sensory overload in the best possible way. Ornate temples, floating markets, incredible street food, and a vibrant nightlife make Thailand\'s capital one of the most visited cities in the world.',
    bestTimeToVisit: 'November to February — cooler, dry season.',
    avgFlightPrice: 350,
    topAttractions: ['Grand Palace', 'Wat Pho', 'Chatuchak Market', 'Khao San Road', 'Floating Markets', 'Jim Thompson House'],
  },
  lisbon: {
    city: 'Lisbon',
    country: 'Portugal',
    heroImage: 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=1200&q=80',
    description: 'Lisbon is one of Europe\'s coolest capitals — hilly streets lined with pastel buildings, ancient trams, the best pastéis de nata you\'ll ever taste, and a creative arts and music scene that punches well above its weight.',
    bestTimeToVisit: 'March to May or September to October — pleasant weather, fewer tourists.',
    avgFlightPrice: 42,
    topAttractions: ['Belém Tower', 'Jerónimos Monastery', 'Alfama District', 'Time Out Market', 'Tram 28', 'Sintra day trip'],
  },
  'new york': {
    city: 'New York',
    country: 'United States',
    heroImage: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1200&q=80',
    description: 'The Big Apple needs no introduction. New York City is the cultural capital of the world — Broadway shows, world-class museums, iconic landmarks, and a food scene representing every cuisine on the planet.',
    bestTimeToVisit: 'April to June or September to November — mild weather and beautiful seasons.',
    avgFlightPrice: 290,
    topAttractions: ['Statue of Liberty', 'Central Park', 'Times Square', 'Empire State Building', 'Brooklyn Bridge', 'Metropolitan Museum of Art'],
  },
  santorini: {
    city: 'Santorini',
    country: 'Greece',
    heroImage: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1200&q=80',
    description: 'Santorini is the Greek island of dreams — whitewashed buildings perched on volcanic cliffs, stunning sunsets over the caldera, and crystal-clear Aegean waters. It\'s the ultimate Mediterranean escape.',
    bestTimeToVisit: 'May to June or September to October — warm weather without peak crowds.',
    avgFlightPrice: 89,
    topAttractions: ['Oia Sunset', 'Fira', 'Red Beach', 'Akrotiri Archaeological Site', 'Wine Tasting', 'Caldera Boat Tour'],
  },
  bali: {
    city: 'Bali',
    country: 'Indonesia',
    heroImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80',
    description: 'Bali is a tropical paradise that offers something for everyone — serene rice terraces, ancient temples, world-class surfing, vibrant nightlife in Seminyak, and spiritual retreats in Ubud.',
    bestTimeToVisit: 'April to October — dry season with blue skies.',
    avgFlightPrice: 389,
    topAttractions: ['Ubud Rice Terraces', 'Tanah Lot Temple', 'Seminyak Beach', 'Mount Batur Sunrise Trek', 'Uluwatu Temple', 'Sacred Monkey Forest'],
  },
};

export default function DestinationPage() {
  const { city } = useParams();
  const data = DESTINATION_DATA[city?.toLowerCase()] || DESTINATION_DATA[city];

  if (!data) {
    return (
      <div className="pt-20 min-h-screen bg-surface-offwhite flex items-center justify-center">
        <div className="text-center">
          <p className="text-text-dark text-2xl font-bold mb-2">Destination not found</p>
          <Link to="/" className="text-brand-purple font-semibold hover:underline">← Back to home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-surface-offwhite">
      {/* Hero */}
      <div className="relative h-72 sm:h-96">
        <img src={data.heroImage} alt={data.city} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-5xl mx-auto">
          <p className="text-white/60 text-sm mb-1">{data.country}</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-2">{data.city}</h1>
          <span className="inline-block brand-gradient-bg text-white text-sm font-bold px-4 py-2 rounded-full">
            Flights from £{data.avgFlightPrice}
          </span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-text-dark mb-4">About {data.city}</h2>
              <p className="text-text-mid text-sm leading-relaxed">{data.description}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-dark mb-4">Top Attractions</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {data.topAttractions.map((attr, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white rounded-xl p-4 border border-border">
                    <div className="w-8 h-8 rounded-lg brand-gradient-bg flex items-center justify-center text-white text-xs font-bold shrink-0">{i + 1}</div>
                    <span className="text-text-dark text-sm font-medium">{attr}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-dark mb-4">Best Time to Visit</h2>
              <p className="text-text-mid text-sm leading-relaxed">{data.bestTimeToVisit}</p>
            </div>
          </div>

          {/* Sidebar: Search Widget */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-border shadow-sm sticky top-24">
              <h3 className="font-bold text-text-dark text-lg mb-4">✈️ Flights to {data.city}</h3>
              <form onSubmit={e => e.preventDefault()} className="space-y-3">
                <div className="relative">
                  <HiLocationMarker className="absolute left-3 top-1/2 -translate-y-1/2 text-text-light" size={16} />
                  <input type="text" placeholder="From (e.g. London)" className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-surface-light border border-border text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple/30 focus:border-brand-purple" />
                </div>
                <div className="relative">
                  <HiLocationMarker className="absolute left-3 top-1/2 -translate-y-1/2 text-text-light" size={16} />
                  <input type="text" defaultValue={data.city} readOnly className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-surface-light border border-border text-sm text-text-dark" />
                </div>
                <div className="relative">
                  <HiCalendar className="absolute left-3 top-1/2 -translate-y-1/2 text-text-light" size={16} />
                  <input type="date" className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-surface-light border border-border text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple/30 focus:border-brand-purple" />
                </div>
                <Link to="/flights" className="block w-full brand-gradient-bg text-white font-semibold py-2.5 rounded-xl text-center text-sm hover:opacity-90 transition-all">
                  Search Flights
                </Link>
              </form>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-border shadow-sm">
              <h3 className="font-bold text-text-dark text-lg mb-4">🏨 Hotels in {data.city}</h3>
              <Link to="/hotels" className="block w-full brand-gradient-bg text-white font-semibold py-2.5 rounded-xl text-center text-sm hover:opacity-90 transition-all">
                Search Hotels
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
