const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  posts: [
    { id: 1, message: 'I Like this car', likesCount: 12, commentCount: 12 },
    { id: 2, message: "It's my firts car", likesCount: 1, commentCount: 12 },
    {
      id: 3,
      message: 'I need to sell my liver for having this car',
      likesCount: 2,
      commentCount: 12,
    },
    { id: 4, message: 'Send me more information', likesCount: 24, commentCount: 24 },
    { id: 5, message: 'Thank You!', likesCount: 45, commentCount: 12 },
  ],
  newPostText: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };

      let stateCopy = { ...state };
      stateCopy.posts = [...state.posts];
      stateCopy.posts.push(newPost);
      stateCopy.newPostText = '';
      return stateCopy;
    }

    case UPDATE_NEW_POST_TEXT: {
      let stateCopy = { ...state };
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }
    default:
      return state;
  }
};
export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export default profileReducer;
