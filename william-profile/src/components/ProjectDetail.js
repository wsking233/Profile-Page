import React, { useState } from 'react';
import SpaceWar from '../assets/images/SpaceWar.jpg';
import Modal from 'react-modal';
import './ProjectDetail.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import image1 from '../assets/images/spacewar/Picture1.png';
import image2 from '../assets/images/spacewar/Picture2.png';
import image3 from '../assets/images/spacewar/Picture3.png';
import image4 from '../assets/images/spacewar/Picture4.png';

Modal.setAppElement('#root');

const images = [
    image1,
    image2,
    image3,
    image4,
];

function ProjectDetail() {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <div className='popupContainer'>
            <button className='popupButton' onClick={() => setModalIsOpen(true)}>Click to see more</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)} // close the modal by clicking outside of the modal
                className="popupModal maxContainer"
                // overlayClassName="popupOverlay"
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    },
                }}
            >
                <div>
                    <Carousel
                        showArrows={true}
                        showThumbs={false}
                        autoPlay={true}
                        infiniteLoop={true}
                    >
                        {images.map((image) => {
                            return (
                                <div>
                                    <img src={image} alt={'Image'} />
                                </div>
                            );
                        })}
                    </Carousel>

                </div>

                <div>
                    <h2>Project Name</h2>
                    <p>Modal Body</p>
                    <h3>Skill: Node.js Express MongoDB </h3>
                    <p>Project Details</p>
                </div>
                <div>
                    <p>Click outside to close</p>
                    {/* <button onClick={() => setModalIsOpen(false)}>Close Modal</button> */}
                </div>
            </Modal>
        </div>
    );
}

export default ProjectDetail;