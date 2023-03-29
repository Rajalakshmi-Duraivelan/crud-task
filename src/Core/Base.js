import React from "react";
import { useHistory } from "react-router-dom";

export default function BaseApp({ title, styles, children }) {
    const history = useHistory();
    return (
        <div>
            <div>
                <div className="nav-styles">
                    <span>
                        <button className="nav-buttons"
                            onClick={() => history.push("/create/user")}>AddUser</button>
                    </span>
                    {/* <span>
                        <button className="nav-buttons" onClick={() => history.push("/hooks")}>
                            Hooks
                        </button>
                    </span> */}
                    <span>
                        <button className="nav-buttons"
                            onClick={() => history.push("/")}>Dashboard</button>
                    </span>

                </div>
                <div className="title">{title}</div>
            </div>
            <div className="children">{children}
                <footer>
                    Contact Us
                    <div>email : rajalakshmi@gmail.com</div>
                    <div>Phone : 789456123 </div>
                </footer>
            </div>
        </div>
    )
}