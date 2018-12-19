import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setAuthToken } from './components/utils/auth/setAuthToken';
import store from './store';
import './assets/sass/main.scss';

import Layout from './components/layout/Layout';
import Routes from './routes';

class App extends Component {
    componentDidMount = () => {
        setAuthToken(localStorage.token);
    };

    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Layout>
                        <Routes />
                    </Layout>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
