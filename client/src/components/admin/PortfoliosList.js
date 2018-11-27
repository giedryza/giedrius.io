import React, { Component } from 'react';
import { connect } from 'react-redux';

import requireAuth from '../../utils/auth/requireAuth';
import AdminLayout from './AdminLayout';
import PortfolioItem from './PortfolioItem';

import Spinner from '../common/Spinner';
import { getPortfolio, deletePortfolio } from '../../actions/portfolioActions';

class PortfoliosList extends Component {
    componentDidMount() {
        this.props.getPortfolio();
    }

    portfolioList = works =>
        works.length > 0 ? (
            works.map(work => (
                <PortfolioItem
                    key={work._id}
                    work={work}
                    deleteHandler={this.deleteHandler}
                />
            ))
        ) : (
            <Spinner />
        );

    deleteHandler = id => {
        this.props.deletePortfolio(id);
    };

    render() {
        return (
            <AdminLayout>
                {this.portfolioList(this.props.portfolio.works)}
            </AdminLayout>
        );
    }
}

const mapStateToProps = state => ({
    portfolio: state.portfolio
});

export default requireAuth(
    connect(
        mapStateToProps,
        { getPortfolio, deletePortfolio }
    )(PortfoliosList)
);
