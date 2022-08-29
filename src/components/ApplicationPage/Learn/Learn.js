import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Learn.css';
import { AppContext } from '../../../App';


const Learn = () => {

    //Import Context
    const { 
        setNavbar,
        navLearn, setNavLearn,
        setNavNews,
        setNavExplore,
        setNavSaved,
        createForm, setCreateForm,
        loginForm, setLoginForm
    } = useContext(AppContext)

    //Create State
    const [learnPage, setLearnPage] = useState('Learn-page hidden')

    useEffect(()=>{
        setLearnPage('Learn-page hidden')
        setTimeout(() => {
            setLearnPage('Learn-page')
        }, 100);
        setNavbar("Navbar-page")
        setNavLearn('navbar-item')
        setNavNews('navbar-item not-selected')
        setNavExplore('navbar-item not-selected')
        setNavSaved('navbar-item not-selected')
        console.log('effect')
    },[])

    return (
        <div className={learnPage}>
            <div className='Learn-container'>
                <h2>LEARN</h2>
                <hr></hr>
                <iframe className="youtube-video" src="https://www.youtube.com/embed/NNQLJcJEzv0" title="NFT Explained In 5 Minutes | What Is NFT? - Non Fungible Token | NFT Crypto Explained | Simplilearn" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <div className='Learn-text'>
                <b>WHAT IS AN NFT?</b><br></br>
                An NFT ("Non-fungible token") is simply a digital record representing ownership over a tangible or intangible item. These tokens are commonly used for art, music, memes, pictures, or virtual goods.
                </div>
            </div>
        </div>
    );
};

export default Learn;