import React from 'react';
// import './Navbar.css';
import logo from '../images/logo.svg';

const navOptions = [
	{
		key: 1,
		content: 'The Problem',
		href: '#problem'
	},
	{
		key: 2,
		content: 'Sustainable Solution',
		href: '#solution'
	},
	{
		key: 3,
		content: 'Impact',
		href: '#impact'
	},
	{
		key: 4,
		content: 'Pricing',
		href: '#pricing'
	},
	{
		key: 5,
		content: 'Team',
		href: '#team'
	},
	{
		key: 6,
		content: 'Contacts',
		href: '#footer'
	}
]

const Navbar = ({ onContactButtonClick }) => {
	const [isMenuOpen, setIsMenuOpen] = React.useState(true);

	const onClick = () => {
		setIsMenuOpen(!isMenuOpen);
	}

	const onMobileClick = () => {
		onClick();
		onContactButtonClick();
	}

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
				<div className='navbar__right'>
					<button 
						aria-label='hamburger menu'
						className={`navbar__menu ${isMenuOpen ? 'navbar__menu_active' : ''}`}
						onClick={onClick}
					/>
					<ul className={`navbar__items ${isMenuOpen ? 'navbar__items_mobile' : ''}`}>
						{navOptions.map(({key, content, href}) => {
							return (
								<li key={key} className={`navbar__item ${isMenuOpen ? 'navbar__item_mobile' : ''}`} onClick={onClick}>
									<a className={`navbar__link ${isMenuOpen ? 'navbar__link_mobile' : ''}`} href={href}>
										{content}
									</a>
								</li>
							)
						})}
						{/* <li className='navbar__item'>
							<a className={`navbar__link ${isMenuOpen ? 'navbar__link_mobile' : ''}`} href='#problem'>
								The Problem
							</a>
						</li>
						<li className='navbar__item'>
							<a className={`navbar__link ${isMenuOpen ? 'navbar__link_mobile' : ''}`} href='#solution'>
								Sustainable Solution
							</a>
						</li>
						<li className='navbar__item'>
							<a className={`navbar__link ${isMenuOpen ? 'navbar__link_mobile' : ''}`} href='#impact'>
								Impact
							</a>
						</li>
						<li className='navbar__item'>
							<a className={`navbar__link ${isMenuOpen ? 'navbar__link_mobile' : ''}`} href='#pricing'>
								Pricing
							</a>
						</li>
						<li className='navbar__item'>
							<a className={`navbar__link ${isMenuOpen ? 'navbar__link_mobile' : ''}`} href='#team'>
								Team
							</a>
						</li>
						<li className='navbar__item'>
							<a className={`navbar__link ${isMenuOpen ? 'navbar__link_mobile' : ''}`} href='#footer'>
								Contacts
							</a>
						</li> */}
						<li className='navbar__item'>
							<button
								onClick={onMobileClick}
								className={`navbar__button ${isMenuOpen ? 'navbar__button_mobile' : 'navbar__button_hide'}`}
							>
								Work with us
							</button>	
						</li>
					</ul>
					<button
						onClick={onContactButtonClick}
						className={`navbar__button ${isMenuOpen ? 'navbar__button_hide' : ''}`}
					>
						Work with us
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
