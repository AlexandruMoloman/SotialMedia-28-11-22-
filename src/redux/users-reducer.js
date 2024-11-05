const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
  users: [
    {
      id: 1,
      followed: false,
      fullName: 'Alex',
      status: 'i am a King',
      location: { city: 'Cahul', country: 'Moldova' },
    },
    {
      id: 2,
      followed: true,
      fullName: 'Milana',
      status: 'i am a Princess',
      location: { city: 'Manerbio', country: 'Italy' },
    },
    {
      id: 3,
      followed: false,
      fullName: 'Oksana',
      status: 'i am a Queen',
      location: { city: 'Rivne', country: 'Ukraine' },
    },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:

    case UNFOLLOW:

    default:
      return state;
  }
};
export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({
  type: UNFOLLOW,
  userId,
});
export default usersReducer;
