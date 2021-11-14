import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validator";
import {Textarea} from "../../common/FormsControl/FormsControl";

const MyPosts = (props) => {
    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let addNewPost = (values) => {
        props.addPost(values.newPostText);
    }
  const maxLength10 = maxLengthCreator(10)
    let MyPostsForm = (props) => {
        return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field
                           component={Textarea}
                           name='newPostText'
                           placeholder='Enter post text'
                           validate={[required, maxLength10]}
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