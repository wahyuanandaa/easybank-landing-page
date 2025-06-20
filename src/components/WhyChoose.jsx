import iconOnline from "../assets/icon-online.svg"
import iconBudgeting from "../assets/icon-budgeting.svg"
import iconOnboarding from "../assets/icon-onboarding.svg"
import iconApi from "../assets/icon-api.svg"

function WhyChoose() {
  return (
    <section className="flex flex--column flex--j-center pad-164 middle">
      <div className="flex flex--column flex--top-gap">
        <h2 className="head-2">Why choose Easybank?</h2>
        <p className="gb-text">
          We leverage Open Banking to turn your bank account into your financial
          hub. <br />
          Control your finances like never before.
        </p>
      </div>
      <div className="flex flex--j-between flex--middle-gap">
        <div className="flex flex--column flex--top-gap flex--a-start">
          <img src={iconOnline} alt="vector icon of online banking" />
          <p className="head-3">Online Booking</p>
          <p className="gb-text body-text">
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world.
          </p>
        </div>
        <div className="flex flex--column flex--top-gap flex--a-start">
          <img src={iconBudgeting} alt="vector icon of online budgeting" />
          <p className="head-3">Simple Budgeting</p>
          <p className="gb-text body-text">
            See exactly where your money goes each month. Receive notifications
            when you're close to hitting your limits.
          </p>
        </div>
        <div className="flex flex--column flex--top-gap flex--a-start">
          <img src={iconOnboarding} alt="vector icon of online onboarding" />
          <p className="head-3">Fast Onboarding</p>
          <p className="gb-text body-text">
            We don't do branches. Open your account in minutes online and start
            taking control of your finances right away.
          </p>
        </div>
        <div className="flex flex--column flex--top-gap flex--a-start">
          <img src={iconApi} alt="vector icon of online api" />
          <p className="head-3">Open API</p>
          <p className="gb-text body-text">
            Manage your savings, investments, pension, and much more from one
            account. Tracking your money has never been easier.
          </p>
        </div>
      </div>
    </section>
  )
}

export default WhyChoose
