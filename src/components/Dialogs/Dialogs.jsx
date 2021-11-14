import React from 'react';
import d from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import DialogsForm from "./DialogsForm/DialogsForm";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>);

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }



    if (!props.isAuth) return <Redirect to={"/login"}/>;

    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                <ul>
                    {dialogsElements}
                </ul>
            </div>
            <div className={d.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <DialogsForm onSubmit={addNewMessage}/>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Dialogs;

























