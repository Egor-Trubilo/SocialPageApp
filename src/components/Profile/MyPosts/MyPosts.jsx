import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {
    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let addNewPost = (values) => {
        props.addPost(values.newPostText);
    }

    let MyPostsForm = (props) => {
        return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field
                           component={'textarea'}
                           name='newPostText'
                           placeholder='Enter post text'
                    />
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </form>
        )
    }
    const DialogsReduxForm = reduxForm({
        form: 'message'
    })(MyPostsForm)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <DialogsReduxForm onSubmit={addNewPost}/>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;