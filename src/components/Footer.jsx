import IconoComponent from './IconoComponent.jsx'
import { RiAliensLine } from 'react-icons/ri';
import logGitHub from '../assets/logos/github-mark.svg'
import '../sass/components/Footer.scss'

const messageOfFooter = {
  copyrigth: '© 2022   Copyright.',
  contact: 'Jose Antonio Fernandez Verdu'
}
const images = {
  logo1: 'github-mark.svg'
}


function Footer() {
  return (
    // <!--  FOOTER MIT ICONS  --------------------------------------------------->
    <footer className="footerModul" >
       <div className="previousFooter">
        <div className="socialMedia">
          <IconoComponent
            urlDirection={"https://www.facebook.com"}
            icon={'TbBrandMeta'}
          />
          <IconoComponent
            urlDirection={"https://twitter.com"}
            icon={'FaTwitter'}
          />
          <IconoComponent
            urlDirection={"https://google.com"}
            icon={'FaGoogle'}
          />
          <IconoComponent
            urlDirection={"https://www.instagram.com/"}
            icon={'FaInstagramSquare'}
          />
          <IconoComponent
            urlDirection={"https://de.linkedin.com/"}
            icon={'FaLinkedin'}
          />
          <IconoComponent
            urlDirection={"https://github.com/"}
            icon={'FaGithub'}
          />
        </div>
      </div>
      <img className="logoFire" src={logGitHub} alt="Logo von Github" />
      <div className="classCopyright">
        <span className="fs-6 m-t-2 fw-bold text-white mx-3">{messageOfFooter.copyrigth}</span>
        <a id="idmy" className="btn btn-white btn-floating" href="#" target="_blank" role="button">
          <i className="fa-solid fa-user-astronaut fa-flip">
            <RiAliensLine />
          </i>
        </a>
        <span className="fs-6 mt-2 fw-lighter text-white mx-3"><small>Contact: {messageOfFooter.contact}</small></span>
      </div>
    </footer >
  )
}

export default Footer;