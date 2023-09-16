/* eslint-disable react/prop-types */
import { useReducer, createContext, useEffect } from "react";
import { Login_Reducer } from "./reducer";

const initial_state = {
  user:  null,
  error: false,
  loading: false,
}

export const Context = createContext(initial_state);

export const ContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(Login_Reducer, initial_state);

  useEffect (() => {
    localStorage.setItem('user', JSON.stringify(state))
  }, [state])

  return(
    <Context.Provider value={{
      user: state,
      // error: state.user.error,
      // loading :  state.user.loading,
      dispatch
    }}>
      {children}
    </Context.Provider>
  )
}
