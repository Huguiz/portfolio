// module
import React, { useState, useCallback } from "react";
import { Link } from 'react-router-dom';
import ImageViewer from "react-simple-image-viewer";

// style
import s from './Welcome.module.css';

// asset
import profilePicture from './../../assets/profile_picture.png';
import reddNotesPicture from './../../assets/reddnotes_picture.png';
import whatsHackPicture from './../../assets/whatshack_picture.png';
import brickBreakerPicture from './../../assets/brickbreaker_picture.png';
import comodoPicture1 from './../../assets/comodo_picture1.png';
import comodoPicture2 from './../../assets/comodo_picture2.png';
import lazerPicture1 from './../../assets/lazer_picture1.png';
import lazerPicture2 from './../../assets/lazer_picture2.jpg';
import lazerPicture3 from './../../assets/lazer_picture3.jpg';
import rafalePicture from './../../assets/rafale_picture.png';
import serverPicture1 from './../../assets/server_picture1.png';
import serverPicture2 from './../../assets/server_picture2.jpg';
import serverPicture3 from './../../assets/server_picture3.jpg';
import wheelPicture1 from './../../assets/wheel_picture1.png';
import wheelPicture2 from './../../assets/wheel_picture2.jpg';
import wheelPicture3 from './../../assets/wheel_picture3.jpg';
import wheelPicture4 from './../../assets/wheel_picture4.jpg';

