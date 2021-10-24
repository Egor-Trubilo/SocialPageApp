import React from "react";
import p from "./MyPosts.module.css"
import Post from "./Post/Post";





const MyPosts = (props) => {

    let postsElements =
        props.posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>)

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();

    }
    let onPostChange = () => {

        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div>
            <h2 className={p.postsBlock}>
                My posts
            </h2>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              ref={newPostElement}
                              value={props.newPostText}
                    />
                </div>
                <div>
                    <button onClick={ onAddPost }>Add post</button>
                </div>
                <div>
                    <button>Delete post</button>
                </div>

            </div>
            <div className={p.posts}>
                {postsElements}
            </div>

        </div>

    )
}

export default MyPosts;