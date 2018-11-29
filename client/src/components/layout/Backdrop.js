import React from 'react';

const Backdrop = ({ onClick, show }) =>
    show && <div className="backdrop" onClick={onClick} />;

export default Backdrop;
