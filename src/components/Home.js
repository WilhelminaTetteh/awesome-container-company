import React from 'react';
import dialogue from '../images/dialogue.svg';
const Home = () => {
	return (
		<div className='home'>
			<h1 className='home__header'>
				Help our environment by eliminating single-use plastics from
				your delivery with{' '}
				<span className='home__header-span'>
					Awesome Container Company
				</span>
			</h1>
			<div className='home__visuals'>
				<div className='home__slider'></div>
				<div className='home__dialogue'>
					<img src={dialogue} alt='dialogue' />
				</div>
			</div>
		</div>
	);
};

export default Home;
