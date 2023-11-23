import "./welcome.scss"

import WelcomeAreaInfo from "../../data/data-components/data-WelcomeArea.js"

const WelcomeArea = ({
    ClassSec,
    welcomeContClass,
    specialHeadClass,
    text,
    ClassTitle,
    title,
    ClassDummyText="",
    dummyText,
    addRow=false
  }) => {

    return (

      <section className={ClassSec} id="home">
        <div className="overlay" />
        <div className="hero-section-content">
          <div className="container ">
            <div className="row align-items-center">
              <div className="col-12 col-lg-6 col-md-12">
                <div className={welcomeContClass}>
                  <div className="promo-section">
                    <h3 className={specialHeadClass}>{text}</h3>
                  </div>
                  <h1 className={ClassTitle} data-wow-delay="0.2s">{title}</h1>
                  <p className={ClassDummyText} data-wow-delay="0.3s">{dummyText}</p>
                  <div className="info-btn-group fadeInUp" data-wow-delay="0.4s">
                    <a href="pricing.html" className="btn info-btn mr-3">get started</a>
                    <a href="about-us.html" className="btn info-btn"> learn more</a>
                  </div>
                </div>
                {addRow && (
                  <div className="row mt-s">
                    {WelcomeAreaInfo && WelcomeAreaInfo.map((item , key) => (

                      <div className="col-lg-4 col-sm-6" key={key}>
                        <div className="small-feat">
                          <img src={item.img} alt="" className="small-icon" />
                          <h5>{item.history}</h5>
                          <p>{item.text}</p>
                        </div>
                      </div>

                    ))}

                  </div>
                )}

              </div>
              <div className="col-12 col-lg-6 col-md-12">
              </div>
            </div>
          </div>
        </div>
      </section>
    );

}

export default WelcomeArea