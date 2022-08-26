import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../../App';
import './NotLoggedIn.css';

const NotLoggedIn = () => {

    const [NLIpanel, setNLIpanel] = useState('Not-Logged-In-panel')

    const navigate = useNavigate()
    //Import Context
    const { 
        setNavbar,
        createForm, setCreateForm,
        loginForm, setLoginForm,
        username, setUsername
    } = useContext(AppContext)

    // const {  }

    useEffect(()=>{
        if(localStorage.getItem('username')===null){
            setNLIpanel('Not-Logged-In-panel')
        } else {
            setNLIpanel('Not-Logged-In-panel hidden')
        }
        console.log('checking')
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