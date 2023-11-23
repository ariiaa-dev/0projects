
import data from '../../data/data-components/data-SecPricing.json'
import {SecPricingServer} from "../../utils/allImgs"

import "./price.scss"

import SectionHeading from "../SectionHeading"

const SecPricing = ({ColorBack="#eef5ff" ,ClassTextDIV}) => {

    return (

      <section className="pricing section-padding-100-70 relative hex-pat-1" style={{background: ColorBack}}>
        <div className="container">
          <SectionHeading
            title="Pricing plans"
            textTop="Our Pricing Plans"
            textDown="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo."
            ClassTextDIV={ClassTextDIV}
            ClassTextH2="d-blue bold"
          />
          <div className="row">
            {data && data.map((item , key) => (

              <div className="col-lg-4 col-md-6" key={key}>
                <div className={item.single_price_table} data-aos="fade-up">
                  <div className="price_table_offer">{item.text1}</div>
                  <div className="price_table_text">
                    <h5>{item.text2}</h5>
                    <img src={SecPricingServer} className="center-block" alt="" width={160} />
                    <h1 className={item.ClassText1}>{item.text3}</h1>
                    <p className={item.ClassText2}>{item.text4}</p>
                  </div>
                  <div className="table_text_details">
                    <p className={item.ClassText3}>{item.text5}</p>
                    <p className={item.ClassText4}>{item.text6}</p>
                    <p className={item.ClassText5}>{item.text7}</p>
                    <p className={item.ClassText6}>{item.text8}</p>
                    <p className={item.ClassText7}>{item.text9}</p>
                  </div>
                  <div className="table_btn mt-50">
                    <a href="#" className="btn info-btn">Get Started</a>
                  </div>
                </div>
              </div>

            ))}

          </div>
        </div>
      </section>
    );
}

export default SecPricing