import React from "react";
import d from "./Message.module.css";

const Message = (props) => {
    return (
        <div>
            <div className={d.message}>{props.message}</div>
        </div>

    )
}

export default Message ;