import axios from 'axios';
import { GET_PORTFOLIO, ADD_PORTFOLIO, SET_LOADING } from './types';

export const getPortfolio = () => dispatch => {
    dispatch(setLoading());
    axios
        .get('/api/portfolio')
        .then(res =>
            dispatch({
                type: GET_PORTFOLIO,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_PORTFOLIO,
                payload: []
            })
        );
};

export const addPortfolio = data => dispatch => {
    axios
        .post('/api/portfolio', data)
        .then(res =>
            dispatch({
                type: ADD_PORTFOLIO,
                payload: res.data
            })
        )
        .catch(err => console.log(err));
};

const setLoading = () => {
    return {
        type: SET_LOADING
    };
};
