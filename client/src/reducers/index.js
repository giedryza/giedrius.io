import { combineReducers } from 'redux';
import portfolioReducer from './portfolioReducer';
import authReducer from './authReducer';

export default combineReducers({
    portfolio: portfolioReducer,
    auth: authReducer
});
