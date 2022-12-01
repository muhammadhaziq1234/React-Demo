/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import TableHead from "../../components/datatable/TableHead"
import TableRow from '../../components/datatable/TableRow';
import Pagination from '../../components/datatable/pagination';
import { usePromise } from '../../hooks/usePromise';
import { getLoogerData } from '../../context/apiCall';
import { useAppDispatch, useAppState } from "../../context"
import FilterForm from '../../components/FilterForm';
import { useSearchParams } from 'react-router-dom'

function LoggerSearch() {
    const { headers, tableData } = useAppState();
    const dispatch = useAppDispatch()
    let [, setSearchParams] = useSearchParams();

    const { loading } = usePromise(
        () =>
            getLoogerData().then((docs) => (
                dispatch({
                    type: 'GET_ALL_RECORD', auditLog: (docs.data.result.auditLog || []),
                    number: docs.data.result.number,
                    recordsFiltered: docs.data.result.recordsFiltered,
                    recordsTotal: docs.data.result.recordsTotal,
                    totalPages: docs.data.result.totalPages
                })
            )).catch(err => {
                console.log(err)
            }),
        [],
    );
    useEffect(() => {
        setSearchParams({})
    }, [])
    return (<>
        {loading && "Loading..."}
        {!loading && (
            <>
                <div className='d-flex'>
                    <FilterForm />
                </div>
                <div className='mt-2' data-testid='userTest'>
                    <table className="table table-bordered table-responsives">
                        <thead>
                            <tr>
                                {headers?.map((item, key) => (
                                    <TableHead item={item} key={key} />
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            <TableRow items={tableData} />
                        </tbody>
                    </table>
                    <Pagination />
                </div>
            </>
        )}


    </>)
}
export default LoggerSearch