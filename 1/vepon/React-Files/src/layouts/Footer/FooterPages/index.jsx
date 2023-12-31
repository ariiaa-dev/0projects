import{
  FooterLogo,
} from '../../../utils/allImgs'

import '../Footer.scss'

import IcoName from '../../../data/data-layout/Footer/data-IcoName.json'

import TextFooter from '../../../data/data-layout/Footer/data-TextFooter.json'

const FooterPages = ({
      text='',
      mt0=false,
      pt100=false
    }) => {

    return (

      <div className={`footer-content-area ${pt100 && "pt-100"} ${mt0 && 'mt-0'}`}>
        <div className="container">
          <div className="row ">
            <div className="col-12 col-lg-4 col-md-6">
              <div className="footer-copywrite-info">
                {/* Copywrite */}
                <div className="copywrite_text fadeInUp" data-wow-delay="0.2s">
                  <div className="footer-logo">
                    <a href="#"><img src={FooterLogo} alt="logo" /> </a>
                  </div>
                  <p>{text}</p>
                </div>
                {/* Social Icon */}
                <div className="footer-social-info fadeInUp" data-wow-delay="0.4s">
                  {IcoName && IcoName.map((item , key) => (
                      <a key={key} className="ml-1" href="#"><i className={item.IcoName} aria-hidden="true" /></a>    
                  ))}
                </div>
              </div>
            </div>
              {TextFooter && TextFooter.map((item , key) => (
                <div key={key} className={item.classBlock}>
                  <div className="contact_info_area d-sm-flex justify-content-between">
                    <div className={item.classInfo} data-wow-delay="0.3s">
                      <h5>{item.title}</h5>
                      <a href={item.path1}><p>{item.text1}</p></a>
                      <a href={item.path2}><p>{item.text2}</p></a>
                      <a href={item.path3}><p>{item.text3}</p></a>
                      <a href={item.path4}><p>{item.text4}</p></a>
                      {item.text5 && <a href={item.path5}><p>{item.text5}</p></a>}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );

}

export default FooterPages