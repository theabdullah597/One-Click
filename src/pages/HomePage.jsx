import Hero from '../components/home/Hero';
import BrandsBar from '../components/home/BrandsBar';
import TrendingDeals from '../components/home/TrendingDeals';
import Categories from '../components/home/Categories';
import Destinations from '../components/home/Destinations';
import HowItWorks from '../components/home/HowItWorks';
import BlogPreview from '../components/home/BlogPreview';
import AppCTA from '../components/home/AppCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandsBar />
      <TrendingDeals />
      <Categories />
      <Destinations />
      <HowItWorks />
      <BlogPreview />
      <AppCTA />
    </>
  );
}