export default function Welcome({ language }) {
    const [currentImage, setCurrentImage] = useState(0);
    const [currentImages, setCurrentImages] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    const lazerPictures = [
        lazerPicture1,
        lazerPicture2,
        lazerPicture3
    ];

    const serverPictures = [
        serverPicture1,
        serverPicture2,
        serverPicture3
    ];

    const wheelPictures = [
        wheelPicture1,
        wheelPicture2,
        wheelPicture3,
        wheelPicture4
    ];

    const modelingPictures = [
        comodoPicture1,
        comodoPicture2,
        rafalePicture
    ];

    const openImageViewer = useCallback((index, imagesIndex) => {
        setCurrentImage(index);
        setCurrentImages(imagesIndex);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    return (
        <>
            <article className={s.presentation}>
                <section className={s.presentation_split}>
                    <div>
                        <h1>
                            {
                                language === "fr"
                                    ? "Bonjour, je m'appelle Hugo, je suis développeur frontend."
                                    : "Hello, I'm Hugo, front end developer."
                            }
                        </h1>
                        <section className={s.presentation_text}>
                            <p>
                                {
                                    language === "fr"
                                        ? "Ancien technicien en réseau et télécom et passionné depuis toujours par le monde du code, j'ai décidé de me réorienter en tant que développeur front-end."
                                        : "A former network and telecoms technician with a lifelong passion for the world of code, I decided to change direction and become a front-end developer."
                                }
                            </p>
                            <p>
                                {
                                    language === "fr"
                                        ? "J'ai entrepris cette transition en participant à un bootcamp intensif chez Ironhack, où j'ai plongé tête baissée dans l'univers du développement web. Au cours de cette expérience, j'ai acquis une solide compréhension de la stack React, NodeJS, MongoDB, Express (MERN)."
                                        : "I began this transition by taking part in an intensive bootcamp at Ironhack, where I dived headlong into the world of web development. During this immersive experience, I acquired a solid understanding of the React understanding of the React, NodeJS, MongoDB and Express stacks (MERN)."
                                }
                            </p>
                            <p>
                                {
                                    language === "fr"
                                        ? "Aujourd'hui, je suis animé par la passion de créer des interfaces interactives et intuitives, et je suis à la recherche d'opportunités professionnelles dans le domaine du développement web."
                                        : "Today, I'm driven by a passion for creating intuitive, interactive interfaces, and I'm looking for professional opportunities in web development."
                                }
                            </p>
                        </section>
                        <Link to={"/contact"} className='blue button inline'>{language === "fr" ? "Prendre contact" : "Get in touch"}</Link>
                        <a href="https://linkedin.com/in/hugo-maurin" target="_blank" rel="noopener noreferrer">{language === "fr" ? "En savoir plus..." : "Know more..."}</a>
                    </div>
                    <div>
                        <img src={profilePicture} alt="Profile picture" />
                    </div>
                </section>

            </article>
            <article className={s.skill_bar}>
                <ul>
                    <li>React</li>
                    <li>Javascript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Git</li>
                    <li>GitHub</li>
                    <li>Tailwind CSS</li>
                    <li>Python</li>
                    <li><a href="#skills">{language === "fr" ? "Et plus !" : "And more !"}</a></li>
                </ul>
            </article>
            <article className={s.last_project}>
                <h2>
                    {
                        language === "fr"
                            ? "Mes derniers projets"
                            : "My latest projets"
                    }
                </h2>
                <section className={s.projects}>
                    <section className={s.project}>
                        <div className={s.project_img}>
                            <a href="https://reddnotes.netlify.app" target="_blank" rel="noopener noreferrer"><img src={reddNotesPicture} alt="ReddNotes Picture" /></a>
                        </div>
                        <div className={s.project_text}>
                            <div className={s.description}>
                                <h3>
                                    ReddNotes
                                </h3>
                                <p>
                                    {
                                        language === "fr"
                                            ? "ReddNotes est une application similaire à Reddit, permettant aux utilisateurs de créer, aimer et commenter des notes sur divers sujets. Chaque utilisateur dispose d'un profil éditable et peut enregistrer ses notes préférées."
                                            : "ReddNotes is an application similar to Reddit, enabling users to create, like and comment on notes on a variety of subjects. Each user has an editable profile and can save their favorite notes."
                                    }
                                    <br />
                                    <br />
                                    {
                                        language === "fr"
                                            ? "Basée sur WebSocket, l'application offre une expérience fluide et en temps réel pour une interaction facile avec la communauté."
                                            : "Based on WebSocket, the application offers a fluid, real-time experience for easy interaction with the community."
                                    }
                                </p>
                            </div>
                            <a href="https://reddnotes.netlify.app" target="_blank" rel="noopener noreferrer">https://reddnotes.netlify.app</a>
                        </div>
                    </section>
                    <section className={`${s.project} ${s.reverse}`}>
                        <div className={s.project_img}>
                            <a href="https://whatshack.netlify.app" target="_blank" rel="noopener noreferrer"><img src={whatsHackPicture} alt="WhatsHack Picture" /></a>
                        </div>
                        <div className={s.project_text}>
                            <div className={s.description}>
                                <h3>
                                    WhatsHack
                                </h3>
                                <p>
                                    {
                                        language === "fr"
                                            ? "WhatsHack est une application de messagerie similaire à WhatsApp, permettant aux utilisateurs de communiquer via des chats individuels ou en groupe."
                                            : "WhatsHack is a messaging application similar to WhatsApp, enabling users to communicate via individual or group chats."
                                    }
                                    <br />
                                    <br />
                                    {
                                        language === "fr"
                                            ? "Les fonctionnalités incluent l'envoi de messages textuels, d'images et de liens. Les utilisateurs ont la possibilité de gérer leur profil personnel et de gérer leur liste d'amis pour faciliter les conversations."
                                            : "Features include sending text messages, images and links. Users can manage their personal profile and friends list to facilitate conversations."
                                    }
                                </p>
                            </div>
                            <a href="https://whatshack.netlify.app" target="_blank" rel="noopener noreferrer">https://whatshack.netlify.app</a>
                        </div>
                    </section>
                    <section className={s.project}>
                        <div className={s.project_img}>
                            <a href="https://huguiz.github.io/Brick-Breaker" target="_blank" rel="noopener noreferrer"><img src={brickBreakerPicture} alt="BrickBreaker Picture" /></a>
                        </div>
                        <div className={s.project_text}>
                            <div className={s.description}>
                                <h3>
                                    Brick Breaker 🧱
                                </h3>
                                <p>
                                    {
                                        language === "fr"
                                            ? "Brick Breaker est un jeu d'arcade classique, également connu sous le nom original Arkanoid. Les joueurs contrôlent un paddle pour faire rebondir une balle et détruire les briques présentes à l'écran. L'objectif est d'éviter de perdre trop de balles pour continuer à progresser."
                                            : "Brick Breaker is a classic arcade game, also known by its original name Arkanoid. Players control a paddle to bounce a ball and destroy the bricks on the screen. The aim is to avoid losing too many balls to keep progressing."
                                    }
                                    <br />
                                    <br />
                                    {
                                        language === "fr"
                                            ? "Le jeu comprend des bonus et plusieurs niveaux, offrant une expérience divertissante qui peut être terminée en une dizaine de minutes pour les joueurs expérimentés."
                                            : "The game includes bonuses and several levels, offering an entertaining experience that can be completed in around ten minutes for experienced players."
                                    }
                                </p>
                            </div>
                            <a href="https://huguiz.github.io/Brick-Breaker" target="_blank" rel="noopener noreferrer">https://huguiz.github.io/Brick-Breaker</a>
                        </div>
                    </section>
                </section>
                <Link to="/portfolio" className='blue button'>
                    {
                        language === "fr"
                            ? "Voir plus"
                            : "See more"
                    }
                </Link>
            </article>
            <article className={s.skills} id='skills'>
                <h2>Skills</h2>
                <p>
                    {
                        language === "fr"
                            ? "Les techs et outils que j'utilise"
                            : "Techs and tools I use"
                    }
                </p>
                <section className="ball_list">
                    <p className='ball'>HTML</p>
                    <p className='ball'>CSS</p>
                    <p className='ball'>JavaScript ES6</p>
                    <p className='ball'>React</p>
                    <p className='ball'>Express</p>
                    <p className='ball'>MongoDB</p>
                    <p className='ball'>Python 3.7</p>
                    <p className='ball'>Git</p>
                    <p className='ball'>GitHub</p>
                    <p className='ball'>Tailwind CSS</p>
                    <p className='ball'>Mongoose</p>
                    <p className='ball'>Axios</p>
                    <p className='ball'>VSCode</p>
                    <p className='ball'>Figma</p>
                </section>
                <p>
                    {
                        language === "fr"
                            ? "Les techs que j'ai acquises en réseaux et télécoms"
                            : "Techs I've acquired in networks and telecoms"
                    }
                </p>
                <section className="ball_list">
                    <p className='ball'>IPv4 & </p>
                    <p className='ball'>TCP</p>
                    <p className='ball'>UDP</p>
                    <p className='ball'>DNS</p>
                    <p className='ball'>HTTP</p>
                    <p className='ball'>FTP</p>
                    <p className='ball'>SSH</p>
                    <p className='ball'>{language === "fr" ? "Les autres `common protocols` " : "Many others common protocol"}</p>
                    <p className='ball'>{language === "fr" ? "Modèle OSI" : "OSI Model"}</p>
                    <p className='ball'>{language === "fr" ? "Routage" : "Routing"}</p>
                    <p className='ball'>{language === "fr" ? "Redirection de port" : "Port forwarding"}</p>
                    <p className='ball'>{language === "fr" ? "Pare-feu" : "Firewall"}</p>
                    <p className='ball'>{language === "fr" ? "Cybersécurité" : "Cybersecurity"}</p>
                </section>
            </article>
            <article className={s.hobbies}>
                <h2>{
                    language === "fr"
                        ? "Mes passions"
                        : "My hobbies"
                }</h2>
                <p>
                    {
                        language === "fr"
                            ? "Mes passions en lien avec la tech, réalisé dans un cadre personnel"
                            : "My tech-related passions, realized in a personal context"
                    }
                </p>
                <section className="ball_list">
                    <p className='ball'>{language === "fr" ? "Programmation sur Arduino, Raspberry & ESP32" : "Programming on Arduino, Raspberry & ESP32"}</p>
                    <p className='ball'>{language === "fr" ? "Impression 3D" : "3D Printing"}</p>
                    <p className='ball'>{language === "fr" ? "Drone DIY" : "DIY Quadcopter"}</p>
                </section>
                <section className={s.hobbies_list}>
                    <p className='ball'>{language === "fr" ? "Graveuse laser CNC DIY" : "DIY CNC laser engraver"}</p>
                    <div>
                        {
                            lazerPictures.map((src, index) => (
                                <img
                                    src={src}
                                    onClick={() => openImageViewer(index, lazerPictures)}
                                    key={index}
                                    alt={`${src} picture`}
                                />
                            ))
                        }
                    </div>
                </section>
                <section className={s.hobbies_list}>
                    <p className='ball'>{language === "fr" ? "Volant de course gaming DIY" : "DIY Steering wheel gaming"}</p>
                    <div>
                        {
                            wheelPictures.map((src, index) => (
                                <img
                                    src={src}
                                    onClick={() => openImageViewer(index, wheelPictures)}
                                    key={index}
                                    alt={`${src} picture`}
                                />
                            ))
                        }
                    </div>
                </section>
                <section className={s.hobbies_list}>
                    <p className='ball'>{language === "fr" ? "Serveur NAS DIY" : "DIY NAS serveur"}</p>
                    <div>
                        {
                            serverPictures.map((src, index) => (
                                <img
                                    src={src}
                                    onClick={() => openImageViewer(index, serverPictures)}
                                    key={index}
                                    alt={`${src} picture`}
                                />
                            ))
                        }
                    </div>
                </section>
                <section className={s.hobbies_list}>
                    <p className='ball'>{language === "fr" ? "Modélisation 3D" : "3D Modeling"}</p>
                    <div>
                        {
                            modelingPictures.map((src, index) => (
                                <img
                                    src={src}
                                    onClick={() => openImageViewer(index, modelingPictures)}
                                    key={index}
                                    alt={`${src} picture`}
                                />
                            ))
                        }
                    </div>
                </section>
            </article>
            {
                    isViewerOpen && (
                        <ImageViewer
                            src={currentImages}
                            // src={["https://lh3.googleusercontent.com/proxy/bWt6RkYNjj6wGc_pul_F-q7uEZ5MW9RW3EYPKNXfENVVTdpGxj-dgg3e7qsjQIJtuRWnF-vRh2EEZgAveoJnuBd1xpTZNSm7KWd73QzjdvXlmmqURJaO2EAAsMoRlACQm7wiDEzbcg"]}
                            currentIndex={currentImage}
                            onClose={closeImageViewer}
                            disableScroll={true}
                            backgroundStyle={{
                                backgroundColor: "rgba(0,0,0,0.75)",
                                padding: "30px 60px"
                            }}
                            closeOnClickOutside={true}
                        />
                    )}
        </>
    )
}