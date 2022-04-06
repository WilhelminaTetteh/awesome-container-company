import React from 'react';
import { team } from '../constants/constants';

const Team = () => {
	return (
		<section className='team' id='team'>
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
							<a className='team__linkedin' href=''>
								<img src={teamMember.linkedIn} alt='' />
							</a>
						</li>
					);
				})}
			</ul>
		</section>
	);
};

export default Team;
