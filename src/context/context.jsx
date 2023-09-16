/* eslint-disable react/prop-types */
import { useReducer, createContext } from "react";
import { Login_Reducer } from "./reducer";


const initial_state = {
  user: null,
  error: false,
  loading: false,
}

export const Context = createContext(initial_state);

export const ContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(Login_Reducer, initial_state);

  return(
    <Context.Provider value={{
      user: state.user,
      error: state.error,
      loading :  state.loading,
      dispatch
    }}>
      {children}
    </Context.Provider>
  )
}
