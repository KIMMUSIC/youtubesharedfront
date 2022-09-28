import { REFRESHTOKEN, REGISTER_USER } from "../_actions/types";
import {LOGIN} from "../_actions/types";

export default function userReducer(state={}, action){
    switch(action.type){
        case  REGISTER_USER:
            return {...state, loginSuccess : action.payload};
        case LOGIN:
            return {...state, logincomplete : action.payload};
        case REFRESHTOKEN:
            return {...state, token : action.payload};
        default:
            return state;
    }
}