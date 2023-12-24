import { useState, useEffect } from 'react';
import Places from './Places.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);

  // Make GET request to fetch available places
  // useEffect() is needed to avoid infinite loop
  useEffect(() => {
    fetch('http://localhost:3000/places').then((response) => {
      response.json().then((data) => {
        setAvailablePlaces(data.places);
      });
    })
  }, []);

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
