import React, { Component } from 'react';
import { connect } from 'react-redux';

import Spinner from '../common/Spinner';
import CardPortfolio from './CardPortfolio';
import { getPortfolio } from '../../actions/portfolioActions';

class Portfolio extends Component {
    componentDidMount() {
        this.props.getPortfolio();
    }

    render() {
        const { works, loading } = this.props.portfolio;

        let portfolioContent;
        if (loading) {
            portfolioContent = <Spinner />;
        } else if (works.length === 0) {
            portfolioContent = <h5>Portfolio is empty</h5>;
        } else {
            portfolioContent = works.map(work => (
                <CardPortfolio key={work._id} work={work} />
            ));
        }

        return <section className="portfolio">{portfolioContent}</section>;
    }
}

const mapStateToProps = state => ({
    portfolio: state.portfolio
});

export default connect(
    mapStateToProps,
    { getPortfolio }
)(Portfolio);
