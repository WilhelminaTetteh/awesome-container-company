import React from 'react';
import { partners } from '../constants/constants';
const Partners = () => {
	return (
		<section className='partners'>
			<h3 className='partners__heading'>And Awesome Partners</h3>
			<ul className='partners__list'>
				{partners.map((partner, id) => {
					return (
						<li key={id} className='partners__list-item'>
							<img
								src={partner.src}
								alt=''
								className='partners__logo'
							/>
						</li>
					);
				})}
			</ul>
		</section>
	);
};

export default Partners;
