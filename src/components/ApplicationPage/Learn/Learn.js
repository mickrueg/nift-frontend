import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Learn.css';
import { AppContext } from '../../../App';


const Learn = () => {

    const navigate = useNavigate()
    //Import Context
    const { 
        setNavbar,
        navLearn, setNavLearn,
        createForm, setCreateForm,
        loginForm, setLoginForm
    } = useContext(AppContext)

    useEffect(()=>{
        setNavbar("Navbar-page")
        setNavLearn('navbar-item')
    })

    return (
        <div className='Learn-page'>
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