import React from 'react';
import FreejoaImage from '../../../assets/images/freejoas.png';
import '../../../styles/ProjectPage.css';
import FreejoasArchitecture from '../../../assets/images/Freejoas_Architecture.png';

function FreejoasPage() {
    return (
        <section id='freejoas' className='projectContainer'>
            <div className='maxContainer'>
                <div>
                    <p>Freejoas is an application used by Kiwis with plans to expand with more free fruit, and to open to overseas users too. Checkout Freejoas on your mobile phone today!</p>
                </div>
                <div className='imgHolder'>
                    <img src={FreejoaImage} alt='Freejoas Cover' ></img>
                </div>

                <h2>Overview</h2>
                <div className='creationContainer'>
                    <div className='creationLeft'>
                        <br />
                        <h3>Description</h3>
                        <p>Freejoas is a web application used by those seeking to exercise and find free tasty treats.</p>
                        <p>The goal of this project was to create an easy to use application that could be used by anyone looking for free Feijoas.</p>
                        <br />
                        <h3>I'm the developer</h3>
                        <p>
                            The freejoas idea comes from a product designer who loves feijoas.
                            He told me that he wants to create an app that can help people find free feijoas. 
                            I think it is a good idea, so I decided to help him build this app.
                        </p>
                    </div>
                    <div className='creationRight'>
                        <h3>My role</h3>
                        <p>Back-End & Front-End Developer</p>
                        <br />
                        <p>Backend: Node.js, Express.js, MongoDB, RESTful API</p>
                        <br />
                        <p>Frontend: React, Axios</p>
                        <br />
                        <p>January 2024 - Ongoing</p>
                    </div>
                </div>

                <h2>Technical details</h2>
                <div className='technicalContainer'>
                    <h3>Software Architecture</h3>
                    <p>Freejoas is a full-stack web application that uses the MERN stack (MongoDB, Express.js, React, Node.js).</p>
                    <p>Frontend is built with React, and the app uses Axios to make HTTP requests to the backend. 
                        The app has used some of Material-UI for styling.</p>
                    <p>Backend is built with Node.js and Express.js, and the database is MongoDB. designed with 
                        MVC pattern, provides RESTful API for the frontend to interact with the database. </p>
                    <p>The Database using MongoDB(NoSQL) to store the data.</p>
                    <p>Freejoas backend is deployed on Azure, frontend deployment is maintaned by Euguen</p>
                    <img src={FreejoasArchitecture} alt='Freejoas Architecture'></img>
                    <h3>Key Features</h3>
                    <ul>
                        <li>Users can sign up and log in to the app</li>
                        <li>Email verification</li>
                        <li>Users can create, read, update, and delete their own posts</li>
                        <li>Users can see all posts on the map</li>
                        <li>Users can search for posts by location</li>
                        <li>Users can see the details of each post</li>
                        <li>Users can comment on posts</li>
                        <li>Users can like posts</li>
                    </ul>
                </div>
                <h2>Implementation Methodology</h2>
                <div className='implementationContainer'>
                    <h3>Challenges</h3>
                    <p>This is my first full-stuck web development project.</p>
                    <p>The biggest challenge was to design and maintanace the APIs</p>
                    <p>Email verification system</p>
                    <p>Another challenge was to implement the map feature. I used the Google Maps API to implement the map feature. I had to learn how to use the Google Maps API and how to integrate it with the app.</p>
                    <h3>Future Improvements</h3>
                    <p>In the future, I plan to add more features to the app, 
                        such as a notification feature, a rating feature.
                        And at meantime, the admin system is also in developing stage.
                    </p>
                </div>
                <h2>Security</h2>
                <div className='securityContainer'>
                    <h3>Authentication and Authorization</h3>
                    <p>Freejoas uses JWT for authentication and authorization, 
                       a token is generated when a user logs in and is sent to the client.
                       all requests to the server are authenticated using the token.
                    </p>
                    <p>Freejoas also uses CORS to prevent Cross-Origin Resource Sharing attacks.</p>
                    <p>Role and permission management system controls the access rights of different users.</p>
                    <h3>Data Protection</h3>
                    <p>User's password is stored encriptly in the database, and password is not incouled in any the response.</p>
                </div>

                <p></p>



            </div>
        </section>
    );
}

export default FreejoasPage;