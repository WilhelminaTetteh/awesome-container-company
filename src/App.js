// import logo from './logo.svg';
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

function App() {
	return (
		<div className='page'>
			<div className='page__container'>
				<header>
					<Navbar />
				</header>
				<main>
					<Home />
					{/* <Problem /> */}
					<Solution />
					<About />
					<Impact />
					<Pricing />
					<Team />
					<Partners />
				</main>
				<Footer />
				{/* <ContactForm /> */}
			</div>
		</div>
	);
}

export default App;
