// style
import s from './Contact.module.css'

// asset
import mailLogo from './../../assets/mail_logo.png'
import linkedInLogo from './../../assets/linkedin_logo.png'
import gitHubLogo from './../../assets/github_logo.png'
import resumeLogo from './../../assets/resume_logo.png'

export default function Contact({ language }) {
    return (
        <article className={s.article}>
            <h1>
                {
                    language === "fr"
                        ? "Me contacter"
                        : "How to reach me"
                }
            </h1>
            <a href="mailto:hugo.maurin@hotmail.com" target="_blank" rel="noopener noreferrer">
                <img src={mailLogo} alt="Mail logo" /><p>hugo.maurin@hotmail.com</p>
            </a>
            <a href="https://linkedin.com/in/hugo-maurin" target="_blank" rel="noopener noreferrer">
                <img src={linkedInLogo} alt="LinkedIn logo" /><p>linkedin.com/in/hugo-maurin</p>
            </a>
            <a href="https://github.com/Huguiz" target="_blank" rel="noopener noreferrer">
                <img src={gitHubLogo} alt="GitHub logo" /><p>https://github.com/Huguiz</p>
            </a>
            <a href={language === "fr" ? "https://drive.google.com/file/d/1EbT7OyXKaJHrJggtfVf_nmrf9_x04Hx6/view?usp=sharing" : "https://drive.google.com/file/d/1EbybimEK-ucSMqCpwamJCAOUK0nRIopZ/view?usp=sharing"} target="_blank" rel="noopener noreferrer">
                <img src={resumeLogo} alt="Resume logo" /><p>Curriculum Vitæ</p><i>{language === "fr" ? "*Disponible en 2 langues, dépend de la langue de la page" : "*Available in 2 languages, depending on the language of the page"}</i>
            </a>
        </article>
    )
}