import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Explore.css';
import { AppContext } from '../../../App';


const Explore = () => {

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

    return (
        <div className='Explore-page'>
            <div className='Explore-container'>
                <h2>Explore</h2>
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