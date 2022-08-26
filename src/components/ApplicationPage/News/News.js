import React, { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './News.css';
import { AppContext } from '../../../App';
import axios from 'axios';
import displayArticles from './Articles';

const News = () => {
    
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
    
    //SetState
    const [latestArticles, setLatestArticles] = useState()
    const [popularArticles, setPopularArticles] = useState()
    
    //HTML state
    const [latestSort, setLatestSort] = useState('sort selected')
    const [popularSort, setPopularSort] = useState('sort')
    const [latestArticlesClass, setLatestArticlesClass] = useState('article-sort selected')
    const [popularArticlesClass, setPopularArticlesClass] = useState('article-sort')
    
    //On Page load
    useEffect(()=>{
        setNavbar("Navbar-page")
        setNavLearn('navbar-item not-selected')
        setNavNews('navbar-item')
        setNavExplore('navbar-item not-selected')
        setNavSaved('navbar-item not-selected')
        //GET search articles from Hacker News
    }, [])
    
    const [loadingLatest, setLoadingLatest] = useState(true);
    const [loadingPopular, setLoadingPopular] = useState(true);
    

    //Call articles from Hacker News
    useEffect((loadingLatest)=>{
        setLoadingLatest(true)
        axios.get(`https://newsdata.io/api/1/news?apikey=${process.env.REACT_APP_NEWSDATA}&q=non-fungible%20token`)
            .then(res=>{
                console.log("NEWSDATA")
                console.log(res.data)
                setLoadingLatest(false)
                setLatestArticles(
                    displayArticles(res.data, "add")
                )
            })
            .catch(console.error)
        
    },[])




    return (
        <div className='News-page'>
            <div className='News-container'>
                <h2>NFTS IN THE <b>NEWS</b></h2>
                <hr></hr>
                <div className='News-sort'>
                    <span><h3 className={latestSort}
                    onClick={()=>{
                        setLatestSort('sort selected')
                        setPopularSort('sort')
                        setLatestArticlesClass('article-sort selected')
                        setPopularArticlesClass('article-sort')
                    }}
                    >LATEST</h3></span>
                    {/* <span><h3 className={popularSort} 
                    onClick={()=>{
                        setLatestSort('sort')
                        setPopularSort('sort selected')
                        setLatestArticlesClass('article-sort')
                        setPopularArticlesClass('article-sort selected')
                    }}>POPULAR</h3></span> */}
                </div>
                <div className={latestArticlesClass}>
                    {(latestArticles?latestArticles:<div>Loading...</div>)}
                </div>
                <div className={popularArticlesClass}>
                    {/* {(popularArticles?popularArticles:<div>Loading...</div>)} */}
                </div>
                <div className=''></div>
            </div>
        </div>
    );
};

export default News;