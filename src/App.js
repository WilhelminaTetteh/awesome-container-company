// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Problem from './components/Problem';
import Navbar from './components/Navbar';
import Solution from './components/Solution';
import About from './components/About';

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
			</main>
			<footer>Footer</footer>
		</div>
	);
}

export default App;
