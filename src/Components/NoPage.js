import React from "react";
import { useHistory } from "react-router-dom";

export function NoPage(){
    const history = useHistory();
    return(
        <div>
            <h1>404 Page Not Found</h1>
            <button 
            onClick={()=>history.push("/")}>
            Go to Dashboard
            </button>
        </div>
    )
}