import React from 'react';
// import './Navbar.css';
import logo from '../images/logo.svg';

const Navbar = ({ onContactButtonClick }) => {
	return (
		<nav className='navbar'>
			<div className='navbar__content'>
				<div className='logo'>
					<a className='logo__link' href='#home'>
						<img
							className='logo__image'
							src={logo}
							alt='company-logo'
						/>
						<p className='logo__text'>Awesome Container Company</p>
					</a>
				</div>
				<ul className='navbar__items'>
					<li className='navbar__item'>
						<a className='navbar__link' href='#problem'>
							The Problem
						</a>
					</li>
					<li className='navbar__item'>
						<a className='navbar__link' href='#solution'>
							Sustainable Solution
						</a>
					</li>
					<li className='navbar__item'>
						<a className='navbar__link' href='#impact'>
							Impact
						</a>
					</li>
					<li className='navbar__item'>
						<a className='navbar__link' href='#pricing'>
							Pricing
						</a>
					</li>
					<li className='navbar__item'>
						<a className='navbar__link' href='#team'>
							Team
						</a>
					</li>
					<li className='navbar__item'>
						<a className='navbar__link' href='#footer'>
							Contacts
						</a>
					</li>
					<li className='navbar__item'>
						<button
							onClick={onContactButtonClick}
							className='navbar__button'>
							Work with us
						</button>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
