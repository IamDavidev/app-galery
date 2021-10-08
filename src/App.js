import React from 'react';
import NavBar from './components/NavBar';
import Photos from './components/Photos';
import './index.css';
import Footer from './components/Footer'
const App = () => {
  return (
    <div className="App__root has-background-black">
      <NavBar />
      <h1>Photos David </h1>
      <Photos />
      <Footer />
    </div>
  );
};

export default App;
