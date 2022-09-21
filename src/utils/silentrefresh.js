import axios from "axios";
import { loginUser } from "../_actions/userAction";
import {useDispatch} from "react-redux";



function Refreshtoken(){
    const dispath = useDispatch();
    /*axios.get('/silent-refresh')
    .then(data=>{
        dispath(loginUser());
    }
    )
    .catch(error =>{

    })*/
    dispath(loginUser());
}

export default Refreshtoken;