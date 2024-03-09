import React, {useState} from 'react';
import SpaceWar from '../assets/images/SpaceWar.jpg';
import Modal from 'react-modal';
import './ProjectDetail.css';

Modal.setAppElement('#root');

function ProjectDetail(props) {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <div className='popupContainer'> 
            <button className='popupButton' onClick={() => setModalIsOpen(true)}>Click to see more</button>
            <Modal 
                isOpen={modalIsOpen} 
                onRequestClose={() => setModalIsOpen(false)} // close the modal by clicking outside of the modal
                className="popupModal maxContainer"
                // overlayClassName="custom-overlay"
                >   
                    <img src={SpaceWar}></img>
                <div>
                <h2>Project Name</h2>
                <p>Modal Body</p>
                    <h3>Skill: Node.js Express MongoDB </h3>
                    <p>Project Details</p>
                </div>
                <div>
                    {/* <button onClick={() => setModalIsOpen(false)}>Close Modal</button> */}
                </div>
            </Modal>
        </div>

        // <div className='popupContainer' >
        //     <div className='popup-inner'>
        //         <img src={SpaceWar}></img>
        //         <h2>Project Nmae</h2>
        //         <h3>Skill: Node.js Express MongoDB </h3>
        //         <p>Project Details</p>
        //     </div>
        // </div>
    ) ;
}

export default ProjectDetail;