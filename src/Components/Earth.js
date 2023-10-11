import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './planets.css';
import earthImage from '../images/earth.png'; // Import the image

function Earth() {
  const [planetData, setPlanetData] = useState(null);

  useEffect(() => {

    const apiKey = '3J+dWBW8QXneboHS6ry8Gg==KreuAlFtf9xLOw1V';

    const apiUrl = 'https://api.api-ninjas.com/v1/planets?name=Earth';

    axios.get(apiUrl, {
      headers: {
        'X-Api-Key': apiKey,
      },
    })
      .then((response) => {
        setPlanetData(response.data[0]);
      })
      .catch((error) => {

        console.error('API Error:', error);
      });
  }, []);

  return (
    <div>
      <div className="planet-heading">
        <h2>EARTH</h2>
      </div>
      <div className="planet-info">
        {planetData && (
          <div className="planet-container">

<div className="planet-description">
              <p>
                Earth is the third planet from the Sun and the only astronomical object known to harbor life.
              </p>
            </div>
            
            <img src={earthImage} alt="Earth" className="planet-image" />
            <div className="planet-text">
              <p> <strong>Mass:</strong>  {planetData.mass} Jupiters</p>
              <p> <strong>Radius:</strong> {planetData.radius} Jupiters</p>
              <p><strong>Orbital Period: </strong>{planetData.period} Earth days</p>
              <p><strong>Temperature: </strong> {planetData.temperature} Kelvin</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Earth;
