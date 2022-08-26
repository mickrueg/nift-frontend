import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Explore.css';
import { AppContext } from '../../../App';
import axios from 'axios';
import InfoModal from './InfoModal';


const Explore = () => {

    //setState
    const [searchNFT, setSearchNFT] = useState('fruit')
    const [displayResults, setDisplayResults] = useState()
    const [NFTname, setNFTname] = useState()
    const [NFTdescription, setNFTdescription] = useState()
    const [NFTimage, setNFTimage] = useState()

    const navigate = useNavigate()
    //Import Context
    const { 
        setNavbar,
        setNavLearn,
        setNavNews,
        setNavExplore,
        setNavSaved,
        createForm, setCreateForm,
        loginForm, setLoginForm,
        explorePagePush, setExplorePagePush,
        infoModal, setInfoModal
    } = useContext(AppContext)


    //On Page Load
    useEffect(()=>{
        setNavbar("Navbar-page")
        setNavExplore('navbar-item')
        setNavLearn('navbar-item not-selected')
        setNavNews('navbar-item not-selected')
        setNavSaved('navbar-item not-selected')
        setInfoModal('Info-modal-page hidden')
    }, [])

    //Functions

    function displaySearchNFTResults(data){
        const results = data.search_results.map((nft, index)=>{
            const nftImageURL = nft.cached_file_url
            const nftName = nft.name
            const nftDescription = nft.description
            const checkMp4 = nftImageURL.slice(-3)
            
            if(nftImageURL===null || checkMp4==='mp4' || !nftImageURL || nftImageURL==='' || checkMp4==='tml'){
                
            } else {
                return(
                    <div className='Explore-NFT-box' key={index} onClick={()=>{
                        setExplorePagePush('Explore-page pushed')
                        setInfoModal('Info-modal-page')
                        setNFTname(nftName)
                        setNFTimage(nftImageURL)
                        setNFTdescription(nftDescription)
                    }}>
                        <img className='Explore-NFT-box-image' src={nftImageURL} alt={nftDescription}/>
                    </div>
                )
            }
        }
        )
        return results
    }

    //When search keyword changes
    useEffect(()=>{
        axios.get(`https://api.nftport.xyz/v0/search?chain=all&text=${searchNFT}`,
            {
                params: {page_size: 20},
                headers:
                    {
                    'Content-Type': 'application/json',
                    Authorization: process.env.REACT_APP_NFTPORT
                },
            }
        )
            .then(res=>{
                setDisplayResults(
                    displaySearchNFTResults(res.data)
                )
            })
        //REACT_APP_NFTPORT
    },[searchNFT])

    function handleSearchSubmit(e){
        e.preventDefault()
        setSearchNFT(e.target.userInput.value)
    }

    return (
        <div className={explorePagePush}>
            <div className='Explore-container'>
                <div className='Explore-form-container'>
                    <div className='Explore-title'>
                        <h2>EXPLORE <b>NFTs</b></h2>
                        <hr></hr>
                    </div>
                    <form className='Explore-search-form' onSubmit={handleSearchSubmit}>
                        <input type="text" className='Explore-search-input' name='userInput' id='userInput'></input>
                        <button type="submit" className='Explore-search-button'>SEARCH</button>
                    </form>
                </div>
                <div className='Explore-showing-text'>Showing results for <b>{searchNFT}</b></div>
                <div className='Explore-results-container'>
                    {(displayResults?displayResults:<div className='Explore-loading'>Loading...</div>)}
                </div>
            </div>
            <InfoModal name={NFTname} description={NFTdescription} image={NFTimage}/>
        </div>
    );
};

export default Explore;