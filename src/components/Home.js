import React from 'react';
import ImageSlider from 'react-image-comparison-slider';
import dialogue from '../images/dialogue.svg';
import slider1 from '../images/slider1.svg';
import slider2 from '../images/slider2.svg';
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
				{/* slider starts */}

				<div
					style={{
						width: 700,
						height: 450,
						borderRadius: '20px',
						border: '1px solid #1C383C ',
						overflow: 'hidden',
					}}>
					<ImageSlider
						image1={slider1}
						image2={slider2}
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
		</div>
	);
};

export default Home;
