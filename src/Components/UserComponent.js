import React from "react";
import { useHistory } from "react-router-dom";
import { AppState } from "../Context/AppContext";
import BaseApp from "../Core/Base";

export default function UserComponent() {
    const { user, setUser } = AppState();
const history = useHistory();
    // delete user function
    const delUser = (idx)=>{
        const alterList = user.filter((per)=> per.id !== idx);
        setUser(alterList);
    }

    return (
        <BaseApp
            title="Student Details">
            <div  className="user-content">
                {
                user && 
                (user?.map((person,idx)=>(
                    <div key = {idx} className="user-card">
                        <h1>{person.name}</h1>
                        <p>Batch: {person.batch}</p>
                        <p>Email: {person.email}</p>
                        <p>Experience: {person.experience}</p>
                        <div className="btn-group">                            
                            <button className="btn" onClick={()=>history.push(`/edit/${person.id}`)}>Edit</button>
                            <button className="btn" onClick={()=>history.push(`/user/${idx}`)}>View</button>
                            <button className="btn"
                            onClick={()=>delUser(person.id)}>Delete</button>
                        </div>
                    </div>
                )
                ))}
            </div>
        </BaseApp>
    )
}