import styles from "./Footer.module.css"
import logo from "../assets/logo.svg"
import iconFacebook from "../assets/icon-facebook.svg"
import iconYoutube from "../assets/icon-youtube.svg"
import iconTwitter from "../assets/icon-twitter.svg"
import iconPinterest from "../assets/icon-pinterest.svg"
import iconInstagram from "../assets/icon-instagram.svg"

function Footer() {
  return (
    <footer className={`flex flex--footer-gap ${styles.footer}`}>
      <div className="flex flex--column flex--j-between footer-top">
        <img
          id="footer-logo"
          className={styles.footerLogo}
          src={logo}
          alt="Easybank logo"
        />
        <div className="flex flex--gap-icons">
          <img
            className={styles.footerIcons}
            src={iconFacebook}
            alt="Facebook"
          />
          <img className={styles.footerIcons} src={iconYoutube} alt="YouTube" />
          <img className={styles.footerIcons} src={iconTwitter} alt="Twitter" />
          <img
            className={styles.footerIcons}
            src={iconPinterest}
            alt="Pinterest"
          />
          <img
            className={styles.footerIcons}
            src={iconInstagram}
            alt="Instagram"
          />
        </div>
      </div>
      <div className="flex flex--column flex--j-between footer-mid">
        <a href="#" className="footer-links">
          About Us
        </a>
        <a href="#" className="footer-links">
          Contact{" "}
        </a>
        <a href="#" className="footer-links">
          Blog
        </a>
      </div>
      <div className="flex flex--column flex--j-between footer-mid">
        <a href="#" className="footer-links">
          Careers
        </a>
        <a href="#" className="footer-links">
          Support
        </a>
        <a href="#" className="footer-links">
          Privacy Policy
        </a>
      </div>
      <div className="flex flex--column flex--j-between flex--a-end flex--m-end footer-last">
        <a className="main-btn" href="#">
          Request Invite
        </a>
        <p className="copyright b-text">© Easybank. All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer
