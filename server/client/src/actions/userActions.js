import axios from 'axios';

export const FETCH_USER = 'fetch_user';

//get profile information on a user
export const fetchUser = () => {
  const request = axios.get('/profile/5cd855b14c1ee815b45a9565', {})
    return{
      type: FETCH_USER,
      payload: request
    }
}