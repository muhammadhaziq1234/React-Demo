/* eslint-disable react-hooks/exhaustive-deps */
import React, { useLayoutEffect } from 'react'
import { useSearchParams, useLocation } from 'react-router-dom'
import { useAppDispatch, useAppState } from '../../context'
import CustomInput from '../Input/Input'
function FilterForm() {
    const location = useLocation()
    const dispatch = useAppDispatch()
    const { employername,
        actionType,
        applicationType,
        fromDate,
        toDate,
        applicationId, applicationTypes, actionTypes } = useAppState();
    let [searchParams, setSearchParams] = useSearchParams();

    useLayoutEffect(() => {
        let filterObject = {}
        searchParams.forEach((key, value) => {
            if (key) {
                filterObject = {
                    ...filterObject,
                    [value]: key
                }
            }

        });
        dispatch({ type: "LOCATION_INPUT_CHANGE", searchParams: searchParams, filterObject: filterObject })
    }, [location])

    const handleOnSubmit = (e) => {
        e.preventDefault()
        setSearchParams({
            ...(employername && { employername: employername }),
            ...(actionType && { actionType: actionType }),
            ...(applicationType && { applicationType: applicationType }),
            ...(fromDate && { fromDate: fromDate }),
            ...(toDate && { toDate: toDate }),
            ...(applicationId && { applicationId: applicationId }),
        })
    }

    return (
        <form className='d-inline-flex gap-2' onSubmit={handleOnSubmit}>
            <CustomInput placeHolder="e.g Admin User" onChange={(e) => { dispatch({ type: "INPUT_CHANGE", e: e }) }} value={employername} className="" type="text" label="Employee Name" name="employername" />
            <CustomInput placeHolder="" onChange={(e) => { dispatch({ type: "INPUT_CHANGE", e: e }) }} value={actionType} className="" type="select" items={actionTypes} label="Action type" name="actionType" />
            <CustomInput placeHolder="" onChange={(e) => { dispatch({ type: "INPUT_CHANGE", e: e }) }} value={applicationType} className="" type="select" items={applicationTypes} label="Application type" name="applicationType" />
            <CustomInput placeHolder="Select Date" onChange={(e) => { dispatch({ type: "INPUT_CHANGE", e: e }) }} value={fromDate} className="" type="date" label="From Date" name="fromDate" />
            <CustomInput placeHolder="Select Date" onChange={(e) => { dispatch({ type: "INPUT_CHANGE", e: e }) }} value={toDate} className="" type="date" label="To Date" name="toDate" />
            <CustomInput placeHolder="e.g 219841/2021" onChange={(e) => { dispatch({ type: "INPUT_CHANGE", e: e }) }} value={applicationId} className="" type="text" label="Application Id" name="applicationId" />
            <button type="submit" className="btn btn-primary btn btn-sm">Select Logger</button>
        </form>
    )
}
export default FilterForm