import React, { useContext, useState } from 'react';
import { AppContext } from '../../../App';
import "./PausePlay.css"

const PausePlay = () => {

    //Import Context
    const { 
        waveMotion, setWaveMotion
    } = useContext(AppContext)

    //Variables
    const pauseButton = (
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5zm3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5z"/>
    )

    const playButton = (
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
    )

    //Create State
    const [pauseOrPlayButton, setPauseOrPlayButton] = useState(pauseButton)

    //Functions
    const pauseOrPlay = () =>{
        if(waveMotion==='wave-motion'){
            setWaveMotion('wave-motion pause')
            setPauseOrPlayButton(playButton)
        } else {
            setWaveMotion('wave-motion')
            setPauseOrPlayButton(pauseButton)  
        } 
    }

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" className="pauseOrPlay" viewBox="0 0 16 16"
        onClick={()=>{
            pauseOrPlay();
        }}>
            {pauseOrPlayButton}
        </svg>
    );
};

export default PausePlay;