import { useState, useEffect } from 'react';
import Places from './Places.jsx';
import Error from './Error.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState();

  // Make GET request to fetch available places
  // useEffect() is needed to avoid infinite loop
  useEffect(() => {
    fetch('http://localhost:3000/places').then((response) => {
      setIsFetching(true);
      try {
        if (!response.ok) {
          throw new Error('Failed to fetch places.');
        }
        response.json().then((data) => {
          setAvailablePlaces(data.places);
        });
      } catch (error) {
        setError({
          message: error.message || 'Could not fetch places, please try again later.',
        });
      }
      setIsFetching(false);
    })
  }, []);

  if (error) {
    return <Error title="An error occurred!" message={error.message} />;
  }

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
      isLoading={isFetching}
      loadingText="Fetching places data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
