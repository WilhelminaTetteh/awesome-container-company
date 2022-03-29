import React from 'react';
import turtle from '../images/turtle.svg';
import trashpile from '../images/trashpile.svg';
import plasticSorting from '../images/plasticSorting.svg';

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
								bad for the planet, bad for business
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
					<div className='problem__card'>
						<div>
							<img
								className='problem__card-image'
								src={turtle}
								alt=''
							/>
						</div>
						<p className='problem__card-text'>
							Single-use plastics pollute oceans and kill marine
							species
						</p>
					</div>
					<div className='problem__card'>
						<div>
							<img
								className='problem__card-image'
								src={trashpile}
								alt=''
							/>
						</div>
						<p className='problem__card-text'>
							Single-use plastics pollute landfills and emit dangerous
							chemicals and greenshouse gases
						</p>
					</div>
					<div className='problem__card'>
						<div>
							<img
								className='problem__card-image'
								src={plasticSorting}
								alt=''
							/>
						</div>
						<p className='problem__card-text'>
							Not all of the single-use plastics are recyclable
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Problem;
