// module
import { useEffect } from 'react';

// style
import s from './Portfolio.module.css';

// asset
import reddNotesPicture from './../../assets/reddnotes_picture.png';
import whatsHackPicture from './../../assets/whatshack_picture.png';
import brickBreakerPicture from './../../assets/brickbreaker_picture.png';
import fermeSaintJeanPicture from './../../assets/fermesaintjean_picture.png';
import decoderPicture from './../../assets/decoder_picture.png';

import axiosLogo from './../../assets/stack/axios.png';
import cssLogo from './../../assets/stack/css.png';
import expressLogo from './../../assets/stack/express.png';
import html5Logo from './../../assets/stack/html5.png';
import javascriptLogo from './../../assets/stack/javascript.png';
import mongoDbLogo from './../../assets/stack/mongodb.png';
import pythonLogo from './../../assets/stack/python.png';
import reactLogo from './../../assets/stack/react.png';
import tailwindCssLogo from './../../assets/stack/tailwind_css.png';
import websocketLogo from './../../assets/stack/websocket.png';
import linkLogo from './../../assets/link_logo.png';

export default function Portfolio({ language }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    
    return (
        <article className={s.article}>
            <h1>
                {
                    language === "fr"
                        ? "Projets"
                        : "Projects"
                }
            </h1>
            <section className={s.projects}>
                <section className={s.project}>
                    <div className={s.project_img}>
                        <a href="https://reddnotes.netlify.app" target="_blank" rel="noopener noreferrer"><img src={reddNotesPicture} alt="ReddNotes Picture" /></a>
                    </div>
                    <div className={s.project_text}>
                        <div>
                            <h3>ReddNotes</h3>
                            <p className={s.description}>
                                {
                                    language === "fr"
                                        ? "ReddNotes est une application similaire à Reddit, permettant aux utilisateurs de créer, aimer et commenter des notes sur divers sujets."
                                        : "ReddNotes is an application similar to Reddit, enabling users to create, like and comment on notes on a variety of subjects."
                                }
                                </p>
                                <p className={s.description}>
                                {
                                    language === "fr"
                                        ? "Basée sur WebSocket, l'application offre une expérience fluide et en temps réel pour une interaction facile avec la communauté."
                                        : "Based on WebSocket, the application offers a fluid, real-time experience for easy interaction with the community."
                                }
                                </p>
                                <p className={s.description}>
                                {
                                    language === "fr"
                                        ? "J'ai développé cette app avec un ami rencontré au bootcamp (Dyma)."
                                        : "I developed this app with a friend I met at bootcamp."
                                }
                            </p>
                        </div>
                        <div>
                            <h4>Stacks</h4>
                            <div className={s.stacks}>
                                <img className='ball' src={reactLogo} alt="React logo" />
                                <img className='ball' src={expressLogo} alt="Express logo" />
                                <img className='ball' src={mongoDbLogo} alt="MongoDB logo" />
                                <img className='ball' src={websocketLogo} alt="Websocket logo" />
                            </div>
                            <div className={s.links}>
                                <a href="https://reddnotes.netlify.app" target="_blank" rel="noopener noreferrer">https://reddnotes.netlify.app</a><a href="https://github.com/orgs/ReddNotes/repositories" target="_blank" rel="noopener noreferrer">Repo →</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={s.project}>
                    <div className={s.project_img}>
                        <a href="https://github.com/Huguiz/Decodeur" target="_blank" rel="noopener noreferrer"><img src={decoderPicture} alt="ReddNotes Picture" /></a>
                    </div>
                    <div className={s.project_text}>
                        <div>
                            <h3>{language === "fr" ? "Décodeur" : "Decoder"
                                }</h3>
                            <p className={s.description}>
                                {
                                    language === "fr"
                                        ? "J'ai conçu cette application lors de mon précédent emploi dans le secteur de la vidéosurveillance. L'app est composée de 2 logiciels : le décodeur, chargé de lire divers médias tels que des flux de caméra, des vidéos, des images ou des GIF, et le SDK, responsable de piloter le décodeur."
                                        : "I designed this application during my previous job in the video surveillance sector. The app is made up of 2 pieces of software: the decoder, responsible for playing various media such as camera feeds, videos, images or GIFs, and the SDK, responsible for driving the decoder."
                                }
                                <br />
                                <br />
                                {
                                    language === "fr"
                                        ? "L'application a été développée en Python, et la communication s'effectue via des sockets. Le manuel d'utilisation est disponible sur le repo GitHub."
                                        : "The application has been developed in Python, and communication is via sockets. The user manual is available on the GitHub repo."
                                }
                            </p>
                        </div>
                        <div>
                            <h4>Stacks</h4>
                            <div className={s.stacks}>
                                <img className='ball' src={pythonLogo} alt="Python logo" />
                            </div>
                            <div className={s.links}>
                                <a href=""></a><a href="https://github.com/Huguiz/Decodeur" target="_blank" rel="noopener noreferrer">Repo →</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={s.project}>
                    <div className={s.project_img}>
                        <a href="https://whatshack.netlify.app" target="_blank" rel="noopener noreferrer"><img src={whatsHackPicture} alt="WhatsHack Picture" /></a>
                    </div>
                    <div className={s.project_text}>
                        <div>
                            <h3>WhatsHack</h3>
                            <p className={s.description}>
                                {
                                    language === "fr"
                                        ? "WhatsHack est une application de messagerie similaire à WhatsApp, permettant aux utilisateurs de communiquer via des chats individuels ou en groupe."
                                        : "WhatsHack is a messaging application similar to WhatsApp, enabling users to communicate via individual or group chats."
                                }
                                </p>
                                <p className={s.description}>
                                {
                                    language === "fr"
                                        ? "Les fonctionnalités incluent l'envoi de messages textuels, d'images et de liens."
                                        : "Features include sending text messages, images and links."
                                }
                                </p>
                                <p className={s.description}>
                                {
                                    language === "fr"
                                        ? "J'ai développé cette app avec un ami rencontré au bootcamp (Dyma)."
                                        : "I developed this app with a friend I met at bootcamp."
                                }
                            </p>
                        </div>
                        <div>
                            <h4>Stacks</h4>
                            <div className={s.stacks}>
                                <img className='ball' src={reactLogo} alt="React logo" />
                                <img className='ball' src={expressLogo} alt="Express logo" />
                            </div>
                            <div className={s.links}>
                                <a href="https://whatshack.netlify.app" target="_blank" rel="noopener noreferrer">https://whatshack.netlify.app</a><a href="https://github.com/Whats-Hack/WhatsHack" target="_blank" rel="noopener noreferrer">Repo →</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={s.project}>
                    <div className={s.project_img}>
                        <a href="https://huguiz.github.io/Brick-Breaker" target="_blank" rel="noopener noreferrer"><img src={brickBreakerPicture} alt="BrickBreaker Picture" /></a>
                    </div>
                    <div className={s.project_text}>
                        <div>
                            <h3>Brick Breaker 🧱</h3>
                            <p className={s.description}>
                                {
                                    language === "fr"
                                        ? "Brick Breaker est un jeu d'arcade classique, également connu sous le nom original Arkanoid. Les joueurs contrôlent un paddle pour faire rebondir une balle et détruire les briques présentes à l'écran. L'objectif est d'éviter de perdre trop de balles pour continuer à progresser."
                                        : "Brick Breaker is a classic arcade game, also known by its original name Arkanoid. Players control a paddle to bounce a ball and destroy the bricks on the screen. The aim is to avoid losing too many balls to keep progressing."
                                }
                                </p>
                                <p className={s.description}>
                                {
                                    language === "fr"
                                        ? "Le jeu a été développé avec seulement HTML, CSS et Javascript. L'animation des éléments est faite avec la manipulation du DOM."
                                        : "The game was developed using only HTML, CSS and Javascript. Elements are animated using DOM manipulation."
                                }
                            </p>
                        </div>
                        <div>
                            <h4>Stacks</h4>
                            <div className={s.stacks}>
                                <img className='ball' src={html5Logo} alt="HTML5 logo" />
                                <img className='ball' src={cssLogo} alt="CSS3 logo" />
                                <img className='ball' src={javascriptLogo} alt="JavaScript logo" />
                            </div>
                            <div className={s.links}>
                                <a href="https://huguiz.github.io/Brick-Breaker" target="_blank" rel="noopener noreferrer">https://huguiz.github.io/Brick-Breaker</a><a href="https://github.com/Huguiz/Brick-Breaker" target="_blank" rel="noopener noreferrer">Repo →</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={s.project}>
                    <div className={s.project_img}>
                        <a href="fermesaintjean.fr" target="_blank" rel="noopener noreferrer"><img src={fermeSaintJeanPicture} alt="Ferme Saint Jean Picture" /></a>
                    </div>
                    <div className={s.project_text}>
                        <div>
                            <h3>Ferme Saint Jean</h3>
                            <p className={s.description}>
                                {
                                    language === "fr"
                                        ? "J'ai conçu ce site pour un ami. C'est un site vitrine qui présente sa ferme et ses productions."
                                        : "I designed this site for a friend. It's a showcase site presenting his farm and its products."
                                }
                                <br />
                                <br />
                                {
                                    language === "fr"
                                        ? "Le site est simple, il comporte 3 pages et a été développé en utilisant le framework React, offrant ainsi une expérience interactive et dynamique."
                                        : "The site is simple, with 3 pages, and has been developed using the React framework, offering an interactive and dynamic experience."
                                }
                            </p>
                        </div>
                        <div>
                            <h4>Stacks</h4>
                            <div className={s.stacks}>
                                <img className='ball' src={reactLogo} alt="React logo" />
                                <img className='ball' src={tailwindCssLogo} alt="Tailwind CSS logo" />
                            </div>
                            <div className={s.links}>
                                <a href="https://fermesaintjean.fr" target="_blank" rel="noopener noreferrer">https://fermesaintjean.fr</a><a href="https://github.com/Huguiz/FermeSaintJean" target="_blank" rel="noopener noreferrer">Repo →</a>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <a href="https://github.com/Huguiz?tab=repositories" target="_blank" rel="noopener noreferrer" className={s.last_link}><img src={linkLogo} alt="" />{language === "fr" ? "Voir plus sur : " : "See more at : "}https://github.com/Huguiz?tab=repositories</a>
        </article>
    )
}