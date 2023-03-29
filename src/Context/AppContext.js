import React, { createContext, useContext, useState } from "react";
import { studentData } from "../Data/StudentData";

const AppContext = createContext();

const AppProvider = ({children}) => {
    const [user,setUser] = useState(studentData);
    return (
        <AppContext.Provider
            value={{
                user,
                setUser
            }}>
            {children}
        </AppContext.Provider>
    )
}

export const AppState = () =>{
    return useContext(AppContext)
}

export default AppProvider