import React from "react";
import "./form-input.styles.scss"


const FormInput = ({ handleChange, label, id, ...otherProps }) => (
    <div className="group">
        <input id={id} className="form-input" onChange={handleChange} {...otherProps} />
        <label htmlFor={`#${id}`} className={`${otherProps.value.length ? "shrink" : ""} form-input-label`}>
            {label}
        </label>

    </div>
)

export default FormInput