import React from "react";
import d from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";




const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} key={d.id} id={d.id} />  );
    let messagesElements = state.messages.map( m => <Message message={m.message} key={m.id} /> );
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessageCreator();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBodyCreator(body);
    }
    if (props.isAuth==false) return <Redirect to={'/login'}/>;
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
                        <textarea  placeholder='Enter Message'
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