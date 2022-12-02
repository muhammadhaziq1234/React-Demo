/* eslint-disable testing-library/prefer-find-by */
/* eslint-disable testing-library/no-wait-for-side-effects */
/**
 * @jest-environment jsdom
 */
import React from 'react';
import CustomInput from "../Input.js";
import { render, screen } from '@testing-library/react';
//use to get faker data

test("Logger Search Input Test Case", async () => {
    render(<CustomInput placeHolder="Employee Name" onChange={jest.fn()} value={"User Admin"} type="text" items={[]} label="Employee Name" name={"employeename"} />);
    expect(screen.getByLabelText(/employee name/i)).toHaveValue('User Admin');

    render(<CustomInput placeHolder="" onChange={jest.fn((value) => { })} value={"CERT_TITLE_DEED_PLOT"} className="" type="select" items={["CERT_TITLE_DEED_PLOT"]} label="Application type" name="applicationType" />);
    expect(screen.getByLabelText(/application type/i)).toHaveValue('CERT_TITLE_DEED_PLOT');

});



