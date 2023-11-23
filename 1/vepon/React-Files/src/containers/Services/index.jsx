// import OurServiceContent from "../../data/data-components/data-OurService.js"
// import FQAInfo from "../../data/data-components/data-FQAInfo.json"

import Header from '../../layouts/Header'

import Breadcumb from '../../components/Breadcumb'
import OurService from '../../components/OurService'
import SpreadMap from '../../components/SpreadMap'
import TestimonialArea from '../../components/TestimonialArea'
import WhatIsNext from '../../components/WhatIsNext'

import FooterPages from '../../layouts/Footer/FooterPages'

const ServicesContainer = () => {

  return (
    <>
      <Header
        ClassNav="navbar navbar-expand-lg navbar-white fixed-top"
        Title="Services"
      />
      <Breadcumb title='Services' text='Home' />
      <OurService
          ClassSec="our_services_area section-padding-100-0"
          titleTop="What we Offer"
          titleDown="Our Top Services"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quo laboriosam, dolorum ducimus aliquam consequuntur dolor sit amet, consectetur adipisicing elit. Nemo quo laboriosam, dolorum ducimus!"
      />
      <SpreadMap
          ClassSec="spread-map section-padding-100"
          titleTop="Our Growth"
          titleDown="Global Coverage"
          textTop="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quo laboriosam, dolorum ducimus aliquam consequuntur dolor sit amet, consectetur adipisicing elit. Nemo quo laboriosam, dolorum ducimus!"
          textDown="Life is really short, you know? Get out there!"
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

export default ServicesContainer