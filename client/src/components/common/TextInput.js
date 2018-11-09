import React from 'react';

const TextInput = ({ name, type, value, placeholder, className, onChange }) => {
    return (
        <input
            className={className}
            type={type}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
        />
    );
};

TextInput.defaultProps = {
    type: 'text',
    className: 'form__input'
};

export default TextInput;
