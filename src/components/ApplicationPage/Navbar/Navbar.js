import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../../App';
import './Navbar.css';

const Navbar = () => {

    //Variables
    const lightbulbIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000560" className='navbar-icon'><path d="M0 0h24v24H0z" fill="none"/><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/></svg>
    )
    const newsIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000560" className='navbar-icon'><g><rect fill="none" height="24" width="24"/></g><g><path d="M22,3l-1.67,1.67L18.67,3L17,4.67L15.33,3l-1.66,1.67L12,3l-1.67,1.67L8.67,3L7,4.67L5.33,3L3.67,4.67L2,3v16 c0,1.1,0.9,2,2,2l16,0c1.1,0,2-0.9,2-2V3z M11,19H4v-6h7V19z M20,19h-7v-2h7V19z M20,15h-7v-2h7V15z M20,11H4V8h16V11z"/></g></svg>
    )
    const exploreIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000560" className='navbar-icon'><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
    )
    const folderIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000560" className='navbar-icon'><path d="M0 0h24v24H0V0z" fill="none"/><path d="M9.17 6l2 2H20v10H4V6h5.17M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/></svg>
    )

    //Import Context
    const { 
        navbar,
        navLearn, setNavLearn,
        navNews, setNavNews,
        navExplore, setNavExplore,
        navSaved, setNavSaved
    } = useContext(AppContext)

    const navigate = useNavigate()


    return (
        <div className={navbar}>
            <ul className='Navbar-container'>
               <li className={navLearn}
                onClick={()=>{
                    navigate('/learn', {replace:true})
                    setNavLearn('navbar-item')
                    setNavNews('navbar-item not-selected')
                    setNavExplore('navbar-item not-selected')
                    setNavSaved('navbar-item not-selected')
                }}
                >{lightbulbIcon}Learn</li> 
               <li className={navNews}
                onClick={()=>{
                    navigate('/news', {replace:true})
                    setNavLearn('navbar-item not-selected')
                    setNavNews('navbar-item')
                    setNavExplore('navbar-item not-selected')
                    setNavSaved('navbar-item not-selected')
                }}
                >{newsIcon}News</li> 
               <li className={navExplore}
                onClick={()=>{
                    navigate('/explore', {replace:true})
                    setNavLearn('navbar-item not-selected')
                    setNavNews('navbar-item not-selected')
                    setNavExplore('navbar-item')
                    setNavSaved('navbar-item not-selected')
                    
                }}
                >{exploreIcon}Explore</li> 
               <li className={navSaved}
                onClick={()=>{
                    navigate('/saved', {replace:true})
                    setNavLearn('navbar-item not-selected')
                    setNavNews('navbar-item not-selected')
                    setNavExplore('navbar-item not-selected')
                    setNavSaved('navbar-item')

                }}
               >{folderIcon}My Folders</li> 
            </ul>
        </div>
    );
};

export default Navbar;