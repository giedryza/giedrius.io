import React, { Component } from 'react';
import { connect } from 'react-redux';

import Spinner from '../common/Spinner';
import PortfolioCard from './PortfolioCard';
import { getPortfolio, clearPortfolio } from '../../actions/portfolioActions';

class Portfolio extends Component {
    componentDidMount() {
        this.props.getPortfolio(this.props.match.params.tech);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params !== this.props.match.params) {
            this.props.clearPortfolio(
                this.props.getPortfolio(this.props.match.params.tech)
            );
        }
    }

    componentWillUnmount = () => {
        this.props.clearPortfolio();
    };

    portfolioList = works =>
        works.length > 0 ? (
            works.map(work => <PortfolioCard key={work._id} work={work} />)
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
    { getPortfolio, clearPortfolio }
)(Portfolio);
