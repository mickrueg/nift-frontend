import React, { useContext, useState } from 'react';
import { AppContext } from '../../../App';
import "./PausePlay.css"

const PausePlay = () => {

    //Import Context
    const { 
        waveMotion, setWaveMotion
    } = useContext(AppContext)

    //Create State
    const [pauseOrPlayButton, setPauseOrPlayButton] = useState('pause_circle')

    const pauseOrPlay = () =>{
        if(waveMotion===''){
            setWaveMotion('pause')
            setPauseOrPlayButton('play_circle')
        } else {
            setWaveMotion('')
            setPauseOrPlayButton('pause_circle')  
        } 
    }

    return (
        <span className='pauseOrPlay material-symbols-outlined' onClick={()=>{
            pauseOrPlay();
        }}>{pauseOrPlayButton}</span>
    );
};

export default PausePlay;