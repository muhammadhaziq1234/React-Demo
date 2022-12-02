import React from 'react';

function CustomInput({ placeHolder, onChange, value, className, type = "text", items = [], label = "", name }) {
    if (type === "select") {
        return (
            <div className={`form-group ${className}`} style={{ width: "15%" }} >
                <label htmlFor="select-input" className="form-label">{label}</label>
                <select className="form-select" aria-label="Default select example" id="select-input" name={name} onChange={onChange} value={value}>
                    <option defaultValue={""}></option>
                    {items?.map(item => (
                        <option value={item} key={item}>{item}</option>
                    ))}
                </select>
            </div>
        );
    }


    return (
        <div className={`form-group ${className}`}>
            <label htmlFor={name} className="form-label">{label}</label>
            <input id={name} className={`form-control`} type={type} placeholder={placeHolder} onChange={onChange} value={value} name={name} />
        </div>
    );

}
export default CustomInput;