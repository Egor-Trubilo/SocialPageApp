const SEND_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


let initialState = {
    dialogsData: [
        {id: 1, name: 'Egor'},
        {id: 2, name: 'Natallia'},
        {id: 3, name: 'Sergey'},
    ],
    messagesData: [
        {id: 1, message: 'H1'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'What is your name'},
    ],
    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messagesData.push({
                id: 3,
                message: body,
            });
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageBody = action.body;
            return state;
        default:
            return state;
    }


   /* if (action.type === SEND_MESSAGE) {
        let newText = state.newMessageBody;
        state.newMessageBody = '';
        state.messagesData.push({
            id: 3,
            message: newText,
        });
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        state.newMessageBody = action.newText;
    }

    return state;*/
}

export const addMessageActionCreator = () => ({type: SEND_MESSAGE})
export const updateMessageActionCreator = (body) => ({type: UPDATE_NEW_MESSAGE_TEXT, body: body})


export default  dialogsReducer;