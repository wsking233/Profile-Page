import React from 'react';
import Avatar from '../assets/images/Avatar.jpg';
import translations from '../assets/languages/translations.json';

function About() {

    // const handleClick = (url) => {
    //     window.open(url, "_blank");
    // };

    return (
        <section id='about' className="aboutContainer">
            <div className="maxContainer innerStyle">
                <h3 className='scetionTitle'>{translations["en"].about_me}</h3>

                <div className='topContainer'>

                    <div className='leftContainer'>
                        <img src={Avatar} alt="William Wang" />
                        <h4>王帅</h4>
                        <h4>William Wang</h4>
                    </div>

                    <div className='rightContainer'>
                        <p>
                            {translations["en"].about_me_content}
                        </p>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;