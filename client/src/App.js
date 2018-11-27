import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import setAuthToken from './utils/auth/setAuthToken';
import './assets/sass/main.scss';

import Layout from './components/layout';
import Landing from './components/landing/Landing';
import Portfolio from './components/portfolio/Portfolio';
import About from './components/about/About';
import Contacts from './components/contacts/Contacts';
import Login from './components/admin/Login';
import AddPortfolio from './components/admin/AddPortfolio';
import EditPortfolio from './components/admin/EditPortfolio';
import PortfoliosList from './components/admin/PortfoliosList';
import NotFound from './components/common/NotFound';

class App extends Component {
    componentDidMount = () => {
        setAuthToken(localStorage.token);
    };

    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Layout>
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
                            <Route
                                exact
                                path="/admin/portfolio"
                                component={PortfoliosList}
                            />
                            <Route
                                exact
                                path="/admin/portfolio/add"
                                component={AddPortfolio}
                            />
                            <Route
                                exact
                                path="/admin/portfolio/:id"
                                component={EditPortfolio}
                            />
                            <Route exact path="/login" component={Login} />
                            <Route component={NotFound} />
                        </Switch>
                    </Layout>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
