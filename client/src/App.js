import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import setAuthToken from './utils/setAuthToken';
import './assets/sass/main.scss';

import Nav from './components/nav';
import Landing from './components/landing/Landing';
import Portfolio from './components/portfolio/Portfolio';
import About from './components/about/About';
import Contacts from './components/contacts/Contacts';
import Login from './components/admin/Login';
import Add from './components/admin/Add';
import NotFound from './components/common/NotFound';

class App extends Component {
    componentDidMount() {
        setAuthToken(localStorage.token);
    }

    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div className="App">
                        <Nav />
                        <Switch>
                            <Route exact path="/" component={Landing} />
                            <Route
                                exact
                                path="/portfolio"
                                component={Portfolio}
                            />
                            <Route exact path="/about" component={About} />
                            <Route
                                exact
                                path="/contacts"
                                component={Contacts}
                            />
                            <Route exact path="/admin" component={Add} />
                            <Route exact path="/login" component={Login} />
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
