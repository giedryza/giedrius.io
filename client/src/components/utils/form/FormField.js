import React from 'react';

const FormField = ({ id, fieldData, change }) => {
    const renderError = () => {
        let errorMessage;

        if (fieldData.validation && !fieldData.valid) {
            errorMessage = (
                <div className="form__error">{fieldData.errorMessage}</div>
            );
        }
        return errorMessage;
    };

    const renderTemplate = () => {
        let fieldTemplate;

        switch (fieldData.element) {
            case 'input':
                fieldTemplate = (
                    <div className="form__block">
                        {fieldData.showLabel ? (
                            <label className="form__label" htmlFor={id}>
                                {fieldData.config.label}
                            </label>
                        ) : null}
                        <input
                            id={id}
                            className="form__input"
                            {...fieldData.config}
                            value={fieldData.value}
                            onBlur={e => change({ e, id, blur: true })}
                            onChange={e => change({ e, id })}
                        />
                        {renderError()}
                    </div>
                );
                break;
            case 'textarea':
                fieldTemplate = (
                    <div className="form__block">
                        {fieldData.showLabel ? (
                            <label className="form__label" htmlFor={id}>
                                {fieldData.config.label}
                            </label>
                        ) : null}
                        <textarea
                            id={id}
                            className="form__input"
                            {...fieldData.config}
                            value={fieldData.value}
                            onBlur={e => change({ e, id, blur: true })}
                            onChange={e => change({ e, id })}
                        />
                        {renderError()}
                    </div>
                );
                break;
            default:
                fieldTemplate = null;
        }
        return fieldTemplate;
    };

    return renderTemplate();
};

export default FormField;
