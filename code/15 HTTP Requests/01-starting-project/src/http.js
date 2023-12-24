// GET /places
export async function fetchAvailablePlaces() {
    const response = await fetch('http://localhost:3000/places');
    const data = await response.json();

    if (!response.ok) {
        throw new Error('Failed to fetch places');
    }

    return data.places;
}

// GET /user-places
export async function fetchUserPlaces() {
    const response = await fetch('http://localhost:3000/user-places');
    const data = await response.json();

    if (!response.ok) {
        throw new Error('Failed to fetch user places');
    }

    return data.places;
}

// PUT /user-places
export async function updateUserPlaces(places) {
    const response = await fetch('http://localhost:3000/user-places', {
        method: 'PUT',
        body: JSON.stringify({ places }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();

    if (!response.ok) {
        throw new Error('Failed to update user places');
    }

    return data.message;
}