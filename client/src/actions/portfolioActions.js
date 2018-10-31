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

export const addPortfolio = (portfolioData, callback) => dispatch => {
    axios
        .post('/api/portfolio', portfolioData)
        .then(
            res =>
                dispatch({
                    type: ADD_PORTFOLIO,
                    payload: res.data
                }),
            callback()
        )
        .catch(err => console.log(err));
};

// export const addPortfolio = (portfolioData, callback) => async dispatch => {
//     try {
//         const response = await axios.post('/api/portfolio', portfolioData);
//         dispatch({
//             type: ADD_PORTFOLIO,
//             payload: response.data
//         });
//         callback();
//     } catch (err) {
//         console.log(err);
//     }
// };

const setLoading = () => {
    return {
        type: SET_LOADING
    };
};
