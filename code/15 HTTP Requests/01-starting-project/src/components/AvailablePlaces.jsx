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

  // Make GET request to fetch available places
  // useEffect() is needed to avoid infinite loop
  // using async/await
  /*useEffect(() => {
    async function fetchPlaces() {
      const response = await fetch('http://localhost:3000/places');
      const data = await response.json();
      setAvailablePlaces(data.places);
    }

    fetchPlaces();
  }, []);*/

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={availablePlaces.length === 0}
      loadingText="Fetching places data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
