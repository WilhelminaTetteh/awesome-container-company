import React from 'react';
import image1 from '../images/about1.png';
import image2 from '../images/about2.png';
import image3 from '../images/about3.png';
import image4 from '../images/about4.png';

const About = ({ onContactButtonClick }) => {
	return (
		<section className='about' id='about'>
			<h2 className='about__header'>How it works?</h2>
			<div className='about__visual'>
				<p className='about__text about__text_1'>
					<img
						src={image1}
						alt='cell phone hovering over pile of containers'
						className='about__image about__image_1'
					/>
					01.
					<br />
					Restaurants request reusable containers via app
				</p>
				<div
					className='about__arrow about__arrow_1'
				/>
				<p className='about__text about__text_2'>
					<img			
						src={image2}
						alt=''
						className='about__image about__image_2'
					/>	
					02.
					<br />
					Deliver containers to restaurants
				</p>
				<div
					className='about__arrow about__arrow_2'
				/>
				<p className='about__text about__text_3'>
					<img
						src={image3}
						alt=''
						className='about__image about__image_3'
					/>
					03.
					<br />
					Pick up used containers from users via app
				</p>
				<div
					className='about__arrow about__arrow_3'
				/>
				<p className='about__text about__text_4'>
					<img
						src={image4}
						alt=''
						className='about__image about__image_4'
					/>
					04.
					<br />
					Wash containers at commercial facility
				</p>
				<div
					className='about__arrow about__arrow_4'
				/>
				<p className='about__center-text'>Circular ecosystem</p>
			</div>
			<button
				onClick={onContactButtonClick}
				name='contact'
				className='about__button'>
				Work with us
			</button>
		</section>
	);
};

export default About;
