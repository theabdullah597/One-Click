import { API_BASE } from './constants';

// ──────────── Mock Data ────────────
const MOCK_TRENDING_DEALS = [
  {
    id: 1,
    route: 'Manchester → Barcelona',
    destination: 'Barcelona',
    price: 38,
    airline: 'Ryanair',
    tag: 'Direct flight',
    image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=600&q=80',
    duration: '2h 35m',
    stops: 0,
  },
  {
    id: 2,
    route: 'London → Dubai',
    destination: 'Dubai',
    price: 189,
    airline: 'Emirates',
    tag: '£189 return',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80',
    duration: '7h 10m',
    stops: 0,
  },
  {
    id: 3,
    route: 'Birmingham → Amsterdam',
    destination: 'Amsterdam',
    price: 52,
    airline: 'KLM',
    tag: 'Weekend break',
    image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=600&q=80',
    duration: '1h 25m',
    stops: 0,
  },
  {
    id: 4,
    route: 'London → Paris',
    destination: 'Paris',
    price: 29,
    airline: 'easyJet',
    tag: 'From £29',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80',
    duration: '1h 15m',
    stops: 0,
  },
];

const MOCK_DESTINATIONS = [
  {
    id: 1,
    city: 'Edinburgh',
    subtitle: 'Weekend breaks from London',
    price: 32,
    image: 'https://images.unsplash.com/photo-1506377585622-bedcbb027afc?w=800&q=80',
    large: true,
  },
  {
    id: 2,
    city: 'Rome',
    subtitle: 'Culture & cuisine',
    price: 45,
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&q=80',
  },
  {
    id: 3,
    city: 'Istanbul',
    subtitle: 'East meets west',
    price: 68,
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=600&q=80',
  },
  {
    id: 4,
    city: 'Santorini',
    subtitle: 'Summer escapes',
    price: 89,
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&q=80',
  },
  {
    id: 5,
    city: 'Bali',
    subtitle: 'Tropical paradise',
    price: 389,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80',
  },
];

const MOCK_FLIGHT_RESULTS = [
  {
    id: 'fl-1',
    airline: 'Ryanair',
    departure: '06:30',
    arrival: '09:05',
    duration: '2h 35m',
    stops: 0,
    price: 38,
    origin: 'MAN',
    destination: 'BCN',
  },
  {
    id: 'fl-2',
    airline: 'easyJet',
    departure: '08:15',
    arrival: '11:00',
    duration: '2h 45m',
    stops: 0,
    price: 45,
    origin: 'MAN',
    destination: 'BCN',
  },
  {
    id: 'fl-3',
    airline: 'Vueling',
    departure: '14:20',
    arrival: '17:10',
    duration: '2h 50m',
    stops: 0,
    price: 52,
    origin: 'MAN',
    destination: 'BCN',
  },
  {
    id: 'fl-4',
    airline: 'British Airways',
    departure: '07:00',
    arrival: '11:30',
    duration: '4h 30m',
    stops: 1,
    price: 89,
    origin: 'MAN',
    destination: 'BCN',
  },
  {
    id: 'fl-5',
    airline: 'Lufthansa',
    departure: '10:45',
    arrival: '16:20',
    duration: '5h 35m',
    stops: 1,
    price: 112,
    origin: 'MAN',
    destination: 'BCN',
  },
];

