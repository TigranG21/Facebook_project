import React from "react";
import modClasses from "./Feed.module.css"
import Post from "../Post/Post";
import state from "../../redux/state";

export function Feed(props){
    return(
        <div className={modClasses.FeedCount}>
            <div className={modClasses.postsBox}>
                {createPosts(state.feedPages.posts)}
            </div>
            <div className={modClasses.addPosts}>

            </div>
        </div>
    )
}

function createPosts(posts) {
    return posts.map(item => {
        return (
            <Post postUserImg={item.postUserImg}
                  userName={item.postUserName}
                  postDate={item.postDate}
                  postImg={item.postImg}
                  postHeading={item.postHeading}
                  postDescription={item.postDescription}
                  likeIcon={item.likeIcon}
                  postLikeCount={item.postLikeCount}
                  postCommentCount={item.postCommentCount}
                  commentIcon={item.commentIcon}
            />
        )
    }
        )

}
