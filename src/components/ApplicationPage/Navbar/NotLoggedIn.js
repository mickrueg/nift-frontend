import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../../App';
import './NotLoggedIn.css';

const NotLoggedIn = () => {

    const [NLIpanel, setNLIpanel] = useState('Not-Logged-In-panel')

    const navigate = useNavigate()

    // const {  }

    useEffect(()=>{
        if(localStorage.getItem('username')===null){
            setNLIpanel('Not-Logged-In-panel')
        } else {
            setNLIpanel('Not-Logged-In-panel hidden')
        }
    })

    return (
        <div className={NLIpanel}>
            <b className='react-link'
            onClick={()=>{
                navigate('/login', {replace:true})
            }}><u>Log in</u></b>&nbsp;to learn about NFTs
        </div>
    );
};

export default NotLoggedIn;