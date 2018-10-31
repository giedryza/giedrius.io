import React from 'react';

const TextArea = ({ name, placeholder, value, className, onChange }) => {
    return (
        <textarea
            className={className}
            rows="6"
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
        />
    );
};

export default TextArea;
