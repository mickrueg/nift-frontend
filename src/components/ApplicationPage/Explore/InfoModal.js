import React, { useContext } from 'react';
import { AppContext } from '../../../App';
import './InfoModal.css';

const InfoModal = ({name, image, description}) => {

    const { explorePagePush, setExplorePagePush,
        infoModal, setInfoModal} = useContext(AppContext)

    return (
        <div className={infoModal}>
            <div className='Info-modal-container'>
                <section className='Info-modal-top'>
                    <span className='react-link' 
                    onClick={()=>{
                        setExplorePagePush('Explore-page')
                        setInfoModal('Info-modal-page hidden')
                    }}><b>&lt; Back</b></span>
                    <div className='Info-add'>
                        <span className="Info-my-folder-symbol">+</span>
                        <span className='Info-my-folder'>&nbsp;my folder</span>
                    </div>
                </section>
                <span className='Info-modal-name'>{name}</span>
                
                
                <hr></hr>
                <img className='Info-modal-img' src={image} alt=''/>
                <b>DESCRIPTION</b>
                <span className='Info-modal-description'>{description}</span>
            </div>
        </div>
    );
};

export default InfoModal;