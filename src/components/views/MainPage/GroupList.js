import React, {useEffect, useState, useRef} from "react";
import axios from 'axios';
import { useSelector } from "react-redux";
import './MainCSS.css'
import { NavLink } from "react-router-dom";


const GroupList = ({...restProps})=>{
    const [info, setinfo] = useState([]);
    const [selected, setSelected] = useState([]);
    const [modalOn, setModalOn] = useState(false);

    const nextId = useRef(11);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(res=>setinfo(res.data))
        .catch(err=>console.log(err));
    },[]);


    return(
        
        <div {...restProps}>
            {info.map(item=>{
                return(
                    <NavLink to={`/main/${item.title}`}>
                    <div >{item.title}</div>
                    </NavLink>
                )
            })}
            </div>
           
    )


}

export default GroupList;