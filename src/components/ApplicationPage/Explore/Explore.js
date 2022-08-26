import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Explore.css';
import { AppContext } from '../../../App';
import axios from 'axios';


const Explore = () => {

    //setState
    const [loadingNFTSearch, setLoadingNFTSearch] = useState(true)

    const navigate = useNavigate()
    //Import Context
    const { 
        setNavbar,
        setNavLearn,
        setNavNews,
        setNavExplore,
        setNavSaved,
        createForm, setCreateForm,
        loginForm, setLoginForm
    } = useContext(AppContext)

    useEffect(()=>{
        setNavbar("Navbar-page")
        setNavExplore('navbar-item')
        setNavLearn('navbar-item not-selected')
        setNavNews('navbar-item not-selected')
        setNavSaved('navbar-item not-selected')
    })

    useEffect(()=>{
        setLoadingNFTSearch(true)
        axios.get('https://api.nftport.xyz/v0/search?chain=all&text=fruit',
            {headers:
                    {
                    'Content-Type': 'application/json',
                    Authorization: process.env.REACT_APP_NFTPORT
                }
            }
        )
            .then(res=>{
                setLoadingNFTSearch(false)
                console.log(res.data)
            })
        //REACT_APP_NFTPORT
    },[])

    return (
        <div className='Explore-page'>
            <div className='Explore-container'>
                <h2>EXPLORE <b>NFTs</b></h2>
                <hr></hr>
                <form className='Explore-search-form'>
                    <input type="text" className='Explore-search-input'></input>
                    <button type="submit" className='Explore-search-button'>SEARCH</button>
                </form>
            </div>
        </div>
    );
};

export default Explore;