import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";




let store = {
    _state: { },
            _callSubscriber(){
              alert('State Changed')
                     },
         getState(){
            return this._state;
         },
         subscribe(observer) {
            this._callSubscriber= observer;
            },
        
       dispatch(action){
this._state.profilePage=profileReducer(this._state.profilePage, action);//Считывание из Reducer
this._state.dialogsPage=dialogsReducer(this._state.dialogsPage, action);//Считывание из Reducer
this._callSubscriber(this._state);
     }
    }
    export default store;

