import React, { useState } from 'react';
import Nav from './components/NavBar/Nav';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const [points, setPoints] = useState(0);

  return (
    <div className="app"> 
      <Nav points={points} />
      <div className="content">
        <Home setPoints={setPoints} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
