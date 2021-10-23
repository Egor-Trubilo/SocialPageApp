import React from "react";
import d from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <li>
            <NavLink to={path} className={d.dialog}>
                {props.name}
            </NavLink>
        </li>
    )

}

export default DialogItem ;