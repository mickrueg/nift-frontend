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
        createForm, setCreateForm,
        loginForm, setLoginForm,
        savedArticlesUpdated, setSavedArticlesUpdated
    } = useContext(AppContext)

    useEffect(()=>{
        setNavbar("Navbar-page")
    })

    const [loadingArticles, setLoadingArticles] = useState(true);
    const [articles, setArticles]= useState()
    

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
                    <div className="News-article-add"
                    onClick={()=>{
                        removeArticleFromSaved(localStorage.getItem('user'), articleId)
                        setTimeout(() => {
                            setSavedArticlesUpdated(prev=>prev+1)
                        }, 100);
                    }}><span className='News-my-folder'>remove</span></div>
                </div>
            )

        })
        return results
    }

    return (
        <div className='Saved-page'>
            <div className='Saved-container'>
                <h2>MY <b>FOLDERS</b></h2>
                <hr></hr>
                <h3>NEWS <b>ARTICLES</b></h3>
                <div>
                    {articles}
                
                </div>
                <b className='logout' onClick={()=>{
                    
                }}><u>Logout</u></b>
            </div>
        </div>
    );
};

export default Saved;