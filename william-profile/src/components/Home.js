import React from 'react';
import LOGO from '../assets/images/W.W-White.png';

function Home() {

    return (
        <section id='home' className='homeContainer'>
            <div>
                <img src={LOGO} alt="W.W" />
                {/* <h1>W.W</h1>
                <p>William Wang</p> */}
            </div>
            <div>
                <h2>Software Developer</h2>

                {/* <p style={{color:'white'}}>Software
                <strong
                style={{backgroundColor:'#f4b942', color:'black', padding:'5px', borderRadius:'5px', fontSize:'1.5rem'}}
                > Developera
                    </strong></p> */}

            </div>
        </section>
    );
}

export default Home;