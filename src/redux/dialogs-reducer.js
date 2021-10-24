const ADD_MESSAGE = 'ADD-MESSAGE';
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
    addNewMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newText = state.addNewMessageText;
            state.addNewMessageText = '';
            state.messagesData.push({
                id: 3,
                message: newText,
            });
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.addNewMessageText = action.newText;
            return state;
        default:
            return state;
    }


   /* if (action.type === ADD_MESSAGE) {
        let newText = state.addNewMessageText;
        state.addNewMessageText = '';
        state.messagesData.push({
            id: 3,
            message: newText,
        });
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        state.addNewMessageText = action.newText;
    }

    return state;*/
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateMessageActionCreator = (body) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: body})


export default  dialogsReducer;