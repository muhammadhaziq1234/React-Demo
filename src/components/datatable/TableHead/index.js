import React from 'react'

function TableHead({ item, children }) {
    return <th>{item} {children}</th>;
};

export default React.memo(TableHead);