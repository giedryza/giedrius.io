import React from 'react';

const MenuButton = ({ onClick }) => (
    <button className="hamburger" onClick={onClick}>
        <span className="hamburger--line" />
        <span className="hamburger--line" />
        <span className="hamburger--line" />
    </button>
);

export default MenuButton;
