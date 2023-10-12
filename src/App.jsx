import { useEffect, useState } from 'react';

import './App.css';
import Navbar from './component/navbar';
import Hero from './component/hero';
import StackedCards from './component/stackedCards';
import Footer from './component/footer';
import LoadingScreen from './component/LoadingScreen';

function App() {
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoadingScreen(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showLoadingScreen ? (
        <LoadingScreen />
      ) : (
        <main className='my-8 w-11/12 md:w-9/12 mx-auto'>
          <Navbar />
          <Hero />
          <StackedCards />
          <Footer />
        </main>
      )}
    </>
  );
}

export default App;
