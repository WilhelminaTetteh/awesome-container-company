import React from 'react';
import pricing1 from '../images/pricing1.svg';
import pricing2 from '../images/pricing2.svg';
const Pricing = ({ onContactButtonClick }) => {
	return (
		<section className='pricing' id='pricing'>
			<div className='pricing__section1'>
				<img 
					className='pricing__container'
					src={pricing1} 
					alt='container with sprout on lid' 
				/>
				<h3 className='pricing__header'>
					We are an ESG company:{' '}
					<span style={{ display: 'block' }}>
						we care for social and envirnomental
					</span>
					sustainability
				</h3>
				<p className='pricing__info'>
					In 2020 Singapore’s government took on
					<span className='pricing__info-span'>the Green Plan</span> :
					a whole-of-nation movement to advance Singapore’s national
					agenda on sustainable development. Our company is a part of
					its solution to cultivating a Sustainable Living — 1 of the
					5 key programmes of SG Green Plan.
				</p>
			</div>
			<div className='pricing__section2'>
				<h3 className='pricing__calculation'>
					Get in touch with us to calculate prices{' '}
					<span className='pricing__calculation-span'>
						for your business
					</span>
				</h3>
				<img
					className='pricing__dialogue'
					src={pricing2}
					alt='container with dialogue bubble: We calculate our prices according to the amount of containers and deliveries made by your business monthly.'
				/>
				<button className='pricing__button' onClick={onContactButtonClick}>Work with us</button>
				<p className='pricing__text'>
					Leave your contacts and request, and our manager will reach
					out to you to establish our futher parntership!
				</p>
			</div>
		</section>
	);
};

export default Pricing;
