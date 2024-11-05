import React from "react";
import s from "./Post.module.css"


function Post (props){
    return(

        <div className={s.item}>
            <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Cutout.png" alt="" />
            {props.message}
            <div>
                <span><img src="https://icons.veryicon.com/png/o/miscellaneous/blackcat/comment-44.png" alt="" /></span>{props.commentCount}
            <span><img src="https://www.freepnglogos.com/uploads/like-png/facebook-favorite-favourite-like-thumbs-thumbs-20.png" alt="" /></span>{props.likesCount}
            </div>

        </div>
   
       
   
    )
}

export default Post;