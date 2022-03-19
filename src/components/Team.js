import React from 'react';
import Hung from '../images/Hung.svg';
import Edwin from '../images/Edwin.svg';
import Catella from '../images/Catella.svg';
import linkedIn from '../images/linkedIn.svg';
const Team = () => {
	return (
		<section className='team'>
			<h3 className='team__heading'>An Awesome Team</h3>
			<ul className='team__list'>
				<li className='team__list-item'>
					<div className='team__image-wrapper'>
						<img src={Hung} alt='' className='team__image' />
					</div>
					<p className='team__name'>Hung Lam</p>
					<p className='team__title'>Founder / CEO</p>
					<a className='team__linkedin' href=''>
						<img src={linkedIn} alt='' />
					</a>
				</li>
				<li className='team__list-item'>
					<div className='team__image-wrapper'>
						<img src={Edwin} alt='' className='team__image' />
					</div>
					<p className='team__name'>Edwin Phua</p>
					<p className='team__title'>Co-founder / COO</p>
					<a className='team__linkedin' href=''>
						<img src={linkedIn} alt='' />
					</a>
				</li>
				<li className='team__list-item'>
					<div className='team__image-wrapper'>
						<img src={Catella} alt='' className='team__image' />
					</div>
					<p className='team__name'>Guillaume Catella</p>
					<p className='team__title'>Co-founder / CTO</p>
					<a className='team__linkedin' href=''>
						<img src={linkedIn} alt='' />
					</a>
				</li>
			</ul>
		</section>
	);
};

export default Team;
