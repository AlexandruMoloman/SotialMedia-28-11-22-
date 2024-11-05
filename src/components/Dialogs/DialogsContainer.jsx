import React from 'react';
import Dialogs from './Dialogs';
import { updateSendMessageCreator, sendMessageCreator } from '../../redux/dialogs-reducer';

function DialogsContainer(props) {
  let state = props.store.getState().dialogsPage;
  let onClickSend = () => {
    props.store.dispatch(sendMessageCreator());
  };

  let onClickMessageChange = (body) => {
    props.store.dispatch(updateSendMessageCreator(body));
  };

  return (
    <Dialogs
      sendMessage={onClickSend}
      updateNewMessageBody={onClickMessageChange}
      dialogsPage={state}
    />
  );
}

export default DialogsContainer;
