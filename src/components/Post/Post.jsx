import classes from "./Post.module.css"


export default function Post(props) {
    return (
        <div className={classes.container}>
            <div className={classes.postHead}>
                <div className={classes.postUser}>
                    <div className={classes.postUserImg}>
                        <img src={props.postUserImg} alt=""/>
                    </div>
                    <div className={classes.postUserName}>
                        <p>{props.userName}</p>
                    </div>
                </div>
                <div className={classes.postDate}>
                    <p>{props.postDate}</p>
                </div>
            </div>
            <div className={classes.postHeading}>
                <p>{props.postHeading}</p>
            </div>
            <div className={classes.postImg}>
                <img src={props.postImg} alt=""/>
            </div>

            <div className={classes.postDesc}>
                <p>{props.postDescription}</p>
            </div>
            <div className={classes.postLikes}>
                <div className={classes.likesBox}>
                    <img src={props.likeIcon} alt=""/>
                    <p>Likes</p>
                    <p>{props.postLikeCount}</p>
                </div>
                <div className={classes.commentBox}>
                    <img src={props.commentIcon} alt=""/>
                    <p>comments</p>
                    <p>{props.postCommentCount}</p>
                </div>
            </div>
        </div>
    )
}