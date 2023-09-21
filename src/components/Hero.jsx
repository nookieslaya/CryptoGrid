import hero from '../images/hero.png'
const Hero = () => {
	return (
		<section className='flex md:flex-row font-poppins flex-col justify-center items-center mx-auto w-full container md:pt-0 pt-20 '>
			<div className='flex-1  flex-col xl:px-0 '>
				<div className='flex flex-row items-center bg-discount-gradient rounded-[10px] mb-2'>
					<div className='flex flex-row items-center py-[6px] px-4 bg-green-gradient rounded-[10px] mb-2'>
						<p className='ml-2 text-white'>Powered By CoinGecko Api</p>
					</div>
				</div>
				<div className='flex flex-row justify-between items-center w-full'>
					<h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading=[100px] leading-[72px]'>
						My <br className='block sm:hidden' />
						<span className='text-gradient'>CryptoGrid</span> React project.
					</h1>
					<div className='ss:flex hidden md:mr-4 mr-0'>sssssssss</div>
				</div>
			</div>
			<div className='flex-1'>
				<img className='object-cover ' src={hero} alt='' />
			</div>
		</section>
	)
}

export default Hero
