const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
  dialogs: [
    { id: 1, name: 'Alex' },
    { id: 2, name: 'Milana' },
    { id: 3, name: 'Oksana' },
    { id: 4, name: 'Sveta' },
    { id: 5, name: 'Valera' },
    { id: 6, name: 'Andrei' },
  ],

  messages: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'Did you seen  a new Labmba?' },
    { id: 3, message: 'No' },
    { id: 4, message: 'Looser' },
    { id: 5, message: 'Thank You! Kindndes' },
    { id: 6, message: 'Come outside' },
  ],
  newMessageBody: '',
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: {
      let stateCopy = { ...state };
      stateCopy.messages = { ...state.messages };
      stateCopy.newMessageBody = action.body;
      return stateCopy;
    }
    case SEND_MESSAGE: {
      let stateCopy = { ...state };
      let body = stateCopy.newMessageBody; //Присвоение отдельной переменной body
      stateCopy.newMessageBody = ''; //Зануление
      stateCopy.messages.push({ id: 6, message: body });
      return stateCopy;
    }
    default:
      return state;
  }
};
export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateSendMessageCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default dialogsReducer;
