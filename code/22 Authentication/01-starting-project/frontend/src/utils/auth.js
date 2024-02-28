import { redirect } from 'react-router-dom';

export function getAuthToken() {
  return localStorage.getItem('token');
}

export function tokenLoader() {
  return getAuthToken();
}

export function checkAuthLoader() {
  if (!getAuthToken()) {
    return redirect('/auth?mode=login');
  }

  return null;
}