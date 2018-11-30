import axios from 'axios';
import {
    GET_PORTFOLIO,
    ADD_PORTFOLIO,
    EDIT_PORTFOLIO,
    DELETE_PORTFOLIO
} from './types';

export const clearPortfolio = () => {
    return {
        type: GET_PORTFOLIO,
        payload: []
    };
};

export const getPortfolio = (tech = '') => dispatch => {
    axios
        .get(`/api/portfolio/${tech}`)
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

export const addPortfolio = (dataToSubmit, cb) => dispatch => {
    axios
        .post('/api/portfolio', dataToSubmit)
        .then(res =>
            dispatch({
                type: ADD_PORTFOLIO,
                payload: res.data
            })
        )
        .then(cb())
        .catch(err => console.log(err));
};

export const editPortfolio = (dataToSubmit, id, cb) => dispatch => {
    axios
        .patch(`/api/portfolio/${id}`, dataToSubmit)
        .then(res =>
            dispatch({
                type: EDIT_PORTFOLIO,
                payload: res.data
            })
        )
        .then(cb())
        .catch(err => console.log(err));
};

export const deletePortfolio = id => dispatch => {
    axios
        .delete(`/api/portfolio/${id}`)
        .then(res =>
            dispatch({
                type: DELETE_PORTFOLIO,
                payload: id
            })
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
