import React from 'react';
import { usePagination, DOTS } from '../../../hooks/usePagination';
import { useAppState, useAppDispatch } from '../../../context';
// import './pagination.scss';
const Pagination = props => {
    const {
        recordsFiltered,
        currentPage,
        pageSize,

    } = useAppState();
    const dispatch = useAppDispatch()
    const paginationRange = usePagination({
        currentPage,
        recordsTotal: recordsFiltered,
        siblingCount: 1,
        pageSize
    });
    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        dispatch({ type: 'PAGINATION', currentPage: currentPage + 1 })
    };

    const onPrevious = () => {
        dispatch({ type: 'PAGINATION', currentPage: currentPage - 1 })
    };

    let lastPage = paginationRange[paginationRange.length - 1];
    return (
        <ul
            className={'pagination-container'}
        >
            <li
                className={`pagination-item ${currentPage === 1 && "disabled"
                    }`}
                onClick={onPrevious}
            >
                <div className="arrow left" />
            </li>
            {paginationRange.map(pageNumber => {

                if (pageNumber === DOTS) {
                    return <li className="pagination-item dots" key={pageNumber}>&#8230;</li>;
                }
                return (
                    <li
                        className={`pagination-item ${pageNumber === currentPage && "selected"
                            }`}
                        onClick={() => dispatch({ type: 'PAGINATION', currentPage: pageNumber })}
                        key={pageNumber}
                    >
                        {pageNumber}
                    </li>
                );
            })}
            <li
                className={`pagination-item ${currentPage === lastPage && "disabled"
                    }`}
                onClick={onNext}
            >
                <div className="arrow right" />
            </li>
        </ul>
    );
};

export default React.memo(Pagination);