import Hero from './components/Hero/Hero';
import SearchBar from './components/SearchBar/SearchBar';
import SearchSummary from './components/SearchSummary/SearchSummary';
import HomeLayout from './HomeLayout';

function HomePage() {
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
