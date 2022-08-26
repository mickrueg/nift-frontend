import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Explore.css';
import { AppContext } from '../../../App';
import axios from 'axios';


const Explore = () => {

    //setState
    const [loadingNFTSearch, setLoadingNFTSearch] = useState(true)
    const [searchNFT, setSearchNFT] = useState('fruit')
    const [displayResults, setDisplayResults] = useState()

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


    //On Page Load
    useEffect(()=>{
        setNavbar("Navbar-page")
        setNavExplore('navbar-item')
        setNavLearn('navbar-item not-selected')
        setNavNews('navbar-item not-selected')
        setNavSaved('navbar-item not-selected')
    })

    //Functions

    function displaySearchNFTResults(data){
        const results = data.search_results.map((nft, index)=>{
            const nftImageURL = nft.cached_file_url
            const nftName = nft.name
            const nftDescription = nft.description
            
            if(nftImageURL===null || nftImageURL.slice(-3)==='mp4' || !nftImageURL){

            } else {
                console.log(nftDescription.slice(0,10)+' '+nftImageURL)
                return(
                    <div className='Explore-NFT-box' key={index}>
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
        setLoadingNFTSearch(true)
        axios.get(`https://api.nftport.xyz/v0/search?chain=all&text=${searchNFT}`,
            {headers:
                    {
                    'Content-Type': 'application/json',
                    Authorization: process.env.REACT_APP_NFTPORT
                }
            }
        )
            .then(res=>{
                setLoadingNFTSearch(false)
                setDisplayResults(
                    displaySearchNFTResults(res.data)
                )
            })
        //REACT_APP_NFTPORT
    },[searchNFT])

    function handleSearchSubmit(){
        
    }

    return (
        <div className='Explore-page'>
            <div className='Explore-container'>
                <div className='Explore-form-container'>
                    <div className='Explore-title'>
                        <h2>EXPLORE <b>NFTs</b></h2>
                        <hr></hr>
                    </div>
                    <form className='Explore-search-form' onSubmit={handleSearchSubmit}>
                        <input type="text" className='Explore-search-input'></input>
                        <button type="submit" className='Explore-search-button'>SEARCH</button>
                    </form>
                </div>
                <div className='Explore-results-container'>
                    {displayResults}
                </div>
            </div>
        </div>
    );
};

export default Explore;