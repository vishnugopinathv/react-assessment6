import React,{useState,useContext} from "react";

const InputContext= React.createContext();

export const InputContextProvider=({children})=>{
    const[input,setInput]=useState([]);
    return(
        <InputContext.Provider value={{input,setInput}}>
            {children}
        </InputContext.Provider>
    )
}

export const useInputContextConsumer=()=>{
    return(useContext(InputContext));
}