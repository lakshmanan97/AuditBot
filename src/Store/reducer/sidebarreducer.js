import * as actionType from '../actions/actionsType'
import {updateObject} from '../utility'

const initialState={

    pathname:'',
    userauthorization:{}

}

const sidebarreducer=(state=initialState,action)=>{
    switch(action.type){
    case actionType.UPDATEPATHNAME:
     return {...state,pathname:action.value}    
     case actionType.AUTHORIZATION:
        return {...state,userauthorization:action.value}       
    }
    
    return state;

}

export default sidebarreducer;