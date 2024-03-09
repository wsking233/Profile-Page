import React, { useState } from 'react';
import Modal from 'react-modal';
import './ProjectDetail.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // carousel style
import GitHubIcon from '@mui/icons-material/GitHub';

import { ImageArcadeShooter, ImageFreejoas, ImageFlatties, ImageNotFound } from './ImageLoader';
import PropTypes from 'prop-types';



function ProjectDetail(props) {

    ProjectDetail.propTypes = {
        data: PropTypes.object.isRequired,
    };
    //to fix the error of "Warning: react-modal: App element is not defined. 
    //Please use `Modal.setAppElement(el)` or set `appElement={el}`."
    Modal.setAppElement('#root');   //use the root element as the app element

    const handleClick = (url) => {
        window.open(url, "_blank");
    };

    const [modalIsOpen, setModalIsOpen] = useState(false);

    let images;

    // switch the project id to load the images
    switch (props.data.id) {
        case 1:
            images = ImageArcadeShooter;
            break;
        case 2:
            images = ImageFreejoas;
            break;
        case 3:
            images = ImageFlatties;
            break;
        default:
            images = ImageNotFound;
    }

    return (
        <div className='popupContainer'>
            <button className='popupButton' onClick={() => setModalIsOpen(true)}>View Project</button>
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
                <div className='topButtonContainer'>
                    <div>
                        <button className='githubButton'
                                onClick={() => handleClick(props.data.github)}
                            ><GitHubIcon target="_blank" /></button>
                    </div>
                    <div>
                    <h2>{props.data.title}</h2>
                    </div>
                    <div>
                        <button onClick={() => setModalIsOpen(false)}>Back</button>
                    </div>
                </div>

                <div>
                    <Carousel
                        className='carouselContainer'
                        showArrows={true}   // show arrow buttons
                        showThumbs={false}  // don't show thumbnail images
                        autoPlay={true}    // automatically play the carousel
                        infiniteLoop={true} // infinite loop
                        dynamicHeight={false} // the height of the carousel is fixed
                        showStatus={false}  // don't show the status of the carousel
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

                <div className='detailContainer'>
                    <div>
                        <h3>Tech stack:</h3>
                        <p>{props.data.tech.join("\n")} </p>
                    </div>
                    {/* <hr /> */}
                    <div>
                        <h3>Project description</h3>
                        <p>{props.data.description}</p>
                    </div>
                </div>
                <div>
                    {props.data.id === 1 ? <></> :
                        <div className='note'>
                            <hr />
                            <p>Note: This project is still in development and will be updated soon.</p>
                            <p>Shown images are only front end part and from the previous version of the project.</p>
                            <p>For the latest version, please visit the GitHub repository.</p>
                        </div>
                    }
                </div>
            </Modal>
        </div>
    );
}

export default ProjectDetail;