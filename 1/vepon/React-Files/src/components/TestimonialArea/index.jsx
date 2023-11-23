import {useEffect , useState} from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import SectionHeading from '../SectionHeading'
import './Testimonial.scss'

import TestimonialContent from "../../data/data-components/data-Testimonial.js"

import SwiperCore, {
  Pagination
} from 'swiper';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

// import "swiper/swiper.css";
// import "swiper/css/pagination"

SwiperCore.use([Pagination]);

const TestimonialArea = () => {

	const [myWidth , setMyWidth] = useState("")
	const [addNumSlids , setAddNumSlids] = useState(2)

	useEffect(() => {

		function setWindowSize() {

		  setMyWidth(window.innerWidth)
		}

	},[myWidth])

	useEffect(() => {


		function setNumSlids() {
			if (myWidth > 767 && myWidth <= 991) {
				setAddNumSlids(2)
			}else if(myWidth > 991) {
				setAddNumSlids(3)
			}else{
				setAddNumSlids(1)
			}

			console.log("myWidth" , myWidth)
		}

	},[myWidth])

	console.log("myWidth out of useEffect" , myWidth)

    return (

      <section className="clients_testimonials_area bg-img section-padding-100" id="test">
        <div className="container">
          <div className="row">
            <div className="col-12">
	            <SectionHeading
	              title="Our Testimonials"
	              textTop="Loved By Our Clients"
	              textDown="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo."
	              ClassTextDIV="top-sec-h"
	              ClassTextH2="d-blue bold"
	            />
            </div>
          </div>
        </div>
        <div className="cotainer-fluid">
          <div className="row justify-content-center wow fadeInUp" data-wow-delay="0.4s">
            <div className="col-12 col-md-10 col-xs-10 offset-xs-1">
		      <Swiper
		        slidesPerView={addNumSlids ? addNumSlids : 2}
		        spaceBetween={30}
		        freeMode={true}
		        loop={true}
		        pagination={{
		          "clickable": true
		        }}
		        className="client_slides"
		      >
                {TestimonialContent && TestimonialContent.map((item , key) => (
	                <SwiperSlide className="client_slides single-testimonial text-left" key={key}>

	                  <div className="test-stars">
	                  	{Array(5).fill().map((_i , key) => (
	                  		<span key={key}><i className="fa fa-star" /></span>
	                  	))}
	                  </div>
	                  {/* Testimonial Feedback Text */}
	                  <div className="testimonial-description">
	                    <div className="testimonial_text">
	                      <p>{item.text}</p>
	                    </div>
	                  </div>
	                  <div className="d-flex align-items-center text-left">
	                    {/* Testimonial Image */}
	                    <div className="testimonial_image">
	                      <img src={item.img} alt="" />
	                    </div>
	                    {/* Admin Text */}
	                    <div className="admin_text">
	                      <h5>{item.name}</h5>
	                      <p>{item.title}</p>
	                    </div>
	                  </div>

	                </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    );

}

export default TestimonialArea