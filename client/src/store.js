import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {
    auth: { token: localStorage.getItem('token') }
};

const middleware = [thunk];

const enhancers = [];
const isDevelopment = process.env.NODE_ENV === 'development';
if (
    isDevelopment &&
    typeof window !== 'undefined' &&
    window.devToolsExtension
) {
    enhancers.push(window.devToolsExtension());
}

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        ...enhancers
    )
);

export default store;
