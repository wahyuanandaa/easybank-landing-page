import { useState, useEffect } from "react"
import heroImg from "../assets/image-mockups.png"
import styles from "./Hero.module.css"

function Hero() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000) // Sesuaikan breakpoint jika perlu

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const desktopBgPath = `${import.meta.env.BASE_URL}images/bg-intro-desktop.svg`
  const mobileBgPath = `${import.meta.env.BASE_URL}images/bg-intro-mobile.svg`

  return (
    <section
      className={`flex flex--a-center flex--j-start top ${styles.heroBg}`}
      style={{
        background: `url(${
          isMobile ? mobileBgPath : desktopBgPath
        }) no-repeat ${isMobile ? "center" : "610px"} ${
          isMobile ? "-100px" : "-261px"
        }`,
        height: "656px",
        position: "relative",
        paddingLeft: "164px",
        width: "100%",
        overflow: "hidden"
      }}
    >
      <div className="flex flex--column flex--a-start flex--top-gap top-heading">
        <h1 className="head-1">Next generation digital banking</h1>
        <p className="gb-text">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <a className="main-btn" href="#">
          Request Invite
        </a>
      </div>
      <img
        src={heroImg}
        alt="photo of 4 mobile phones"
        className={styles.hero}
      />
    </section>
  )
}

export default Hero
