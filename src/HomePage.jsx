import { useEffect } from 'react';
import Hero from './components/Hero/Hero';
import SearchBar from './components/SearchBar/SearchBar';
import SearchSummary from './components/SearchSummary/SearchSummary';
import HomeLayout from './HomeLayout';
import { testConnection } from './lib/supabase';

function HomePage() {
  // Test Supabase connection when page loads
  useEffect(() => {
    testConnection();
  }, []);

  return (
    <>
      <Hero />
      <SearchBar />
      <SearchSummary />
      <HomeLayout>
        {/* Job cards are in here */}
      </HomeLayout>
    </>
  );
}

export default HomePage;
