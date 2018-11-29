import React from 'react';

const MenuButton = ({ drawerToggle }) => (
    <button className="menu-btn" onClick={drawerToggle}>
        <span className="menu-btn--line" />
        <span className="menu-btn--line" />
        <span className="menu-btn--line" />
    </button>
);

export default MenuButton;
