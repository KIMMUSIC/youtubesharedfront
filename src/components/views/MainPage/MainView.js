import React, {useEffect, useState, useRef} from "react";
import axios from 'axios';
import { useSelector } from "react-redux";
import './MainCSS.css'
import { useParams } from "react-router-dom";


const MainView = ({match})=>{
    const [info, setinfo] = useState([]);
    const [selected, setSelected] = useState([]);
    const [modalOn, setModalOn] = useState(false);

    const nextId = useRef(11);
    const {groupname} = useParams();



    return(
        
        <div>
            {groupname}
        </div>
    )


}

export default MainView;