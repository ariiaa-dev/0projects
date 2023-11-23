import {AboutUsAboutSec1 , AboutUsCheck} from "../../utils/allImgs"

import dataAboutUs from "../../data/data-components/data-AboutUs.json"

const AboutUs = ({
    ClassSec="about-us-area section-padding-100 relative"
  }) => {

    return (

      <section className={ClassSec} id="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 offset-lg-0 col-md-12 no-padding-left" data-aos="fade-up">
              <div className="welcome-meter about-sec-wrapper" data-wow-delay="0.4s">
                <img src={AboutUsAboutSec1} className="about-i" alt="" />
              </div>
            </div>
            <div className="col-12 col-lg-6 offset-lg-0 col-md-10 offset-md-1">
              <div className="who-we-contant mt-s">
                <div className="promo-section">
                  <h3 className="special-head ">Welcome to Our Agency!</h3>
                </div>
                <h4 className="d-text bold">Loan And Funding Company with Experienced Staff provide you with optimal Financial Solutions</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nunc scelerisque in.</p>
                <div className="list-wrap align-items-center">
                  <div className="row">
                    {dataAboutUs && dataAboutUs.map((item , key) => (

                      <div className="col-md-12" key={key}>
                        <div className="side-feature-list-item">
                          <img src={AboutUsCheck} className="check-mark-icon" alt="" />
                          <div className="foot-c-info">{item.text}</div>
                        </div>
                      </div>

                    ))}
                  </div>
                </div>
                <a className="btn info-btn green-btn mt-30" href="services.html">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );

}

export default AboutUs