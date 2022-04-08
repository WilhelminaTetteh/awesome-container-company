import React from 'react';
import ImageSlider from 'react-image-comparison-slider';
import sliderTrash from '../images/sliderTrash.svg';
import sliderContainers from '../images/sliderContainers.svg';
import Chat from './Chat';

const Home = () => {
	return (
		<section className='home' id='home'>
			<h1 className='home__header'>
				Help our environment by eliminating single-use plastics from
				your delivery with{' '}
				<span className='home__header-span'>
					Awesome Container Company
				</span>
			</h1>
			<div className='home__visuals'>
				{/* slider starts */}
				<article className='home__slider-container'>
					<div className='home__slider'>
						<ImageSlider
							image1={sliderContainers}
							image2={sliderTrash}
							sliderWidth={3}
							sliderColor='#ED9D40'
							customHandle={
								<div className='handle'>
									<div className='home__slider-line'></div>
									<div className='home__slider-circle'>
										<i className='fas fa-chevron-left home__slider-icon'></i>
										<i className='fas fa-chevron-right  home__slider-icon'></i>
									</div>
									<div className='home__slider-line'></div>
								</div>
							}
						/>
					</div>
					<div className='home__slider-states'>
						<p className='home__slider-before'>Now</p>
						<p className='home__slider-after'>
							With Awesome Containers
						</p>
					</div>
				</article>
				<Chat />
			</div>
		</section>
	);
};

export default Home;