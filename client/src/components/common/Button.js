import React from 'react';

const Button = ({ className, type, value, onClick }) => {
    return (
        <input
            className={className}
            type={type}
            value={value}
            onClick={onClick}
        />
    );
};

Button.defaultProps = {
    className: 'form__button'
};

export default Button;
