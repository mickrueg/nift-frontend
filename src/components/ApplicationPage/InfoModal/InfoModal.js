import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../../App';
import './InfoModal.css';

const InfoModal = ({type}) => {

    const { explorePage, setExplorePage,
        infoModal, setInfoModal,
        NFTname, setNFTname,
        NFTdescription, setNFTdescription,
        NFTimage, setNFTimage,
        NFTid, setNFTid,
        savedPage, setSavedPage,
        setSavedNFTsUpdated} = useContext(AppContext)

    //Functions
    const addNFTToSaved = (user, name, image, description) =>{
        axios.post('https://nift-backend-two.herokuapp.com/nft', {
            user: user,
            name: name,
            image: image,
            description: description
          })
          .then()
          .catch(console.error)
    }
    

    const removeNFTfromSaved = (removeThisNFTId) => {
        axios.delete(`https://nift-backend-two.herokuapp.com/nft/${removeThisNFTId}`)
            .then()
            .catch(console.error)
    }

    let addOrRemove;
    if(type==='add'){
        addOrRemove = (
            <div className='Info-add' 
            onClick={()=>{
                addNFTToSaved(localStorage.getItem('username'), NFTname, NFTimage, NFTdescription)
                setExplorePage('Explore-page')
                setInfoModal('Info-modal-page hidden')
            }}>
                <span className="Info-my-folder-symbol">+</span>
                <span className='Info-my-folder'>&nbsp;my folder</span>
            </div>
        )
    } else if(type==='remove'){
        addOrRemove = (<div className='Info-add' 
        onClick={()=>{
            removeNFTfromSaved(NFTid);
            setSavedPage('Saved-page')
            setInfoModal('Info-modal-page hidden')
            setTimeout(() => {
                setSavedNFTsUpdated(prev => prev + 1)
            }, 100);
        }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="remove-saved-x" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
            </svg>
            <span className='News-my-folder remove'>&nbsp; remove</span>
        </div>)
    }

    return (
        <div className={infoModal}>
            <div className='Info-modal-container'>
                <section className='Info-modal-top'>
                    <span className='react-link' 
                    onClick={()=>{
                        setExplorePage('Explore-page')
                        setSavedPage('Saved-page')
                        setInfoModal('Info-modal-page hidden')
                    }}><b>&lt; Back</b></span>
                    {addOrRemove}
                </section>
                <span className='Info-modal-name'>{NFTname}</span>
                <hr></hr>
                <img className='Info-modal-img' src={NFTimage} alt=''/>
                <b>DESCRIPTION</b>
                <span className='Info-modal-description'>{NFTdescription}</span>
            </div>
        </div>
    );
};

export default InfoModal;