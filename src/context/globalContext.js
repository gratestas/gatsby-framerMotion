import React, { createContext, useReducer, useContext } from 'react'

const GlobalStateContext = createContext();
const GlobalDispatchContext = createContext();

// SPARE SOME TIME TO UNDERSTAND IT REALLY GOOD
const globalReducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_THEME': {
            return {
                ...state,
                currentTheme: action.theme

            }
        }
        case 'CURSOR_TYPE': {
            return {
                ...state,
                cursorType: action.cursorType

            }
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(globalReducer, {
        // here the useEffect hook is used for keeping theme set after page refresh
        currentTheme: window.localStorage.getItem('theme') == null ? 'dark' : window.localStorage.getItem('theme'),
        cursorType: false,
        cursorStyles: ['pointer', 'hovered'],
    })

    return (
        <GlobalDispatchContext.Provider value={dispatch}>
            <GlobalStateContext.Provider value={state}>
                {children}
            </GlobalStateContext.Provider>
        </GlobalDispatchContext.Provider>
    )
}

//Custom hooks to use dispatch and state
export const useGlobalStateContext = () => useContext(GlobalStateContext);
export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext);