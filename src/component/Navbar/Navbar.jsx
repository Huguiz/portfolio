// module
import { NavLink } from 'react-router-dom';

// style
import s from './Navbar.module.css';

// asset
import gitHubLogo from './../../assets/github_full_logo.png';
import tabLogo from './../../assets/tab_logo.png';

export default function Navbar({ language, setLanguage }) {
    function toggleLanguage() {
        language !== "fr" ? setLanguage("fr") : setLanguage("en");
    }

    function toggleLinkVisibility() {
        const links = document.getElementsByClassName(s.link);
        for(var i = 0; i < links.length; i++) {
            links[i].classList.toggle(s.hidden);
            // if (links[i].style.display !== "inherit") {
            //     links[i].style.display = "inherit";
            // } else {
            //     links[i].style.display = "none";
            // }
        }
    }

    return (
        <nav>
            <article className={s.article}>
                <div className={s.flag}>
                    <img src={language !== 'fr' ? "https://flagsapi.com/FR/shiny/32.png" : "https://flagsapi.com/GB/shiny/32.png"} onClick={toggleLanguage} alt='Country flag' />
                </div>
                <div className={s.links}>
                    <div onClick={toggleLinkVisibility} className={s.tab}>
                        <img src={tabLogo} alt="Tab logo" />
                    </div>
                    <NavLink to={"/"} onClick={toggleLinkVisibility} className={({ isActive }) => { return isActive ? `${s.link} ${s.hidden} ${s.active}` : `${s.link} ${s.hidden}` }}>{language === "fr" ? "Bienvenue" : "Welcome"}</NavLink>
                    <NavLink to={"/portfolio"} onClick={toggleLinkVisibility} className={({ isActive }) => { return isActive ? `${s.link} ${s.hidden} ${s.active}` : `${s.link} ${s.hidden}` }}>{language === "fr" ? "Portefolio" : "Portfolio"}</NavLink>
                    <NavLink to={"/contact"} onClick={toggleLinkVisibility} className={({ isActive }) => { return isActive ? `${s.link} ${s.hidden} ${s.active}` : `${s.link} ${s.hidden}` }}>Contact</NavLink>
                </div>
                <a href="https://github.com/Huguiz" target="_blank" rel="noopener noreferrer" className={s.github}>
                    <img src={gitHubLogo} alt="GitHub logo" />
                </a>
            </article>
        </nav>
    )
}