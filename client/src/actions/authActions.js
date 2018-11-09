import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import { AUTH_USER } from './types';

export const login = (userData, callback) => async dispatch => {
    try {
        const response = await axios.post('/api/users/login', userData);

        dispatch({
            type: AUTH_USER,
            payload: response.data.token
        });
        localStorage.setItem('token', response.data.token);
        setAuthToken(response.data.token);
        callback();
    } catch (err) {
        console.log(err);
    }
};

export const logout = () => {
    localStorage.removeItem('token');
    setAuthToken(false);

    return {
        type: AUTH_USER,
        payload: null
    };
};
