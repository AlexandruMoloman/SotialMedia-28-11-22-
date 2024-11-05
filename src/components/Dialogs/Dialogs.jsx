import React from "react";
import s from './Dialogs.module.css';
import Dialogitem from "../Dialogitem/Dialogitem";
import Message from "../Message/Message";
import { updateSendMessageCreator, sendMessageCreator } from "../../redux/dialogs-reducer";


function Dialogs (props){
let state = props.dialogsPage;
let dialogsElements = state.dialogs.map(d => <Dialogitem name={d.name} id={d.id} i={s.logo}/>);
let messagesElements = state.messages.map(m => <Message message={m.message}/>);
let newMessageBody = state.newMessageBody;

 let onClickSend= () =>{
     props.sendMessage();
 }

 let onClickMessageChange = (e) =>{
 let body = e.target.value;
 props.updateNewMessageBody(body);
 }

return(
    <div className={s.dialogs}>
        
       <div className={s.userLogo}> 
    
    <img src="https://cdn-icons-png.flaticon.com/512/219/219986.png" alt="" className={s.logo} />
    <img src="https://cdn-icons-png.flaticon.com/512/219/219969.png" alt="" className={s.logo} />
    <img src="https://cdn-icons-png.flaticon.com/512/219/219989.png" alt="" className={s.logo} />
    <img src="https://cdn-icons-png.flaticon.com/512/3011/3011276.png" alt="" className={s.logo} />
    <img src="https://cdn-icons-png.flaticon.com/512/219/219988.png" alt="" className={s.logo} />
        <img src="https://cdn-icons-png.flaticon.com/512/219/219986.png" alt="" className={s.logo} />
    </div>  

       <div className={s.dialogItems}>
        {dialogsElements}
       </div>

       <div className={s.line}></div>

       <div className={s.messages}>
       {messagesElements}

       <div className={s.areaText}>
       <textarea 
       className={s.textarea} 
       placeholder="Enter your message here:"
       value={newMessageBody}
      onChange={onClickMessageChange}
       ></textarea></div>

       <div className={s.buttonPosition}>
       <button className={s.button} 
       onClick={onClickSend}
       >Send</button>
       
       </div>
       </div>
    </div>
)
}

export default Dialogs;