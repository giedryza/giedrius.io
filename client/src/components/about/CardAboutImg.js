import React from 'react';

const CardAboutImg = ({ title, src, className }) => {
    return (
        <div className={className}>
            <h3 className="card__title">{title}</h3>
            <div className="card__img-container card__img-container--about">
                <img src={src} alt={title} className="card__img" />
            </div>
        </div>
    );
};

CardAboutImg.defaultProps = {
    className: 'card'
};

export default CardAboutImg;
