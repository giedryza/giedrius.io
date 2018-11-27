import React, { Component } from 'react';
import { connect } from 'react-redux';

import Spinner from '../common/Spinner';
import CardPortfolio from './CardPortfolio';
import { getPortfolio } from '../../actions/portfolioActions';

class Portfolio extends Component {
    componentDidMount() {
        this.props.getPortfolio();
    }

    portfolioList = works =>
        works.length > 0 ? (
            works.map(work => <CardPortfolio key={work._id} work={work} />)
        ) : (
            <Spinner />
        );

    render() {
        return (
            <section className="portfolio">
                {this.portfolioList(this.props.portfolio.works)}
            </section>
        );
    }
}

const mapStateToProps = state => ({
    portfolio: state.portfolio
});

export default connect(
    mapStateToProps,
    { getPortfolio }
)(Portfolio);
