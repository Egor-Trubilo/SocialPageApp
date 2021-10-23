const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


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
            addNewMessageText: ''
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
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newPost;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 3,
                message: this._state.dialogsPage.addNewMessageText,
            };
            this._state.dialogsPage.messagesData.push(newMessage);
            this._state.dialogsPage.addNewMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.addNewMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}


export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateMessageActionCreator = (body) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: body})






window.store = store;


export default store;