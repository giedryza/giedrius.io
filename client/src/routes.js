import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from './components/landing/Landing';
import Portfolio from './components/portfolio/Portfolio';
import Contacts from './components/contacts/Contacts';
import Login from './components/admin/Login';
import AddPortfolio from './components/admin/AddPortfolio';
import EditPortfolio from './components/admin/EditPortfolio';
import PortfoliosList from './components/admin/PortfoliosList';
import NotFound from './components/utils/common/NotFound';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/portfolio/:tech" component={Portfolio} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contacts" component={Contacts} />
        <Route exact path="/admin/portfolio/add" component={AddPortfolio} />
        <Route exact path="/admin/portfolio/:id" component={EditPortfolio} />
        <Route exact path="/admin/portfolio" component={PortfoliosList} />
        <Route exact path="/login" component={Login} />
        <Route component={NotFound} />
    </Switch>
);

export default Routes;
