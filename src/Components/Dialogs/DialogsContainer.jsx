import React from "react";
import d from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;


    let onSendMessageClick = () => {
        props.store.dispatch(addMessageActionCreator());

    }
    let onNewMessageChange = (body) => {
        props.store.dispatch(updateMessageActionCreator(body));
    }

    return (
        <Dialogs updateNewMEssageBody={onNewMessageChange}
                 sendMessage={onSendMessageClick}
                 dialogsPage={state}
        />

    )
}

export default DialogsContainer ;