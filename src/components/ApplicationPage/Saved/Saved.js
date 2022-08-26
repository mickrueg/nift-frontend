import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Saved.css';
import { AppContext } from '../../../App';
import axios from 'axios';
// import displaySavedArticles from './RemoveArticles';


const Saved = () => {

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
        savedArticlesUpdated, setSavedArticlesUpdated,
        username, setUsername
    } = useContext(AppContext)

    useEffect(()=>{
        setNavbar("Navbar-page")
        setNavLearn('navbar-item not-selected')
        setNavNews('navbar-item not-selected')
        setNavExplore('navbar-item not-selected')
        setNavSaved('navbar-item')
    })

    const [loadingArticles, setLoadingArticles] = useState(true);
    const [articles, setArticles]= useState()
    const [nfts, setNFTs]= useState()
    

    //Call articles from Hacker News
    useEffect((loadingLatest, savedArticlesUpdated)=>{
        setLoadingArticles(true)
        axios.get(`https://nift-backend-two.herokuapp.com/articles/${localStorage.getItem('username')}`)
            .then(res=>{
                console.log(res.data)
                setLoadingArticles(false)
                setArticles(
                    displaySavedArticles(res.data)
                )
            })
            .catch(console.error)
        
    },[savedArticlesUpdated])

    useEffect(()=>{
        axios.get(`https://nift-backend-two.herokuapp.com/nfts/${localStorage.getItem('username')}`)
            .then(res=>{
                console.log(res.data)
                setNFTs(
                    displayNFTs(res.data)
                )
            })
            .catch(console.error)
        
    },[])

    //Functions
    function extractDate(timestamp){
        //2021-03-21T12:51:20.000Z
        const year = timestamp.slice(0,4)
        const month = timestamp.slice(5,7)
        const day = timestamp.slice(8,10)
        return `${month}.${day}.${year}`
    }

    const removeArticleFromSaved = (user, articleId) =>{
        axios.delete(`https://nift-backend-two.herokuapp.com/article/${articleId}`)
        .then()
        .catch(console.error)
    }


    const displaySavedArticles = (articles) => {
        
        const results = articles.map((article, index)=>{
            const url = article.url
            const timestamp = article.timestamp
            const title = article.title
            const articleId = article._id

            return(
                <div className='News-article' key={index}>
                    <a href={url} target="_blank" rel='noreferrer noopener' className='News-article-title'>{title}</a>
                    <div className='News-article-date'>{(timestamp)}</div>
                    <div className="News-article-add remove"
                    onClick={()=>{
                        removeArticleFromSaved(localStorage.getItem('user'), articleId)
                        setTimeout(() => {
                            setSavedArticlesUpdated(prev=>prev+1)
                        }, 100);
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="remove-saved-x" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                        </svg>
                        <span className='News-my-folder remove'>&nbsp; remove</span></div>
                </div>
            )

        })
        return results
    }

  function displayNFTs(data){
        const results = data.map((nft, index)=>{
            const nftImageURL = nft.image
            const nftName = nft.name
            const nftDescription = nft.description
            const checkMp4 = nftImageURL.slice(-3)
            
            if(nftImageURL===null || checkMp4==='mp4' || !nftImageURL || nftImageURL==='' || checkMp4==='tml'){
                
            } else {
                return(
                    <div className='Explore-NFT-box' key={index} onClick={()=>{
                        // setExplorePagePush('Explore-page pushed')
                        // setInfoModal('Info-modal-page')
                        // setNFTname(nftName)
                        // setNFTimage(nftImageURL)
                        // setNFTdescription(nftDescription)
                    }}>
                        <img className='Explore-NFT-box-image' src={nftImageURL} alt={nftDescription}/>
                    </div>
                )
            }
        }
        )
        return results
    }

    return (
        <div className='Saved-page'>
            <div className='Saved-container'>
                <h2>MY <b>FOLDERS</b></h2>
                <hr></hr>
                <h3 className='Saved-title'>SAVED NEWS <b>ARTICLES</b></h3>
                <div>
                    {articles}
                </div>
                <hr></hr>
                <h3 className='Saved-title'>SAVED <b>NFTs</b></h3>
                <div>
                    {nfts}
                </div>
                <b className='logout' onClick={()=>{
                    setUsername()
                    localStorage.clear()
                    navigate('/*', {replace:true})
                }}><u>Logout</u></b>
            </div>
        </div>
    );
};

export default Saved;