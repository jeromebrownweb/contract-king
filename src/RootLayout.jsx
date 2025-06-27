import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css'; // Keep App.css for global styles, or rename it later if needed

const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet /> {/* This is where the routed components will be rendered */}
      <Footer />
    </>
  );
};

export default RootLayout;
