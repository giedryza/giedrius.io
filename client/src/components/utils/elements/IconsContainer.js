import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';

const IconsContainer = ({ iconsList }) => {
    const renderIcons = () =>
        iconsList.map(item => (
            <li key={item}>
                <Link to={`/portfolio/${item}`} className="icons__item">
                    <Icon name={item} className="icons__svg" />
                    <h5 className="icons__label">{item}</h5>
                </Link>
            </li>
        ));

    return <ul className="icons">{renderIcons()}</ul>;
};

export default IconsContainer;
