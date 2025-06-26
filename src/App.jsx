import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import SearchBar from './components/SearchBar/SearchBar';
import SearchSummary from './components/SearchSummary/SearchSummary';
import HomeLayout from './HomeLayout';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <SearchBar />
      <SearchSummary />
      <HomeLayout>
        {/* Job cards are in here */}
      </HomeLayout>
      <Footer />
    </>
  );
}

export default App;
