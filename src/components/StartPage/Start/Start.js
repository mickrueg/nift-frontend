import React, { useEffect, useState } from 'react';
import './Start.css';
import Waves from '../../WaveMotion/Waves/Waves';
import PausePlay from '../../WaveMotion/PausePlay/PausePlay';

const Start = () => {

    const [startBodyTop, setStartBodyTop] = useState('blur')
    const [startBodyMiddle, setStartBodyMiddle] = useState('blur')
    const [startBodyBottom, setStartBodyBottom] = useState('blur')

    useEffect(()=>{
      setTimeout(() => {
        setStartBodyTop('clear')
      }, 100);
    })
    useEffect(()=>{
      setTimeout(() => {
        setStartBodyMiddle('clear')
      }, 1100);
    })
    useEffect(()=>{
      setTimeout(() => {
        setStartBodyBottom('clear')
      }, 1400);
    })

    return (
        <div className='Start-page'>
          <div className='Start-container'>
            <div className='Start-body'>
              <div className={startBodyTop}>
                <h1>The future<br></br>
                <b>says "hello"</b></h1>
              </div>
              <br></br>
              <div className={startBodyMiddle}>
                <h4>New to NFTs? <b><u>Start here</u></b></h4>
              </div>
              <br></br>
              <br></br>
              <br></br>
              <div className={startBodyBottom}>
                <h4>Login to your <b><u>account</u></b></h4>
                <h4>NFTs in the <b><u>news</u></b></h4>
              </div>
            </div>
          </div>
          <Waves />
          <PausePlay />
        </div>
    );
  };
  
  export default Start;
  
  
  /* <h2>CREATE <b>ACCOUNT</b></h2>
  <h4>Username</h4>
  <h2>NEWS</h2>
  <h3><b><u>LATEST</u></b> POPULAR</h3>
  <h5>Learn</h5>
  <h5>Explore</h5> */