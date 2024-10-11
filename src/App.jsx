// src/App.js
import React from 'react';
import Navbar from './Component/Navbar';
import Detail from './Component/Detail';
import Trending from './Component/Trending';
import Question from './Component/Question';
import Footer from './Component/Footer'
import "./App.css";
const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar/>
      <Detail/>
      <Trending/>
      <Question/>
      <Footer/>
    
    </div>
  );
};

export default App;