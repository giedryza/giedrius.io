import { GET_PORTFOLIO, ADD_PORTFOLIO, SET_LOADING } from '../actions/types';

const initialState = {
    works: [],
    loading: false
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_PORTFOLIO:
            return {
                ...state,
                works: action.payload,
                loading: false
            };
        case ADD_PORTFOLIO:
            return {
                ...state,
                works: [action.payload, ...state.works]
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}