const MOCK_HOTEL_RESULTS = [
  {
    id: 'ht-1',
    name: 'Hotel Arts Barcelona',
    stars: 5,
    rating: 9.2,
    ratingText: 'Superb',
    location: 'Port Olímpic, Barcelona',
    pricePerNight: 195,
    totalPrice: 585,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80',
    amenities: ['Free WiFi', 'Pool', 'Spa', 'Restaurant', 'Bar'],
  },
  {
    id: 'ht-2',
    name: 'Catalonia Plaza Catalunya',
    stars: 4,
    rating: 8.5,
    ratingText: 'Very Good',
    location: 'Plaça de Catalunya, Barcelona',
    pricePerNight: 112,
    totalPrice: 336,
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80',
    amenities: ['Free WiFi', 'Restaurant', 'Bar', 'Gym'],
  },
  {
    id: 'ht-3',
    name: 'Generator Barcelona',
    stars: 3,
    rating: 7.8,
    ratingText: 'Good',
    location: 'Gràcia, Barcelona',
    pricePerNight: 45,
    totalPrice: 135,
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80',
    amenities: ['Free WiFi', 'Bar', 'Terrace'],
  },
  {
    id: 'ht-4',
    name: 'W Barcelona',
    stars: 5,
    rating: 9.0,
    ratingText: 'Superb',
    location: 'Barceloneta Beach, Barcelona',
    pricePerNight: 280,
    totalPrice: 840,
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80',
    amenities: ['Free WiFi', 'Pool', 'Spa', 'Beach Access', 'Restaurant'],
  },
];

const MOCK_CAR_RESULTS = [
  {
    id: 'car-1',
    name: 'Fiat 500 or similar',
    category: 'Mini',
    provider: 'Hertz',
    seats: 4,
    transmission: 'Manual',
    pricePerDay: 18,
    totalPrice: 126,
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=400&q=80',
  },
  {
    id: 'car-2',
    name: 'VW Golf or similar',
    category: 'Economy',
    provider: 'Europcar',
    seats: 5,
    transmission: 'Manual',
    pricePerDay: 24,
    totalPrice: 168,
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=400&q=80',
  },
  {
    id: 'car-3',
    name: 'BMW 3 Series or similar',
    category: 'Premium',
    provider: 'Avis',
    seats: 5,
    transmission: 'Automatic',
    pricePerDay: 55,
    totalPrice: 385,
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&q=80',
  },
  {
    id: 'car-4',
    name: 'Ford Focus Estate or similar',
    category: 'Estate',
    provider: 'Enterprise',
    seats: 5,
    transmission: 'Manual',
    pricePerDay: 32,
    totalPrice: 224,
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400&q=80',
  },
];

const MOCK_TOUR_RESULTS = [
  {
    id: 'tour-1',
    title: 'Sagrada Família: Skip-the-Line Guided Tour',
    destination: 'Barcelona',
    category: 'Museums',
    duration: '1.5 hours',
    rating: 4.8,
    reviews: 12840,
    price: 47,
    image: 'https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=600&q=80',
  },
  {
    id: 'tour-2',
    title: 'Barcelona Gothic Quarter Walking Tour',
    destination: 'Barcelona',
    category: 'City Tours',
    duration: '2 hours',
    rating: 4.7,
    reviews: 8320,
    price: 22,
    image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=600&q=80',
  },
  {
    id: 'tour-3',
    title: 'Montserrat Half-Day Trip from Barcelona',
    destination: 'Barcelona',
    category: 'Day Trips',
    duration: '5 hours',
    rating: 4.6,
    reviews: 5670,
    price: 58,
    image: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=600&q=80',
  },
  {
    id: 'tour-4',
    title: 'Barcelona Tapas & Wine Evening Tour',
    destination: 'Barcelona',
    category: 'Food & Drink',
    duration: '3 hours',
    rating: 4.9,
    reviews: 3210,
    price: 75,
    image: 'https://images.unsplash.com/photo-1515443961218-a51367888e4b?w=600&q=80',
  },
  {
    id: 'tour-5',
    title: 'Costa Brava Kayaking Adventure',
    destination: 'Barcelona',
    category: 'Adventure',
    duration: '4 hours',
    rating: 4.7,
    reviews: 1890,
    price: 65,
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80',
  },
];

