import React from 'react';
import { problems } from '../constants/constants';

const Problem = () => {
	return (
		<section className='problem' id='problem'>
			<div className='problem__container'>
				<div className='problem__info-container'>
					<div className='problem__chart'></div>
					<div className='problem__info'>
						<div className='problem__header-container'>
							<h2 className='problem__header'>
								Single-use packaging:
							</h2>
							<h2 className='problem__header'>
								bad for the planet,{' '}
								<span className='problem__header-span'>
									{' '}
									bad for business
								</span>
							</h2>
						</div>
						<p className='problem__text'>
							Millions of tons of single-use packaging
							<span className='problem__text-span'>
								{' '}
								end up in landfills and oceans
							</span>{' '}
							while only
							<span className='problem__text-span'>
								{' '}
								9% of single-use waste gets recycled
							</span>
							. Meanwhile, single-use containers are expensive and
							restaurants need to track inventory / restock weekly.
						</p>
					</div>
				</div>
				{/* grid */}
				<div className='problem__cards'>
					{problems.map((problem, id) => {
						return (
							<div key={id} className='problem__card'>
								<div className='problem__card-image'>
									<img
										className='problem__card-image'
										src={problem.src}
										alt={problem.alt}
									/>
								</div>
								<p className='problem__card-text'>{problem.text}</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Problem;
