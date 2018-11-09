import React from 'react';

const Backdrop = ({ drawerClose }) => {
    return <div className="backdrop" onClick={drawerClose} />;
};

export default Backdrop;
