import React from 'react';
import image1 from '../images/about1.png';
import image2 from '../images/about2.png';
import image3 from '../images/about3.png';
import image4 from '../images/about4.png';
import arrow1 from '../images/arrow1.png';
import arrow2 from '../images/arrow2.png';
import arrow3 from '../images/arrow3.png';
import arrow4 from '../images/arrow4.png';

const About = ({ onContactButtonClick }) => {
	return (
		<section className='about' id='about'>
			<h2 className='about__header'>How it works?</h2>
			<div className='about__visual'>
				<p className='about__text about__text_1'>
					<img
						src={image1}
						alt=''
						className='about__image about__image_1'
					/>
					01.
					<br />
					Restaurants request reusable containers via app
				</p>
				<p className='about__text about__text_2'>
					<img			
						src={image2}
						alt=''
						className='about__image about__image_2'
					/>	
					02.
					<br />
					Deliver containers
					<br />
					to restaurants
				</p>
				<p className='about__text about__text_3'>
					<img
						src={image3}
						alt=''
						className='about__image about__image_3'
					/>
					03.
					<br />
					Pick up used containers from users
					<br />
					via app
				</p>
				<p className='about__text about__text_4'>
					<img
						src={image4}
						alt=''
						className='about__image about__image_4'
					/>
					04.
					<br />
					Wash containers
					<br />
					at commercial facility
				</p>
				<p className='about__center-text'>Circular ecosystem</p>
				<img
					src={arrow1}
					alt='diagonal down right arrow'
					className='about__arrow about__arrow_1'
				/>
				<img
					src={arrow2}
					alt='diagonal down right arrow'
					className='about__arrow about__arrow_2'
				/>
				<img
					src={arrow3}
					alt='diagonal down right arrow'
					className='about__arrow about__arrow_3'
				/>
				<img
					src={arrow4}
					alt='diagonal down right arrow'
					className='about__arrow about__arrow_4'
				/>
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
