import React, { createContext, useContext,
    useReducer}from "react";
export const StateContext = createContext();
//wrap app and provide data layer 
export const StateProvider =({ reducer, initialState, children})=> (
        <StateContext.Provider value={useReducer(reducer,initialState)}>
                {children}
                </StateContext.Provider>
    );
    
    export const UseStateValue =()=> useContext(StateContext);