import React from 'react';

import Icon from '../common/Icon';

const CardPortfolio = ({ work }) => {
    const techStack = work.techStack.map(item => (
        <div key={item} className="card__icon-container">
            <Icon name={item} />
            <h5 className="card__icon-title">{item}</h5>
        </div>
    ));

    return (
        <div className="card">
            <div className="card__header">
                <h3 className="card__title">{work.name}</h3>
                <p className="card__date">{work.date}</p>
            </div>
            <div className="card__img-container">
                <img src={work.img} alt={work.name} className="card__img" />
            </div>
            <p className="card__description">{work.description}</p>
            <h4 className="card__label">Tech Stack</h4>
            <div className="card__icons">{techStack}</div>
            <h4 className="card__label">View at</h4>
            <div className="card__icons">
                {work.web ? (
                    <a
                        href={work.web}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card__icon-container"
                    >
                        <Icon name="Chrome" />
                        <h5 className="card__icon-title">Web</h5>
                    </a>
                ) : null}
                {work.github ? (
                    <a
                        href={work.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card__icon-container"
                    >
                        <Icon name="GitHub" />
                        <h5 className="card__icon-title">GitHub</h5>
                    </a>
                ) : null}
                {work.youtube ? (
                    <a
                        href={work.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card__icon-container"
                    >
                        <Icon name="YouTube" />
                        <h5 className="card__icon-title">YouTube</h5>
                    </a>
                ) : null}
            </div>
        </div>
    );
};

export default CardPortfolio;
