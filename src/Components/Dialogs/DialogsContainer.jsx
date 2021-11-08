import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth,
    }
}

const DialogsContainer = connect(mapStateToProps, {
    sendMessageCreator,
    updateNewMessageBodyCreator,
})(Dialogs);

export default DialogsContainer;