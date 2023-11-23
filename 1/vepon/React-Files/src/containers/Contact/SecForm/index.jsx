import SectionHeading from '../../../components/SectionHeading'
import data from "../../../data/data-containers/data-contact.json"
import ServicesBlockInfo from "../../../data/data-containers/data-contact.js"

const SecForm = () => {
	return(

    <section className="section-padding-100 features" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <SectionHeading
              title="Contact us"
              textTop="Contact With Us"
              textDown="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo."
              ClassTextDIV="top-sec-h"
              ClassTextH2=""
            />
          </div>
        </div>
        {/* Contact Form */}
        <div className="row justify-content-center">
          <div className="services-column col-lg-5 col-md-12 col-xs-12">
            {ServicesBlockInfo && ServicesBlockInfo.map((item , key) => (
              <div className="services-block-four" key={key} style={{marginBottom: item.addMB ? 0 : ""}}>
                <div className="inner-box">
                  <div className="icon-img-box con">
                    <img src={item.img} alt="" />
                  </div>
                  <h3><a href="#">{item.title}</a></h3>
                  <div className="text">{item.text}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-12 col-md-12 col-lg-7">
            <div className="contact_form">
              <form action="#" method="post" id="main_contact_form" noValidate>
                <div className="row">
                  <div className="col-12">
                    <div id="success_fail_info" />
                  </div>
                  {data && data.map((item , key) => (
                    <div className={item.ClassUp} key={key}>
                      <div className="group wow fadeInUp" data-wow-delay="0.5s">
                        {item.addTextArea ? (
                          <textarea name={item.nameInput} id={item.nameInput} required />
                        ):(
                          <input type="text" name={item.nameInput} id={item.nameInput} required />
                        )}
                        <span className="highlight" />
                        <span className="bar" />
                        <label>{item.title}</label>
                      </div>
                    </div>
                  ))}
                  <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.6s">
                    <button type="submit" className="btn info-btn">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

	)
}

export default SecForm