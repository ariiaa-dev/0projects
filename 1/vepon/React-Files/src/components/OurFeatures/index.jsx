
import OurFeaturesInfo from '../../data/data-components/data-OurFeatures.js'
import {OurFeaturesAbout3} from "../../utils/allImgs"
import SectionHeading from "../SectionHeading"

import "./features.scss"

const OurFeatures = () => {

    return (
      <div>
        <section className="features section-padding-100">
          <div className="container">

            <SectionHeading
              title="Our Features"
              textTop="Our core Features"
              textDown="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo."
              ClassTextDIV="top-sec-h"
              ClassTextH2="d-blue bold"
            />

            <div className="row align-items-center">
              <div className="service-img-wrapper how col-lg-6 col-md-12 col-sm-12">
                <div className="image-box">
                  <img src={OurFeaturesAbout3} className="center-block img-responsive phone-img" alt="" />
                </div>
              </div>
              <div className="services-column col-lg-6 col-md-12 col-xs-12">
                {OurFeaturesInfo && OurFeaturesInfo.map((item , key) => (

                  <div className="services-block-four" key={key} style={{marginBottom: item.addMB && 0}}>
                    <div className="inner-box">
                      <div className="icon-img-box">
                        <img src={item.img} alt="" />
                      </div>
                      <h3><a href="#">{item.title}</a></h3>
                      <div className="text">{item.text}</div>
                    </div>
                  </div>

                ))}
              </div>
            </div>
          </div>
        </section>
        
      </div>
    );

}

export default OurFeatures