import axios from 'axios';

export const FETCH_USER = 'fetch_user';

//get profile information on a user
export const fetchUser = () => {
  const request = axios.get('/profile/5cd4655d5f1771364079e3c2', {})
    return{
      type: FETCH_USER,
      payload: request
    }
}