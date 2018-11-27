import React from 'react';

const Backdrop = ({ onClick, show }) => {
    return show && <div className="backdrop" onClick={onClick} />;
};

export default Backdrop;
