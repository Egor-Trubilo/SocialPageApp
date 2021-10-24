import React from "react";
import {addMessageActionCreator, updateMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: () => {
            dispatch(addMessageActionCreator())
        },
        sendMessage: (body) => {
            dispatch(updateMessageActionCreator(body));
        }
    }
}

const DialogsContainer = connect(mapDispatchToProps, mapStateToProps) (Dialogs);



export default DialogsContainer ;