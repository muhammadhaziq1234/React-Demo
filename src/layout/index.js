import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AppStateContext, AppDispatchContext } from "../context";
import appReducer from '../context/reducer';
import { initialState } from '../context/initialState';
import BreadCrumbComponent from '../components/BreadCrumb';
import Header from '../components/Header/header';

/** Main Page Layout Component */
function Layout() {

    const location = useLocation()
    const [state, dispatch] = React.useReducer(appReducer, initialState)

    return (
        <div className="container-fluid">
            <Header />
            <div className="container-fluid">
                <BreadCrumbComponent
                    list={location.pathname.split("/").map((path) => {
                        const to = `${location.pathname.split("/").slice(0, -1).join("/")}`;

                        return {
                            title: path,
                            to,
                        };
                    })}
                />

            </div>
            <section className="container-fluid">
                <AppDispatchContext.Provider value={dispatch}>
                    <AppStateContext.Provider value={state}>
                        <Outlet />
                    </AppStateContext.Provider>
                </AppDispatchContext.Provider>
            </section>
        </div>
    );
};

export default Layout;