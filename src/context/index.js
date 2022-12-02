import React from 'react';
const AppStateContext = React.createContext();
const AppDispatchContext = React.createContext();

/** Use For Get Context States */

function useAppState() {
    const context = React.useContext(AppStateContext)
    if (!context) {
        throw new Error('useAppState must be used within the AppProvider')
    }
    return context
};
/** Use For Get Context Dispatch Function */
function useAppDispatch() {
    const context = React.useContext(AppDispatchContext)
    if (!context) {
        throw new Error('useAppDispatch must be used within the AppProvider')
    }
    return context
};

export {
    AppStateContext,
    AppDispatchContext,
    useAppState,
    useAppDispatch
};