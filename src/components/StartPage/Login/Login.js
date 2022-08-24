import React from 'react';
import './Login.css';
import Waves from '../../WaveMotion/Waves/Waves';
import PausePlay from '../../WaveMotion/PausePlay/PausePlay';

const Login = () => {
    return (
        <div className='Login-page'>
          <div className='Login-container'>
            <div className='Login-body'>

            </div>
          </div>
          <Waves />
          <PausePlay />
        </div>
    );
  };
  
  export default Login;