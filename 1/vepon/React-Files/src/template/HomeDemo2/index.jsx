import Header from "../../layouts/Header"


import WelcomeArea from '../../components/WelcomeArea'
import SecParttns from '../../components/SecParttns'
import CreativeSolutions from '../../components/CreativeSolutions'
import SecPricing from '../../components/SecPricing'
import OurService from '../../components/OurService'
import SpreadMap from '../../components/SpreadMap'
import OurFeatures from '../../components/OurFeatures'
import TestimonialArea from '../../components/TestimonialArea'
import WhatIsNext from '../../components/WhatIsNext'
import FooterPages from '../../layouts/Footer/FooterPages'

const HomeDemo2 = () => {

    return (
      <div>
        <Header
          ClassNav="navbar navbar-expand-lg navbar-white fixed-top"
          Title="Multipurpose Template"
        />
        <WelcomeArea
          ClassSec="hero-section ai3 relative"
          welcomeContClass="welcome-content text-left"
          specialHeadClass="special-head g-text"
          text="Creative VPN & IT Business Solutions"
          ClassTitle="bold w-text"
          title="World’s Best VPN Service Provider."
          ClassDummyText="g-text"
          dummyText="Lorem ipsum dolor sit amet, adipisicing elit. Quod corrupti laborum, quasi? Dolor sapiente amet optio harum dolores, voluptate, tempora dolorem fugiat fuga autem ."
        />
        <div className="clearfix" />
        <SecParttns
            ClassUp="parttns"
        />
        <OurService
            ClassSec="our_services_area section-padding-100-0"
            titleTop="What we Offer"
            titleDown="Our Top Services"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quo laboriosam, dolorum ducimus aliquam consequuntur dolor sit amet, consectetur adipisicing elit. Nemo quo laboriosam, dolorum ducimus!"
        />
        <CreativeSolutions
            SecClass="blue-bg special-mr section-padding-100"
            topTitle="Creative Solutions"
            downTitle="We Are The Trusted Experts We Keep Things Simple"
            topText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor iscing elit. Duis at dictum risus, non suscipit arcu."
            downText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quo laboriosam, dolorum ducimus aliquam consequuntur!"
        />
        <SecPricing
          ClassTextDIV="top-sec-h"
        />
        <SpreadMap
            ClassSec="spread-map section-padding-100"
            titleTop="Our Growth"
            titleDown="Global Coverage"
            textTop="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quo laboriosam, dolorum ducimus aliquam consequuntur dolor sit amet, consectetur adipisicing elit. Nemo quo laboriosam, dolorum ducimus!"
            textDown="Life is really short, you know? Get out there!"
        />
        <OurFeatures />
        <div className="clearfix" />
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
};

export default HomeDemo2