import React from "react";
import d from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateMessageActionCreator} from "../../redux/dialogs-reducer";



const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogsData.map(dialog => <DialogItem  name ={ dialog.name } id={dialog.id}/>)
    let messagesElements = state.messagesData.map(message => <Message message = { message.message }/>)


    let newMessageBody = state.addNewMessageText;


    let onSendMessageClick = () => {
        props.store.dispatch(addMessageActionCreator())

    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateMessageActionCreator(body));
    }

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
                        <input type="text" placeholder='Enter Message'
                               value={newMessageBody}
                               onChange={onNewMessageChange}
                        />
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Dialogs ;