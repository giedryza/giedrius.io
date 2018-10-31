import React, { Component } from 'react';
import { connect } from 'react-redux';

import CardPortfolio from './CardPortfolio';
import { getPortfolio } from '../../actions/portfolioActions';

class Portfolio extends Component {
    componentDidMount() {
        this.props.getPortfolio();
    }

    render() {
        const { works } = this.props.portfolio;

        const portfolioContent = works.map(work => (
            <CardPortfolio key={work.id} work={work} />
        ));
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
