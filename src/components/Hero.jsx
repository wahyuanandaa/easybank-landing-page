import styles from "./Hero.module.css"
import heroImg from "../assets/image-mockups.png"

function Hero() {
  return (
    <section
      className={`flex flex--a-center flex--j-start top ${styles.heroBg}`}
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
