import './Contact.scss'

import Header from '../../layouts/Header'
import Breadcumb from '../../components/Breadcumb'

import SecForm from "./SecForm"

import FooterPages from '../../layouts/Footer/FooterPages'

const ContactContainer = () => {

  return (
    <>
		<Header
			ClassNav="navbar navbar-expand-lg navbar-white fixed-top"
			Title="Contact"
		/>
		<Breadcumb title='Contact Us' text='Home' />
		<SecForm />
		<FooterPages
			mt0={true}
			pt100={true}
			text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ducimus voluptatibus neque illo id repellat quisquam? Autem expedita earum quae laborum ipsum ad.'
		/>
    </>
  );
}

export default ContactContainer