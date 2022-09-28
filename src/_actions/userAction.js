import { REGISTER_USER } from "./types";
import {request} from "../utils/axios";
import {LOGIN} from "./types";

const USER_URL = "/api/user";

export function registerUser(dataToSubmit){
    //const data = request("post", USER_URL + "/register", dataToSubmit);
    const data = {};
    return {
        type : REGISTER_USER,
        payload : {data},
    };
}

export function loginUser(data){
    const a = request("post", "/api/login", data);
    a.then((data)=>{
        localStorage.setItem('id', data.userName)
    })
    return {
        type : LOGIN,
        payload : a,
    };
}