import React from 'react';
import FreejoaImage from '../../../assets/images/freejoas.png';
import '../../../styles/ProjectPage.css';
import FreejoasArchitecture from '../../../assets/images/Freejoas_Architecture.png';

function FreejoasPage() {
    return (
        <section id='freejoas' className='projectContainer'>
            <div className='maxContainer'>

                <div className='imageContainer'>
                    <div className='imgHolder'>
                        <img src={FreejoaImage} alt='Freejoas Cover' ></img>
                    </div>
                </div>

                <div className='overviewContainer'>

                    <h2>Overview</h2>
                    <div className='overviewDetails'>
                        <div className='overviewDetailsLeft'>
                            <h3>Project Background</h3>
                            <p>Freejoas is a web application used by those seeking to exercise and find free tasty treats. The goal of this project was to create an easy to use application that could be used by anyone looking for free Feijoas.</p>
                            <hr />
                            <p>
                                The freejoas idea comes from a product designer who loves feijoas.
                                He told me that he wants to create an app that can help people find free feijoas.
                                I think it is a good idea, so I decided to help him build this app.
                            </p>
                        </div>
                        <div className='overviewDetailsRight'>
                            <h3>My role</h3>
                            <p>Back-End & Front-End Developer</p>
                            <p>Backend: Node.js, Express.js, MongoDB, RESTful API</p>
                            <p>Frontend: React, Axios</p>
                            <p>January 2024 - Ongoing</p>
                        </div>
                    </div>
                </div>

                <div className='technicalContainer'>
                    <h2>Technical details</h2>
                    <h3>Software Architecture</h3>
                    <p>
                        Freejoas is a comprehensive full-stack web application developed using the MERN stack, offering a robust architecture to handle various functionalities smoothly.
                        The backend and frontend are developed separately, ensuring a clear separation of concerns and promoting code reusability and maintainability.
                    </p>
                        <h3><a href='https://github.com/EugeneRaynerNZ/freejoas' target='_blank' rel='noreferrer'>Frontend:</a></h3>
                        <ul>
                            <li>
                                React: The frontend is built using React, ensuring a dynamic and responsive user interface.
                            </li>
                            <li>
                                Axios: Employed for making HTTP requests to the backend, facilitating seamless data communication.
                            </li>
                            <li>
                                Material-UI: Used for styling, providing a consistent and modern look and feel across the application.
                            </li>
                        </ul>
                        <h3><a href='https://github.com/wsking233/Freejoas-backend' target='_blank' rel='noreferrer'>Backend: </a></h3>
                        <ul>
                            <li>
                                Node.js and Express.js: The backend is developed with Node.js and Express.js, ensuring a scalable and efficient server-side environment.
                            </li>
                            <li>
                                MVC Pattern: Adheres to the MVC (Model-View-Controller) design pattern, promoting organized and maintainable code.
                            </li>
                            <li>
                                RESTful API: Offers a RESTful API, enabling the frontend to perform CRUD (Create, Read, Update, Delete) operations on the database.
                            </li>
                        </ul>
                        <h3>Database:</h3>
                        <ul>
                            <li>
                                MongoDB: Utilizes MongoDB, a NoSQL database, for flexible and scalable data storage.
                            </li>
                            <li>
                                Content Moderation System: Features a main data collection and a pending data collection, designed specifically to support content moderation. This ensures that only approved content is displayed to users.
                            </li>
                        </ul>
                    <p>
                        By leveraging the strengths of the MERN stack, Freejoas delivers a performant and maintainable web application that can scale with user demands and adapt to future enhancements.
                    </p>
                    <br />
                    <div className='featuresContainer'>
                        <div className='featuresLeft'>
                            <h3>Key Features</h3>
                            <ul>
                                <li>
                                Login/Sign Up: Secure user authentication and registration system.
                                </li>
                                <li>
                                Email Verification: Ensures user accounts are validated via email.
                                </li>
                                <li>
                                Directional Navigation: Provides users with guidance to the geographic location of a selected post.
                                </li>
                                <li>
                                Real-Time Distance Updates: Automatically updates distances as users move.
                                </li>
                                <li>
                                Recently Visited: Tracks and displays locations or posts recently viewed by the user.
                                </li>
                            
                            </ul>
                        </div>
                        <div className='featuresRight'>
                            <h3>Pending Features</h3>
                            <ul>
                                <li>
                                Social Login: Users will be able to log in using their Google or Facebook accounts.
                                </li>
                                <li>
                                Map Integration: Posts will be displayed on an interactive map.
                                </li>
                                <li>
                                All Posts on Map: Users will have the ability to view all posts on a single map interface.
                                </li>
                                <li>
                                Location-Based Search: Users will be able to search for posts based on location.
                                </li>
                                <li>
                                Post Comments: Users will be able to comment on posts.
                                </li>
                                <li>
                                Post Likes: Users will be able to like posts.
                                </li>
                                <li>
                                Content Moderation System: Implementation of a system for moderating user posts.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <p>
                        By incorporating these features, Freejoas aims to provide a comprehensive and engaging user experience.
                    </p>
                    <img src={FreejoasArchitecture} alt='Freejoas Architecture'></img>
                </div>

                <div className='securityContainer'>
                    <h2>Security</h2>
                    <div className='securityContainer'>
                        <h3>Authentication and Authorization</h3>
                            <ul>
                                <li>
                                Freejoas employs JSON Web Tokens (JWT) for authentication and authorization. When a user logs in, a token is generated and sent to the client. This token is included in the headers of all subsequent requests to the server to ensure that they are authenticated.
                                </li>
                                <li>
                                To enhance security, Freejoas also uses Cross-Origin Resource Sharing (CORS) policies to prevent unauthorized access from different origins.
                                </li>
                                <li>
                                Additionally, Freejoas implements a role-based access control (RBAC) system, which manages the access rights and permissions of different user roles, ensuring that users can only access resources and perform actions that are within their privileges.
                                </li>
                            </ul>

                        <h3>Data Protection</h3>
                        <ul>
                            <li>
                            User passwords are securely hashed before being stored in the database, using industry-standard encryption algorithms. Passwords are never included in any responses sent from the server, ensuring that sensitive information is not exposed.
                            </li>
                        </ul>
                        <p>
                        By combining JWT for secure authentication, CORS for preventing unauthorized cross-origin requests, and robust data protection practices, Freejoas ensures a high level of security for its users.
                        </p>
                    </div>
                </div>

                <div className='outcomesContainer'>
                    <h2>Project Outcomes</h2>
                    <p>
                    Freejoas is an ongoing project with a planned public release in January 2025, 
                    aligning with seasonal trends. You can explore our demo version now by visiting <a href='https://www.freejoas.com'>Freejoas</a>.
                     Feel free to sign up with your email or use the demo account:
                    </p>
                        <ul>
                            <li>Email: demo@mail.com</li>
                            <li>Password: demo</li>
                        </ul>
                    <p>
                    So far, Freejoas has received positive feedback from colleagues, friends, family, and potential employers. I welcome all feedback, both positive and negative, as it helps in improving the app. With a growth mindset, my goal is to ensure that Freejoas performs at its best upon release.</p>
                    <p>
                    I am proud of the progress made so far and look forward to the future of Freejoas.
                    </p>
                </div>


            </div>
        </section>
    );
}

export default FreejoasPage;