const MOCK_BLOG_POSTS = [
  {
    id: 'blog-1',
    slug: 'cheapest-flights-london-summer-2026',
    title: 'Cheapest Flights from London This Summer 2026',
    category: 'Deals & Tips',
    excerpt: 'Discover the best-value flights departing from London this summer. From Mediterranean hotspots to hidden European gems, here are the routes offering incredible savings for UK travellers.',
    featuredImage: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=800&q=80',
    author: 'One Click Team',
    publishedAt: '2026-03-28',
    readTime: 5,
    content: `
      <h2>Summer 2026 Flight Deals from London</h2>
      <p>Planning your summer getaway? London's major airports — Heathrow, Gatwick, Stansted, and Luton — offer an incredible range of budget-friendly flights to some of Europe's most popular destinations.</p>
      <p>We've scoured the latest fare data to bring you the absolute cheapest options for summer 2026. Whether you're looking for a quick weekend break or a longer holiday, these deals are hard to beat.</p>
      <h2>Top 5 Cheapest Routes</h2>
      <h3>1. London to Barcelona — from £29 return</h3>
      <p>Barcelona remains one of the most affordable Mediterranean destinations from London. Budget carriers like Ryanair and easyJet operate multiple daily flights from Stansted and Gatwick, with return fares regularly dropping below £35. The best deals are usually found on Tuesday and Wednesday departures.</p>
      <h3>2. London to Paris — from £29 return</h3>
      <p>The City of Light is practically on our doorstep, and summer 2026 fares reflect that. easyJet from Gatwick and Ryanair from Stansted both offer sub-£30 returns. Pro tip: book 6-8 weeks in advance for the best prices.</p>
      <h3>3. London to Amsterdam — from £38 return</h3>
      <p>Amsterdam is a perennial favourite for UK travellers, and with good reason. Direct flights take just over an hour, and KLM, easyJet, and British Airways all compete on the route, keeping prices low.</p>
      <h3>4. London to Dublin — from £25 return</h3>
      <p>Fancy a Guinness at the source? Dublin flights are among the cheapest from London, with Ryanair and Aer Lingus offering incredible deals year-round. Summer 2026 is no exception.</p>
      <h3>5. London to Lisbon — from £42 return</h3>
      <p>Lisbon has exploded in popularity, but it's still great value. TAP Air Portugal and Wizz Air offer competitive fares, especially if you're flexible with dates.</p>
      <h2>How to Get the Best Deals</h2>
      <p>Use One Click Online to compare prices across all airlines and booking platforms in seconds. Set up fare alerts to get notified when prices drop on your favourite routes. Remember, booking on weekdays typically yields cheaper fares than weekend searches.</p>
    `,
  },
  {
    id: 'blog-2',
    slug: 'top-10-weekend-breaks-uk-under-200',
    title: 'Top 10 Weekend Breaks from the UK Under £200',
    category: 'Guides',
    excerpt: 'You don\'t need a big budget for a memorable weekend away. These 10 destinations are all reachable from the UK for under £200 per person, including flights and accommodation.',
    featuredImage: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80',
    author: 'One Click Team',
    publishedAt: '2026-03-25',
    readTime: 7,
    content: `
      <h2>Affordable Weekend Escapes</h2>
      <p>Think you need to spend a fortune for a weekend break? Think again. We've put together 10 incredible destinations where you can enjoy a full weekend — flights and two nights' accommodation included — for under £200 per person.</p>
      <h3>1. Porto, Portugal — from £145</h3>
      <p>Porto offers stunning architecture, world-class port wine, and incredible food at a fraction of the cost of Lisbon. Budget hotels in the Ribeira district start from £35/night, and return flights from London cost as little as £42.</p>
      <h3>2. Kraków, Poland — from £120</h3>
      <p>One of Europe's best-value destinations. Beautiful old town, incredible food, and accommodation from just £20/night. Flights from London or Manchester start from £35 return.</p>
      <h3>3. Budapest, Hungary — from £130</h3>
      <p>The Pearl of the Danube is perfect for a winter or summer weekend. Famous thermal baths, ruin bars, and a thriving food scene await. Budget hotels from £30/night.</p>
      <h3>4. Bruges, Belgium — from £110</h3>
      <p>This fairytale medieval city is just a short hop from the UK. Combine a cheap Ryanair flight to Brussels with a 1-hour train to Bruges. Hotel rooms from £40/night.</p>
      <h3>5. Barcelona, Spain — from £130</h3>
      <p>With £29 return flights and hostels from £25/night, Barcelona is remarkably affordable for such a world-class city. Visit Gaudí's masterpieces, hit the beach, and enjoy tapas without emptying your wallet.</p>
      <h3>6. Edinburgh, Scotland — from £95</h3>
      <p>No passport needed! Edinburgh offers incredible history, architecture, and culture. Train tickets from London start from £30 each way if booked in advance.</p>
      <h3>7. Amsterdam, Netherlands — from £140</h3>
      <p>Canal cruises, world-class museums, and the best cheese you've ever tasted. Flights from £38 return and budget hotels from £50/night make it work on a budget.</p>
      <h3>8. Riga, Latvia — from £110</h3>
      <p>One of Europe's hidden gems. Art Nouveau architecture, a vibrant nightlife, and prices that make your pounds stretch further. Flights from £40 return.</p>
      <h3>9. Paris, France — from £120</h3>
      <p>Yes, Paris can be done on a budget. With £29 return flights and budget hotels in the 11th or 18th arrondissements from £45/night, a romantic weekend won't break the bank.</p>
      <h3>10. Dublin, Ireland — from £90</h3>
      <p>Flights from £25 return make Dublin the cheapest weekend break on this list. Temple Bar, Guinness Storehouse, and friendly locals guaranteed.</p>
      <h2>Tips for Budget Weekend Breaks</h2>
      <p>Always compare prices on One Click Online before booking. Be flexible with dates — mid-week departures save up to 40%. Book accommodation with free cancellation so you can switch if a better deal appears.</p>
    `,
  },
  {
    id: 'blog-3',
    slug: 'budget-hotels-manchester-2026',
    title: 'Best Budget Hotels in Manchester 2026',
    category: 'Guides',
    excerpt: 'Planning a trip to Manchester? These are the best-value hotels in the city for 2026, from stylish budget chains to hidden independent gems.',
    featuredImage: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=800&q=80',
    author: 'One Click Team',
    publishedAt: '2026-03-20',
    readTime: 6,
    content: `
      <h2>Where to Stay in Manchester on a Budget</h2>
      <p>Manchester is one of the UK's most exciting cities, and you don't need to spend a fortune to enjoy it. Whether you're visiting for a football match, a concert, or just a weekend of exploration, these budget-friendly hotels offer great value.</p>
      <h3>Premier Inn Manchester City Centre</h3>
      <p>Premier Inn consistently delivers reliable, clean rooms at great prices. The Portland Street location puts you right in the heart of the city. Expect to pay from £55/night, with breakfast available for an extra £10.</p>
      <h3>Motel One Manchester-Royal Exchange</h3>
      <p>Germany's coolest budget hotel chain has arrived in Manchester, and it's fantastic. Stylish design, great bar, and rooms from just £69/night. The location near the Royal Exchange Theatre is superb.</p>
      <h3>YHA Manchester</h3>
      <p>For the ultimate budget option, the YHA hostel in Castlefield offers private rooms from £35/night and dorm beds from £15. Clean, modern, and right by the canal basin.</p>
      <h2>Booking Tips</h2>
      <p>Use One Click Online to compare hotel prices across Booking.com, Agoda, and other platforms. Prices vary significantly between platforms for the same hotel, and our comparison tool finds you the best deal instantly.</p>
    `,
  },
  {
    id: 'blog-4',
    slug: 'how-to-find-cheap-flights-tips',
    title: 'How to Find Cheap Flights: 7 Expert Tips',
    category: 'How-To',
    excerpt: 'Stop overpaying for flights. These 7 proven strategies will help you find the cheapest fares every time you book, saving you hundreds of pounds a year.',
    featuredImage: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=800&q=80',
    author: 'One Click Team',
    publishedAt: '2026-03-15',
    readTime: 6,
    content: `
      <h2>7 Expert Tips for Finding Cheap Flights</h2>
      <p>Finding cheap flights isn't about luck — it's about strategy. After analysing millions of flight searches, here are our top tips for getting the best deals from the UK.</p>
      <h3>1. Be Flexible with Dates</h3>
      <p>Flying on a Tuesday or Wednesday is typically 20-30% cheaper than weekend departures. Use One Click's flexible date search to see the cheapest day to fly each week.</p>
      <h3>2. Book at the Right Time</h3>
      <p>For European flights, the sweet spot is 4-8 weeks before departure. For long-haul, book 2-4 months ahead. Last-minute deals exist but are unreliable.</p>
      <h3>3. Compare Everything</h3>
      <p>Never book the first fare you see. Use One Click Online to compare prices across multiple airlines and booking platforms simultaneously.</p>
      <h3>4. Consider Nearby Airports</h3>
      <p>Flying from Stansted instead of Heathrow, or Birmingham instead of Manchester, can save you up to 40% on the same route.</p>
      <h3>5. Set Fare Alerts</h3>
      <p>Use the One Click app to set price alerts for your preferred routes. We'll notify you instantly when prices drop.</p>
      <h3>6. Avoid Peak Travel Days</h3>
      <p>Bank holiday weekends and school half terms see massive price spikes. If you can travel a day either side, you'll save significantly.</p>
      <h3>7. Clear Your Cookies</h3>
      <p>Some booking sites track your searches and increase prices. Use incognito mode or clear cookies between searches to see the real prices.</p>
    `,
  },
  {
    id: 'blog-5',
    slug: 'barcelona-travel-guide',
    title: 'Barcelona Travel Guide: Flights, Hotels & Things to Do',
    category: 'Destinations',
    excerpt: 'Everything you need to plan your Barcelona trip from the UK. Find the cheapest flights, best hotels, and top attractions in this comprehensive guide.',
    featuredImage: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80',
    author: 'One Click Team',
    publishedAt: '2026-03-10',
    readTime: 8,
    content: `
      <h2>Your Complete Barcelona Guide</h2>
      <p>Barcelona is one of the UK's favourite holiday destinations, and it's easy to see why. Incredible architecture, beautiful beaches, world-class food, and a nightlife scene that rivals anywhere in Europe — all just a 2-hour flight away.</p>
      <h2>Getting There</h2>
      <h3>Flights from the UK</h3>
      <p>Multiple airlines fly direct to Barcelona El Prat (BCN) from London, Manchester, Birmingham, Edinburgh, and other UK airports. Ryanair, easyJet, Vueling, and British Airways all operate regular services. Return fares start from just £29 from London.</p>
      <h3>From the Airport to the City</h3>
      <p>The Aerobus runs every 5 minutes from both terminals to Plaça de Catalunya, costing €7.75 one-way. Alternatively, the metro L9 Sud line connects the airport to the city centre.</p>
      <h2>Where to Stay</h2>
      <p>The Gothic Quarter and El Born are perfect for first-time visitors who want to be close to the main sights. Gràcia offers a more local, bohemian feel. For beach access, choose Barceloneta or Poblenou.</p>
      <h2>Top Things to Do</h2>
      <h3>La Sagrada Família</h3>
      <p>Gaudí's unfinished masterpiece is a must-visit. Book tickets online at least 2 weeks in advance — it sells out daily. Entry costs around €26.</p>
      <h3>Park Güell</h3>
      <p>Another Gaudí gem. The monumental zone requires timed entry tickets (€10), but the rest of the park is free to explore.</p>
      <h3>Las Ramblas & La Boqueria Market</h3>
      <p>Stroll down Barcelona's most famous street and stop at the vibrant Boqueria market for fresh juices, seafood, and people-watching.</p>
      <h2>Food & Drink</h2>
      <p>Don't miss the tapas scene. Head to El Born or Poble Sec for authentic, affordable tapas bars. Try patatas bravas, jamón ibérico, and pan con tomate. Wash it down with a cold caña (small beer) or a glass of cava.</p>
    `,
  },
  {
    id: 'blog-6',
    slug: 'dubai-budget-guide-uk',
    title: "Dubai on a Budget: A UK Traveller's Guide",
    category: 'Destinations',
    excerpt: "Think Dubai is only for big spenders? Think again. Here's how to experience the best of Dubai without breaking the bank, with flights from the UK starting at £189.",
    featuredImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
    author: 'One Click Team',
    publishedAt: '2026-03-05',
    readTime: 7,
    content: `
      <h2>Dubai Doesn't Have to Be Expensive</h2>
      <p>Dubai has a reputation as a playground for the rich, but savvy UK travellers know it's possible to experience this incredible city on a budget. With return flights from London starting at £189, here's how to make the most of Dubai without the five-star price tag.</p>
      <h2>Getting There from the UK</h2>
      <p>Emirates, British Airways, and budget-friendly options like Wizz Air Abu Dhabi offer direct or one-stop flights from London. The cheapest deals are usually found with Emirates during their regular sales, or with Wizz Air via Abu Dhabi (a 90-minute bus ride from Dubai).</p>
      <h2>Budget Accommodation</h2>
      <p>Skip the mega-resorts and look at Deira or Bur Dubai for budget hotels from £30-50/night. These older neighbourhoods have bags of character and excellent street food.</p>
      <h2>Free Things to Do in Dubai</h2>
      <ul>
        <li>Walk through Dubai Marina and JBR Beach</li>
        <li>Watch the Dubai Fountain show (every 30 minutes from 6pm)</li>
        <li>Visit the Gold Souk and Spice Souk in Deira</li>
        <li>Explore Al Fahidi Historical Neighbourhood</li>
        <li>Dip in the sea at Kite Beach</li>
      </ul>
    `,
  },
  {
    id: 'blog-7',
    slug: 'edinburgh-city-break-guide',
    title: 'Edinburgh City Break: Complete Guide from London',
    category: 'Destinations',
    excerpt: "Scotland's capital is the perfect weekend escape. Here's everything you need to know about planning an Edinburgh city break from London.",
    featuredImage: 'https://images.unsplash.com/photo-1506377585622-bedcbb027afc?w=800&q=80',
    author: 'One Click Team',
    publishedAt: '2026-02-28',
    readTime: 6,
    content: `
      <h2>Edinburgh: The Perfect UK City Break</h2>
      <p>Edinburgh is arguably the most beautiful city in the UK, and it's remarkably easy to reach from London. Whether you fly (1 hour 15 minutes) or take the train (4 hours 20 minutes on the LNER), a weekend in Scotland's capital is always a good idea.</p>
      <h2>Getting There</h2>
      <p>Flights from London start from £32 return with easyJet or Ryanair. If you prefer the train, advance LNER tickets from King's Cross start from £30 each way.</p>
      <h2>What to See</h2>
      <h3>Edinburgh Castle</h3>
      <p>Perched on Castle Rock, this iconic fortress dominates the city skyline. Adult tickets cost £19.50 — book online to skip the queue.</p>
      <h3>Arthur's Seat</h3>
      <p>A vigorous hike up this ancient volcano rewards you with panoramic views of the entire city. Free, and one of the best things to do in Edinburgh.</p>
      <h3>The Royal Mile</h3>
      <p>Stretching from the Castle to Holyrood Palace, the Royal Mile is packed with history, shops, pubs, and street performers.</p>
    `,
  },
  {
    id: 'blog-8',
    slug: 'best-time-book-flights-uk',
    title: 'Best Time to Book Flights from the UK',
    category: 'Deals & Tips',
    excerpt: 'Timing is everything when it comes to booking cheap flights. Here\'s our data-driven guide to the best time to book flights from UK airports.',
    featuredImage: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=800&q=80',
    author: 'One Click Team',
    publishedAt: '2026-02-20',
    readTime: 5,
    content: `
      <h2>When Should You Book Your Flights?</h2>
      <p>One of the most common questions we hear at One Click Online is "when should I book my flights?" The answer depends on where you're going and when you're travelling.</p>
      <h2>European Short-Haul Flights</h2>
      <p>For flights within Europe (2-4 hours), the ideal booking window is 4-8 weeks before departure. Book too early and you'll pay standard prices; book too late and you'll face last-minute premiums.</p>
      <h2>Long-Haul Flights</h2>
      <p>For destinations like Dubai, New York, Bangkok, and Bali, book 2-4 months in advance. Long-haul fares are more stable but tend to creep up steadily as departure approaches.</p>
      <h2>The Best Day to Book</h2>
      <p>Our data shows that Tuesday afternoons and Wednesday mornings tend to offer the lowest prices. Airlines typically release sales on Monday evenings, and competitors match by Tuesday.</p>
      <h2>The Best Day to Fly</h2>
      <p>Tuesdays and Wednesdays are consistently the cheapest days to depart. Avoid Friday evenings and Sunday afternoons — these are the most expensive departure slots.</p>
    `,
  },
  {
    id: 'blog-9',
    slug: 'car-hire-tips-uk-travellers',
    title: 'Top 5 Car Hire Tips for UK Travellers Abroad',
    category: 'How-To',
    excerpt: 'Renting a car abroad can save you money and give you freedom, but there are pitfalls to avoid. Here are 5 essential tips for UK drivers hiring cars overseas.',
    featuredImage: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80',
    author: 'One Click Team',
    publishedAt: '2026-02-15',
    readTime: 5,
    content: `
      <h2>Essential Car Hire Tips</h2>
      <p>Hiring a car abroad is one of the best ways to explore a destination at your own pace. But if you're not careful, hidden charges and confusing insurance policies can turn a bargain rental into an expensive headache.</p>
      <h3>1. Always Compare Prices</h3>
      <p>Prices for the same car, from the same provider, can vary by 50% depending on which platform you book through. Use One Click Online to compare car hire prices across multiple platforms.</p>
      <h3>2. Don't Buy Insurance at the Desk</h3>
      <p>The excess waiver insurance sold at the rental desk is massively overpriced. Buy standalone excess insurance online before you travel — it costs a fraction of the price.</p>
      <h3>3. Check Your Licence Requirements</h3>
      <p>In some countries (notably Italy and Spain), you need an International Driving Permit alongside your UK licence. Check before you travel — they cost £5.50 from the Post Office.</p>
      <h3>4. Photograph Everything</h3>
      <p>Before driving away, photograph every scratch and dent on the car. Email the photos to yourself so they're timestamped. This protects you from false damage claims.</p>
      <h3>5. Return with a Full Tank</h3>
      <p>Almost every rental company charges a premium for refuelling. Fill up at a nearby petrol station before returning the car to avoid paying double the pump price.</p>
    `,
  },
  {
    id: 'blog-10',
    slug: 'amsterdam-weekend-guide',
    title: 'Amsterdam in 48 Hours: The Ultimate Weekend Guide',
    category: 'Destinations',
    excerpt: 'Only got a weekend? Here\'s how to make the most of 48 hours in Amsterdam, from canal cruises to the Van Gogh Museum.',
    featuredImage: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800&q=80',
    author: 'One Click Team',
    publishedAt: '2026-02-10',
    readTime: 6,
    content: `
      <h2>48 Hours in Amsterdam</h2>
      <p>Amsterdam is the perfect weekend break destination from the UK. It's just over an hour's flight away, incredibly walkable, and packed with world-class museums, charming canals, and unforgettable food.</p>
      <h2>Day 1: Morning</h2>
      <p>Start at the Anne Frank House (book tickets online months in advance — they sell out). Then wander through the Jordaan neighbourhood, Amsterdam's most charming area, full of independent shops and cosy cafes.</p>
      <h2>Day 1: Afternoon</h2>
      <p>Visit the Rijksmuseum to see Rembrandt's Night Watch and Vermeer's Milkmaid. Follow up with the Van Gogh Museum next door (combined tickets save money).</p>
      <h2>Day 1: Evening</h2>
      <p>Take a canal cruise at sunset (from €15), then head to the Foodhallen in Amsterdam West for street food from around the world.</p>
      <h2>Day 2: Morning</h2>
      <p>Rent a bike and cycle through Vondelpark. Stop at a terrace cafe for a traditional Dutch pancake. Feel like a local.</p>
      <h2>Day 2: Afternoon</h2>
      <p>Explore the trendy De Pijp neighbourhood. Visit the Albert Cuyp Market for fresh stroopwafels and herring. Browse the vintage shops and bookstores.</p>
    `,
  },
];

