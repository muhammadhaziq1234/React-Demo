import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../layout/index';
import PageNotFound from "../pages/pageNotFound";
import LoggerSearch from '../pages/LoggerSearch';

/** Routes For Application  */

function AppRoutes() {
    return (
        <Routes>
            <Route
                path={"/"}
                element={
                    <Layout />
                }
            >
                <Route index element={<Navigate to={"/administration/logger-search"} />} />
                <Route path={"/administration/logger-search"} element={<LoggerSearch />} />
                <Route path="*" element={<PageNotFound />} />
            </Route>
        </Routes>
    )
}
export default AppRoutes;