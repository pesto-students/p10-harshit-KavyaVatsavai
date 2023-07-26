import React, { useState } from 'react';
import axios from 'axios';
import BackgroundAnimate from '../BackgroundAnimate';
import InputShortener from '../InputShortener';
import LinkResult from '../LinkResult';
const Home = () => {
  const [inputValue, setInputValue] = useState("");
  

  return (
  
      
    <div className="homeContainer">
      <InputShortener setInputValue={setInputValue} />
      <BackgroundAnimate />
      <LinkResult inputValue={inputValue} />
    </div>
    
  );
};

export default Home;
