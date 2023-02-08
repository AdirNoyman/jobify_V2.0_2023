import React from 'react';
import logo from '../assets/images/logo.svg';
import mainImage from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';

const LandingPage = () => {
	return (
		<Wrapper>
			<nav>
				<img src={logo} alt='jobify' className='logo'></img>
			</nav>
			<div className='container page'>
				{/* info */}
				<div className='info'>
					<h1>
						job <span className=''>tracking</span> app
					</h1>
					<p>
						I'm baby blue bottle tilde kale chips photo booth offal
						taiyaki narwhal. Shoreditch etsy flexitarian, cliche
						umami chicharrones literally Brooklyn man braid beard
						hashtag pok pok hot chicken poutine direct trade.{' '}
					</p>
					<button class='btn btn-hero'>Login/Register</button>
				</div>
				{/* end info */}
				{/* image */}
				<img src={mainImage} alt='job hunt' className='img main-img' />
				{/* end image */}
			</div>
		</Wrapper>
	);
};

export default LandingPage;
