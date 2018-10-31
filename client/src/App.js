import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './assets/sass/main.scss';

import Nav from './components/layout/Nav';
import Portfolio from './components/portfolio/Portfolio';
import Contacts from './components/contacts/Contacts';
import About from './components/about/About';
import Add from './components/admin/Add';
import Login from './components/admin/Login';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div className="App">
                        <Nav />
                        <Switch>
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
                        </Switch>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
