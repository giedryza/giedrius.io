import React from 'react';
import PortfolioCard from './PortfolioCard';

const PortfolioList = ({ works }) =>
    works.map(work => <PortfolioCard key={work._id} {...work} />);

export default PortfolioList;
