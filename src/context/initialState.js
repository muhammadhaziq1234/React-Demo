/** Initail States For Logger Screen */
export const initialState = {
    headers: [{ name: "Log ID", sortBy: "", keyName: "logId" },
    { name: "Application Type", sortBy: "", keyName: "applicationType" },
    { name: "Application ID", sortBy: "", keyName: "applicationId" },
    { name: "Action", sortBy: "", keyName: "actionType" },
    { name: "Action Details", sortBy: "", keyName: "" },
    { name: "Date : Time", sortBy: "", keyName: "creationTimestamp" }],
    tableData: [],
    allData: [],
    number: 0,
    recordsFiltered: 0,
    recordsTotal: 0,
    totalPages: 0,
    currentPage: 1,
    pageSize: 10,
    employername: "",
    actionType: "",
    applicationType: "",
    fromDate: "",
    toDate: "",
    applicationId: "",
    actionTypes: [],
    applicationTypes: [],
};