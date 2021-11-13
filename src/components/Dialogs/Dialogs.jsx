import React from 'react';
import d from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>);
    let newMessageBody = state.newMessageBody;

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }
    const DialogsForm = (props) => {
        return (
            <form onSubmit={props.handleSubmit}>
                <Field placeholder='Enter Message'
                       value={newMessageBody}

                       component={'textarea'}
                       name='newMessageBody'
                />
                <div>
                    <button>Send</button>
                </div>
            </form>
        )
    }
    const DialogsReduxForm = reduxForm({
        form: 'message'
    })(DialogsForm)

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
                        <DialogsReduxForm onSubmit={addNewMessage}/>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Dialogs;

























