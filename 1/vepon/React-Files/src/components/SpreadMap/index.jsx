import {SpreadMapMap} from "../../utils/allImgs"
import data from "../../data/data-components/data-SpreadMap.json"

import "./spread-map.scss"

const SpreadMap = ({
	ClassSec,
	titleTop,
	titleDown,
	textTop,
	textDown
}) => {

    return (

      <section className={ClassSec}>
        <div className="container">
          <div className="section-heading text-center">
            <div className="top-sec-h" data-aos="fade-up">{titleTop}</div>
            <h2 className="w-text bold" data-aos="fade-up">{titleDown}</h2>
            <p className="g-text" data-aos="fade-up">{textTop}</p>
          </div>
          <div className="row">
            <div className="col-lg-10 offset-lg-1 col-xs-12">
              <div className="map-container mt-s">
                <img src={SpreadMapMap} alt="map" style={{width: '100%'}} />
                {data && data.map((item , key) => (
	                <div className="indicator indicator-west" key={key}>
	                  <span className="indicator-item" />
	                  <span className="indicator-content">
	                    <span className="indicator-text">
	                      <span className="indicator-inner">{item.text1}<br />{item.text2}</span>
	                    </span>
	                  </span>
	                </div>

                ))}
                <div className="indicator indicator-east" style={{display: 'none'}}>
                  <span className="indicator-item" />
                  <span className="indicator-content">{textDown}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );

}

export default SpreadMap