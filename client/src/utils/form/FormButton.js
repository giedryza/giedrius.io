import React from 'react';

const FormButton = ({ className, type, value, onClick }) => {
    return (
        <input
            className={className}
            type={type}
            value={value}
            onClick={onClick}
        />
    );
};

FormButton.defaultProps = {
    className: 'form__button'
};

export default FormButton;
