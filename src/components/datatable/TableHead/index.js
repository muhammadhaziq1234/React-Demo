import React from 'react'
import PropTypes from "prop-types";

function TableHead({ item, children, handleOnClick = () => { } }) {
    return <th onClick={handleOnClick}>{item} {children}</th>;
};

export default React.memo(TableHead);
TableHead.propTypes = {
    item: PropTypes.string,
    children: PropTypes.any,
    handleOnClick: PropTypes.func
};
