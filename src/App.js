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

function App() {
	return (
		<div className='App'>
			<header>
				<Navbar />
			</header>
			<main>
				<Home />
				<Problem />
				<Solution />
				<About />
				<Impact />
				<Pricing />
				<Team />
				<Partners />
			</main>
			<Footer />
		</div>
	);
}

export default App;
