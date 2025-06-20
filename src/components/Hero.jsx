import heroImg from "../assets/image-mockups.png"
import bgIntroDesktop from "../assets/bg-intro-desktop.svg"

function Hero() {
  return (
    <section
      className="flex flex--a-center flex--j-start top"
      style={{
        background: `url(${bgIntroDesktop}) no-repeat 610px -261px`,
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
        className="hero"
        style={{
          position: "absolute",
          right: "-133px",
          top: "-118px"
        }}
      />
    </section>
  )
}

export default Hero
