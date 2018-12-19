import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPortfolio } from '../../actions/portfolioActions';

import Spinner from '../utils/common/Spinner';
import NotFound from '../utils/common/NotFound';
import PortfolioList from './PortfolioList';

class Portfolio extends Component {
    componentDidMount() {
        this.props.getPortfolio(this.props.match.params.tech);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params !== this.props.match.params) {
            this.props.getPortfolio(this.props.match.params.tech);
        }
    }

    renderPortfolio = ({ loading, works }) => {
        if (loading) return <Spinner />;
        else if (works < 1) return <NotFound />;
        else return <PortfolioList works={works} />;
    };

    render() {
        return (
            <section className="portfolio">
                {this.renderPortfolio(this.props.portfolio)}
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
