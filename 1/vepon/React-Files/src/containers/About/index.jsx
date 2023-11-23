import Header from '../../layouts/Header'

import Breadcumb from '../../components/Breadcumb'
import OurFeatures from '../../components/OurFeatures'
import CreativeSolutions from '../../components/CreativeSolutions'
import TestimonialArea from '../../components/TestimonialArea'
import WhatIsNext from '../../components/WhatIsNext'

import FooterPages from '../../layouts/Footer/FooterPages'

const AboutContainer = () => {

  return (
    <div>
      <Header
        ClassNav="navbar navbar-expand-lg navbar-white fixed-top"
        Title="About"
      />
      <Breadcumb title='About us' text='Home' />
      <OurFeatures />
      <CreativeSolutions
          SecClass="blue-bg special-mr section-padding-100"
          topTitle="Creative Solutions"
          downTitle="We Are The Trusted Experts We Keep Things Simple"
          topText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor iscing elit. Duis at dictum risus, non suscipit arcu."
          downText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quo laboriosam, dolorum ducimus aliquam consequuntur!"
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
    </div>
  );
}

export default AboutContainer