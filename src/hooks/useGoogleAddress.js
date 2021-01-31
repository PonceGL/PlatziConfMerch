import { useState, useEffect } from 'react';
import axios from 'axios';

const useGoogleAddress = (street, num, city, state) => {
  const [map, setMap] = useState({});
  const API = `https://maps.googleapis.com/maps/api/geocode/json?&address=${street}${num}${city}${state}&key=${process.env.API_KEY}`;

  useEffect(async () => {
    const response = await axios(API);
    setMap(response.data.results[0].geometry.location);
  }, []);

  return map;
};

export default useGoogleAddress;
