import React from 'react';
import PropTypes from "prop-types";

function TableRow({ items = [] }) {
    return (
        items?.map((item, key) => (
            <tr key={key || item.logId} className="text-left" data-testid='row-userTest'>
                <td>{item?.logId || ""}</td>
                <td>{item?.applicationType || ""}</td>
                <td>{item?.applicationId || ""}</td>
                <td>{item?.actionType || ""}</td>
                <td>{"-"}</td>
                <td>{item?.creationTimestamp || ""}</td>
            </tr>
        ))
    );
}
export default React.memo(TableRow);

TableRow.propTypes = {
    items: PropTypes.array,
};
