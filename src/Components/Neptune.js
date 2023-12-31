import React, { useState, useEffect } from 'react';
import axios from 'axios';
import neptuneImage from '../images/neptune.png'; // Import the image

function Neptune() {
  const [planetData, setPlanetData] = useState(null);

  useEffect(() => {
    const apiKey = '3J+dWBW8QXneboHS6ry8Gg==KreuAlFtf9xLOw1V';

    const apiUrl = 'https://api.api-ninjas.com/v1/planets?name=Neptune';

    axios
    .get(apiUrl, {
      headers: {
        'X-Api-Key': apiKey,
      },
    })

    .then((response) => {
      setPlanetData(response.data[0]);
      // Trigger the scroll to the bottom after a short delay to ensure the DOM is updated.
      
      setTimeout(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      }, );
    })
    .catch((error) => {
      console.error('API Error:', error);
    });
}, []);

  return (
    <div>
      <div className="planet-heading">
        <h2>NEPTUNE</h2>
      </div>
      <div className="planet-info">
        {planetData && (
          <div className="planet-container">
            <div className="planet-description">
              <p>
                Neptune is the eighth planet and one of the gas giants, known for its deep blue color and strong winds.
              </p>
            </div>
            <img src={neptuneImage} alt="Neptune" className="planet-image planet-image-spin" />
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

export default Neptune;
