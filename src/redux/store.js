
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";


let store = {
    _state: {
        dialogsPage: {
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
        },
        profilePage: {
            posts: [
                {id: 1, message: 'Hi how are you?', likesCount: 11},
                {id: 2, message: 'My first post!', likesCount: 24},
            ],
            newPostText: ''
        },
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {

    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch: function (action) {
        this._state.dialogsPage= dialogsReducer(this._state.dialogsPage, action);
        this._state.profilePage= profileReducer(this._state.profilePage, action);

        this._callSubscriber(this._state);
    }
}









window.store = store;


export default store;