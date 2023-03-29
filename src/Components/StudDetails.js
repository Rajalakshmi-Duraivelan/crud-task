import React from "react";
import { useParams } from "react-router-dom";
import { AppState } from "../Context/AppContext";
import BaseApp from "../Core/Base";

export function StudDetails(){
    const{user} = AppState()
    const {id}=useParams();
    const person=user[id];
    return (
        <BaseApp
        title = {"Student details"}
        >
        <div  className="user-content">
                
                    <div className="user-card">
                        <h1>{person.name}</h1>
                        <p>Batch: {person.batch}</p>
                        <p>email: {person.email}</p>
                        <p>Experience: {person.experience}</p>
                    </div>
                
            </div>
    </BaseApp>
    )
}