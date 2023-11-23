
// import './Price.scss'

import Header from '../../layouts/Header'

import Breadcumb from '../../components/Breadcumb'
import SecPricing from '../../components/SecPricing'
import TestimonialArea from '../../components/TestimonialArea'
import WhatIsNext from '../../components/WhatIsNext'

import FooterPages from '../../layouts/Footer/FooterPages'

const PricingContainer = () => {

  return (
    <>
		<Header
			ClassNav="navbar navbar-expand-lg navbar-white fixed-top"
			Title="Pricing"
		/>
		<Breadcumb title='Pricing' text='Home' />
		<SecPricing
			ColorBack="#eef5ff"
		  	ClassTextDIV="top-sec-h"
		/>
		<TestimonialArea />
		<WhatIsNext
		    titleTop="So What is Next?"
		    titleDown="Are You Ready? Let’S Work!"
		    text="Contact Us"
		/>
		<FooterPages
			mt0={true}
			text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ducimus voluptatibus neque illo id repellat quisquam? Autem expedita earum quae laborum ipsum ad.'
		/>
    </>
  );

}

export default PricingContainer