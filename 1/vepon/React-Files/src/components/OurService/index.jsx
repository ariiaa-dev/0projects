import OurServiceContent from "../../data/data-components/data-OurService.js"

import "./service.scss"

const OurService = ({
	ClassSec,
	titleTop,
	titleDown,
	text
	
}) => {

    return (

      <section className={ClassSec}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-4">
              <div className="who-we-contant">
                <div className="top-sec-h" data-aos="fade-up">{titleTop}</div>
                <h4 className="d-blue" data-aos="fade-up">{titleDown}</h4>
                <p className="" data-aos="fade-up">{text}</p>
                <div className="bo-br" />
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-8 mt-s">
              <div className="row">
              	{OurServiceContent && OurServiceContent.map((item , key) => (
	                <div className="col-12 col-md-6" key={key}>
	                  {/* Content */}
	                  <div className="service_single_content text-left mb-100">
	                    {/* Icon */}
	                    <div className="service_icon max">
	                      <img src={item.img} alt="" />
	                    </div>
	                    <h6 className="d-blue bold">{item.title}</h6>
	                    <p>{item.text}</p>
	                  </div>
	                </div>
              	))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );  

}

export default OurService