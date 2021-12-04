import React from "react";
import PropTypes from "prop-types";

const TextArea = ({ label, type, name, value, onChange, error }) => {
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };
    const getInputClasses = () => {
        return "form-control" + (error ? " is-invalid" : "");
    };
    return (
        <div className="bm-4">
            <label htmlFor={name}>{label}</label>
            <div className="input-group has-validation">
                <textarea
                    id={name}
                    rows="3"
                    onChange={handleChange}
                    name={name}
                    value={value}
                    className={getInputClasses()}
                ></textarea>
            </div>
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};

TextArea.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string
};
export default TextArea;
