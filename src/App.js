import React from 'react';
import Home from './components/Home';
import Problem from './components/Problem';
import Navbar from './components/Navbar';
import Solution from './components/Solution';
import About from './components/About';
import Impact from './components/Impact';
import Pricing from './components/Pricing';
import Team from './components/Team';
import Partners from './components/Partners';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import Modal from 'react-modal';

function App() {
	// const [isModalOpen, setIsModalOpen] = React.useState(false);
	const [isPopupOpen, setPopupOpen] = React.useState(false);
	const [modalIsOpen, setIsOpen] = React.useState(false);
	function openModal() {
		setIsOpen(true);
	}
	function closeModal() {
		setIsOpen(false);
	}
	return (
		<div className='page'>
			<div className='page__container'>
				<header>
					<Navbar onContactButtonClick={openModal} />
				</header>
				<main>
					<Home />
					<Problem />
					<Solution />
					<About onContactButtonClick={openModal} />
					<Impact />
					<Pricing />
					<Team />
					<Partners />
				</main>
				<Footer />
				<Modal className='modal' isOpen={modalIsOpen}>
					<ContactForm onCloseButtonClick={closeModal} />
				</Modal>
			</div>
		</div>
	);
}

export default App;
