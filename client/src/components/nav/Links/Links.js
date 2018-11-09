import React from 'react';
import { Link } from 'react-router-dom';

const Links = props => {
    return (
        <ul>
            <li>
                <Link to="/products" onClick={props.click}>
                    Products
                </Link>
            </li>
            <li>
                <Link to="/users" onClick={props.click}>
                    Users
                </Link>
            </li>
        </ul>
    );
};

export default Links;
