import { createContext, useReducer } from "react"
import Reducer from "./Reducer"

const INITIAL_STATE = {
    error:null,
    user:false,
    isFetching:false,
}

export const Context = createContext(INITIAL_STATE)

export const ContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE)
    return <Context.Provider
            value = {{
                error:state.error,
                user:state.user,
                isFetching:state.isFetching,
                dispatch,
            }}> 

            {children}
    </Context.Provider>

}