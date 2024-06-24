import React from "react";
import BoysNightImage from '../../../assets/images/boysnight.png';

function BoysNightPage() {
    return (
        <section id='boysnight' className='projectContainer'>
            <div className='maxContainer'>

                <div className='imageContainer'>
                    <div className='imgHolder'>
                        <img src={BoysNightImage} alt='Boys Night Cover' ></img>
                    </div>
                </div>

                <div className='overviewContainer'>

                    <h2>Overview</h2>
                    <div className='overviewDetails'>
                        <div className='overviewDetailsLeft'>
                            <h3>Project Background</h3>
                            <p>
                                Boys Night is a native application designed for users who want to track their gaming progress when playing with friends.
                            </p>
                            <hr />
                            <p>
                                The project aimed to develop a user-friendly native app tailored for close friends seeking to enhance their gaming skills and achievements.
                            </p>
                        </div>
                        <div className='overviewDetailsRight'>
                            <h3>My role</h3>
                            <p>Product Developer</p>
                            <p>April 2024 - Ongoing</p>
                        </div>
                    </div>
                </div>

                <div className='technicalContainer'>
                    <h2>Technical details</h2>
                    <h3>Tech Stack</h3>
                    <p>
                        Boys Night is built using React Native with Expo, incorporating React Navigation for navigation and AsyncStorage for data persistence via Expo's support.
                        The development focused on applying Object-Oriented Programming (OOP) principles to ensure scalability and customization.
                    </p>
                    <h3>Game Class for Modular Game Types:</h3>
                    <ul>
                        <li>
                            A robust Game class serves as the foundation for all supported games.
                            Each specific game type inherits from this class, ensuring consistent behavior across instances while allowing for unique rules and mechanics.
                            This approach supports easy management and addition of new game types as the project evolves.
                        </li>
                    </ul>
                    <h3>User Class for Personalized Settings:</h3>
                    <ul>

                        <li>
                            The User class models player information systematically, assigning each player a UUID for uniqueness and efficient data retrieval.
                            Future enhancements may include additional personalized settings to enrich the player experience.
                        </li>
                    </ul>
                    <h3>GameSession for Centralized Control:</h3>
                    <ul>
                        <li>
                            The GameSession class controls new game record initiation.
                            Each new game creates a GameSession, which interacts with Game and User classes to generate game records identified by a UUID.
                            This central entity manages game session lifecycles and facilitates seamless interactions between games and players.
                        </li>

                    </ul>
                    <p>
                        Adherence to OOP principles ensures Boys Night can expand with new game types and user features. Introducing a new game type involves creating a subclass of Game, while updating user settings is straightforward using methods in the User class.
                    </p>
                    <br />
                    <div className='featuresContainer'>
                        <div className='featuresLeft'>
                            <h3>Key Features</h3>
                            <ul>
                                <li>
                                    Track Game Progress: Easily create and manage game sessions to monitor your gaming progress over time.
                                </li>
                                <li>
                                    Secure Game Records: Each game session is securely stored with a unique identifier (UUID) for reliable data management.
                                </li>
                                <li>
                                    Retrieve Game History: Access detailed records of past game sessions for personal review and improvement.
                                </li>

                            </ul>
                        </div>
                        <div className='featuresRight'>
                            <h3>Pending Features</h3>
                            <ul>
                                <li>
                                    Personalized Player Profiles: Customize your player profile with statistics and preferences to showcase your gaming achievements.
                                </li>
                                <li>
                                    Flexible Game Settings: Tailor game rules and settings to match your gaming style and preferences.
                                </li>
                                <li>
                                    Social Features: Connect with friends, share achievements, and compete on leaderboards to enhance social engagement.
                                </li>
                                <li>
                                    Enhanced Analytics: Gain deeper insights into gameplay trends and performance through advanced analytical tools.
                                </li>
                                <li>
                                    Global Accessibility: Ensure accessibility for players worldwide with language localization and support for diverse user needs.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='securityContainer'>
                    <h2>Data Security and Privacy</h2>
                    <div className='securityContainer'>
                        <p>
                            Boys Night operates entirely offline, securely storing all data, including game sessions and player profiles, locally on the device. Each game session is uniquely identified by a UUID, ensuring data integrity and preventing conflicts. This offline approach prioritizes user privacy by eliminating the need for online connectivity, guaranteeing a seamless gaming experience regardless of network conditions.
                        </p>
                        <p>
                            Future updates may introduce online features, such as leaderboards, to enhance functionality while maintaining robust security standards.
                        </p>
                    </div>
                </div>

                <div className='outcomesContainer'>
                    <h2>Project Status and Future Plans</h2>
                    <h3>Current Development Stage:</h3>
                    <p>
                        Boys Night is actively being developed, focusing on mastering foundational skills and implementing essential functionalities. As my first mobile development project, the initial phase has prioritized simplicity and core features. Future phases will emphasize interface design and enhancing user experience.
                    </p>
                    <h3>Future Directions:</h3>
                    <ul>
                        <li>
                            Interface Design: Upcoming updates will prioritize a more intuitive and visually appealing user interface.
                        </li>
                        <li>
                            User Experience Enhancements: Enhancements aimed at making the app more user-friendly and engaging.
                        </li>
                    </ul>
                    <h3>Future Directions:</h3>
                    <p>
                        Boys Night aims to be a cross-platform solution available on both Android and iOS devices. Using React Native with Expo ensures compatibility and optimal performance across different mobile platforms. The ultimate goal is to provide a seamless and unified gaming experience for all users, regardless of their device.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default BoysNightPage;