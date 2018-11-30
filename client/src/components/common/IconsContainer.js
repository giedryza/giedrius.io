import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../common/Icon';

const IconsContainer = ({ iconsList }) => {
    const renderIcons = () =>
        iconsList.map(item => (
            <Link to={`/portfolio/${item}`} key={item} className="icons__item">
                <Icon name={item} className="icons__svg" />
                <h5 className="icons__label">{item}</h5>
            </Link>
        ));

    return <div className="icons">{renderIcons()}</div>;
};

export default IconsContainer;
