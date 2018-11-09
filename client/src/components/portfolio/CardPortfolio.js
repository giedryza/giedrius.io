import React from 'react';
import format from 'date-fns/format';

import Icon from '../common/Icon';
import IconLink from '../common/IconLink';

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
                <p className="card__date">{format(work.date, 'YYYY')}</p>
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
                    // <a
                    //     href={work.web}
                    //     target="_blank"
                    //     rel="noopener noreferrer"
                    //     className="card__icon-container"
                    // >
                    //     <Icon name="Chrome" />
                    //     <h5 className="card__icon-title">Web</h5>
                    // </a>
                    <IconLink href={work.web} iconName="Chrome" label="Web" />
                ) : null}
                {work.github ? (
                    <IconLink
                        href={work.github}
                        iconName="GitHub"
                        label="GitHub"
                    />
                ) : null}
                {work.youtube ? (
                    <IconLink
                        href={work.youtube}
                        iconName="YouTube"
                        label="YouTube"
                    />
                ) : null}
            </div>
        </div>
    );
};

export default CardPortfolio;
