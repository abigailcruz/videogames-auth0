import './App.css';
import ShowPlayGame from './components/ShowPlayGame';
import Header from './components/Header';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Home from './components/Home';
import { useAuth0 } from '@auth0/auth0-react';
import { useState, useEffect } from 'react';
import Lottie from "lottie-react";
import NavBar from './components/navbar';

import Game from './74547-games-icon.json';

function App() {
  const {isAuthenticated, isLoading} =useAuth0();
  const [showAnimation, setShowAnimation] = useState(false);


    useEffect(() => {
      let timeout;
      if (isLoading) {
        setShowAnimation(true);
        timeout = setTimeout(() => {
          setShowAnimation(false);
        }, 2000); // 2000 milisegundos = 2 segundos
      }
  
      return () => clearTimeout(timeout); // Limpiar el timeout al desmontar el componente
    }, []);

  if (isLoading || showAnimation) {
    return (
      <div>
        <Lottie animationData={Game} loop={true} />
      </div>
    );
  }
  return (
    <div className="App">
    {
      isAuthenticated ? (
      <>
      <Header />
      <NavBar/>
      <Profile/>
      <ShowPlayGame />
      </>
    )  : 
       <Home />
    }

    
   
    
  
    <Footer />

  </div>
  );
}

export default App;
