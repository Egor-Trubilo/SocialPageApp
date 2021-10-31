import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}



const MyPostsContainer = connect(mapStateToProps, {
    addPostActionCreator,
    updateNewPostTextActionCreator,
})(MyPosts);

export default MyPostsContainer;