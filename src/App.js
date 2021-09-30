import React from 'react';
import NavBar from './components/NavBar';
import Photos from './components/Photos';
import './index.css';

const App = () => {
  return (
    <div className="App__root has-background-black">
      <NavBar />
      <Photos />
    </div>
  );
};

export default App;
