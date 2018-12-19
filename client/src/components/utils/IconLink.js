import React from 'react';
import Icon from './elements/Icon';

const IconLink = ({
    href,
    mapKey,
    iconName,
    label,
    className,
    iconClassName
}) => {
    return (
        <a
            href={href}
            key={mapKey}
            className={className}
            target="_blank"
            rel="noopener noreferrer"
        >
            <Icon name={iconName} className={iconClassName} />
            <h5 className="card__icon-title">{label}</h5>
        </a>
    );
};

IconLink.defaultProps = {
    className: 'card__icon-container'
};

export default IconLink;