const MOCK_DEALS = {
  cheapestFlights: [
    { route: 'London → Barcelona', price: 29, airline: 'Ryanair', departure: 'Tomorrow', tag: 'Cheapest' },
    { route: 'Manchester → Dublin', price: 25, airline: 'Ryanair', departure: 'Wed', tag: 'Direct' },
    { route: 'Birmingham → Paris', price: 35, airline: 'easyJet', departure: 'Thu', tag: 'New route' },
    { route: 'Edinburgh → Amsterdam', price: 42, airline: 'KLM', departure: 'Fri', tag: 'Weekend' },
    { route: 'London → Lisbon', price: 45, airline: 'TAP', departure: 'Mon', tag: 'Sale' },
    { route: 'Bristol → Kraków', price: 32, airline: 'Ryanair', departure: 'Tue', tag: 'Budget pick' },
  ],
  hotelDeals: [
    { name: 'Hotel Negresco, Nice', stars: 4, price: 62, originalPrice: 95, discount: '35% off', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80' },
    { name: 'Motel One Barcelona', stars: 3, price: 49, originalPrice: 72, discount: '32% off', image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&q=80' },
    { name: 'ibis Styles Dublin', stars: 3, price: 38, originalPrice: 55, discount: '31% off', image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&q=80' },
  ],
  lastMinute: [
    { route: 'London → Rome', price: 42, airline: 'Wizz Air', departure: 'Tomorrow 6am', tag: 'Last minute' },
    { route: 'Manchester → Málaga', price: 55, airline: 'Ryanair', departure: 'Tomorrow 2pm', tag: '48hrs' },
    { route: 'London → Berlin', price: 38, airline: 'easyJet', departure: 'Day after tomorrow', tag: '72hrs' },
  ],
};

// ──────────── API Functions ────────────

export async function searchFlights(params) {
  // Simulate API delay
  await new Promise(r => setTimeout(r, 1500));
  return { results: MOCK_FLIGHT_RESULTS, total: MOCK_FLIGHT_RESULTS.length };
}

export async function searchHotels(params) {
  await new Promise(r => setTimeout(r, 1500));
  return { results: MOCK_HOTEL_RESULTS, total: MOCK_HOTEL_RESULTS.length };
}

export async function searchCars(params) {
  await new Promise(r => setTimeout(r, 1500));
  return { results: MOCK_CAR_RESULTS, total: MOCK_CAR_RESULTS.length };
}

export async function searchTours(params) {
  await new Promise(r => setTimeout(r, 1500));
  return { results: MOCK_TOUR_RESULTS, total: MOCK_TOUR_RESULTS.length };
}

export async function getPopularFlights() {
  await new Promise(r => setTimeout(r, 800));
  return MOCK_TRENDING_DEALS;
}

export async function getDestinations() {
  await new Promise(r => setTimeout(r, 500));
  return MOCK_DESTINATIONS;
}

export async function getDeals() {
  await new Promise(r => setTimeout(r, 800));
  return MOCK_DEALS;
}

export async function getBlogPosts(category = null) {
  await new Promise(r => setTimeout(r, 500));
  if (category && category !== 'All') {
    return MOCK_BLOG_POSTS.filter(p => p.category === category);
  }
  return MOCK_BLOG_POSTS;
}

export async function getBlogPost(slug) {
  await new Promise(r => setTimeout(r, 300));
  return MOCK_BLOG_POSTS.find(p => p.slug === slug) || null;
}

export function redirectToAffiliate(type, id) {
  // In production, this would call the backend to log the click and get the affiliate URL
  window.open(`https://www.booking.com`, '_blank');
}
