import React from 'react';
import { team, partners } from '../constants/constants';

const Team = () => {
	return (
		<section className='team' id='team'>
			<article className='team'>
				<h3 className='team__heading'>An Awesome Team</h3>
				<ul className='team__list'>
					{team.map((teamMember, id) => {
						return (
							<li key={id} className='team__list-item'>
								<div className='team__image-wrapper'>
									<img
										src={teamMember.src}
										alt=''
										className='team__image'
									/>
								</div>
								<p className='team__name'>{teamMember.name}</p>
								<p className='team__title'>{teamMember.title}</p>
								<a className='team__linkedin' href={teamMember.linkedIn} target='_blank' rel='noreferrer'>
									<img src='../images/linkedIn.svg' alt='Linkedin logo' />
								</a>
							</li>
						);
					})}
				</ul>
			</article>
			<article className='partners'>
				<h3 className='partners__heading'>And Awesome Partners</h3>
				<ul className='partners__list'>
					{partners.map((partner, id) => {
						return (
							<li key={id} className='partners__list-item'>
								<a className='team__linkedin' href={partner.link} target='_blank' rel='noreferrer'>
									<img
										src={partner.src}
										alt={partner.alt}
										className='partners__logo'
									/>
								</a>
							</li>
						);
					})}
				</ul>
			</article>
		</section>
		
	);
};

export default Team;
