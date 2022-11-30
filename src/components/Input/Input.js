import React from 'react'

function CustomInput({ placeHolder, onChange, value, className, type = "text", items = [], label = "", name }) {
    if (type === "select") {
        return (
            <>
                <div className={className} style={{ width: "20%" }} >
                    <label htmlFor="select-input" className="form-label">{label}</label>
                    <select className="form-select" aria-label="Default select example" id="select-input" name={name} onChange={onChange} value={value}>
                        <option defaultValue={""}></option>
                        {items?.map(item => (
                            <option value={item} key={item}>{item}</option>
                        ))}
                    </select>
                </div>
            </>
        )
    }


    return (
        <>
            <div className={className}>
                <label htmlFor="simple-imput" className="form-label">{label}</label>
                <input id="simple-imput" className={`form-control`} type={type} placeholder={placeHolder} onChange={onChange} value={value} name={name} />
            </div>
        </>
    )

}
export default CustomInput