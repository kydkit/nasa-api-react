import React, { useState, useEffect } from 'react';
import NasaCard from './NasaCard';

const NasaData = () => {
  
  const [infos, setInfo] = useState([])

  const count  = 3;
  const apiKey = 'DEMO_KEY';
  const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;

  useEffect(() => {
    fetch(apiUrl)
    .then(response => response.json())
    .then(items => setInfo(items));
  }, [])

  return (
    <div className="infos">
      <h1>Picture of the Day</h1>
      {infos.map((info, i) => (
        <NasaCard key={i} info={info} />
        ))}
    </div>
  );
}

export default NasaData;