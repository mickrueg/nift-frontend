import React from 'react';
import './Start.css';
import Waves from '../../WaveMotion/Waves/Waves';
import PausePlay from '../../WaveMotion/PausePlay/PausePlay';

const Start = () => {
    return (
        <div className='Start-page'>
          <div className='Start-container'>
            <div className='Start-body'>
              <h1>The future<br></br>
              <b>says "hello"</b></h1>
              <br></br>
              <h4>New to NFTs? <b><u>Start here</u></b></h4>
              <br></br>
              <br></br>
              <br></br>
              <h4>Login to your <b><u>account</u></b></h4>
              <h4>NFTs in the <b><u>news</u></b></h4>
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