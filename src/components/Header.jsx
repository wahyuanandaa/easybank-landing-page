import styles from "./Header.module.css"
import { useState } from "react"
import logo from "../assets/logo.svg"
import iconHamburger from "../assets/icon-hamburger.svg"
import iconClose from "../assets/icon-close.svg"

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header
      className={`flex flex--a-center flex--j-between pad-164 ${styles.header}`}
    >
      <div className="flex flex--j-between flex--a-center flex--navtop">
        <img className={styles.logo} src={logo} alt="logo of the website" />
        <button
          className={styles.hamburger}
          style={{
            background: `transparent url(${
              menuOpen ? iconClose : iconHamburger
            }) no-repeat center center`,
            height: "1rem",
            width: "2.25rem",
            border: "none",
            outline: "none",
            cursor: "pointer"
          }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        ></button>
      </div>
      <div className={`mobile-overlay${menuOpen ? " show-overlay" : ""}`}></div>
      <nav
        className={`flex flex--a-center flex--nav-gap${
          menuOpen ? " show-nav" : ""
        }`}
        id="navbar"
      >
        <a href="#" className="navlinks b-text">
          Home
        </a>
        <a href="#" className="navlinks b-text">
          About
        </a>
        <a href="#" className="navlinks b-text">
          Contact
        </a>
        <a href="#" className="navlinks b-text">
          Blog
        </a>
        <a href="#" className="navlinks b-text">
          Careers
        </a>
      </nav>
      <a className="main-btn" href="#">
        Request Invite
      </a>
    </header>
  )
}

export default Header
