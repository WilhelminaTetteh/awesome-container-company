// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Problem from './components/Problem';
import Navbar from './components/Navbar';

function App() {
	return (
		<div className='App'>
			<header>
				<Navbar />
			</header>
			<main>
				<Home />
				<Problem />
			</main>
			<footer>Footer</footer>
		</div>
	);
}

export default App;
