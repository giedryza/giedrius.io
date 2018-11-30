import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

import Icon from '../common/Icon';
import IconsContainer from '../common/IconsContainer';

const CardPortfolio = ({ work }) => {
    const renderButton = (name, linkto) => (
        <Link to={linkto} target="_blank" className="card__btn">
            <Icon name={name} className="card__btn-icon" />
            {name}
        </Link>
    );

    return (
        <div className="card">
            <div className="card__header">
                <h3 className="card__title">{work.name}</h3>
                <p className="card__date">{format(work.date, 'YYYY-MM')}</p>
            </div>

            <img src={work.img} alt={work.name} className="card__img" />

            <div className="card__details">
                <div className="card__btn-container">
                    {renderButton('Web', work.web)}
                    {renderButton('GitHub', work.github)}
                </div>
                <p className="card__description">{work.description}</p>
                <h4 className="card__title">Tech Stack</h4>
                <IconsContainer iconsList={work.techStack} />
            </div>
        </div>
    );
};

export default CardPortfolio;
