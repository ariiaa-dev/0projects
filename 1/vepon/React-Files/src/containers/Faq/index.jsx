import FQAInfo from "../../data/data-containers/data-FQAInfo.json"

import Header from '../../layouts/Header'

import Breadcumb from '../../components/Breadcumb'
// import FaqTimeline from '../../components/FaqTimeline'
import TestimonialArea from '../../components/TestimonialArea'
import WhatIsNext from '../../components/WhatIsNext'

import SecFaq from "./SecFaq"

import FooterPages from '../../layouts/Footer/FooterPages'

const FaqContainer = () => {

  return (
    <>
      <Header
        ClassNav="navbar navbar-expand-lg navbar-white fixed-top"
        Title="FAQ"
      />
      <Breadcumb title='FAQ Questions' text='Home' />
      <SecFaq data={FQAInfo} />
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

export default FaqContainer