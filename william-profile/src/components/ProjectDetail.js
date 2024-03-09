import React, { useState } from 'react';
import Modal from 'react-modal';
import './ProjectDetail.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // carousel style
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';

import { ImageArcadeShooter, ImageFreejoas, ImageFlatties, ImageNotFound } from './ImageLoader';



function ProjectDetail(props) {
    //to fix the error of "Warning: react-modal: App element is not defined. 
    //Please use `Modal.setAppElement(el)` or set `appElement={el}`."
    Modal.setAppElement('#root');   //use the root element as the app element

    const handleClick = (url) => {
        window.open(url, "_blank");
    };

    const [modalIsOpen, setModalIsOpen] = useState(false);

    // switch the project id to load the images
    switch (props.data.id) {
        case 1:
            var images = ImageArcadeShooter;
            break;
        case 2:
            var images = ImageFreejoas;
            break;
        case 3:
            var images = ImageFlatties;
            break;
        default:
            var images = ImageNotFound;
    }

    return (
        <div className='popupContainer'>
            <button className='popupButton' onClick={() => setModalIsOpen(true)}>Click to see more</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)} // close the modal by clicking outside of the modal
                className="popupModal maxContainer"
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    },
                }}
            >
                <div>
                    <h2>{props.data.title}</h2>
                    <Carousel
                        className='carouselContainer'
                        showArrows={true}   // show arrow buttons
                        showThumbs={false}  // don't show thumbnail images
                        autoPlay={true}    // automatically play the carousel
                        infiniteLoop={true} // infinite loop
                        dynamicHeight={false} // the height of the carousel is fixed
                    >
                        {images.map((image) => {
                            return (
                                <div key={image.id} style={{ height: '400px' }}>
                                    <img src={image.image} alt='SpaceWar' style={{ objectFit: 'contain', maxHeight: '100%', maxWidth: '100%' }} />
                                </div>
                            );
                        })
                        }
                    </Carousel>
                </div>

                <div>
                    {/* <a href={props.data.github} target="_blank" rel="noreferrer">GitHub Link</a> */}
                    <h3>Tech stack:</h3>
                    <p>{props.data.tech.join(", ")} </p>
                    <h3></h3>
                    <hr />
                    <h3>Project description</h3>
                    <p>{props.data.description}</p>
                    <IconButton
                        onClick={() => handleClick(props.data.github)}
                        // color="primary"
                        sx={{ color: 'white' }}

                    ><GitHubIcon target="_blank" /></IconButton>
                </div>
                {props.data.status === "Completed" ?
                    <div className='buttonContainer' style={{float:"right"}}>
                        <button style={{ float: "right" }} onClick={() => setModalIsOpen(false)}>Close</button> 
                    </div>
                    :
                    <div className='buttonContainer'>
                        <div className='note'>
                            <h3>Note:</h3>
                            <p >
                                This project still in development and subject to change.<br/>
                                The displayed images are only screenshots of the frontend part.<br/>
                                Dummy data is used as reference.<br/>
                                Thanks for your attention and support!
                            </p>
                        </div>
                        <div>
                            <button onClick={() => setModalIsOpen(false)}>Back</button>
                        </div>
                    </div>
                }
            </Modal>
        </div>
    );
}

export default ProjectDetail;