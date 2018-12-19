export const updateField = (element, formdata) => {
    // copy state
    const newFormdata = { ...formdata };
    const newElement = { ...newFormdata[element.id] };

    // [formdata: change] value
    newElement.value = element.e.target.value;

    // validate field if touched
    if (element.blur) {
        let validData = validateField(newElement, formdata);

        // [formdata: change] valid, errorMessage
        newElement.valid = validData[0];
        newElement.errorMessage = validData[1];
    }

    // [formdata: change] touched
    newElement.touched = element.blur;

    // set new state of formdata
    newFormdata[element.id] = newElement;

    return newFormdata;
};

export const validateField = (element, formdata = []) => {
    let isValid = [true, ''];

    // check email with regex
    if (element.validation.email) {
        const valid = /\S+@\S+\.\S+/.test(element.value);
        const message = `${!valid ? 'Email is not valid' : ''}`;

        isValid = !valid ? [valid, message] : isValid;
    }

    // check required (last one)
    if (element.validation.required) {
        const valid = element.value.trim() !== '';
        const message = `${!valid ? 'Field is required' : ''}`;

        isValid = !valid ? [valid, message] : isValid;
    }

    return isValid;
};

export const generateData = formdata => {
    const dataToSubmit = {};

    for (let key in formdata) {
        if (key === 'techStack') {
            dataToSubmit[key] = formdata[key].value.split(',');
        } else {
            dataToSubmit[key] = formdata[key].value;
        }
    }

    return dataToSubmit;
};

export const isFormValid = formdata => {
    let isValid = true;

    // check if field & form is valid
    for (let key in formdata) {
        isValid = formdata[key].valid && isValid;
    }

    return isValid;
};

export const resetFields = formdata => {
    const newFormdata = { ...formdata };

    for (let key in newFormdata) {
        newFormdata[key].value = '';
        newFormdata[key].valid = false;
        newFormdata[key].touched = false;
        newFormdata[key].errorMessage = '';
    }

    return newFormdata;
};

export const populateFields = (formdata, fields) => {
    const newFormdata = { ...formdata };
    for (let key in newFormdata) {
        if (key === 'techStack') {
            newFormdata[key].value = fields[key].join(',');
        } else {
            newFormdata[key].value = fields[key];
        }

        newFormdata[key].valid = true;
        newFormdata[key].touched = true;
        newFormdata[key].errorMessage = '';
    }
    return newFormdata;
};
