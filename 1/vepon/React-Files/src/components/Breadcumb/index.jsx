
import './Breadcumb.scss'

const Breadcumb = ({title , otherTitle , otherText , text}) => {

  return (

    <div className="breadcumb-area">
      {/* breadcumb content */}
      <div className="breadcumb-content">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12">
              <nav aria-label="breadcrumb" className="breadcumb--con text-center">
                <h2 className="w-text title wow fadeInUp" data-wow-delay="0.2s">{title}</h2>
                <ol className="breadcrumb justify-content-center wow fadeInUp" data-wow-delay="0.4s">
                  <li className="breadcrumb-item"><a href="#">{text}</a></li>
                  <li className="breadcrumb-item" aria-current="page">{otherTitle ? otherTitle : title}</li>
                  {otherText && <li className="breadcrumb-item"><a href="#">{otherText}</a></li>}
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Breadcumb