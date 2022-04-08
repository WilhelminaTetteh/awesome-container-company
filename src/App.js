import React, { useEffect } from 'react';
import Home from './components/Home';
import Problem from './components/Problem';
import Navbar from './components/Navbar';
import Solution from './components/Solution';
import About from './components/About';
import Impact from './components/Impact';
import Pricing from './components/Pricing';
import Team from './components/Team';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import Modal from 'react-modal';

function App() {
	// const [isModalOpen, setIsModalOpen] = React.useState(false);
	const [modalIsOpen, setIsOpen] = React.useState(false);
	function openModal() {
		setIsOpen(true);
	}
	function closeModal() {
		setIsOpen(false);
	}

	// ESC Close

	useEffect(() => {
		const closeByEscape = (e) => {
			if (e.key === 'Escape') {
				closeModal();
			}
		};
		document.addEventListener('keydown', closeByEscape);
		return () =>
			document.removeEventListener('keydown', closeByEscape);
	}, []);

	return (
		<div className='page'>
			<Modal
				className='modal'
				overlayClassName='modal__overlay'
				isOpen={modalIsOpen}
				ariaHideApp={false}>
				<ContactForm
					onHandleContactSubmit={closeModal}
					onCloseButtonClick={closeModal}
				/>
			</Modal>
			<header>
				<Navbar onContactButtonClick={openModal} />
			</header>
			<main>
				<Home />
				<Problem />
				<Solution />
				<About onContactButtonClick={openModal} />
				<Impact />
				<Pricing onContactButtonClick={openModal} />
				<Team />
			</main>
			<Footer />
		</div>
	);
}

export default App;
