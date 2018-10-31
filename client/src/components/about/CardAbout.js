import React from 'react';

const CardAbout = ({ title, body }) => {
    return (
        <div className="card">
            <h3 className="card__title">{title}</h3>
            <p className="card__description">{body}</p>
        </div>
    );
};

export default CardAbout;
