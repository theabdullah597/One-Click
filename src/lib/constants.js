// Brand colors
export const COLORS = {
  purple: '#7B2FF7',
  magenta: '#C850C0',
  pink: '#E8468F',
  coral: '#F0724B',
  orange: '#F5A623',
  amber: '#FFCC33',
  blue: '#4FACFE',
  sky: '#00C6FB',
};

export const API_BASE = import.meta.env.VITE_API_URL || 'https://api.1clickonline.co.uk';

export const COMPANY = {
  name: 'One Click Online',
  legalName: 'Circle View Business Consultancy Ltd',
  companyNumber: '07471511',
  address: '1 Electric Parade, Seven Kings Road, Ilford, England, IG3 8BY',
  email: 'contact@1clickonline.co.uk',
  website: 'https://1clickonline.co.uk',
};

export const NAV_LINKS = [
  { label: 'Flights', path: '/flights' },
  { label: 'Hotels', path: '/hotels' },
  { label: 'Car Hire', path: '/cars' },
  { label: 'Tours', path: '/tours' },
  { label: 'Deals', path: '/deals' },
  { label: 'Blog', path: '/blog' },
];

export const FOOTER_TRAVEL_LINKS = [
  { label: 'Flights', path: '/flights' },
  { label: 'Hotels', path: '/hotels' },
  { label: 'Car Hire', path: '/cars' },
  { label: 'Tours', path: '/tours' },
  { label: 'Deals', path: '/deals' },
  { label: 'Blog', path: '/blog' },
];

export const FOOTER_COMPANY_LINKS = [
  { label: 'About Us', path: '/about' },
  { label: 'Contact', path: '/contact' },
  { label: 'Terms & Conditions', path: '/terms' },
  { label: 'Privacy Policy', path: '/privacy' },
  { label: 'Cookie Policy', path: '/privacy' },
];

export const PARTNERS = ['Booking.com', 'Kiwi.com', 'Viator', 'GetYourGuide', 'Agoda'];

export const AIRPORTS = [
  { code: 'LHR', name: 'London Heathrow', city: 'London' },
  { code: 'LGW', name: 'London Gatwick', city: 'London' },
  { code: 'STN', name: 'London Stansted', city: 'London' },
  { code: 'LTN', name: 'London Luton', city: 'London' },
  { code: 'MAN', name: 'Manchester', city: 'Manchester' },
  { code: 'BHX', name: 'Birmingham', city: 'Birmingham' },
  { code: 'EDI', name: 'Edinburgh', city: 'Edinburgh' },
  { code: 'GLA', name: 'Glasgow', city: 'Glasgow' },
  { code: 'BRS', name: 'Bristol', city: 'Bristol' },
  { code: 'LPL', name: 'Liverpool John Lennon', city: 'Liverpool' },
  { code: 'NCL', name: 'Newcastle', city: 'Newcastle' },
  { code: 'EMA', name: 'East Midlands', city: 'Nottingham' },
  { code: 'BFS', name: 'Belfast International', city: 'Belfast' },
  { code: 'LBA', name: 'Leeds Bradford', city: 'Leeds' },
  { code: 'ABZ', name: 'Aberdeen', city: 'Aberdeen' },
  { code: 'BCN', name: 'Barcelona El Prat', city: 'Barcelona' },
  { code: 'DXB', name: 'Dubai International', city: 'Dubai' },
  { code: 'AMS', name: 'Amsterdam Schiphol', city: 'Amsterdam' },
  { code: 'CDG', name: 'Paris Charles de Gaulle', city: 'Paris' },
  { code: 'FCO', name: 'Rome Fiumicino', city: 'Rome' },
  { code: 'IST', name: 'Istanbul Airport', city: 'Istanbul' },
  { code: 'JFK', name: 'New York JFK', city: 'New York' },
  { code: 'BKK', name: 'Bangkok Suvarnabhumi', city: 'Bangkok' },
  { code: 'LIS', name: 'Lisbon Portela', city: 'Lisbon' },
  { code: 'JTR', name: 'Santorini', city: 'Santorini' },
  { code: 'DPS', name: 'Bali Ngurah Rai', city: 'Bali' },
];
