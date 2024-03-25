// module
import { NavLink } from 'react-router-dom';

// style
import s from './Navbar.module.css';

// asset
import gitHubLogo from './../../assets/github_full_logo.png';

export default function Navbar({ language, setLanguage }) {
    function toggleLanguage() {
        language !== "fr" ? setLanguage("fr") : setLanguage("en")
    }
    return (
        <nav>
            <article className={s.article}>
                <img src={language !== 'fr' ? "https://flagsapi.com/FR/shiny/32.png" : "https://flagsapi.com/GB/shiny/32.png"} onClick={toggleLanguage} alt='Country flag' />
                <div className={s.link}>
                    <NavLink to={"/"} className={({ isActive }) => {return isActive ? s.active : ""}}>{language === "fr" ? "Bienvenue" : "Welcome"}</NavLink>
                    <NavLink to={"/portfolio"} className={({ isActive }) => {return isActive ? s.active : ""}}>{language === "fr" ? "Portefolio" : "Portfolio"}</NavLink>
                    <NavLink to={"/contact"} className={({ isActive }) => {return isActive ? s.active : ""}}>Contact</NavLink>
                </div>
                <a href="https://github.com/Huguiz" target="_blank" rel="noopener noreferrer" className={s.github}>
                    <img src={gitHubLogo} alt="GitHub logo" />
                </a>
            </article>
        </nav>
    )
}