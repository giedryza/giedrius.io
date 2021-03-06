import {
    GET_PORTFOLIO,
    ADD_PORTFOLIO,
    EDIT_PORTFOLIO,
    DELETE_PORTFOLIO,
    SET_LOADING
} from '../actions/types';

const initialState = {
    works: [],
    addPortfolio: {},
    editPortfolio: {},
    loading: true
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
                addPortfolio: action.payload
            };
        case EDIT_PORTFOLIO:
            return {
                ...state,
                editPortfolio: action.payload
            };
        case DELETE_PORTFOLIO:
            return {
                ...state,
                works: state.works.filter(work => work._id !== action.payload)
            };
        case SET_LOADING:
            return {
                ...state,
                loading: action.payload
            };
        default:
            return state;
    }
}
