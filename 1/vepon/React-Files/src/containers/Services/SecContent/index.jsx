const SecContent = ({img , title}) => {
	return(
        <div className="col-12 col-md-6 col-lg-4">
          {/* Content */}
          <div className="service_single_content text-center mb-100 fadeInUp" data-wow-delay="0.2s">
            {/* Icon */}
            <div className="service_icon">
              <img src={img} alt="" />
            </div>
            <h6 className="bold">{title}</h6>
            <p>Lorem ipsum dolor sit amet, adipiscing elit. Nulla neque quam, maxi ut ac cu msan ut, posuere sit Lorem ipsum qu.</p>
          </div>
        </div>
	)
}

export default SecContent