import React from 'react';

const PrimaryButton = ({ visible, invisible, onClick }) => {
    return (
        <button className="btn-primary" onClick={onClick}>
            <span className="btn-primary--visible">{visible}</span>
            <span className="btn-primary--invisible">{invisible}</span>
        </button>
    );
};

export default PrimaryButton;
