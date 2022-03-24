import React from 'react';
import ImageSlider from 'react-image-comparison-slider';
import dialogue from '../images/dialogue.svg';
import sliderTrash from '../images/sliderTrash.svg';
import sliderContainers from '../images/sliderContainers.svg';
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

				<div
					style={{
						width: 628,
						height: 369,
						borderRadius: '20px',
						border: '1px solid #1C383C ',
						overflow: 'hidden',
					}}>
					<ImageSlider
						image2={sliderTrash}
						image1={sliderContainers}
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
				<div className='home__dialogue'>
					<img src={dialogue} alt='dialogue' />
				</div>
			</div>
		</section>
	);
};

export default Home;
