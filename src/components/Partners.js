import React from 'react';
import chefatwork from '../images/chefatwork.svg';
import stewards from '../images/stewards.svg';
import ninjavan from '../images/ninjavan.svg';
import creatella from '../images/creatella.svg';
import goa from '../images/goa.svg';
const Partners = () => {
	return (
		<section className='partners'>
			<h3 className='partners__heading'>And Awesome Partners</h3>
			<ul className='partners__list'>
				<li className='partners__list-item'>
					<img src={chefatwork} alt='' className='partners__logo' />
				</li>
				<li className='partners__list-item'>
					<img src={stewards} alt='' className='partners__logo' />
				</li>
				<li className='partners__list-item'>
					<img src={ninjavan} alt='' className='partners__logo' />
				</li>
				<li className='partners__list-item'>
					<img src={creatella} alt='' className='partners__logo' />
				</li>
				<li className='partners__list-item'>
					<img src={goa} alt='' className='partners__logo' />
				</li>
			</ul>
		</section>
	);
};

export default Partners;
