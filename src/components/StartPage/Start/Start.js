import React, { useContext, useEffect, useState } from 'react';
import './Start.css';
import Waves from '../../WaveMotion/Waves/Waves';
import PausePlay from '../../WaveMotion/PausePlay/PausePlay';
import { AppContext } from '../../../App';
import { Link, useNavigate } from 'react-router-dom';

const Start = () => {

    const navigate = useNavigate();

    //Stateful variables
    const [startBody, setStartBody] = useState('Start-body')
    const [startBodyTop, setStartBodyTop] = useState('blur')
    const [startBodyMiddle, setStartBodyMiddle] = useState('blur')
    const [startBodyBottom, setStartBodyBottom] = useState('blur')

    //Import Context
    const { 
      setNavbar,
      setCreateForm,
      setLoginForm
    } = useContext(AppContext)

    //Animation on page load    
    useEffect(()=>{
      setNavbar('Navbar-page hidden')
      setTimeout(() => {
        setStartBodyTop('clear')
      }, 100);
      setTimeout(() => {
        setStartBodyMiddle('clear')
      }, 1100);
      setTimeout(() => {
        setStartBodyBottom('clear')
      }, 1400);
    })

    //Animation on page exit
    function exitPage(navigateTo){
      setStartBody('Start-body blur')
      setTimeout(() => {
        navigate(navigateTo, { replace: true })
      }, 1000);
    }

    return (
        <div className='Start-page'>
          <div className='Start-container'>
            <div className={startBody}>
              <div className={startBodyTop}>
                <h1>The future<br></br>
                <b>says "hello"</b></h1>
              </div>
              <br></br>
              <div className={startBodyMiddle}>
                <h4>New to NFTs?&nbsp;
                  <b
                    className='react-link'
                    onClick={()=>{
                      exitPage("/login");
                      setCreateForm('Login-form');
                      setLoginForm('Login-form hide');
                    }}><u>Start here</u></b></h4>
              </div>
              <br></br>
              <br></br>
              <br></br>
              <div className={startBodyBottom}>
                <h4>Login to your                   <b
                    className='react-link'
                    onClick={()=>{
                      console.log(localStorage.getItem('username'))
                      if(localStorage.getItem('username')===null){
                        exitPage("/login");
                        setCreateForm('Login-form hide');
                        setLoginForm('Login-form');
                      } else {
                        exitPage("/learn")
                      }
                    }}><u>account</u></b></h4>
                <h4>NFTs in the <b
                className='react-link'
                onClick={()=>{
                  exitPage("/news")
                }}><u>news</u></b></h4>
              </div>
            </div>
          </div>
          <Waves />
          <PausePlay />
        </div>
    );
  };
  
  export default Start;