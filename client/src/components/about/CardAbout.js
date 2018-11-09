import React from 'react';

const CardAbout = ({ title, body, className }) => {
    return (
        <div className={className}>
            <h3 className="card__title">{title}</h3>
            <p className="card__description">{body}</p>
        </div>
    );
};

CardAbout.defaultProps = {
    className: 'card'
};

export default CardAbout;
