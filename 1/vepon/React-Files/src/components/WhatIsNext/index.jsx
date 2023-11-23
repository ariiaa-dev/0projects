
const WhatIsNext = ({
  titleTop,
  titleDown,
  text
}) => {

    return (

      <div className="contact_us_area relative section-padding-0-0">
        <div className="container">
          <div className="call-us-sec has-shadow">
            <div className="row align-items-center">
              <div className="col-12 col-lg-9">
                <div className="text-left">
                  <h3 className="sky-text fadeInUp" data-wow-delay="0.3s">{titleTop}</h3>
                  <h2 className="bold d-blue mb-0">{titleDown}</h2>
                </div>
              </div>
              <div className="col-12 col-lg-3">
                <a className="btn info-btn" href="/contactUs">{text}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

}

export default WhatIsNext;