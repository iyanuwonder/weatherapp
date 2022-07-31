import React, {useState} from 'react';
import axios from 'axios'

function App() {

  //const url ='http://api.openweathermap.org/data/2.5/weather?q=dallas&appid=5a7a18701e94fe9a1d62841a9e2838a4'
  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>dallas</p>
          </div>
          <div className="temp">
            <h1>65F </h1>
          </div>
          <div className="description">
            <p>clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            65F
          </div>
          <div className="humidity">
            <p>25%</p>
          </div>
          <div className="wind">
            12 MPH
          </div>
        </div>
        
      
      </div>   



    </div>
  );
}

export default App;
