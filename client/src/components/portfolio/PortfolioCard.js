import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

import Icon from '../utils/elements/Icon';
import IconsContainer from '../utils/elements/IconsContainer';

const CardPortfolio = ({
    name,
    date,
    img,
    techStack,
    web,
    github,
    description
}) => {
    const renderButton = (name, linkto) => (
        <Link to={linkto} target="_blank" className="card__btn">
            <Icon name={name} className="card__btn--icon" />
            {name}
        </Link>
    );

    return (
        <article className="card">
            <div className="card__header">
                <h3 className="card__title">{name}</h3>
                <p className="card__date">{format(date, 'YYYY-MM')}</p>
            </div>

            <img src={img} alt={name} className="card__img" />

            <div className="card__details">
                <div className="card__btn-container">
                    {renderButton('Web', web)}
                    {renderButton('GitHub', github)}
                </div>
                <p className="card__description">{description}</p>
                <h4 className="card__title">Tech Stack</h4>
                <IconsContainer iconsList={techStack} />
            </div>
        </article>
    );
};

export default CardPortfolio;
