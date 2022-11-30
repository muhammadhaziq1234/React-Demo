import React from 'react'
const AppStateContext = React.createContext()
const AppDispatchContext = React.createContext()
function useAppState() {
    const context = React.useContext(AppStateContext)
    if (!context) {
        throw new Error('useAppState must be used within the AppProvider')
    }
    return context
}
function useAppDispatch() {
    const context = React.useContext(AppDispatchContext)
    if (!context) {
        throw new Error('useAppDispatch must be used within the AppProvider')
    }
    return context
}

export {
    AppStateContext,
    AppDispatchContext,
    useAppState,
    useAppDispatch
}