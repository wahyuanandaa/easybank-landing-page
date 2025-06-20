import imgCurrency from "../assets/image-currency.jpg"
import imgRestaurant from "../assets/image-restaurant.jpg"
import imgPlane from "../assets/image-plane.jpg"
import imgConfetti from "../assets/image-confetti.jpg"

function Articles() {
  return (
    <section className="flex flex--column flex--j-center pad-164 bottom">
      <h2 className="head-2">Latest Articles</h2>
      <div className="flex flex--j-between flex--middle-gap">
        <div className="flex flex--column flex--bottom-gap">
          <img
            src={imgCurrency}
            alt="picture of money"
            className="bottom-image"
          />
          <div className="flex flex--column flex--j-center flex--article-gap">
            <div className="gb-text article-head">By Claire Robinson</div>
            <p className="head-4">Receive money in any currency with no fees</p>
            <p className="gb-text article-body">
              The world is getting smaller and we're becoming more mobile. So
              why should you be forced to only receive money in a single …
            </p>
          </div>
        </div>
        <div className="flex flex--column flex--bottom-gap">
          <img
            src={imgRestaurant}
            alt="picture of food"
            className="bottom-image"
          />
          <div className="flex flex--column flex--j-center flex--article-gap">
            <div className="gb-text article-head">By Wilson Hutton</div>
            <p className="head-4">
              Treat yourself without worrying about money
            </p>
            <p className="gb-text article-body">
              Our simple budgeting feature allows you to separate out your
              spending and set realistic limits each month. That means you …
            </p>
          </div>
        </div>
        <div className="flex flex--column flex--bottom-gap">
          <img src={imgPlane} alt="picture of plane" className="bottom-image" />
          <div className="flex flex--column flex--j-center flex--article-gap">
            <div className="gb-text article-head">By Wilson Hutton</div>
            <p className="head-4">Take your Easybank card wherever you go</p>
            <p className="gb-text article-body">
              We want you to enjoy your travels. This is why we don't charge any
              fees on purchases while you're abroad. We'll even show you …
            </p>
          </div>
        </div>
        <div className="flex flex--column flex--bottom-gap">
          <img
            src={imgConfetti}
            alt="picture of confetti"
            className="bottom-image"
          />
          <div className="flex flex--column flex--j-center flex--article-gap">
            <div className="gb-text article-head">By Claire Robinson</div>
            <p className="head-4">
              Our invite-only Beta accounts are now live!
            </p>
            <p className="gb-text article-body">
              After a lot of hard work by the whole team, we're excited to
              launch our closed beta. It's easy to request an invite through the
              site ...
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Articles
