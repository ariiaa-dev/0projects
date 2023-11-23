import SectionHeading from '../../../components/SectionHeading'

import SingleFAQArea from './SingleFAQArea'

import {SecFAQAbout3} from '../../../utils/allImgs'

// import "./faq.scss"

const SecFaq = ({data}) => {


    return (

      <div className="faq-timeline-area transparent section-padding-100-85" id="faq">
        <div className="container">

	        <SectionHeading
	          title="FAQ Questions"
	          textTop="Frequently Questions"
	          textDown="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo."
	          ClassTextDIV="top-sec-h"
	          ClassTextH2="d-blue bold"
	        />

          <div className="row">
            <div className="col-12 col-lg-6 offset-lg-0 col-md-8 offset-md-2 col-sm-10 offset-sm-1">
              <img src={SecFAQAbout3} alt="" className="center-block img-responsive" />
            </div>
            <div className="col-12 col-lg-6 col-md-12">
              <div className="info-faq-area mt-s ">
                <dl style={{marginBottom: 0}}>
		          {data && data.map((item , key) => (
		              <>
		                  <SingleFAQArea key={key} text={item.text} ID={item.ID} />
		              </>
		          ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

}

export default SecFaq