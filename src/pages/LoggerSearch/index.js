/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import TableHead from "../../components/datatable/TableHead";
import TableRow from '../../components/datatable/TableRow';
import Pagination from '../../components/datatable/pagination';
import FilterForm from '../../components/FilterForm';
import Loader from '../../components/Loader';
import { usePromise } from '../../hooks/usePromise';
import { getLoogerData } from '../../context/apiCall';
import { useAppDispatch, useAppState } from "../../context"
import { useSearchParams } from 'react-router-dom';
import { ReactComponent as UpDown } from '../../assets/icons/Up-down.svg';
import { ReactComponent as Up } from '../../assets/icons/Up.svg';
import { ReactComponent as Down } from '../../assets/icons/Down.svg';

function LoggerSearch() {
    /** Get State From Context */
    const { headers, tableData } = useAppState();

    /** Get Dispatch From Context */
    const dispatch = useAppDispatch();

    /** Get Search Params From Query URL */
    let [, setSearchParams] = useSearchParams();

    /** Promise API Call Function Return Data, Loading State, Refetch Function */
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
                console.log(err);
            }),
        [],
    );

    /** Call When Change In Search Query Params */
    useEffect(() => {
        setSearchParams({});
    }, []);

    return (<>
        {loading && <Loader />
        }
        {!loading && (
            <>
                <div className='d-flex'>

                    {/** Filter Form Component */}
                    <FilterForm />
                </div>
                <div className='mt-4' data-testid='userTest'>
                    <table className="table table-bordered table-responsives">
                        <thead>
                            <tr>
                                {headers?.map((item, key) => (
                                    <TableHead item={item.name} key={key} handleOnClick={() => dispatch({ type: "SORT_BY", name: item.name, value: item.sortBy === "" ? "asc" : item.sortBy === "asc" ? "desc" : "", keyName: item.keyName })}>
                                        <span className="ml-2" >{item.sortBy === "asc" ? <Up /> : item.sortBy === "desc" ? <Down /> : <UpDown />}</span>
                                    </TableHead>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {tableData && tableData?.length > 0 && <TableRow items={tableData} />}
                            {tableData && tableData?.length === 0 && <tr class="no-data">
                                <td colSpan="14" className="text-center">No data available in table</td>
                            </tr>}
                        </tbody>
                    </table>
                    <Pagination />
                </div>
            </>
        )}


    </>);
};

export default LoggerSearch;