import React from "react";
import Post from "../Post/Post";
import s from "./MyPosts.module.css";


const MyPosts = (props) => {
    let postElements=
     props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} commentCount={p.commentCount}/>);
    
     let newPostElement = React.createRef();

    

    let addPost = () => {
        props.addPost()  
    }

    let onPostChange = () =>{
        let text= newPostElement.current.value;
        props.updateNewPostText(text);
        
    }
    
    return(
   <div className={s.top}>
   <h3>Lamborghini</h3> 
    <div>
        
        <div className={s.description}>
        <textarea className={s.textarea}  name="text" placeholder="Type here:" 
        ref={newPostElement} 
        value={props.newPostText}
        onChange={onPostChange}
        />
            </div>

        <div className={s.addPost}>
        <button className={s.button} onClick={ addPost }>Add post</button>
       
        </div>

    </div>
    <div className={s.posts}>
        {postElements}   
    </div>
   </div>
    )
}

export default MyPosts;