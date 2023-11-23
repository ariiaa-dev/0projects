
import {CreativeSolutionsAboutSec} from "../../utils/allImgs"

const CreativeSolutions = ({
  SecClass,
  topTitle,
  downTitle,
  topText,
  downText
}) => {

    return (

      <section className={SecClass}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 col-sm-12">
              <div className="welcome-meter mt-s" data-aos="fade-up">
                <img src={CreativeSolutionsAboutSec} className="doted" alt="" />
              </div>
            </div>
            <div className="col-12 col-lg-6 offset-lg-0 col-md-10 offset-md-1">
              <div className="who-we-contant mt-s">
                <div className="top-sec-h" data-aos="fade-up">{topTitle}</div>
                <h4 className="w-text" data-aos="fade-up">{downTitle}</h4>
                <p className="g-text" data-aos="fade-up">{topText}</p>
                <p className="g-text" data-aos="fade-up">{downText}</p>
                <a className="btn info-btn more-btn mt-30" data-aos="fade-up" href="/aboutUs">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );

}

export default CreativeSolutions