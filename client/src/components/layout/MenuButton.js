import React from 'react';

const MenuButton = ({ onClick }) => (
    <button className="menu-btn" onClick={onClick}>
        <span className="menu-btn--line" />
        <span className="menu-btn--line" />
        <span className="menu-btn--line" />
    </button>
);

export default MenuButton;
