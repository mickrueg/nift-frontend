import axios from "axios"
import { useState } from "react"

//Functions
function extractDate(timestamp){
    //2021-03-21T12:51:20.000Z
    const year = timestamp.slice(0,4)
    const month = timestamp.slice(5,7)
    const day = timestamp.slice(8,10)
    return `${month}.${day}.${year}`
}

const addArticleToSaved = (user, article, timestamp, title) =>{
    axios.post('https://nift-backend-two.herokuapp.com/article', {
        user: user,
        article: article,
        date: timestamp,
        title: title
      })
      .then()
      .catch(console.error)
}

//Display articles
function displayArticles(articles){
    const results = articles.hits.map((article, index)=>{

        const title = (article.story_title===null?article.title:article.story_title)
        const url = (article.story_url===null?article.url:article.story_url)
        const date = article.created_at


        if(title === null || url === null){

        } else{
            return(
                <div className='News-article' key={index}>
                    <a href={url} target="_blank" rel='noreferrer noopener' className='News-article-title'>{title}</a>
                    <div className='News-article-date'>{extractDate(date)}</div>
                    <div className='News-article-add'
                    onClick={()=>{
                        addArticleToSaved(localStorage.getItem('username'), url, date, title)
                    }}>+<span className='News-my-folder'>&nbsp;my folder</span></div>
                </div>
            )
        }

    })
    return results
}

export default displayArticles;