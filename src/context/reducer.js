import { sortArray } from './sortArray';

/** Reducer For Handle All State Actions */

function appReducer(state, action) {
    switch (action.type) {
        case 'GET_ALL_RECORD': {
            return {
                ...state,
                tableData: (action.auditLog || []).slice(0, 10),
                filteredData: action.auditLog || [],
                allData: action.auditLog || [],
                number: action.number || 0,
                recordsFiltered: action.recordsFiltered || 0,
                recordsTotal: action.recordsTotal || 0,
                totalPages: action.totalPages || 0,
                actionTypes: [...new Set((action.auditLog || []).map(item => { return item.actionType }) || [])].filter(function (el) {
                    return el != null;
                }),
                applicationTypes: [...new Set((action.auditLog || []).map(item => { return item.applicationType }) || [])].filter(function (el) {
                    return el != null;
                })

            };
        }

        case 'PAGINATION': {
            const newOffset = ((+action.currentPage - 1) * +state.pageSize) % +state.recordsTotal;
            const endOffset = newOffset + +state.pageSize;
            const currentItems = state.filteredData?.slice(newOffset, endOffset);
            return {
                ...state,
                currentPage: action.currentPage,
                tableData: currentItems
            };
        }

        case "INPUT_CHANGE": {
            const { name, value } = action.e.target
            return {
                ...state,
                [name]: [value]
            };
        }

        case "LOCATION_INPUT_CHANGE": {
            let newFilterData = state.allData.filter(person => {
                return Object.keys(action.filterObject).every(filter => {
                    if (filter === 'fromDate' && filter === "toDate") {
                        return (new Date(action.filterObject[filter]).getTime() < new Date(person.creationTimestamp).getTime() && new Date(action.filterObject[filter]).getTime() > new Date(person.creationTimestamp).getTime())
                    }
                    if (filter === 'fromDate') {
                        return new Date(action.filterObject[filter]).getTime() < new Date(person.creationTimestamp).getTime()
                    }
                    if (filter === 'toDate') {
                        return new Date(action.filterObject[filter]).getTime() > new Date(person.creationTimestamp).getTime()
                    }
                    return action.filterObject[filter]?.toString() === person[filter]?.toString()
                });
            })

            const currentPage = Math.ceil((+newFilterData?.length) / 10) < +state.currentPage ? Math.ceil((+newFilterData?.length || 0) / 10) : (+state.currentPage || 1);
            const newOffset = ((+currentPage - 1) * +state.pageSize) % (+newFilterData?.length || 0);
            const endOffset = +newOffset + +state.pageSize;
            const currentItems = newFilterData?.length > endOffset ? newFilterData?.slice(newOffset, endOffset) : newFilterData?.slice(newOffset, newFilterData?.length);

            return {
                ...state,
                employername: action.searchParams.get("employername") ?? "",
                actionType: action.searchParams.get("actionType") ?? "",
                applicationType: action.searchParams.get("applicationType") ?? "",
                fromDate: action.searchParams.get("fromDate") ?? "",
                toDate: action.searchParams.get("toDate") ?? "",
                applicationId: action.searchParams.get("applicationId") ?? "",
                tableData: currentItems,
                currentPage: currentPage,
                filteredData: newFilterData,
                recordsFiltered: newFilterData?.length || 0,
                recordsTotal: newFilterData?.length || 0
            };
        }

        case "SORT_BY": {
            const sortedData = sortArray(state.filteredData, action.keyName, action.value);
            const currentPage = Math.ceil((+sortedData?.length) / 10) < +state.currentPage ? Math.ceil((+sortedData?.length || 0) / 10) : (+state.currentPage || 1);
            const newOffset = ((+currentPage - 1) * +state.pageSize) % (+sortedData?.length || 0);
            const endOffset = +newOffset + +state.pageSize;

            return {
                ...state,
                headers: state.headers?.map(item => {
                    if (item.name === action.name) {
                        return {
                            ...item,
                            sortBy: action.value
                        }
                    }
                    return item
                }),
                tableData: sortedData?.slice(newOffset, endOffset) || [],
                currentPage: currentPage,
            };
        }

        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
}
export default appReducer;