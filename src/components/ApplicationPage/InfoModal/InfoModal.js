import axios from 'axios';
import React, { useContext } from 'react';
import { AppContext } from '../../../App';
import './InfoModal.css';

const InfoModal = () => {

    const { explorePagePush, setExplorePagePush,
        infoModal, setInfoModal,
        NFTname, setNFTname,
        NFTdescription, setNFTdescription,
        NFTimage, setNFTimage} = useContext(AppContext)

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

    return (
        <div className={infoModal}>
            <div className='Info-modal-container'>
                <section className='Info-modal-top'>
                    <span className='react-link' 
                    onClick={()=>{
                        setExplorePagePush('Explore-page')
                        setInfoModal('Info-modal-page hidden')
                    }}><b>&lt; Back</b></span>
                    <div className='Info-add' 
                    onClick={()=>{
                        addNFTToSaved(localStorage.getItem('username'), NFTname, NFTimage, NFTdescription)
                        setExplorePagePush('Explore-page')
                        setInfoModal('Info-modal-page hidden')
                    }}>
                        <span className="Info-my-folder-symbol">+</span>
                        <span className='Info-my-folder'>&nbsp;my folder</span>
                    </div>
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